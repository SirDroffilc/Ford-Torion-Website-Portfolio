type ImageFrameProps = {
	imgSrc: string;
	alt?: string;
	width: number;
	link?: string;
	isLink?: boolean;
};

function ImageFrame({ imgSrc, alt, width, link, isLink }: ImageFrameProps) {
	return (
		<div className="image-frame-container" style={{ width: width + "px" }}>
			{isLink && link ? (
				<a href={link} target="_blank">
					<img src={imgSrc} alt={alt || ""} width={width} />
				</a>
			) : (
				<img src={imgSrc} alt={alt || ""} width={width} />
			)}
		</div>
	);
}

export default ImageFrame;
