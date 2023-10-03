import { Link } from "react-router-dom";
import { PhotoInfo } from "../models/photoInfo";

interface ThumbnailProps {
    photoInfo: PhotoInfo;
}

function Thumbnail({photoInfo}: ThumbnailProps) {
    if (!photoInfo.thumbnail) return null; 
    console.log(photoInfo)
    return (
        <div>
            <Link to={`/photos/${photoInfo.id}`}>
                <img 
                    src={photoInfo.thumbnailUrl} 
                    alt="thumbnail" 
                />
            </Link>
        </div>
    );
}

export default Thumbnail;