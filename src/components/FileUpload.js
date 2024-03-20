import React, { useState } from 'react';
import { ref, uploadBytes } from 'firebase/storage';
import { storage, auth } from './FireBase-config'; // Ensure this path is correct

const FileUpload = () => {
    const [file, setFile] = useState(null);
    const [folderName, setFolderName] = useState(''); // For storing the folder name

    const handleChange = (e) => {
        if (e.target.files[0]) {
            setFile(e.target.files[0]);
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

        // Creating a placeholder file to simulate folder creation
        const placeholder = new Blob(["This is a placeholder for folder creation"], {type: 'text/plain'});
        const folderPath = `files/${folderName.trim()}/.placeholder`; // The .placeholder file within the "folder"

        try {
            const folderRef = ref(storage, folderPath);
            await uploadBytes(folderRef, placeholder);
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
            // Include the folder name in the file path if a folder name has been set
            const filePath = folderName ? `${folderName}/${file.name}` : file.name;
            const fileRef = ref(storage, `files/${filePath}`);

            try {
                await uploadBytes(fileRef, file);
                console.log('File uploaded successfully');
            } catch (error) {
                console.error('Error uploading file:', error);
            }
        }
    };

    return (
        <div>
            
            <input type="file" onChange={handleChange} />
            <button onClick={handleUpload}>Upload File</button>

            <input
                type="text"
                placeholder="Folder Name"
                value={folderName}
                onChange={handleFolderNameChange}
            />
            <button onClick={createFolder}>Create Folder</button>

        </div>
    );
};

export default FileUpload;
