import React from "react"
import "./Home.css"
import "../Navbar/Navbar"
import Navbar from "../Navbar/Navbar"
import {useTypewriter, Cursor} from "react-simple-typewriter"

const Home = () => {
    const [typeEffect] = useTypewriter ({
        words: ["a Front End Developer.", "also a Musician and a Composer."],
        loop: false,
        typeSpeed: 70,
        deleteSpeed: 200,
        delay: {
            words: [1000, 1000, 1000]
        },
        top: [-100, -200, -300]

    })

    return (
<>
    <Navbar />
    <article className="centered-container">
        
        <div className="home">
            <div className="writeContainer">
                <span className="write_1"> HELLO.
                </span>
            </div>
            <div className="writeContainer_2">
                <span className="write_2">My name is Juan Manuel.</span>
            </div>
            <div className="writeContainer_3">
                <h1 className="write_3">I am {typeEffect}</h1>
            </div>
            
        </div>
    </article>
</>
    );
}

export default Home




