import './Preloader.css';

function Preloader ({ isLoading }) {
  
  return (
    <div className={isLoading ? 'preloader' : 'preloader preloader_hidden'}>
        <i className="preloader__circle"></i>
    </div>
  )
}

export default Preloader;
