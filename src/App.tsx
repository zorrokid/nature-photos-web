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
                <div key={photo.id}>
                  {photo.id}
                </div>
              )
          }
      </div>
    </>
  );
}

export default App;
