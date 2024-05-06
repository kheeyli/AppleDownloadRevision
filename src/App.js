import React, { useState } from 'react';
import AppleDownload from './AppleDownload';
import AppleDownloadChinese from './AppleDownloadChinese'; 
import './App.css'; 

function App() {
  const [language, setLanguage] = useState('english'); 
  const handleLanguageChange = (selectedLanguage) => {
    setLanguage(selectedLanguage);
  };

  return (
    <div className="App">

      <select className="language-select" value={language} onChange={(e) => handleLanguageChange(e.target.value)}>
        <option value="english">English</option>
        <option value="chinese">Chinese</option>
      </select>


      {/*based on selected language */}
      {language === 'english' ? <AppleDownload /> : <AppleDownloadChinese />}
    </div>
  );
}

export default App;
