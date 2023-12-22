import React, { useState } from "react";

const Folder = ({ handleInsertNode, handleDeleteNode, folderData }) => {
  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: false,
  });

  const handleNewFolder = (e, isFolder) => {
    e.stopPropagation();
    setExpand(true);
    setShowInput({
      visible: true,
      isFolder,
    });
  };

  const addNewFolder = (e) => {
    if (e.keyCode === 13 && e.target.value) {
      handleInsertNode(folderData.id, e.target.value, showInput.isFolder);
      setShowInput({ ...showInput, visible: false });
    }
  };

  if (folderData.isFolder) {
    return (
      <div
        style={{
          margin: "10px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <div className="folder" onClick={() => setExpand(!expand)}>
            <span style={{ cursor: "pointer" }}>🗂️ {folderData.name}</span>
            <div style={{ display: "flex" }}>
              <div onClick={(e) => handleNewFolder(e, false)}>📄</div>
              <div
                onClick={(e) => handleNewFolder(e, true)}
                style={{ marginLeft: "7px" }}
              >
                🗂️
              </div>
              {/* <div onClick={(e) => handleDeleteNode(e, true)}>-</div> */}
            </div>
          </div>

          <div
            style={{ display: expand ? "block" : "none", paddingLeft: "10px" }}
          >
            {showInput.visible && (
              <div className="inputContainer">
                <span>{showInput.isFolder ? "🗂️" : "📄"}</span>
                <input
                  onKeyDown={addNewFolder}
                  onBlur={() => setShowInput({ ...showInput, visible: false })}
                  autoFocus
                  className="inputContainer__input"
                  type="text"
                />
              </div>
            )}
            {folderData.items.map((item) => {
              return (
                <Folder
                  handleInsertNode={handleInsertNode}
                  handleDeleteNode={handleDeleteNode}
                  folderData={item}
                  key={item.id}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  } else {
    return <span className="file"> 📄 {folderData.name}</span>;
  }
};

export default Folder;
