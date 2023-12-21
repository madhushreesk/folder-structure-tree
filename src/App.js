import { useState } from "react";
import { FolderData } from "./data/FolderData";
import Folder from "./components/Folder";
import useTraversetree from "./hook/useTraversetree";

function App() {
  const [folderData, setFolderData] = useState(FolderData);

  // console.log(folderData);

  const { insertNode } = useTraversetree();

  const handleInsertNode = (folderId, item, isFolder) => {
    const finalTree = insertNode(folderData, folderId, item, isFolder);

    setFolderData(finalTree);
  };

  return (
    <div className="App">
      <Folder handleInsertNode={handleInsertNode} folderData={folderData} />
    </div>
  );
}

export default App;
