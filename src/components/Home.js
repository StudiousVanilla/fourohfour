

const Home = () => {
    return ( 
        <div className="home-container">
                <div className="video-container">
                    <iframe title="chessVid" src="https://player.vimeo.com/video/512623670?title=0&byline=0&portrait=0" frameborder="0" allowfullscreen></iframe>
                </div>
                <div className="video-container">
                    <iframe title="tradingVid" src="https://player.vimeo.com/video/507626329?title=0&byline=0&portrait=0" frameborder="0" allowfullscreen></iframe>
                </div>
                <div className="video-container">
                    <iframe title="trustVid" src="https://player.vimeo.com/video/444053665?title=0&byline=0&portrait=0" frameborder="0" allowfullscreen></iframe>
                </div>
                <div className="video-container">
                    <iframe src="https://player.vimeo.com/video/512623670?title=0&byline=0&portrait=0" frameborder="0" allowfullscreen></iframe>
                </div>
                <div className="video-container">
                    <iframe src="https://player.vimeo.com/video/512623670?title=0&byline=0&portrait=0" frameborder="0" allowfullscreen></iframe>
                </div>
                <div className="video-container">
                    <iframe src="https://player.vimeo.com/video/512623670?title=0&byline=0&portrait=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen  className="video"></iframe>
                </div>

            <div className="video-container">
                <iframe title="stormVid" src="https://player.vimeo.com/video/453370010?title=0&byline=0&portrait=0" frameBorder="0"  allowFullScreen className="video"></iframe>
            </div>
            {/*  
            <div className="video-container">
                <iframe title="microsoftVid" src="https://player.vimeo.com/video/446161639" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen className="video"></iframe>
                <p className="video-title"><a href="https://vimeo.com/446161639">#3 Microsoft on the Clock</a></p>
            </div>
            <div className="video-container">
                <iframe title="dataVid" src="https://player.vimeo.com/video/441810952" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen className="video"></iframe>
                <p className="video-title"><a href="https://vimeo.com/441810952">Fishing for Likes: Digging into CrowdTangle&#039;s Daily Data</a></p>
            </div> */}
        </div>
     );
}
 
export default Home;