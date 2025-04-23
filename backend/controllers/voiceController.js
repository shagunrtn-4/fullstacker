const { generateTTS } = require('../services/ttsService');

async function postVoice(req, res) {
  const { lang, text } = req.body;
  try {
    const audioContent = await generateTTS({ text, lang, apiKey: process.env.TTS_API_KEY });
    res.json({ audioContent });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
}

module.exports = { postVoice };
