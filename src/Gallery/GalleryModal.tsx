import { useState, useEffect } from 'react';


function GalleryModal({states}: {
  states: {
    modalFileName: string,
    modalImgPath: string,
    modalImgIndex: number,
    setModalVisible: (modalVisible: boolean) => void,
    setGalleryMainStyle: (galleryMainStyle: {filter: string}) => void,
    setModalImgIndex: (modalImgIndex: number) => void
  }
}) {

  const [caption, setCaption] = useState(states.modalFileName);
  
  // Blurs the background and blocks scrolling if modal is opened. Removes if closed.
  useEffect(() => {
    addHeaderFooterBlur();
    states.setGalleryMainStyle({filter: "blur(6px)"});
    document.body.style.setProperty("overflow-y", "hidden");
    document.querySelector("#galery-modal")
    // console.log("Modal mounted");
    return () => {
      removeHeaderFooterBlur();
      states.setGalleryMainStyle({filter: "none"});
      document.body.style.setProperty("overflow-y", "auto");
      // console.log("Modal unmounted");
    }
  }, []);


  
  // For blurring elements outside the React root / removing blur
  function addHeaderFooterBlur() {
    let header = document.getElementsByTagName("header")[0];
    if (header !== undefined) {
      header.style.setProperty("filter", "blur(6px)")
    } else {
      // console.log("No header found");
    }
    let footer = document.getElementsByTagName("footer")[0];
    if (footer !== undefined) {
      footer.style.setProperty("filter", "blur(6px)")
    } else {
      // console.log("No footer found");
    } 
  };

  function removeHeaderFooterBlur() {
    let header = document.getElementsByTagName("header")[0];
    if (header !== undefined) {
      header.style.setProperty("filter", "none")
    } else {
      // console.log("No header found");
    }
    let footer = document.getElementsByTagName("footer")[0];
    if (footer !== undefined) {
      footer.style.setProperty("filter", "none")
    } else {
      // console.log("No footer found");
    } 
  };
  
  // Steps to the previous or next image while modal is open
  function prevNextImg(n: number){
    states.setModalImgIndex(states.modalImgIndex + n);
    // console.log("states.modalImgIndex: ", states.modalImgIndex);
  };
  
  // Key handler for arrow keys. Invokes prevNextImg
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // console.log("event.code", event.code);
      switch (event.code){
        case 'ArrowLeft':
          event.preventDefault();
          // console.log("Left key pressed");          
          prevNextImg(-1);
          break;
        case 'ArrowRight':
          event.preventDefault();
          // console.log("Right key pressed");
          prevNextImg(1);
          break;
        case 'Escape':
          event.preventDefault();
          states.setModalVisible(false)
          break;
        default:
          // console.log("Unexpected keyboard event");
      };
    };
    window.addEventListener('keydown', handleKeyDown);
    // console.log("keydown listener added");
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      // console.log("keydown listener removed");
    };
  }, [states.modalImgIndex]);


  // Copies the relative URL so it can be used in the news editor site
  // Known bug: if the modal steps to another image, it will change the caption to the caption of the image where the clipboard was pressed.
  function copyToClipboard() {
    navigator.clipboard.writeText(states.modalImgPath);
    setCaption("Relative URL of the image copied to clipboard");
    setTimeout(() => {
      setCaption(states.modalFileName);
    }, 1500);
  };
  
  // Sets caption to the filename of the displayed image.
  useEffect(() => {
    setCaption(states.modalFileName);
  }, [states.modalFileName]);

  return (
  	<div id = "gallery-modal" className = "gallery-modal">
      <div className = "gallery-modal-content">
        <div>
          <a href = {states.modalImgPath} target = "_blank" rel = "noreferrer">
            <img id = "modal-img" src = {states.modalImgPath} alt = "Enlarged image" />
          </a>
        </div>

        <div title = {caption}>{caption}</div>

        <div>
          <button title = "Previous image" className = "modal-btn-bottom" onClick = {() => prevNextImg(-1)}><span className = "material-symbols-outlined">navigate_before</span></button>
          <button title = "Next image" className = "modal-btn-bottom" onClick = {() => prevNextImg(1)}><span className = "material-symbols-outlined">navigate_next</span></button>
          <button title = "Copy relative URL to Clipboard for News Editor" className = "modal-btn-bottom" onClick = {copyToClipboard}><span className = "material-symbols-outlined">content_paste</span></button>
          <button title = "Close" className = "modal-btn-bottom" onClick = {() => states.setModalVisible(false)}>&times;</button>
        </div>
      </div>
    </div>
  )
};

export default GalleryModal;