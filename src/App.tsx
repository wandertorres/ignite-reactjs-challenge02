import { useState } from 'react';

import { Content } from './components/Content';
import { SideBar } from './components/SideBar';
// import { SideBar } from './components/SideBar';
// import { Content } from './components/Content';

import './styles/global.scss';
import './styles/sidebar.scss';
import './styles/content.scss';

export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar 
        setSelectedGenreId={setSelectedGenreId} 
        selectedGenreId={selectedGenreId} 
      />

      {/*<Content 
        titleSelectedGenre={selectedGenre.title} 
        selectedGenreId={selectedGenreId} 
  />*/}
    </div>
  )
}
