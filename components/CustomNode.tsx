// components/CustomNode.tsx
'use client';

import React from 'react';
import { Handle, Position, NodeProps } from 'reactflow';

// This custom node has invisible handles on all four sides for flexible connections.
const CustomNode = React.memo(({ data }: NodeProps<{ label: string }>) => {
  return (
    <div className="relative card-dashed-border">
      <div className="relative z-10 bg-primary p-4 rounded-xl text-center text-text-light shadow-xl h-24 w-80 flex items-center justify-center">
        <p className="font-body text-lg font-bold">{data.label}</p>
      </div>
      
      {/* Invisible connection points */}
      <Handle id="top" type="target" position={Position.Top} style={{ visibility: 'hidden' }} />
      <Handle id="bottom" type="source" position={Position.Bottom} style={{ visibility: 'hidden' }} />
      <Handle id="left" type="target" position={Position.Left} style={{ visibility: 'hidden' }} />
      <Handle id="right" type="source" position={Position.Right} style={{ visibility: 'hidden' }} />
    </div>
  );
});

CustomNode.displayName = 'CustomNode';

export default CustomNode;