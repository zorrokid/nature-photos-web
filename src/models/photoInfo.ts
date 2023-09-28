export type PhotoInfo = {
	id: string;
  originalFilename: string;
  extension: string;
  exifData: ExifData;
	userId: string;
  labels: string[];
  isSafe: boolean;
  thumbnail: boolean;
  resized: boolean;
}

export type ExifData = {
    latitude: number;
    longitude: number;
 }
