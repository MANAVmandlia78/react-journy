import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Sidebar from './Components/Sidebar'
import Createpost from './Components/Createpost'
import PostList from './Components/PostList'
import PostListProvider from './Store/post_list_store'
import { useState } from 'react'
function App() {

  const [SelectedTab,SetSelectedTab] = useState("Home");

  return (
    <PostListProvider>
    <div className='app-container'>
     <Sidebar SelectedTab={SelectedTab} SetSelectedTab={SetSelectedTab}></Sidebar>
     <div className='content'>
     <Header></Header>
     {SelectedTab === 'Home' ? <PostList></PostList>:<Createpost></Createpost>}
     <Footer></Footer>
     </div>
    </div>
    </PostListProvider>
  )
}

export default App
