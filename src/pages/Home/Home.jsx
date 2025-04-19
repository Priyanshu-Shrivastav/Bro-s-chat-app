import './home.css';
// import Topbar from './components/topbar/Topbar';

import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar';
import Feed from '../../components/feed/Feed';
import RightSidebar from '../../components/rightSidebar/RightSidebar';
import Topbar from '../../components/topbar/Topbar';

const Home = () => {
  return (
    <>
      <Topbar/>
      <div className="homeContainer">
        <Sidebar />
        <Feed />
        <RightSidebar />
      </div>
    </>
  )
}

export default Home
