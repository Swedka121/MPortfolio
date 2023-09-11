import React from 'react'

export default function Project(props) {
    console.log(props)
    let pos = 1
    if (Number.isInteger(props.id / 2)) {
        pos = 2
    }
  return (
    <div className={"Project-" + pos}>
        <div className='img'>
            <div className='light' style={{backgroundColor: props.back_color}}></div>
            <img src={props.img}></img>
        </div>
        <div className='text'>
            <span className='theme'><h1 style={{color: props.theme_color}}>{props.theme}</h1 ><h1 className='value'>{props.value + "/" + props.max_value}</h1></span>
            <p className='description'>{props.description}</p>
        </div>
    </div>
  )
}
