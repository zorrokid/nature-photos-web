import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './routes/Main';
//import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { firebaseConfig } from './firebase/config';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import { fetchPhotos} from './redux/photosSlice';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ViewPhoto from './routes/ViewPhoto';


// Initialize Firebase
initializeApp(firebaseConfig);
//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

store.dispatch(fetchPhotos());

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: '/photos/:id',
    element: <ViewPhoto />,
  }
]);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/> 
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
