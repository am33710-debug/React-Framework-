import React,{useContext} from 'react';

import { GalleryContext } from '../utils/GalleryContext';

export const Popup = () => {

    const { selectedImage, closePhoto, deletePhoto } = useContext(GalleryContext);

    return(
        <div id="popup">
            <button className='close-popup' onClick={closePhoto}>&times;</button><br/><br/>
            <button className='close-popup' onClick={() => deletePhoto(selectedImage.id)}>Delete</button>
            <div className='popup-container'>
                <img src={selectedImage.download_url} alt={selectedImage.alt}/>
            </div>
        </div>
    )
}