export const fetchPhotoInfo = async () => {
  const response = await fetch(process.env.REACT_APP_IMAGE_INFO_FUNCTION_URL ?? "");  
  const photoInfo = await response.json();
  return photoInfo;
}
