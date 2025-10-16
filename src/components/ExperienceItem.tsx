import ImageFrame from "./ImageFrame";

type ExperienceItemProps = {
    title: string;
    description: string;
    date: string;
    imgSrc: string;
    imgAlt?: string;
};

function ExperienceItem({ title, description, date, imgSrc, imgAlt } : ExperienceItemProps) {
    return (
        <div className="experience-item-container">
            <h2 className="experience-date">{date}</h2>
            <h1>{title}</h1>
            <p>{description}</p>
            <ImageFrame imgSrc={imgSrc} alt={imgAlt} width={480} isLink={false}/>
        </div>
    )
};

export default ExperienceItem;