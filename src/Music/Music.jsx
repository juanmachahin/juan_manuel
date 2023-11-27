import React from "react";
import './Music.css'

const Music = () => {

    return (
        <>
        <main className="music-container">
        <header className="music-title">
            <h1 className="mtittle">You can listen to my music on the following platforms.</h1>
        </header>
        
          <aside className="streaming-container">
          <article className="audius-container">
          <a className="audius" href="https://audius.co/juanmanuel" target="_blank">
          <img src="src\Images\audius-black.png"
            className="audius-logo" alt="audius-logo" />
            </a>
            </article> 
          <article className="youtube-container">
          <a className="youtube" href="https://youtube.com/@juanmachahin/videos" target="_blank">
          <img src="src\Images\youtube-black.png"
            className="youtube-logo" alt="youtube" />
            </a>
            </article>
          <article className="spotify-container">
          <a className="spotify" 
                href="https://open.spotify.com/intl-es/artist/2xv0lauB0sNZTmQOASr7pj?si=SqFDskzGRWi5M4gDyQrAtA" 
                target="_blank">
          <img src="src\Images\Spotify-Black.png" alt="spotify-logo" className="spotify-logo"/>
          </a>
          </article>
          </aside>
        </main>
        
        </>
    )
}

export default Music
