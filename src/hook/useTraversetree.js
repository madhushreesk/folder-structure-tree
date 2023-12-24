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
    if (!tree) {
      return null;
    }
    if (tree.id === folderId) {
      return null;
    }

    let filteredTree = tree.items
      .filter((item) => item.id !== folderId)
      .map((item) => deleteNode(item, folderId));

    return { ...tree, items: filteredTree };
  }

  return { insertNode, deleteNode };
};

export default useTraversetree;
