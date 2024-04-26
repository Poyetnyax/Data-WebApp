import './CommunityUpdates.css';
import WFH from '../../../assets/images/working-remote.png';
import typing from '../../../assets/images/typing-pc.png';
import pctyping from '../../../assets/images/pc-typing.png';

function CommunityUpdates() {
    return (
      <>
        <div className="container">
            <div className="info">
                <h2>Data analysis is our middle name</h2>
                <p>Explore AnalytiX's blog for the latest insights on data-driven decision-making for small businesses like supermarkets. Discover how our software helps businesses increase membership income and make informed decisions. Join our community and stay ahead with AnalytiX!</p>
            </div>
            <div className="reviews">
                <div className="insights">
                    <img src={WFH} alt="" />
                    <div className="insights__text">
                        <p>Insights Hub: Unlocking Data-Driven Success</p>
                    </div>
                </div>
                <div className="insights">
                    <img src={pctyping} alt="" />
                    <div className="insights__text">
                        <p>Community Chronicles: Stories of Success</p>
                    </div>
                </div>
                <div className="insights">
                    <img src={typing} alt="" />
                    <div className="insights__text">
                        <p>Navigating Growth: Strategies and Tips from the Community</p>
                    </div>
                </div>
            </div>
        </div>
      </>
    );
  }
  
  export default CommunityUpdates;