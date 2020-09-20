import React from 'react';
import { ItemWrapper }  from './style';
import Image from '../Image';

export const componentMappings = {
  img: (content) => <Image {...content} />
};

const Item = ({ type, content, updateItem, handleKeyPress }) => {
  const textBox = React.useRef();

  React.useEffect(() => {
    textBox.current.focus();
  });

  return (
    <ItemWrapper>
      {
        !type ? (
          <textarea
            onKeyPress={handleKeyPress}
            ref={textBox}
            value={content}
            onChange = {(e) => updateItem(e.target.value)}
          />
        ) : componentMappings[type](content)
      }
    </ItemWrapper>
  );
}

export default Item;