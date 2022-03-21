import './App.css';
import Top from './components/top/Top';
import YellowButton from './components/yellowButton/YellowButton';

import StreamingImage from './images/recommendations.webp'
import SearchImage from './images/search.webp'
import WatchlistImage from './images/watchlist.webp'
import SmallLogo from './images/logo.svg'



function App() {
  return (
    <div className="App">

      <Top />
      

      <div className="streaming">
        <div className='left'>
          <img src={StreamingImage} alt="someimage" class="streamingImage" />
        </div>
        <div className='right'>
          <h4>ALL IN ONE PLACE</h4>
            <h1>Your streaming guide</h1>
            <p>Get personal recommendations and see what’s new across your favorite streaming services. </p>
        </div>
      </div>


      <div className="oneSearch">
        <div className='left'>
        <h4>ONE SEARCH</h4>
        <h1>One search to rule them all</h1>
        <p>Never go back and forth between your services again to find out if a movie or TV show is available.</p>
        </div>
        <div className='right'>
        <img src={SearchImage} alt="someimage" class="streamingImage" width="600px" />
        </div>
      </div>

      <div className='watchlist'>
        <div className='left'>
        <img src={WatchlistImage} alt="someimage" class="streamingImage" width="600px" />
        </div>
        <div className='right'>
        <h4>ONE WATCHLIST</h4>
<h1>Combine all your watchlists</h1>
<p>Keep track of all the TV shows and movies you want to watch in one list across all your devices      </p>
  </div>
      </div>

      <div className='footer'>
      <img src={SmallLogo} alt="someimage" class="streamingImage" width="600px" />
        <h1>Get recommendations from all your favorite streaming services in one place</h1>
        <YellowButton />
      </div>


    </div>



  );
}

export default App;
