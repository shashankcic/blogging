import React from 'react';
import { componentMappings } from '../Item';
import { ToolbarWrapper } from './style';

const Toolbar = ({addItem}) => (
  <ToolbarWrapper>
    {Object.keys(componentMappings).map(key => (
      <button onClick={() => addItem(key, {})}>
        {key}
      </button>
    ))}
  </ToolbarWrapper>
);

export default Toolbar;