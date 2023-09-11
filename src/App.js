import React, { useEffect, useState } from 'react'
import Project from './components/Project.jsx'
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
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mattis erat aliquet, vulputate tellus ac, ullamcorper ipsum. Integer sit amet volutpat ipsum, ac pharetra est. Nulla sed nisl urna. Pellentesque quis sapien nec nisi ullamcorper eleifend. Quisque egestas sit amet nunc sit amet sollicitudin. Vestibulum in lectus vestibulum, scelerisque metus vitae, porttitor nulla. Etiam ipsum purus, luctus dapibus mauris vel, ultrices rhoncus odio. Curabitur non felis magna. Aenean iaculis consequat enim, eu dapibus lectus congue id. Sed rhoncus porttitor convallis. Ut id ante quis diam ornare porta sed ut ligula. Nam a commodo orci. Etiam dapibus elementum tincidunt. In hac habitasse platea dictumst. Duis quis leo dignissim magna auctor porttitor quis lacinia felis.</p>
                </div>
            </div>
            <div className='Projects'>
                <h1 className='title'>Projects</h1>
                {
                    data.map(project => <Project theme_color={project.theme_color} back_color={project.back_color} theme={project.theme} img={project.img} description={project.description} id={project.id} key={project.id} value={project.value} max_value={project.max_value}></Project>)
                }
            </div>
        </div>
    </div>
  )
}
