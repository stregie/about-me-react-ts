import { useState, useEffect } from 'react';
import placeholderImg from "./images/placeholder.jpg";


function GalleryListElement ({fileInfo, imgPath, states}: {
  fileInfo: {
    filename: string,
    fileindex: number
  },
  imgPath: string,
  states: {
    setModalVisible: (modalVisible: boolean) => void,
    setModalImgIndex: (modalImgIndex: number) => void
  }
}) {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgDisplay, setImgDisplay] = useState({display: "none"});

  // Placeholder while images are loading
  useEffect(() => {
    setImgLoaded(false);
  }, [imgPath]);

  // Placeholder when images are loaded
  useEffect(() => {
    imgLoaded ? setImgDisplay({display: "block"}) : setImgDisplay({display: "none"});
  }, [imgLoaded, ]);
  
  // Opens modal if an image is selected from the list
  function galleryPseudoButtonHandler() {
    states.setModalVisible(true);
    states.setModalImgIndex(fileInfo.fileindex);
  };
  
  return (
    <div className = "gallery-list-container">
      <div className = "gallery-list-thumbnail">          
        <button className = "gallery-pseudobutton" onClick = {() => galleryPseudoButtonHandler()}>
          {!imgLoaded && <img className = "img-fluid align-self-center" src = {placeholderImg} alt = {fileInfo.filename} />}
          <img className = "img-fluid align-self-center" src = {imgPath} alt = {fileInfo.filename} onLoad = {() => setImgLoaded(true)} style = {imgDisplay} />
        </button>
      </div>

      <div className = "gallery-list-description">
        <span>{fileInfo.filename}</span>
      </div>
    </div>
  );
};

export default GalleryListElement;