import { useParams } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";

interface ViewPhotoProps {
}
function ViewPhoto(props: ViewPhotoProps) {
    const { id } = useParams();
    const photos = useAppSelector((state) => state.photos.photos);
    const photo = photos.find((photo) => photo.id === id);

    return (
            photo ?  
            <>
                <h1>View Photo {id}</h1>
                <img src={photo.fullSizeUrl} alt={photo.labels.join(", ")} />
            </> : <h1>Photo not found</h1>
            
    );

}

export default ViewPhoto;