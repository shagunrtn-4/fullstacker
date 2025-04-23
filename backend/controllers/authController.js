const { admin } = require('../config/firebaseConfig');

async function signup(req, res) {
  try {
    const { email, password } = req.body;
    const userRecord = await admin.auth().createUser({ email, password });
    const token = await admin.auth().createCustomToken(userRecord.uid);
    res.status(201).json({ uid: userRecord.uid, token });
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: err.message });
  }
}

async function login(req, res) {
  res.status(501).json({ error: 'Use Firebase Client SDK for login in frontend' });
}

module.exports = { signup, login };
