import './About.css';
import Modal from '../Modal/Modal';

function About ({ isOpen, onClose}) {
  return (
    <div className="about">
      <Modal isOpen={isOpen} onClose={onClose}>
        <h2 className="about__title">About Discogify</h2>
        <p className="about__text">
          Discogify is a web app developed by Haden Brock for the Practicum coding bootcamp. This app uses the Discogs API to search for a user in the Discogs database and return information on all music releases in their collection. Each release can be clicked to view the Discogs page on that release. 
        </p>
        <p className="about__text">
          This app was built using React, Javascript, and CSS. All information on user's collection is returned by the Discogs API. 
        </p>
        <p className="about__text">
          To view functionality with an example user, you can use "gert_keifrobe" (the personal collection of the developer).
        </p>
      </Modal>
    </div>
  )
}

export default About;