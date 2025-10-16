import dost from "../assets/Experience/dost.jpg";
import gameathon from "../assets/Experience/gameathon.png";
import gdg from "../assets/Experience/gdg-execs.jpg";
import gtech from "../assets/Experience/gtech.jpg";
import hawkathon from "../assets/Experience/hawkathon.jpg";
import ton from "../assets/Experience/ton.jpg";

import ExperienceItem from "../components/ExperienceItem";

function Experience() {
	return (
		<div className="experience-container">
			<hr />
			<h1 id="experience">Experience</h1>

			<div className="experience-second-container">
				<div className="hackathons-column">
					<h2 className="column-label">Hackathons</h2>
					<ExperienceItem
						title="The Forge Gameathon 2nd Placer"
						description="Collaborated with a team of five juniors to develop our visual novel game Closed;Open, and won 2nd Place amongst teams from different universities in this game development hackathon organized by the PUP The Programmers’ Guild."
						date="2025"
						imgSrc={gameathon}
						imgAlt="Worst Generation Gameathon Certificate"
					/>
					<ExperienceItem
						title="UI/UX Hawk-A-Thon 2nd Placer"
						description="Worked with four sophomores to design ECOality, a Figma prototype of a carbon footprint tracking and rewards app. My team competed with 18 teams composed of freshmen to seniors in TUP-Manila and grabbed 2nd Place."
						date="2025"
						imgSrc={hawkathon}
						imgAlt="Worst Generation Gameathon Certificate"
					/>
					<ExperienceItem
						title="TON Hackers League Hackathon"
						description="Joined a three-member team to build HackConnect, a Telegram mini app for event organizers and attendees to host and join events with incentives."
						date="2024"
						imgSrc={ton}
						imgAlt="Worst Generation Gameathon Certificate"
					/>
				</div>

				<div className="leadership-column">
					<h2 className="column-label">Leadership</h2>
					<ExperienceItem
						title="Chief Innovations Officer"
						description="Currently working as the Chief Innovations Officer of the Google Developer Groups on Campus TUP-Manila, a tech-organization focused on participating and organizing tech events for student developers."
						date="2025"
						imgSrc={gdg}
						imgAlt="Worst Generation Gameathon Certificate"
					/>
					<ExperienceItem
						title="DOST Scholars' Leadership Camp"
						description="Attended a 3-day leadership camp exclusively for DOST scholars from different universities in NCR to learn and practice professional excellence, social responsibility, and servant-leadership."
						date="2025"
						imgSrc={dost}
						imgAlt="Worst Generation Gameathon Certificate"
					/>
					<ExperienceItem
						title="Events Production Lead"
						description="Worked as the Events Production Lead of Operations of the Google Devleoper Groups on Campus TUP-Manila. In-charge of preparing program flows and scripts of the organization’s events, as well as hosting such events."
						date="2024"
						imgSrc={gtech}
						imgAlt="Worst Generation Gameathon Certificate"
					/>
				</div>
			</div>
		</div>
	);
}

export default Experience;
