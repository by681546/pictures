import { useState } from 'react';
import TabButton from './TabButton.js';
import PostsTab from './PostsTab.js';


export default function TabContainer() {
  const [tab, setTab] = useState('');
  return (
    <>
      
      <TabButton
        isActive={tab === 'posts'}
        onClick={() => setTab('posts')}
      >
        dxmh
      </TabButton>
      
      <hr />
      {tab === 'posts' && <PostsTab />}
    </>
  );
}
