import Thumbnail from "./components/thumbnail";
import { useAppSelector } from "./redux/hooks";

function App() {
  const photos = useAppSelector((state) => state.photos.photos);
  return (
    <>
      <div>
        Nature photos
      </div>
      <div>
          {
            photos.map((photo) => 
               <Thumbnail photoInfo={photo} key={photo.id} /> 
              )
          }
      </div>
    </>
  );
}

export default App;
