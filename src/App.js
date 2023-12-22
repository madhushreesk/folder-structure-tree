import { useState } from "react";
import { FolderData } from "./data/FolderData";
import Folder from "./components/Folder";
import useTraversetree from "./hook/useTraversetree";

function App() {
  const [folderData, setFolderData] = useState(FolderData);

  // console.log(folderData);

  const { insertNode, deleteNode, updateNode } = useTraversetree();

  const handleInsertNode = (folderId, item, isFolder) => {
    const finalTree = insertNode(folderData, folderId, item, isFolder);

    setFolderData(finalTree);
  };

  const handleDeleteNode = (folderData, folderId) => {
    const filteredTree = deleteNode(folderData, folderId);

    setFolderData(filteredTree);
  };
  return (
    <div className="App">
      <Folder
        handleInsertNode={handleInsertNode}
        handleDeleteNode={handleDeleteNode}
        folderData={folderData}
      />
    </div>
  );
}

export default App;
