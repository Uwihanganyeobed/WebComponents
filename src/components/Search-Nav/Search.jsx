import './search.css'
import voice from '../../assets/down2.png'
import search from '../../assets/down4.png'
const Search = () => {
  return (
    <div className="middle-section">
    <input className="search-bar"type="text"placeholder="Search" />
    <button className="search-button">
      <img className="search-icon"src={search} />
    <div className="tooltip">Search</div>
    </button>
    <button className="voice-search-button">
      <img className="voice-search-icon"src={voice} />
    <div className="tooltip">Search with your voice</div>
    </button>
  </div>

  )
}

export default Search