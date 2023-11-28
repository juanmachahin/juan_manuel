import React from "react"
import "./Bio.css"

const Bio = () => {

    return (
    <>
        <article className="bio_container">
            <div className="bio">
                <header className="bio_header">
                    <h1 className="bio_title">Juan Manuel Chahin</h1>
                </header>
            <span><div className="summary">
                Born in Santa Cruz de la Sierra, Bolivia, 
                Juan Manuel Chahin is a musician 
                with over 15 years of experience in the music scene in Argentina and Bolivia. 
                His training in jazz and contemporary music led him 
                to work on notable music projects and lead cultural workshops.
                </div>
                </span>
                <span>
                <div className="education">
                In addition to his musical background, 
                Juan Manuel has expanded his technological horizons. 
                In 2022, he began his training in Front-End Development, and in 2023, 
                he successfully completed the Front-End Development course on CodeCademy.
                </div>
                </span>
                <div className="journey">
                    <span>
                    He has also been an entrepreneur, 
                    serving as the owner of a Specialty Coffee Shop in Santa Cruz, Bolivia, 
                    from 2015 to 2020.
                    </span>
                    <span>
                    With his passion for music, dedication to teaching, 
                    and growing interest in technology, 
                    Juan Manuel Chahin brings a unique and versatile perspective to any creative, 
                    business, or tech project.
                    </span>
                    <div className="photo_bio">
                <img src="\Images\jmsucre.jpg" className="photo"></img>
            </div>
                </div>

            </div>
           
        </article>
    </>

    )
}

export default Bio