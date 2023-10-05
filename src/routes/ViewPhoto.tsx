import { useParams } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";
import { Chip } from "@mui/material";

interface ViewPhotoProps {
}
function ViewPhoto(props: ViewPhotoProps) {
    const { id } = useParams();
    const photos = useAppSelector((state) => state.photos.photos);
    const photo = photos.find((photo) => photo.id === id);

    return (
            photo ?  
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
                {
                    photo.labels.map((label) => <Chip label={label} />)
                }
                </div>
                <img 
                    src={photo.fullSizeUrl} 
                    alt={photo.labels.join(", ")} 
                    style={{ maxWidth: "1200px" }}
                />
                {
                    photo.hasLocation() && 
                    <div>Location: {photo.exifData?.longitude} {photo.exifData?.latitude}</div>
                }
            </div> 
            : <h1>Photo not found</h1>
    );

}

export default ViewPhoto;