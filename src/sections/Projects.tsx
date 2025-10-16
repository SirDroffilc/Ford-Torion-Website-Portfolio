import ImageFrame from "../components/ImageFrame";

import closedOpen from "../assets/Projects/screenshots/ClosedOpen-ss.png";
import _4rdAnime from "../assets/Projects/screenshots/4rdAnime-ss.png";
import pokeRPG from "../assets/Projects/screenshots/PokeRPG-ss.png";
import quizMe from "../assets/Projects/screenshots/QuizMe-ss.png";

import githubLogo from "../assets/Projects/icons/github-logo.svg";
import itchIoLogo from "../assets/Projects/icons/itch-io-logo.svg";
import webIcon from "../assets/Projects/icons/web-logo.svg";

function Projects() {
	const closedOpenItchIo: string = "https://sirdroffilc.itch.io/closedopen";
	const closedOpenGitHub: string =
		"https://github.com/SirDroffilc/Visual-Novel-by-Worst-Generation";
	const _4rdAnimeWebsite: string = "https://4rdanime.vercel.app/";
	const _4rdAnimeGitHub: string =
		"https://github.com/SirDroffilc/4rdAnime-React-Jikan-API";
	const quizMeGitHub: string =
		"https://github.com/SirDroffilc/QuizMe-CS50x-Final-Project";
	const pokerpgGithub: string =
		"https://github.com/SirDroffilc/Pokemon-RPG-CLI-based";

	return (
		<div className="projects-container">
			<hr />
			<h1 id="projects">Projects</h1>

			<div className="big-project-container">
				<div className="big-project-info">
					<h3>Visual Novel Game</h3>
					<h2>Closed;Open</h2>
					<p>
						A psychological horror and drama visual novel developed
						in <span>Ren'Py</span> and published on{" "}
						<span>itch.io</span>, reaching over{" "}
						<span>120 views</span>, over <span>40 downloads</span>,
						and actual <span>player feedback</span>. Created within
						a one-week sprint, the game won <span>2nd Place</span>{" "}
						in <span>The Forge Gameathon</span> organized by PUP The
						Programmers' Guild, a game development hackathon with
						participants from different universities.
					</p>
				</div>
				<div className="big-project-image">
					<ImageFrame
						imgSrc={closedOpen}
						alt="Closed;Open"
						width={620}
						link={closedOpenItchIo}
						isLink={true}
					/>

					<div className="link-logos">
						<a href={closedOpenItchIo} target="_blank">
							<img src={itchIoLogo} alt="closedOpenItchIo" />
						</a>

						<a href={closedOpenGitHub} target="_blank">
							<img src={githubLogo} alt="closedOpenGitHub" />
						</a>
					</div>
				</div>
			</div>

			<div className="big-project-container reversed">
				<div className="big-project-image">
					<ImageFrame
						imgSrc={_4rdAnime}
						alt="4rdAnime"
						width={620}
						link={_4rdAnimeWebsite}
						isLink={true}
					/>

					<div className="link-logos">
						<a href={_4rdAnimeWebsite} target="_blank">
							<img src={webIcon} alt="4rdAnime Website" />
						</a>

						<a href={_4rdAnimeGitHub} target="_blank">
							<img src={githubLogo} alt="4rdAnime GitHub" />
						</a>
					</div>
				</div>
				<div className="big-project-info">
					<h3>React Web App</h3>
					<h2>4rdAnime</h2>
					<p>
						An anime information website deployed on{" "}
						<span>Vercel</span> and developed using{" "}
						<span>React</span>, <span>Typescript</span>, and the{" "}
						<span>Jikan API</span>, the unofficial open-source API
						for the most active anime and manga community -{" "}
						<span>MyAnimeList</span>. <span>4rdAnime</span> features
						recently updated, most popular, and top-rated anime,
						along with a search function for specific shows and
						characters.
					</p>
				</div>
			</div>

			<div className="small-projects-section">
				<div className="small-project-container">
					<div className="small-project-info">
						<h3>Flask Web App</h3>
						<h2>QuizMe</h2>
					</div>

					<div className="small-project-image">
						<ImageFrame
							imgSrc={quizMe}
							alt="QuizMe"
							width={620}
							link={quizMeGitHub}
							isLink={true}
						/>
					</div>

					<div className="small-project-info">
						<p>
							A full-stack web application that allows users to
							create and share custom quizzes. Developed using
							Python with Flask, HTML, CSS, and Javascript.
						</p>
					</div>
				</div>

				<div className="small-project-container">
					<div className="small-project-info">
						<h3>CLI-based RPG</h3>
						<h2>PokéRPG (CLI)</h2>
					</div>

					<div className="small-project-image">
						<ImageFrame
							imgSrc={pokeRPG}
							alt="QuizMe"
							width={620}
							link={pokerpgGithub}
							isLink={true}
						/>
					</div>

					<div className="small-project-info">
						<p>
							PokéRPG is a command-line based Pokémon RPG that
							allows users to take on the role of a Pokémon
							Trainer. Developed using Python and the PokéAPI.
						</p>
					</div>
				</div>
			</div>

			<h1 id="more-projects">
				More Projects on my{" "}
				<a href="https://github.com/SirDroffilc" target="_blank">
					GitHub!
				</a>
			</h1>

		</div>
	);
}

export default Projects;
