const useTraversetree = () => {
  function insertNode(tree, folderId, item, isFolder) {
    if (tree.id === folderId && tree.isFolder) {
      tree.items.unshift({
        id: new Date().getTime(),
        name: item,
        isFolder,
        items: [],
      });
      return tree;
    }

    let latestNode = [];
    latestNode = tree.items.map((obj) => {
      return insertNode(obj, folderId, item, isFolder);
    });
    return { ...tree, items: latestNode };
  }

  function deleteNode(tree, folderId) {
    if (tree.id === folderId) {
      return null;
    }

    let filteredTree = [];
    filteredTree.items
      .filter((item) => item.id !== folderId)
      .map((item) => deleteNode(item, folderId));

    return { ...tree, items: filteredTree };
  }

  function updateNode(tree, folderId, item) {
    let updatedItem = [];
    return { ...tree, items: updatedItem };
  }

  return { insertNode, deleteNode, updateNode };
};

export default useTraversetree;
