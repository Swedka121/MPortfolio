import React, { useEffect, useState } from 'react'
import "./sass/index.scss"

export default function App() {
    const [data, useData] = useState([])
    useEffect(() => {
        fetch("https://64fda5c6596493f7af7e688e.mockapi.io/items").then(response => response.json()).then(data => useData(data))
    }, []) 
  return (
    <div className='App'>
        <div className='back'>
            <div className='back1'></div>
            <div className='back2'></div>
            <div className='back3'></div>
        </div>
        <div className='container'>
            <div className='Hero'>
                <div className='back'>
                    <div className='table'>
                        <h1>You see this?</h1>
                    </div>
                </div>
                <div className='lighted'>
                    <div className='light'></div>
                   <div className='img'>
                        <img src="https://i.ibb.co/CnD2Y94/post1.png"></img>
                    </div> 
                </div>
                
                <button className='more'>MORE</button>
            </div>
            <div className='About'>
                <div className='man'></div>
                <div className='text'>
                    <h1>About me</h1>
                    <p></p>
                </div>
            </div>
            <div className='Projects'>
                <h1 className='title'></h1>
            </div>
        </div>
    </div>
  )
}
