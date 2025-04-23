const { db } = require('../config/firebaseConfig');
const { sensorCollection } = require('../models/sensorModel');
const { enqueue, syncAll } = require('../utils/offlineQueue');

async function postSensor(req, res) {
  const { uid } = req.user;
  const { sensorType, value, timestamp } = req.body;
  const reading = { sensorType, value, timestamp, uid };

  try {
    if (req.query.offline === 'true') {
      await enqueue({ ...reading });
      return res.status(202).json({ status: 'queued' });
    }

    await db.collection(sensorCollection(uid)).add(reading);
    await syncAll(async item => {
      await db.collection(sensorCollection(item.uid)).add(item);
    });
    res.status(201).json({ status: 'stored' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
}

async function getData(req, res) {
  const { uid } = req.user;
  const { sensorType, from, to, limit = 50 } = req.query;

  try {
    let ref = db.collection(sensorCollection(uid)).orderBy('timestamp', 'desc');
    if (sensorType) ref = ref.where('sensorType', '==', sensorType);
    if (from) ref = ref.startAt(from);
    if (to) ref = ref.endAt(to);
    const snapshot = await ref.limit(parseInt(limit)).get();
    const data = snapshot.docs.map(doc => doc.data());
    res.json({ data });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
}

module.exports = { postSensor, getData };
