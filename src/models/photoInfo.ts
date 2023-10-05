export type PhotoInfo = {
	id: string;
  originalFilename: string;
  extension: string;
  exifData?: ExifData;
	userId: string;
  labels: string[];
  isSafe: boolean;
  thumbnail: boolean;
  resized: boolean;
  thumbnailUrl: string;
  fullSizeUrl: string;
}

export interface PhotoInfoModel extends PhotoInfo {
  hasLocation():boolean;
}

export function buildPhotoInfoModel(photoInfo: PhotoInfo): PhotoInfoModel {
  return {
    ...photoInfo,
    hasLocation: function() {
      return this.exifData !== undefined && this.exifData.latitude > 0 && this.exifData.longitude > 0;
    }
  }
}


export type ExifData = {
    latitude: number;
    longitude: number;
 }
