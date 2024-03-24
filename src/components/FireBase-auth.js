import React, { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './FireBase-config';
import { signOut } from 'firebase/auth'
import './Modal.css'

const AuthComponent = ({ onClose, show }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');    
     

    const handleRegister = async () => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            console.log('User registered:', user);
            onClose(); // Close the modal after successful registration
        } catch (error) {
            console.error('Error registering user:', error.message);
        }
    };

    const handleLogin = async () => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            console.log('User logged in:', user);
            onClose(); // Close the modal after successful login
        } catch (error) {
            console.error('Error logging in:', error.message);
        }
    }; 
    
    const handleLogout = async () => {
        if (auth.currentUser) { // Check if a user is logged in
            try {
                await signOut(auth);
                console.log("User logged out successfully");
                onClose(); // Close the modal after successful logout
            } catch (error) {
                console.error("Error logging out:", error.message);
            }
        } else {
            // If no user is logged in
            console.log("No user is currently logged in.");
        }
    };
    

    if(!show){
        return null;
    }

    return (
        <div className="modal" onClick={onClose}>
        <div className="modal-content" onClick={e => e.stopPropagation()} style={{width: '80%'}}>
          <div className="modal-header">
            <h4 className="modal-title">Login / Register</h4>
          </div>
          <div className="modal-body">
              <div className="form-row">
                <label>Email:</label>
                <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
  
              <div className="form-row">
                <label>Password:</label>
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
  
              <button type="button" onClick={handleRegister}>Register</button>
              <button type="button" onClick={handleLogin}>Login</button>
          </div>
          <div className="modal-footer">
            <button onClick={handleLogout}>Logout</button>
            <button onClick={onClose}>Close</button>
          </div>
        </div>
      </div>
    );
};

export default AuthComponent;
