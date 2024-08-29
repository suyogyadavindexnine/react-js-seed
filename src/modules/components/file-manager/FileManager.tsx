import { Box, Grid, Paper, Typography } from '@mui/material';
import TreeViewMenu from '../tree-view/TreeView';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ScreenShareIcon from '@mui/icons-material/ScreenShare';
import DeleteIcon from '@mui/icons-material/Delete';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import ContentCutIcon from '@mui/icons-material/ContentCut';
import RefreshIcon from '@mui/icons-material/Refresh';
import { useEffect, useState } from 'react';
import ArticleIcon from '@mui/icons-material/Article';
import FolderIcon from '@mui/icons-material/Folder';

const FileManager = () => {
  //sate variables
  const [selectedNode, setSelectedNode] = useState<any>();
  const [breadcrumb, setBreadcrumb] = useState<any>(['root']);
  const [hasSingleClicked, setHasSingleClicked] = useState<number>();
  const [fileSelected, setFileSelected] = useState<boolean>(false);
  //todo
  //dummy data
  const treeVieMenuListData = {
    id: '1',
    name: 'root',
    path: '/root',
    type: 'd',
    children: [
      {
        id: '1.1',
        name: 'home',
        path: '/home',
        type: 'd',
        children: [
          {
            id: '1.1.1',
            name: 'anandh',
            path: '/home/anandh',
            type: 'd',
            children: [
              {
                id: '1.1.1.1',
                name: 'git',
                path: '/home/anandh/git',
                type: 'd',
                children: [
                  {
                    id: '1.1.1.2',
                    name: 'master',
                    path: '/home/anandh/git/master',
                    type: 'd',
                    children: null
                  }
                ]
              }
            ]
          },
          {
            id: '1.1.2',
            name: 'nitin',
            path: '/home/nitin',
            type: 'd',
            children: null
          }
        ]
      },
      {
        id: 'node2',
        name: 'Node 2',
        path: '/node2',
        children: [
          {
            id: 'node2-1',
            name: 'Node 2.1',
            path: '/node2/node2.1',
            type: 'd',
            children: [
              {
                id: 'node2-1-1',
                name: 'Node 2.1.1',
                path: '/node2/node2.1.1/node2.1.1',
                type: 'd',
                children: null
              },
              {
                id: 'node2-1-2',
                name: 'Node 2.1.2',
                children: null
              },
              {
                id: 'node2-1-3',
                name: 'Node 2.1.3',
                type: 'd',
                children: [
                  {
                    id: 'node2-2-1',
                    name: 'Node 2.2.1',
                    type: 'd',
                    children: null
                  }
                ]
              }
            ]
          },
          {
            id: 'node2-2',
            name: 'Node 2.2',
            path: '/Node 2.2',
            type: 'd',
            children: null
          }
        ]
      },
      {
        id: 'node3-3',
        label: 'Node 3',
        path: '/node3-3',
        children: null
      }
    ]
  };

  //methods

  const handleNodeClick = (event, nodeIds) => {
    setSelectedNode(nodeIds);

    if (!breadcrumb.some((item) => item === nodeIds)) {
      setBreadcrumb((prevBreadcrumb) => [...prevBreadcrumb, nodeIds]);
    }
  };

  const handleBreadcrumbClick = (index) => {
    setBreadcrumb(breadcrumb.slice(0, index + 1));
  };

  const onSingleClicked = (index) => {
    setHasSingleClicked(index);
    setFileSelected(true);
  };

  //todo
  //after click on root path
  const rootPath = [
    {
      size: 7,
      name: '.python_history',
      type: 'f'
    },
    {
      size: 173,
      name: '.wget-hsts',
      type: 'f'
    },
    {
      size: 4096,
      name: '.config',
      type: 'd'
    },
    {
      size: 66,
      name: '.selected_editor',
      type: 'f'
    },
    {
      size: 3771,
      name: '.bashrc',
      type: 'f'
    },
    {
      size: 4096,
      name: 'snap',
      type: 'd'
    },
    {
      size: 61,
      name: '.psql_history',
      type: 'f'
    },
    {
      size: 4096,
      name: 'iterm-sftp-testing',
      type: 'd'
    },
    {
      size: 4096,
      name: 'apps',
      type: 'd'
    },
    {
      size: 4096,
      name: 'sonarqube',
      type: 'd'
    },
    {
      size: 4096,
      name: '.local',
      type: 'd'
    },
    {
      size: 4096,
      name: 'scripts',
      type: 'd'
    },
    {
      size: 220,
      name: '.bash_logout',
      type: 'f'
    },
    {
      size: 807,
      name: '.profile',
      type: 'f'
    },
    {
      size: 28065,
      name: '.bash_history',
      type: 'f'
    },
    {
      size: 18590,
      name: '.viminfo',
      type: 'f'
    },
    {
      size: 0,
      name: '.sudo_as_admin_successful',
      type: 'f'
    },
    {
      size: 4096,
      name: '.cache',
      type: 'd'
    },
    {
      size: 4096,
      name: '.docker',
      type: 'd'
    },
    {
      size: 4096,
      name: 'iptable-backup',
      type: 'd'
    },
    {
      size: 7053778,
      name: 'wikibackup.dump',
      type: 'f'
    }
  ];

  //file action bar icons
  const iconData = [
    { icon: <ContentCopyIcon />, label: 'Copy' },
    { icon: <ScreenShareIcon />, label: 'Share' },
    { icon: <DeleteIcon />, label: 'Delete' },
    { icon: <DriveFileRenameOutlineIcon />, label: 'Rename' },
    { icon: <ContentCutIcon />, label: 'Cut' }
  ];

  const FileList = ({ files }) => {
    const sortedFiles = [...files].sort((a, b) => (a.type === 'd' ? -1 : 1));
    return (
      <Grid container spacing={2}>
        {sortedFiles?.map((sortedFiles, index) => (
          <Grid sx={{ mb: 4 }} key={index} item xs={12} lg={3}>
            <Box
              className={`${
                hasSingleClicked === index ? 'active' : ''
              } flex-basic-start cursorPointer fileFolder`}
              onClick={() => onSingleClicked(index)}
            >
              {sortedFiles.type === 'f' ? (
                <ArticleIcon fontSize="large" />
              ) : sortedFiles.type === 'd' ? (
                <FolderIcon fontSize="large" />
              ) : null}
              <Typography variant="subtitle1">{sortedFiles.name}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    );
  };

  return (
    <Box className="fleManager">
      <Box
        className="fileHeaderSection"
        sx={{ px: 3, py: 2, backgroundColor: 'rgb(229, 232, 255)' }}
      >
        <Box>Indexnine Server</Box>
      </Box>
      <Box sx={{ px: 3, py: 2, backgroundColor: '#d7d7d7' }} className="d-flex">
        <Box>
          {breadcrumb?.map((item, index) => (
            <span className="breadcrumbItem" key={index}>
              <button
                className="cursorPointer"
                onClick={() => handleBreadcrumbClick(index)}
              >
                {item}
              </button>
              {index < breadcrumb.length - 1 && <span> / </span>}
            </span>
          ))}
        </Box>
        <Box className="refreshIcon flex-basic-center">
          <RefreshIcon className="cursorPointer" />
        </Box>
      </Box>
      <Box sx={{ px: 3, py: 1 }} className="d-flex fileActionBar">
        {iconData.map((data, index) => (
          <Box
            key={index}
            className={`${fileSelected ? 'iconActiveColor' : ''}`}
          >
            {data.icon}
          </Box>
        ))}
      </Box>

      <Box className="d-flex fileViewSection">
        <Box className="sideTreeMenu">
          <TreeViewMenu
            data={treeVieMenuListData}
            onNodeClick={handleNodeClick}
          />
        </Box>
        <Box className="w-100">
          <Box sx={{ p: 4 }} className="h-100 fileFolderListView">
            <FileList files={rootPath} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default FileManager;
