import { getDocs, collection, getFirestore } from 'firebase/firestore';
import { PhotoInfo } from '../models/photoInfo';


export const fetchPhotoInfo = async () => {
	const db = getFirestore();
	const photosSnapshot = await getDocs(collection(db, 'imageInfo'));
	const photos: PhotoInfo[] = photosSnapshot.docs.map(doc => ({
		id: doc.id,
		userId: doc.data().userId,
	}));
	return photos;
}
