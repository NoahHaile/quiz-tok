import "@/styles/home/main/optionalImage.css";

export function OptionalImage({imageSrc}) {
    return (
        <div className="media-container">
            { imageSrc ? <img src={imageSrc} alt="loading" className="image" /> : "" }
        </div>
    )
}