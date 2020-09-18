import React from 'react';
import { v1 as uuid } from 'uuid';
import Item from '../Item';

const PostBuilder = () => {
  const [items, setItems] = React.useState([{
    type: null,
    content: '',
    id: uuid(),
  }]);

  return (
    <div className="post">
      {items.map(item => (
        <Item
          key={item.id}
          type={item.type}
          content={item.content}
        />
      ))}
    </div>
  );
}

export default PostBuilder;