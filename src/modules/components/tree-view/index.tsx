import { Box } from '@mui/material';
import Cardstructure from 'src/shared/components/common-structure/CardStructure';
import TreeViewMenu from './TreeView';

const Index = () => {
  //dummy data
  const treeVieMenuList = {
    id: 'root',
    label: 'Root Node',
    children: [
      {
        id: 'node1',
        label: 'Node 1',
        children: [
          {
            id: 'node1-1',
            label: 'Node 1.1',
            children: null
          },
          {
            id: 'node1-2',
            label: 'Node 1.2',
            children: null
          }
        ]
      },
      {
        id: 'node2',
        label: 'Node 2',
        children: [
          {
            id: 'node2-1',
            label: 'Node 2.1',
            children: [
              {
                id: 'node2-1-1',
                label: 'Node 2.1.1',
                children: null
              },
              {
                id: 'node2-1-2',
                label: 'Node 2.1.2',
                children: null
              },
              {
                id: 'node2-1-3',
                label: 'Node 2.1.3',
                children: [
                  {
                    id: 'node2-2-1',
                    label: 'Node 2.2.1',
                    children: null
                  }
                ]
              }
            ]
          },
          {
            id: 'node2-2',
            label: 'Node 2.2',
            children: null
          }
        ]
      },
      {
        id: 'node3-3',
        label: 'Node 3',
        children: null
      }
    ]
  };

  //methods
  const handleNodeClick = (event, nodeIds) => {
    console.log('Main Compo:----:', nodeIds);
  };

  return (
    <Cardstructure
      cardheader="Tree View Menu"
      component={
        <>
          <TreeViewMenu data={treeVieMenuList} onNodeClick={handleNodeClick} />
        </>
      }
    />
  );
};

export default Index;
