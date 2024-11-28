import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {RouterProvider , createBrowserRouter} from "react-router-dom";
import './index.css'
import App from './App.jsx'
import CreatePost from './components/CreatePost.jsx';
import Post from './components/Post.jsx';

const router = createBrowserRouter([
  {
  path: "/",
  element: <App/>,
  children: [
    {path:"/Create-post", element: <CreatePost/>},
    {path:"/", element: <Post/>},
  ],
},
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
