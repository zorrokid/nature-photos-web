import Thumbnail from "../components/thumbnail";
import { useAppSelector } from "../redux/hooks";

function App() {
  const photos = useAppSelector((state) => state.photos.photos);
  return (
    <div style={{ display: "flex", flexDirection: "row", gap: "10px"}}>
        {
          photos.map((photo) => 
              <Thumbnail photoInfo={photo} key={photo.id} /> 
            )
        }
    </div>
  );
}

export default App;
