import './ReleaseItemList.css';
import ReleaseItem from '../ReleaseItem/ReleaseItem';
import { useNavigate } from 'react-router-dom';

function ReleaseItemList ({ releaseList, username, clearUsernameReleaseList }) {
  const navigate = useNavigate();
  
  const handleReturnClick = (e) => {
    e.preventDefault();
    clearUsernameReleaseList();
    navigate("/");
  }
  
  return (
    <div>
      {releaseList.length > 0
        ? (
            <section className="releases">
              <h3 className="releases__text">{username}'s collection</h3>
              <p className="releases__return" onClick={handleReturnClick}>Return to search</p>
                <ul className="releases__list">
                  {releaseList.map(
                    ((release, index) => 
                      <ReleaseItem release={ release }  key={ index }/>
                    )
                  )}
                  </ul>
            </section>
          )
        : (
            <section className="releases">
              <h3 className="releases__none">No releases found under that Discogs username</h3>
              <p className="releases__return" onClick={handleReturnClick}>Return to search</p>
            </section>
          )
        }
    </div>
  );
}

export default ReleaseItemList;