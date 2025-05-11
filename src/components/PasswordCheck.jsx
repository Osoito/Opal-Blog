import React, { useState } from 'react';
import '../css/editor.css';

const PasswordCheck = ({ onPasswordCorrect }) => {
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Replace 'your-secure-password' with your chosen password
        if (password === process.env.REACT_APP_EDITOR_PASSWORD) {
            onPasswordCorrect();
        } else {
            setError('Incorrect password');
        }
    };

    return (
        <div className="password-check">
            <form onSubmit={handleSubmit}>
                <h2>Enter Editor Password</h2>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password..."
                    className="password-input"
                />
                {error && <p className="error-message">{error}</p>}
                <button type="submit" className="btn dark">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default PasswordCheck;