import React, { useState, useEffect } from 'react';
import ContentView from './ContentView';
import FileUpload from './FileUpload';
import './FilesPage.css'
import './Modal.css'
import { useLocation } from 'react-router';
import { ref, deleteObject, listAll, uploadBytes } from 'firebase/storage';
import { storage, auth } from './FireBase-config'

const FilesList = ({ onClose, show, clickedFiles, onUploadSuccess }) => {
  const [currentPath, setCurrentPath] = useState('project');
  const [pathStack, setPathStack] = useState([]);  
  const [refresh, setRefresh] = useState(false) // state to trigger refresh
  const [markedFiles, setMarkedFiles] = useState(false)
  const [folderExists, setFolderExists] = useState(false);
  const [folderName, setFolderName] = useState(''); // For storing the folder name
  
  // get url "gives /project"
  let location = useLocation();
  // sets initial path to group url
  const [initialPath] = useState(location.pathname.slice(1))
  console.log(initialPath)

  const checkForGroupFolder = async (path) => {
    const folderRef = ref(storage, path)
    try {
      const result = await listAll(folderRef);
      // Check if there are any items or subdirectories
      if (result.items.length > 0 || result.prefixes.length > 0){
        setFolderExists(true);
        console.log("Folder exists: ", path)
      } else{
        setFolderExists(false)
        console.log("Folder does not exist: ", path)        
      } 
    }catch (error) {
      console.error("Error checking folder existence: ", error)
      setFolderExists(false);
    }
  }
  const setGroupFolderName = (e) => {
    setFolderName(initialPath);
};
      
const createGroupFolder = async () => {
  if (!auth.currentUser) {
      console.log('No user logged in');
      return;
  }    

  const placeholder = new Blob(["This is a placeholder for folder creation"], {type: 'text/plain'});
  // Use initialPath directly, assuming it's the full path to the folder to ensure/create
  const folderPath = `${initialPath}/.placeholder`; // Adjust if initialPath handling changes

  try {
      const folderRef = ref(storage, folderPath);
      await uploadBytes(folderRef, placeholder);        
      console.log('Folder placeholder created successfully');
  } catch (error) {
      console.error('Error creating folder placeholder:', error);
  }
}


  useEffect(() => {

    if (initialPath && !folderExists) {      
      checkForGroupFolder(initialPath)
      createGroupFolder(initialPath)      
    }    

    // Interval to refresh Modal 
    const intervalId = setInterval(() => {
      setRefresh(prev => !prev);
    }, 120000)

    // Clean up the interval when component is unmounted or when show changes
    return () => clearInterval(intervalId)

  }, [show, initialPath, folderExists]);



  const deleteFiles = async () => {
    // Loop all files inside array
    for (const filePath of markedFiles) {
      const fileRef = ref(storage, filePath) // Create a reference to the file
      try {
        await deleteObject(fileRef) // Delete the file
        console.log(`File deleted: ${filePath}`);
      } catch(error){
        console.error(`Error deleting file ${filePath}:`, error);
      }
      refreshContent(); // refresh the modal
      setMarkedFiles([]); // Clear the markedFiles list
    }
  }

  // give all files marked for deletion
  const handleClickedFilesChange = (updatedClickedFiles) => {
    setMarkedFiles(updatedClickedFiles);
  };


  
  const refreshContent = () => {
    setRefresh(prev => !prev); // Toggle the state to trigger a refresh
  };  
  
  const navigateIntoFolder = (folderName) => {
    setPathStack(prevStack => [...prevStack, currentPath]);
    setCurrentPath(`${currentPath}/${folderName}`);
  };

  const navigateBack = () => {
    const prevPath = pathStack.pop();
    setPathStack([...pathStack]);
    setCurrentPath(prevPath || initialPath);
  };

  if (!show) {
    return null;
  }

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
      <div className="modal-header">
      <div className="header-content"> {/* New wrapper using Flexbox */}
        <h4 className="modal-title">
          {!folderExists && (
              <div>Folder Does Not Exist</div>              
            )}
          {currentPath}
        </h4>
        <button className='refresh-button' onClick={refreshContent} style={{ marginLeft: '10px', padding: '0 5px'}}>
          
        </button>
        <FileUpload onUploadSuccess={refreshContent} />
      </div>
      
    </div>

        <div className="modal-body">
        <ContentView
          currentPath={currentPath}
          navigateIntoFolder={navigateIntoFolder}
          navigateBack={navigateBack}
          refreshTrigger={refresh} // Pass the refreshTrigger as a prop
          onClickedFilesChange ={handleClickedFilesChange}
        />
        </div>
        <div className="modal-footer">          
          {currentPath !== initialPath && (
            <button onClick={navigateBack} style={{ marginRight: 'auto', height: '30px', width: '85px', fontSize: '18px' }}>Back</button>
          )}
          
          {/* If a file is marked for deletion */}
          {markedFiles.length > 0 ? (
            <button
              style={{ height: '30px', width: '85px', fontSize: '18px', marginRight: '10px' }}
              onClick={(e) => {
                e.stopPropagation(); // Prevent the modal from closing if necessary
                deleteFiles();
              }}
            >
              Delete
            </button>
          ) : null}
          <button style={{height: '30px', width: '85px', fontSize: '18px'}} onClick={onClose}>Close</button>
          
        </div>
      </div>
    </div>
  );
};


export default FilesList;
