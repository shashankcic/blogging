import React from 'react';
import { v1 as uuid } from 'uuid';
import Item from '../Item';
import Toolbar from '../Toolbar';

const PostBuilder = () => {
  const [items, setItems] = React.useState([{
    type: null,
    content: '',
    id: uuid(),
  }]);

  const addItem = (type, content) => {
    setItems(state => [...state, { type, content, id: uuid() }])
  };

  const updateItem = (id, newContent) => {
    setItems(state => {
      const itemIndex = state.findIndex(item => item.id === id);
      const newState = [...state];
      newState[itemIndex].content = newContent;
      return newState;
    });
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addItem(null, '')
    }
  }

  return (
    <div className="post">
      {items.map(item => (
        <Item
          key={item.id}
          type={item.type}
          content={item.content}
          updateItem={(newContent) => updateItem(item.id, newContent)}
          handleKeyPress={handleKeyPress}
        />
      ))}
      <Toolbar addItem={addItem} />
    </div>
  );
}

export default PostBuilder;