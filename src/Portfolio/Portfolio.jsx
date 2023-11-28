import React from 'react'
import './Portfolio.css'

const Portfolio = () => {


    return (
    <>
       <header className='portfolioTitle'>
           <h1>Projects.</h1>
        </header> 
        <main className='portfolioContainer'>
        
          <article className='twitterCard'>
           <h2>
           <a href='https://twitter-user.netlify.app/'target="_blank" className='twitter'>Twitter Card</a> 
           </h2> 
           

          </article>
          <article className='eMarket'>
            <h2>
                <a href='https://web-buy.netlify.app/' target="_blank" className='market'>E-Market</a> 
            </h2>
           
          </article>
          <article className='doctor'>
            <h2>
            <a href='https://dr-gabriel-vique.netlify.app/' target="_blank" className='dr'>Doctor</a> 
            </h2>
           

          </article>
          <article className='movies'>
            <h2>
            <a href='https://encuentra-tu-pelicula.netlify.app/' target="_blank" className='movie-finder'>Movie Finder</a> 
            </h2>
           
          </article>

        </main>

   
    
    </>
    

    )

}
export default Portfolio