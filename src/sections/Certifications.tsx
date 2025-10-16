import cs50p from "../assets/Certifications/CS50P_Certificate.png";
import cs50sql from "../assets/Certifications/CS50SQL_Certificate.png";
import cs50t from "../assets/Certifications/CS50T_Certificate.png";
import cs50x from "../assets/Certifications/CS50X_Certificate.png";

import ImageFrame from "../components/ImageFrame";

function Certifications() {
	return (
		<div className="certifications-container">
			<hr />
			<h1 id="certifications">Certifications</h1>
			<div className="certificates-grid">
				<div className="certificate-item">
					<h1>HarvardX: CS50’s Introduction to Computer Science</h1>
					<ImageFrame
						imgSrc={cs50x}
						alt="CS50x"
						width={620}
						link="https://certificates.cs50.io/045a48ea-af75-4397-9e71-80cb347e7011.pdf?size=letter"
						isLink={true}
					/>
				</div>
				<div className="certificate-item">
					<h1>HarvardX: CS50’s Introduction to Programming with Python</h1>
					<ImageFrame
						imgSrc={cs50p}
						alt="CS50p"
						width={620}
						link="https://certificates.cs50.io/6e9c1df5-51b3-424f-b8f9-20be0e08ecff.pdf?size=letter"
						isLink={true}
					/>
				</div>
				<div className="certificate-item">
					<h1>HarvardX: CS50’s Introduction to Databases with SQL</h1>
					<ImageFrame
						imgSrc={cs50sql}
						alt="CS50sql"
						width={620}
						link="https://certificates.cs50.io/3ceb9f7a-ea73-491e-a9f5-91a590935da8.pdf?size=letter"
						isLink={true}
					/>
				</div>
				<div className="certificate-item">
					<h1>HarvardX: CS50’s Understanding Technology</h1>
					<ImageFrame
						imgSrc={cs50t}
						alt="CS50t"
						width={620}
						link="https://certificates.cs50.io/974a4836-b63b-4df0-b4eb-118fceab9462.pdf?size=letter"
						isLink={true}
					/>
				</div>
			</div>
		</div>
	);
}

export default Certifications;
