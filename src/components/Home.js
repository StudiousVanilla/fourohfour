

const Home = () => {
    return ( 
        <div className="home-container">
            <div className="video-container">
                <iframe title="nftVid" src="https://player.vimeo.com/video/521538066"   frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen className="video"></iframe>
                <p className="video-title"><a href="https://vimeo.com/521538066">Block Party: NFTs and the environment</a></p>
            </div>
            <div className="video-container">
                <iframe title="chessVid" src="https://player.vimeo.com/video/512623670" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen className="video"></iframe>
                <p className="video-title"><a href="https://vimeo.com/512623670">Gambits in the Chat: Chess Streaming</a></p>
            </div>
            <div className="video-container">
                <iframe title="tradingVid" src="https://player.vimeo.com/video/507626329"frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen className="video"></iframe>
                <p className="video-title"><a href="https://vimeo.com/507626329">The Reddit Wall Street Bets Trading Frenzy</a></p>
            </div>
            <div className="video-container">
                <iframe title="trustVid" src="https://player.vimeo.com/video/444053665" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen className="video"></iframe>
                <p className="video-title"><a href="https://vimeo.com/444053665">Antitrust Issue: Big Tech Testimony</a></p>
            </div>
            <div className="video-container">
                <iframe title="stormVid" src="https://player.vimeo.com/video/453370010" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen className="video"></iframe>
                <p className="video-title"><a href="https://vimeo.com/453370010">#6 Virtual Storm Chasers</a></p>
            </div>
            <div className="video-container">
                <iframe title="microsoftVid" src="https://player.vimeo.com/video/446161639" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen className="video"></iframe>
                <p className="video-title"><a href="https://vimeo.com/446161639">#3 Microsoft on the Clock</a></p>
            </div>
            <div className="video-container">
                <iframe title="dataVid" src="https://player.vimeo.com/video/441810952" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen className="video"></iframe>
                <p className="video-title"><a href="https://vimeo.com/441810952">Fishing for Likes: Digging into CrowdTangle&#039;s Daily Data</a></p>
            </div>
        </div>
     );
}
 
export default Home;