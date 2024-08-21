import React, { useCallback, useEffect, useState } from 'react';
import ReactFlow, {
  addEdge,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState
} from 'reactflow';
import CustomNode from './CustomNode';
import CustomNodeData from './CustomNodeData';

import 'reactflow/dist/style.css';
import './overview.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  getEmployeeFlowchartDetails,
  setNodeData
} from '../services/flowChart.service';
import * as ROUTES from 'src/shared/constants/routes';
import { Box, Divider, IconButton, Popover } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { Typography } from '../../../shared/components';

interface EmployeeDataProps {
  departmentKey: string;
}

const nodeTypes = {
  custom: CustomNode,
  customData: CustomNodeData
};

const minimapStyle = {
  height: 120
};

/**
 * Mandatory Function to be called for React Flow Initialization
 * @param reactFlowInstance ReactFlowInstance
 * @returns void
 */
const onInit = (reactFlowInstance) => {
  console.log('flow loaded:', reactFlowInstance);
};

const EmployeeData = ({ departmentKey }: EmployeeDataProps) => {
  // State Variables
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [employeeDetail, setEmployeeDetail] = useState({} as any);

  // Constants
  const dispatch = useDispatch<any>();
  const flowchartData = useSelector((state: any) => state.flowchartData);
  const navigate = useNavigate();
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  // Use Effects
  useEffect(() => {
    dispatch(getEmployeeFlowchartDetails(departmentKey));
    dispatch(setNodeData({} as any));
  }, [departmentKey]);

  useEffect(() => {
    let flowchart = flowchartData;
    if (flowchart?.employeeNodes?.length) {
      setNodes(flowchart?.employeeNodes);
    }
  }, [flowchartData]);

  // Methods
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    []
  );

  // we are using a bit of a shortcut here to adjust the edge type
  // this could also be done with a custom edge for example
  const edgesWithUpdatedTypes = edges?.map((edge) => edge);

  /**
   * This Function checks if more nodes and edges are present and Navigates to the Detail Page
   * @param data Data
   * @returns void
   */
  const handleClick = (data: any) => {
    if (data?.nodes?.length > 0 && data?.edges?.length > 0) {
      dispatch(setNodeData(data));
      navigate(
        `${ROUTES.EMPLOYEE_DETAIL}?department=${departmentKey}&employee=${data?.name}`
      );
    }
  };

  /**
   * This Function sets the Employee Detail and Popover Anchor Element
   * @param event any
   * @param node Node
   * @returns void
   */
  const handleNodeClick = (event: any, node: Node | any) => {
    setAnchorEl(event.currentTarget);
    setEmployeeDetail(node?.employee);
  };

  return (
    <>
      <div style={{ height: 600 }}>
        <ReactFlow
          className="hideEdges"
          nodes={nodes}
          edges={edgesWithUpdatedTypes}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onNodeClick={(event, node) => handleNodeClick(event, node)}
          onConnect={onConnect}
          onInit={onInit}
          fitView
          attributionPosition="top-right"
          nodeTypes={nodeTypes}
        >
          <MiniMap style={minimapStyle} zoomable pannable />
          <Controls />
          <Background color="" gap={16} />
        </ReactFlow>
      </div>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
      >
        <Box
          sx={{ p: 2 }}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="h4">{employeeDetail?.name}</Typography>
          {employeeDetail?.has_branch && (
            <Box sx={{ ml: 3 }}>
              <IconButton
                size="small"
                color="primary"
                onClick={() => handleClick(employeeDetail)}
              >
                <ArrowForwardIosIcon />
              </IconButton>
            </Box>
          )}
        </Box>
        <Divider />
        <Box
          sx={{ p: 2 }}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="h5">Designation</Typography>
        </Box>
        <Box
          sx={{ px: 2, pb: 2 }}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="h6">{employeeDetail?.designation}</Typography>
        </Box>
      </Popover>
    </>
  );
};

export default EmployeeData;
