import * as React from 'react';
import Box from '@mui/material/Box';
import { TreeView, TreeItem } from '@mui/x-tree-view';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

interface TreeViewMenuProps {
  data: any;
  onNodeClick: (e, node) => void;
}

const TreeViewMenu = ({ data, onNodeClick }: TreeViewMenuProps) => {
  //const

  //Methods
  const handleNodeClick = (event, nodeId) => {
    console.log('Node clicked:', event, 'node:---', nodeId);
    onNodeClick(event, nodeId);
  };

  //re
  const renderTree = (nodes) => (
    <TreeItem
      className="treeItemView"
      key={nodes.id}
      nodeId={nodes.id}
      label={nodes.label}
      onClick={(event) => handleNodeClick(event, nodes.name)}
    >
      {Array.isArray(nodes.children)
        ? nodes.children.map((node) => renderTree(node))
        : null}
    </TreeItem>
  );

  return (
    <Box>
      <TreeView
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
        className="customTreeView"
      >
        {renderTree(data)}
      </TreeView>
    </Box>
  );
};

export default TreeViewMenu;
