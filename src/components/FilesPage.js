import React, { useState, useEffect } from 'react';
import { ref, listAll, getDownloadURL } from 'firebase/storage';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { storage } from './FireBase-config';


const FilesList = () => {
  const [currentPath, setCurrentPath] = useState('Groups');
  const [files, setFiles] = useState([]);
  const [folders, setFolders] = useState([]);
  const [pathStack, setPathStack] = useState([]);
  const [userLoggedIn, setUserLoggedIn ] = useState(false); // Track if user is logged into fireBase
  const [loading, setLoading] = useState(false) // buffer so the logic can run before the page displays

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, user => {
      if (user) {
        setUserLoggedIn(true);
        fetchFilesAndFolders(); // Call fetchFilesAndFolders only if user is logged in
      } else {
        setUserLoggedIn(false);
        setFiles([]);
        setFolders([]);
      }
    });
  }, [currentPath]); // useEffect dependency array

  const fetchFilesAndFolders = async () => {
    setLoading(true); // Start loading
    const filesRef = ref(storage, currentPath);
    try {
      const response = await listAll(filesRef);
      const fileUrls = await Promise.all(
        response.items.map(item =>
          getDownloadURL(item).then(url => ({ name: item.name, url }))
        )
      );
      setFiles(fileUrls);
      const folderPaths = response.prefixes.map(prefix => ({
        name: prefix.name,
        fullPath: prefix.fullPath
      }));
      setFolders(folderPaths);
    } catch (error) {
      console.error("Error fetching files and folders:", error);
    } finally {
      setLoading(false); // Stop loading regardless of outcome
    }
  };

  const navigateIntoFolder = (folderName) => {
    setPathStack([...pathStack, currentPath]); // Push the current path onto the stack
    setCurrentPath(`${currentPath}/${folderName}`);
  };

  const navigateBack = () => {
    const prevPath = pathStack.pop(); // Pop the last path from the stack
    setPathStack(pathStack);
    setCurrentPath(prevPath || 'Groups');
  };

  if (loading) {
    return <p>Loading...</p> // Placeholder loading message
  }

  return (
    <div>
      {userLoggedIn ? (
        <>
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
        </>
      ) : (
        <p>Please log in to view files and folders.</p>
      )}
    </div>

  );
};

export default FilesList;
