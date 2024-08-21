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
import { useSelector } from 'react-redux';

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
  console.log('flow loaded detail:', reactFlowInstance);
};

const NodeDetail = () => {
  const flowchartData = useSelector((state: any) => state.flowchartData);

  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  useEffect(() => {
    let flowchart = flowchartData;
    if (flowchart?.nodeData?.edges?.length) {
      setEdges(flowchart?.nodeData?.edges);
    }
    if (flowchart?.nodeData?.nodes?.length) {
      setNodes(flowchart?.nodeData?.nodes);
    }
  }, [flowchartData]);

  const edgesWithUpdatedTypes = edges?.map((edge) => edge);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    []
  );

  return (
    <>
      <div style={{ height: 600 }}>
        <ReactFlow
          nodes={nodes}
          edges={edgesWithUpdatedTypes}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
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

export default NodeDetail;
