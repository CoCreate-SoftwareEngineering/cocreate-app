import React, { useState, useRef } from 'react';
import { ref, uploadBytes } from 'firebase/storage';
import { storage, auth } from './FireBase-config'; 
import './FileUpload.css';


const FileUpload = ({onUploadSuccess}) => {
    const [file, setFile] = useState(null);
    const [fileName, setFileName] = useState('Choose file'); // Initialized with 'Choose file'
    const [folderName, setFolderName] = useState(''); // For storing the folder name
    const fileInputRef = useRef(null);

    const triggerFileInput = () => {
        fileInputRef.current.click(); // Programmatically clicks the hidden file input
    };

    const handleChange = (e) => {
        const files = e.target.files;
        if (files.length > 0) {
            setFile(files[0]);
            setFileName(files[0].name); // Update the state with the new file name
        } else {
            setFileName('Choose file'); // Revert to default text if no file is chosen
        }
    };

    const handleFolderNameChange = (e) => {
        setFolderName(e.target.value);
    };

    const createFolder = async () => {
        if (!auth.currentUser) {
            console.log('No user logged in');
            return;
        }
        if (!folderName.trim()) {
            console.log('Folder name is empty');
            return;
        }

        const placeholder = new Blob(["This is a placeholder for folder creation"], {type: 'text/plain'});
        // change Groups to update dynamically
        const folderPath = `Groups/${folderName.trim()}/.placeholder`; // The .placeholder file within the "folder"

        try {
            const folderRef = ref(storage, folderPath);
            await uploadBytes(folderRef, placeholder);
            
            setTimeout(() => {
                if (onUploadSuccess) {
                onUploadSuccess();
                }
            }, 1000);

            console.log('Folder created successfully');
        } catch (error) {
            console.error('Error creating folder:', error);
        }
    };

    const handleUpload = async () => {
        if (!auth.currentUser) {
            console.log('No user logged in');
            return;
        }

        if (file) {
            const filePath = folderName ? `Groups/${folderName}/${file.name}` : `Groups/${file.name}`;
            const fileRef = ref(storage, filePath);

            try {
                await uploadBytes(fileRef, file);
                console.log('File uploaded successfully');
                setFileName('Choose File')

                 // Trigger the refresh after 1 second
                setTimeout(() => {
                    if (onUploadSuccess) {
                    onUploadSuccess();
                    }
                }, 1000);

            } catch (error) {
                console.error('Error uploading file:', error);
            }
        }
    };

    return (
        <div className='upload-div'>
            <div>
                <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleChange}
                    style={{ display: 'none' }} // Hide the actual input
                />
                <div className="custom-file-input" onClick={triggerFileInput}>
                    {fileName} {/* Display "Choose file" or the file name */}
                </div>
            </div>
            <button className='upload-button' onClick={handleUpload}>Upload File</button>

            <input
                type="text"
                placeholder="Folder Name"
                value={folderName}
                onChange={handleFolderNameChange}
            />            
            <button className='folder-button' onClick={createFolder}>Create Folder</button>
        </div>
    );
};

export default FileUpload;
