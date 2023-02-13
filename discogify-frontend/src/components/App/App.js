import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import About from '../About/About';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { getDiscogsUserFullCollection } from '../../utils/DiscogsApi.js';
import ReleaseItemList from '../ReleaseItemList/ReleaseItemList';
import { MODAL_TYPE } from '../../utils/constants';


function App() {
  const [releaseList, setReleaseList] = React.useState([]);
  const [activeModal, setActiveModal] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const navigate = useNavigate();

  const handleUserSearchFormSubmit = (input) => {
    setIsLoading(true);
    setUsername(input);
    getDiscogsUserFullCollection(input)
        .then(pageList => {
          setReleaseList(pageList.flatMap(page => page.releases));
        })
        .catch((err) => {
          console.log(err);
          clearReleaseList();
        })
        .finally(() => {
          navigate("/collection")
          setIsLoading(false);
        });
    
  }

  const clearReleaseList = () => {
    setReleaseList([]);
  }

  const clearUsername = () => {
    setUsername("");
  }

  const clearUsernameReleaseList = () => {
    clearReleaseList();
    clearUsername();
  }

  const handleAboutClick = () => {
    setActiveModal(MODAL_TYPE.ABOUT);
  }

  const closeModal = () => {
    setActiveModal("");
  }

  React.useEffect(() => {
    const handleEsc = (evt) => {
      if(evt.key === 'Escape'){
        closeModal();
      }
    }
    
    if(activeModal){
      window.addEventListener('keydown', handleEsc);
    }

    return () => {window.removeEventListener('keydown', handleEsc)};
  }, [activeModal]);
  
  return (
    <div className="App">
        <Header handleAboutClick={handleAboutClick} />
        <Routes>
          <Route path="/collection" element={<ReleaseItemList releaseList={releaseList} username={username} clearUsernameReleaseList={clearUsernameReleaseList} />}/>
          <Route path="/" element={<Main handleUserSearchFormSubmit={handleUserSearchFormSubmit} isLoading={isLoading} />}/>
        </Routes>
        <Footer />
        {activeModal === MODAL_TYPE.ABOUT && (
          <About isOpen={activeModal === MODAL_TYPE.ABOUT} onClose={closeModal} />
        )}
    </div>
  );
}

export default App;
