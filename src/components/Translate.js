import React, { useState } from 'react';

function Translation() {
  const [inputText, setInputText] = useState('');
  const [translation, setTranslation] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = event => {
    setInputText(event.target.value);
  };

  const handleFormSubmit = async event => {
    event.preventDefault();

    const encodedParams = new URLSearchParams();
    encodedParams.append("q", inputText);
    encodedParams.append("target", "es");
    encodedParams.append("source", "en");

    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'Accept-Encoding': 'application/gzip',
        'X-RapidAPI-Key': '3046a91512msh7b643ae9acd2046p1ae167jsn6965e773aa44',
        'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
      },
      body: encodedParams
    };

    try {
      const response = await fetch('https://google-translate1.p.rapidapi.com/language/translate/v2', options);
      const data = await response.json();

      if (response.ok && data.data && data.data.translations && data.data.translations.length > 0) {
        setTranslation(data.data.translations[0].translatedText);
        setError('');
      } else {
        setTranslation('');
        setError('Translation failed. Please try again later.');
      }
    } catch (error) {
      console.error(error);
      setTranslation('');
      setError('An error occurred while translating. Please try again later.');
    }
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label>
          Text to translate:
          <input type="text" value={inputText} onChange={handleInputChange} />
        </label>
        <button type="submit">Translate</button>
      </form>
      {error ? (
        <p>{error}</p>
      ) : translation ? (
        <p>{translation}</p>
      ) : (
        <p>Enter text and click "Translate" to see the translation.</p>
      )}
    </div>
  );
}

export default Translation;
