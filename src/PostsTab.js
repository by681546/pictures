import { useState } from 'react';
import Data from './Data';


function PostsTab() {
 
  const[items,setItems]  = useState(Data)
  return (
    <ul>{items.map((item,index)=>{return <li><img src={item.url}/></li>})}</ul>
  );
  };

export default PostsTab;
