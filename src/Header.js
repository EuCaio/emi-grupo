import React, { useState } from "react";
import "./Header.css";

function Header() {
  const [userName, setUserName] = useState("Empresa");
  const [editingName, setEditingName] = useState(false);
  const [profilePic, setProfilePic] = useState(null);

  const handleNameChange = (e) => setUserName(e.target.value);
  const toggleEditing = () => setEditingName(!editingName);

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setProfilePic(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <header className="custom-header">
      <div className="header-left">
        {editingName ? (
          <input
            className="name-input"
            value={userName}
            onChange={handleNameChange}
            onBlur={toggleEditing}
            autoFocus
          />
        ) : (
          <h2 onClick={toggleEditing} className="user-name">{userName}</h2>
        )}
      </div>
      <div className="header-right">
        <label htmlFor="profile-upload" className="profile-label">
          <img
            src={
              profilePic ||
              "https://www.w3schools.com/howto/img_avatar.png"
            }
            alt="Profile"
            className="profile-pic"
          />
        </label>
        <input
          id="profile-upload"
          type="file"
          accept="image/*"
          onChange={handleProfilePicChange}
          style={{ display: "none" }}
        />
      </div>
    </header>
  );
}

export default Header;
