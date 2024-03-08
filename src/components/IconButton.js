import { useEffect, useState } from 'react';
import './Project.css'


const IconButton = ( {alt, clicked, imagePath} ) => {
    const [imageSrc, setImageSrc] = useState(null)

    useEffect(() => {
        import(`../sources/button-images/${imagePath}.png`).then(module => {
            setImageSrc(module.default);
        })
        .catch(error => {
            console.error(`Image not found for alt: ${alt}`)
        })

    })

    if(!imageSrc) {
        return<div>Loading...</div> // placeholder if image not found or loaded
    }

    return (
        <div className = "icon-button-container">
            <button className = "icon-button" onClick = {clicked}>
                <img src = {imageSrc} alt = {alt}/>
            </button>
            <div className = "icon-button-label">{alt}</div>
        </div>
    );
}

export default IconButton;