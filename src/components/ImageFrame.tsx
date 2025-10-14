type ImageFrameProps = { 
    imgSrc: string;
    alt?: string;
    width: number;
    link?: string;
};

function ImageFrame({ imgSrc, alt, width, link} : ImageFrameProps) {
    return (
        <div className="image-frame-container">
            <a href={link || "#"} target="_blank">
                <img src={imgSrc} alt={alt || ""} width={width}/>
            </a>
        </div>
    )
}

export default ImageFrame;