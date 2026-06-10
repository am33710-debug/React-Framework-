import React, { useContext } from 'react';
import { AlbumContext } from '../utils/AlbumContext';

export const Albums = () => {
  const { albums } = useContext(AlbumContext);

  return (
    <div id='albums'>
      {albums.map(album => (
        <div key={album.id} className='album-item'>
          <p>{album.id}. {album.title}</p>
        </div>
      ))}
    </div>
  );
};