import ImageFrame from "../components/ImageFrame";

import closedOpen from "../assets/Projects/screenshots/ClosedOpen-ss.png";
import _4rdAnime from "../assets/Projects/screenshots/4rdAnime-ss.png";
import pokeRPG from "../assets/Projects/screenshots/PokeRPG-ss.png";
import quizMe from "../assets/Projects/screenshots/QuizMe-ss.png";


import githubLogo from "../assets/Projects/icons/github-logo.svg";
import itchIoLogo from "../assets/Projects/icons/itch-io-logo.svg";
import linkIcon from "../assets/Projects/icons/link-icon.svg";
import webIcon from "../assets/Projects/icons/web-logo.svg";

function Projects() {

    const closedOpenItchIo: string = "https://sirdroffilc.itch.io/closedopen";
    const closedOpenGitHub: string = "https://github.com/SirDroffilc/Visual-Novel-by-Worst-Generation";
    const _4rdAnimeWebsite: string = "https://4rdanime.vercel.app/";
    const _4rdAnimeGitHub: string = "https://github.com/SirDroffilc/4rdAnime-React-Jikan-API";
    const quizMeGitHub: string = "https://github.com/SirDroffilc/QuizMe-CS50x-Final-Project";
    const pokerpgGithub: string = "https://github.com/SirDroffilc/Pokemon-RPG-CLI-based";

    return (
        <div className="projects-container">
            <h1>Projects</h1>

            <div className="big-project-container">
                <div className="big-project-info">
                    <h3>Visual Novel Game</h3>
                    <h2>Closed;Open</h2>
                    <p>A psychological horror and drama visual novel developed in <span>Ren'Py</span> and published on <span>itch.io</span>, reaching over <span>120 views</span>, over <span>40 downloads</span>, and actual <span>player feedback</span>. Created within a one-week sprint, the game won <span>2nd Place</span> in <span>The Forge Gameathon</span> organized by PUP The Programmers' Guild, a game development hackathon with participants from different universities.</p>
                </div>
                <div className="big-project-image">
                    
                    <ImageFrame imgSrc={closedOpen} alt="Closed;Open" width={620} link={closedOpenItchIo}/>

                    <div className="link-logos">
                        <img src={linkIcon} alt="linkIcon" />
                        <a href={closedOpenItchIo} target="_blank">
                            <img src={itchIoLogo} alt="closedOpenItchIo" />
                        </a>

                        <a href={closedOpenGitHub} target="_blank">
                            <img src={githubLogo} alt="closedOpenGitHub" />
                        </a>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Projects;