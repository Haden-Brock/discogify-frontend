import './ReleaseItem.css';
import { buildDiscogsReleasePageUrl } from '../../utils/processData';

function ReleaseItem({ release }) {
    return (
        <li className="card">
            <a href={buildDiscogsReleasePageUrl(release)} target="_blank">
                <img src={release.basic_information.thumb} alt='Album cover' className="card__image" />
            </a>
            <div className="card__bottom">
                <h3 className="card__bottom-album" >{release.basic_information.title}</h3>
                <p className="card__bottom-artist">{release.basic_information.artists[0].name}</p>
            </div>
        </li>
    );
}

export default ReleaseItem;