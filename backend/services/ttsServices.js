const axios = require('axios');

async function generateTTS({ text, lang, apiKey }) {
  const url = `https://texttospeech.googleapis.com/v1/text:synthesize?key=${apiKey}`;
  const response = await axios.post(url, {
    input: { text },
    voice: { languageCode: lang === 'hi' ? 'hi-IN' : 'en-US' },
    audioConfig: { audioEncoding: 'MP3' }
  });
  return response.data.audioContent;
}

module.exports = { generateTTS };
