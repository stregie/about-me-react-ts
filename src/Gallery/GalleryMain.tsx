import { useState, useEffect } from 'react';
import GalleryListElement from './GalleryListElement';
import GalleryModal from './GalleryModal';
import './css/gallery.css';


function GalleryMain() {
  // GalleryMain states
  const [galleryMainStyle, setGalleryMainStyle] = useState<{filter: string}>({filter: "none"});
  
  // GalleryList states
  const publicImgDirPath: string = "/images";
  const [album, setAlbum] = useState<string>("news");
  const [albumPath, setAlbumPath] = useState<string>("/images/news/");
  const [fileList, setFileList] = useState<{fileindex: number, filename: string, filesize: number}[]>([]);
    
  // GalleryModal states
  const [modalImgIndex, setModalImgIndex] = useState<number>(-1);
  const [modalImgPath, setModalImgPath] = useState<string>("");
  const [modalFileName, setModalFileName] = useState<string>("");
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  // States passed as props
  const GalleryListStates = {setModalVisible, setModalImgIndex};
  const GalleryModalStates = {modalFileName, modalImgPath, setModalVisible, setGalleryMainStyle, modalImgIndex, setModalImgIndex};


  // Read the list of files of the selected album
  useEffect(() => {
    // console.log("GalleryMain fetch initiated");
    fetch(`/reactapi/getfilelist/?album=${album}`)
      .then(response => response.json())
      .then(data => {
        // console.log("GalleryMain fetch data", data);
        setAlbumPath(publicImgDirPath + "/" + album + "/");
        setFileList(data);
        setModalImgIndex(0);
      });      
  }, [album]);
  
  // Used for navigating through images while the modal is open
  // If last image is reached it continues with the first and vice versa
  useEffect(() => {
    if (fileList.length <= 0) {
      setModalImgIndex(0);
    } else if (modalImgIndex < 0) {
      setModalImgIndex(fileList.length - 1);
    } else if (modalImgIndex >= fileList.length) {
      setModalImgIndex(0);
    } else {
      fileList.find(file => {
        if(file.fileindex === modalImgIndex){
          setModalImgPath(albumPath + file.filename);
          setModalFileName(file.filename);
        }
      });
    }
  }, [modalImgIndex, fileList]);

  return (
    <>
      <div className = "gallery-main" style = {galleryMainStyle}>
        <div className = "container">
          <div className = "row" id = "select-album">
            <label htmlFor = "select-album" className = "col-sm-4 col-md-3 offset-lg-1 col-lg-2">Select album</label>
            <select className = "col-sm-8 col-md-9 col-lg-8" id = "album-selector" defaultValue = "news" onChange = {(event) => setAlbum(event.target.value)}>
              <option value = "news">Images used in articles</option>
              <option value = "stations">Railway stations</option>
              <option value = "trams">Trams</option>
            </select>
          </div>        

          <div className = "row">
            { fileList.map((fileInfo: {filename: string, fileindex: number}) => {
                let imgPath: string = albumPath + fileInfo.filename;
                return (
                  <div className = "col-6 col-sm-6 col-md-4 col-xl-3">              
                    <GalleryListElement key = {fileInfo.fileindex} states = {GalleryListStates} fileInfo = {fileInfo} imgPath = {imgPath} />
                  </div>
                );
              })
            }
          </div>
        </div>
      </div>

      {modalVisible && <GalleryModal states = {GalleryModalStates}/>}
    </>
  );
};

export default GalleryMain;