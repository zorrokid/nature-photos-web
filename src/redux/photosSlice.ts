import { createSlice , createAsyncThunk } from '@reduxjs/toolkit';
import { PhotoInfoModel, buildPhotoInfoModel } from '../models/photoInfo';
import { fetchPhotoInfo } from '../services/firestoreService';

export interface PhotosState {
	photos: PhotoInfoModel[];
}

const initialState: PhotosState = {
	photos: [],
}

export const fetchPhotos = createAsyncThunk('photos/fetchPhotos', 
	async () => {
		const response = await fetchPhotoInfo();
		return response.map((photoInfo) => buildPhotoInfoModel(photoInfo));
	}
);


export const photosSlice = createSlice({
	name: 'photos',
	initialState,
	reducers: {
		addPhoto: (state, action) => {
			state.photos.push(action.payload);
		},
		addPhotos: (state, action) => {
			state.photos = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchPhotos.fulfilled, (state, action) => {
			state.photos = action.payload;
		});
	},
});

export const { addPhoto, addPhotos } = photosSlice.actions;
export default photosSlice.reducer;
