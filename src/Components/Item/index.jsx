import React from 'react';
import { ItemWrapper }  from './style';

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
        ) : <p>Some new item</p>
      }
    </ItemWrapper>
  );
}

export default Item;