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
import { getDepartmentsList } from '../services/flowChart.service';
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
const onInit = (reactFlowInstance) => {
  console.log('departments flow loaded:', reactFlowInstance);
};

const Departments = () => {
  const dispatch = useDispatch<any>();
  const flowchartData = useSelector((state: any) => state.flowchartData);
  const navigate = useNavigate();

  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  useEffect(() => {
    dispatch(getDepartmentsList());
  }, []);

  useEffect(() => {
    const flowchart = flowchartData;
    if (flowchart?.departmentNodes?.length) {
      setNodes(flowchart?.departmentNodes);
    }
    if (flowchart?.departmentEdges?.length) {
      setEdges(flowchart?.departmentEdges);
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
   * This Function helps in navigating to a specific department
   * @param node Node
   * @returns void
   */
  const handleNodeClick = (node: Node | any) => {
    navigate(`${ROUTES.DEPARTMENT_DETAIL}?department=${node?.key}`);
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

export default Departments;
