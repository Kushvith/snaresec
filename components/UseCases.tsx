// components/UseCases.tsx
'use client';

import React from 'react';
import ReactFlow, {
  Node,
  Edge,
  ReactFlowProvider,
} from 'reactflow';
import CustomNode from './CustomNode';


import 'reactflow/dist/style.css';

const useCaseItems = [
  { id: '1', text: "Startups & SaaS apps", position: { x: 0, y: 0 } },
  { id: '2', text: "Security researchers / bug bounty hunters", position: { x: 450, y: 100 } },
  { id: '3', text: "Red teams / pentesting", position: { x: 0, y: 200 } },
  { id: '4', text: "Compliance testing (OWASP, ISO 27001)", position: { x: 450, y: 300 } },
];

const initialEdges: Edge[] = [
  { id: 'e1-2', source: '1', target: '2', type: 'smoothstep' },
  { id: 'e2-3', source: '2', target: '3', type: 'smoothstep' },
  { id: 'e3-4', source: '3', target: '4', type: 'smoothstep' },
];

const nodeTypes = {
  custom: CustomNode,
};

const UseCases = () => {
  const initialNodes: Node[] = useCaseItems.map(item => ({
    id: item.id,
    type: 'custom',
    position: item.position,
    data: { label: item.text },
    draggable: false,
    selectable: false,
  }));

  return (
    <section className="bg-web-bg py-8 lg:py-12">
      <div className="container mx-auto px-6">
        <div className="animate-fade-in-up">
          <h2 className="font-heading text-6xl text-center text-text-dark mb-16">
            Use Cases
          </h2>
        </div>

       
        <div className="lg:hidden animate-fade-in-up flex flex-col items-center">
          {useCaseItems.map((item, index) => (
            <div key={item.id} className="flex flex-col items-center">
              <div className="w-full max-w-sm">
                    <div className="relative card-dashed-border">
      <div className="relative z-10 bg-primary p-4 rounded-xl text-center text-text-light shadow-xl h-20 w-full flex items-center justify-center">
        <p className="font-body text-base font-bold">{item.text}</p>
      </div>
    </div>
              </div>
              
           
              {index < useCaseItems.length - 1 && (
                <div className="my-4">
                  <svg className="w-8 h-8 text-primary/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V5" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

       
        <div className="hidden lg:block w-full h-[500px] animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          <ReactFlowProvider>
            <ReactFlow
              nodes={initialNodes}
              edges={initialEdges}
              nodeTypes={nodeTypes}
              fitView
              proOptions={{ hideAttribution: true }}
              panOnDrag={false}
              zoomOnScroll={false}
              zoomOnDoubleClick={false}
              nodesConnectable={false}
              elementsSelectable={false}
              className="pointer-events-none"
              defaultEdgeOptions={{
                type: 'smoothstep',
                style: { stroke: '#414141', strokeWidth: 2, strokeDasharray: '5 5' },
              }}
            >
            </ReactFlow>
          </ReactFlowProvider>
        </div>
      </div>
    </section>
  );
};

export default UseCases;