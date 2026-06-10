import React from 'react';
import { useContext } from 'react';

import { GalleryContext } from '../utils/GalleryContext';

import { Popup } from './Popup';

export const Gallery = () => {

    const { photos, selectedImage, openPhoto, closePhoto } = useContext(GalleryContext);

    return(
        <div id='gallery'>
            {photos.map(photo => {
                return(
                    <div 
                    key={photo.id} 
                    className='image-holder' 
                    onClick={() => {openPhoto(photo)}}>
                        <img src={photo.download_url} alt={photo.alt}
                        width={150} height={150}/>
                    </div>
                )
            })}

            { selectedImage && <Popup selectedImage={selectedImage} closePhoto={closePhoto}/> }
        </div>
    )
}