import { useState } from 'react'
import './App.css'
import IlanList from '../components/IlanList.jsx';

function App() {

  return (
    <div className="App">
      <h1>İş İlan Portalı</h1>
      <div className="header">

        <div className="arama_kutusu">
          <input type="text" placeholder="İş İlanı Arayın" />
          <button id="arama_butonu">Ara</button>
        </div>

      </div>

      <IlanList />
    </div>
  )
}

export default App
