import React, { useState, useEffect } from 'react';

import Client from '../components/Client';
import Editor from '../components/Editor';

const EditorPage = () => {
  const [clients, setClients] = useState([
    {socketId: "1", username: "Amanullah"},
    {socketId: "2", username: "Subhamay"},
  ])

  const [language, setLanguage] = useState("javascript");


  const handleLanguageChange = (event) => {
  setLanguage(event.target.value);
  }

  return (
    <div className='mainWrapper'>
      <div className='aside'>
        <div className='asideInner'>
          <div className='logo'>
            <img className='logoImage' src='/code-sync.png' alt='code-sync-logo'/>
          </div>
          <select value={language} onChange={handleLanguageChange}>
            <option value="javascript">JavaScript</option>
            <option value="python">Python</option>
          </select>
          <h3>Connected</h3>
          <div className='clientList'>
            {clients.map((client) => (<Client key={client.socketId} username={client.username}/>))}
          </div>
        </div>
        <button className='btn copyBtn'>Copy ROOM ID</button>
        <button className='btn leaveBtn'>Leave</button>
      </div>
      <div className='editorWrapper'><Editor language={language}/></div>
    </div>
  )
}

export default EditorPage