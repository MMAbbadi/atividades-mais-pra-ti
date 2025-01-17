import { useState } from 'react'
import PostList from './components/PostList.jsx'
import MainHeader from './components/MainHeader.jsx'

export default function App() {
  let [modalIsVisible, setModalIsVisible] = useState(false)

  let showModalHandler = () => {
    setModalIsVisible(true)
  }
  let hideModalHandler = () => {
    setModalIsVisible(false)
  }
  return (
    <>
      <MainHeader onCreatePost={showModalHandler}/>
      <main>
        <PostList 
          isPosting={modalIsVisible} 
          onStopPosting={hideModalHandler}
        />
      </main>
    </>
  )
}