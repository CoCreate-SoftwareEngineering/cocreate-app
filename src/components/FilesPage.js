import React, { useState, useEffect } from 'react';
import { ref, listAll, getDownloadURL } from 'firebase/storage';
import { storage } from './FireBase-config';

const FilesList = () => {
  const [currentPath, setCurrentPath] = useState('Groups');
  const [files, setFiles] = useState([]);
  const [folders, setFolders] = useState([]);
  const [pathStack, setPathStack] = useState([]);

  useEffect(() => {
    const fetchFilesAndFolders = async () => {
      const filesRef = ref(storage, currentPath);
      console.log(`Fetching files and folders from: ${currentPath}`);
      try {
        const response = await listAll(filesRef);
        const fileUrls = await Promise.all(response.items.map(item =>
          getDownloadURL(item).then(url => ({ name: item.name, url }))
        ));
        setFiles(fileUrls);
        const folderPaths = response.prefixes.map(prefix => ({
          name: prefix.name,
          fullPath: prefix.fullPath
        }));
        setFolders(folderPaths);
      } catch (error) {
        console.error("Error fetching files and folders:", error);
      }
    };

    fetchFilesAndFolders();
  }, [currentPath]); // Depend on currentPath to refetch when it changes

  const navigateIntoFolder = (folderName) => {
    setPathStack([...pathStack, currentPath]); // Push the current path onto the stack
    setCurrentPath(`${currentPath}/${folderName}`);
  };

  const navigateBack = () => {
    const prevPath = pathStack.pop(); // Pop the last path from the stack
    setPathStack(pathStack);
    setCurrentPath(prevPath || 'Groups');
  };

  return (
    <div>
      <h2>Contents of "{currentPath}"</h2>
      {pathStack.length > 0 && (
        <button onClick={navigateBack}>Back</button>
      )}
      {folders.length > 0 && (
        <div>
          <h3>Folders</h3>
          <ul>
            {folders.map((folder, index) => (
              <li key={index} onClick={() => navigateIntoFolder(folder.name)} style={{ cursor: 'pointer' }}>
                {folder.name}
              </li>
            ))}
          </ul>
        </div>
      )}
      {files.length > 0 && (
        <div>
          <h3>Files</h3>
          <ul>
            {files.map((file, index) => (
              <li key={index}>
                <a href={file.url} style={{color: 'black'}} target="_blank" rel="noopener noreferrer">{file.name}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
      {(folders.length === 0 && files.length === 0) && <p>No files or folders to display.</p>}
    </div>
  );
};

export default FilesList;
