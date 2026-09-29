import React from 'react'
import './Model.css'
import model_image from '../Assets/model_image.png'

const Model = () => {
    return (
        <div className='model'>
            <div className="model-left">
                <h2>Wear Wolf</h2>
                <div>
                    <p>Watch.</p>
                    <p>Walk.</p>
                    <p>Win.</p>
                </div>
                
            </div>
            <div className="model-right">
                <img src={model_image} alt="" />
            </div>
        </div>
    )
}

export default Model


