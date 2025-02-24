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
  const [galleryListElementStyle, setGalleryListElementStyle] = useState({backgroundImage: `url(${imgPath}`});


  // Placeholder while images are loading
  useEffect(() => {
    setImgLoaded(false);
  }, [imgPath]);

  // Ensures to refresh images on changes (such as selecting album)
  useEffect(() => {
    setGalleryListElementStyle({backgroundImage: `url('${imgPath}'`});
  }, [imgPath, ]);

  // Placeholder when images are loaded
  useEffect(() => {
    imgLoaded ? setImgDisplay({display: "block"}) : setImgDisplay({display: "none"});
    imgLoaded ? setGalleryListElementStyle({backgroundImage: `url('${imgPath}'`}) : setGalleryListElementStyle({backgroundImage: "none"});
  }, [imgLoaded, ]);
  
  // Opens modal if an image is selected from the list
  function galleryPseudoButtonHandler() {
    states.setModalVisible(true);
    states.setModalImgIndex(fileInfo.fileindex);
  };
  
  return (
    <div className = "gallery-list-element" style = {galleryListElementStyle} onClick = {() => galleryPseudoButtonHandler()} >
      {!imgLoaded && <img src = {placeholderImg} alt = {fileInfo.filename} />}
      <img src = {imgPath} alt = {fileInfo.filename} onLoad = {() => setImgLoaded(true)} style = {imgDisplay} />
    </div>
  );
};

export default GalleryListElement;