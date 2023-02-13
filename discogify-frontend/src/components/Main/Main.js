import React from 'react';
import './Main.css';
import UserSearchForm from '../UserSearchForm/UserSearchForm';
import ReleaseItemList from '../ReleaseItemList/ReleaseItemList';
import Preloader from '../Preloader/Preloader';


function Main ({ handleUserSearchFormSubmit, isLoading }) {
  
  return (
    <main className="main">
      <h2 className="main__text">
        Connect your Discogs account to view your collection
      </h2>
      <UserSearchForm handleUserSearchFormSubmit={handleUserSearchFormSubmit} />
      <Preloader isLoading={isLoading} />
    </main>
  )

}

export default Main;