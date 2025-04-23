const queue = [];
let syncing = false;

async function enqueue(reading) {
  queue.push(reading);
}

async function syncAll(storeFn) {
  if (syncing || queue.length === 0) return;
  syncing = true;
  while (queue.length) {
    const item = queue.shift();
    try {
      await storeFn(item);
    } catch (err) {
      console.error('Sync failed, re-queueing', err);
      queue.unshift(item);
      break;
    }
  }
  syncing = false;
}

module.exports = { enqueue, syncAll };
