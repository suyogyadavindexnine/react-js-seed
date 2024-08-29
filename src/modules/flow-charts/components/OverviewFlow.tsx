import React, { useCallback, useEffect } from 'react';
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
  getFlowchartDetails,
  setNodeData
} from '../services/flowChart.service';
import * as ROUTES from 'src/shared/constants/routes';

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
const onInit = (reactFlowInstance) =>
  console.log('flow loaded:', reactFlowInstance);

const OverviewFlow = () => {
  const dispatch = useDispatch<any>();
  const flowchartData = useSelector((state: any) => state.flowchartData);
  const navigate = useNavigate();

  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  useEffect(() => {
    dispatch(getFlowchartDetails());
    dispatch(setNodeData({} as any));
  }, []);

  useEffect(() => {
    let flowchart = flowchartData;
    if (flowchart.edges.length) {
      setEdges(flowchart.edges);
    }
    if (flowchart.node.length) {
      setNodes(flowchart.node);
    }
  }, [flowchartData]);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    []
  );

  // we are using a bit of a shortcut here to adjust the edge type
  // this could also be done with a custom edge for example
  const edgesWithUpdatedTypes = edges?.map((edge) => edge);

  /**
   * This Function checks if more nodes and edges are present and Navigates to the Detail Page
   * @param node Node
   * @returns void
   */
  const handleNodeClick = (node: Node | any) => {
    if (node?.nodes?.length > 0 && node?.edges?.length > 0) {
      dispatch(setNodeData(node));
      navigate(ROUTES.FLOWCHART_DETAIL);
    }
  };

  return (
    <>
      <div style={{ height: 600 }}>
        <ReactFlow
          nodes={nodes}
          edges={edgesWithUpdatedTypes}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onNodeClick={(event, node) => handleNodeClick(node)}
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
    </>
  );
};

export default OverviewFlow;
