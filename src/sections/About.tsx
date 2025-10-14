import fordPortait from "../assets/About/portrait-ford.png";
import emailIcon from "../assets/About/contact-icons/email-icon.svg";
import linkedInIcon from "../assets/About/contact-icons/linkedin-icon.svg";
import facebookIcon from "../assets/About/contact-icons/facebook-icon.svg";
import githubIcon from "../assets/About/contact-icons/github-icon.svg";

import cssLogo from "../assets/About/skills-icons/css-logo.svg";
import figmaLogo from "../assets/About/skills-icons/figma-logo.svg"
import flaskLogo from "../assets/About/skills-icons/flask-logo.svg";
import htmlLogo from "../assets/About/skills-icons/html-logo.svg";
import javascriptLogo from "../assets/About/skills-icons/javascript-logo.svg";
import pythonLogo from "../assets/About/skills-icons/python-logo.svg";
import reactLogo from "../assets/About/skills-icons/react-logo.svg";
import renpyLogo from "../assets/About/skills-icons/renpy-logo.svg";
import robloxLogo from "../assets/About/skills-icons/roblox-logo.svg";
import sassLogo from "../assets/About/skills-icons/sass-logo.svg";
import typescriptLogo from "../assets/About/skills-icons/typescript-logo.svg";

function About() {
	return (
		<>
			<div className="about-container" id="about">
				<div className="about-info">
					<div className="about-info-details">
						<h1>Ford Torion</h1>
						<h2>Software Developer</h2>
						<h3>Hi, I'm Ford!</h3>

						<p>
							A computer science student focused on full-stack web
							development, with a growing interest in game
							development. I enjoy creating projects that reflect
							my hobbies and interests, connecting with others
							through tech communities, and joining hackathons and
							meetups to learn and collaborate.
						</p>
					</div>

					<div className="about-contact">
						<h1>Contact Me</h1>
						<div className="about-contact-icons">
							<a
								href="https://mail.google.com/mail/?view=cm&fs=1&to=cliffordroytorion@gmail.com"
								target="_blank"
							>
								<img src={emailIcon} alt="emailIcon" />
							</a>
							<a
								href="https://www.linkedin.com/in/ford-torion/"
								target="_blank"
							>
								<img src={linkedInIcon} alt="linkedInIcon" />
							</a>
							<a
								href="https://www.facebook.com/ford.torion.7"
								target="_blank"
							>
								<img src={facebookIcon} alt="facebookIcon" />
							</a>
							<a
								href="https://github.com/SirDroffilc"
								target="_blank"
							>
								<img src={githubIcon} alt="githubIcon" />
							</a>
						</div>
					</div>
				</div>

				<div className="about-picture">
					<img src={fordPortait} alt="Ford Portrait" />
				</div>
			</div>

			<div className="skills-container">
				<div className="skills-label">
					<h1>Technical Skills</h1>
				</div>

				<div className="skills-logos">
					<div className="skills-slider">
						<div className="skill">
							<img src={pythonLogo} alt="pythonLogo" />
							<p>Python</p>
						</div>
						<div className="skill">
							<img src={javascriptLogo} alt="javascriptLogo" />
							<p>JavaScript</p>
						</div>
						<div className="skill">
							<img src={typescriptLogo} alt="typescriptLogo" />
							<p>TypeScript</p>
						</div>
						<div className="skill">
							<img src={reactLogo} alt="reactLogo" />
							<p>React.js</p>
						</div>
						<div className="skill">
							<img src={flaskLogo} alt="flaskLogo" />
							<p>Flask</p>
						</div>
						<div className="skill">
							<img src={htmlLogo} alt="htmlLogo" />
							<p>HTML</p>
						</div>
						<div className="skill">
							<img src={cssLogo} alt="cssLogo" />
							<p>CSS</p>
						</div>
						<div className="skill">
							<img src={sassLogo} alt="sassLogo" />
							<p>SASS</p>
						</div>
						<div className="skill">
							<img src={renpyLogo} alt="renpyLogo" />
							<p>Ren'Py</p>
						</div>
						<div className="skill">
							<img src={robloxLogo} alt="robloxLogo" />
							<p>Roblox Studio</p>
						</div>
						<div className="skill">
							<img src={figmaLogo} alt="figmaLogo" />
							<p>Figma</p>
						</div>
					</div>
					<div className="skills-slider">
						<div className="skill">
							<img src={pythonLogo} alt="pythonLogo" />
							<p>Python</p>
						</div>
						<div className="skill">
							<img src={javascriptLogo} alt="javascriptLogo" />
							<p>JavaScript</p>
						</div>
						<div className="skill">
							<img src={typescriptLogo} alt="typescriptLogo" />
							<p>TypeScript</p>
						</div>
						<div className="skill">
							<img src={reactLogo} alt="reactLogo" />
							<p>React.js</p>
						</div>
						<div className="skill">
							<img src={flaskLogo} alt="flaskLogo" />
							<p>Flask</p>
						</div>
						<div className="skill">
							<img src={htmlLogo} alt="htmlLogo" />
							<p>HTML</p>
						</div>
						<div className="skill">
							<img src={cssLogo} alt="cssLogo" />
							<p>CSS</p>
						</div>
						<div className="skill">
							<img src={sassLogo} alt="sassLogo" />
							<p>SASS</p>
						</div>
						<div className="skill">
							<img src={renpyLogo} alt="renpyLogo" />
							<p>Ren'Py</p>
						</div>
						<div className="skill">
							<img src={robloxLogo} alt="robloxLogo" />
							<p>Roblox Studio</p>
						</div>
						<div className="skill">
							<img src={figmaLogo} alt="figmaLogo" />
							<p>Figma</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default About;
