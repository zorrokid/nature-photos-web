import { PhotoInfo } from "../models/photoInfo";

interface ThumbnailProps {
    photoInfo: PhotoInfo;
}

function Thumbnail({photoInfo}: ThumbnailProps) {
    if (!photoInfo.thumbnail) return null; 
    console.log(photoInfo)
    return (
        <div>
            <img src={photoInfo.thumbnailUrl} alt="thumbnail" />
        </div>
    );
}

export default Thumbnail;