import React, { useState, useEffect } from 'react';
import ContentView from './ContentView';
import FileUpload from './FileUpload';
import './FilesPage.css'
import { useLocation } from 'react-router';

const FilesList = ({ onClose, show }) => {
  const [currentPath, setCurrentPath] = useState('Groups');
  const [pathStack, setPathStack] = useState([]);
  const [initialPath] = useState('Groups')
  const [refresh, setRefresh] = useState(false) // state to trigger refresh
  
  // get url "gives /project"
  let location = useLocation();
  console.log(location.pathname)


  useEffect(() => {
    // Interval to refresh Modal 
    const intervalId = setInterval(() => {
      setRefresh(prev => !prev);
    }, 120000)

    // Clean up the interval when component is unmounted or when show changes
    return () => clearInterval(intervalId)
  }, [show]);


  
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
        />
        </div>
        <div className="modal-footer">
          {currentPath !== 'Groups' && (
            <button onClick={navigateBack} style={{ marginRight: 'auto' }}>Back</button>
          )}
          <button style={{height: '30px', width: '85px', fontSize: '18px'}} onClick={onClose}>Close</button>
          
        </div>
      </div>
    </div>
  );
};


export default FilesList;
