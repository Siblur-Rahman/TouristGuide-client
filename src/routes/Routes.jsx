import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home/Home/Home";
import StoryDetailPage from './../pages/Home/StorySection/StoryDetailPage';
// import AllStoriesPage from './../pages/Home/StorySection/AllStoriesPage';

export const stories = [
  { id: '1', title: 'Story 1', summary: 'This is story 1', content: 'Full content of story 1' },
  { id: '2', title: 'Story 2', summary: 'This is story 2', content: 'Full content of story 2' },
  { id: '3', title: 'Story 3', summary: 'This is story 3', content: 'Full content of story 3' },
  { id: '4', title: 'Story 4', summary: 'This is story 4', content: 'Full content of story 4' },
];
export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
    errorElement: <ErrorPage/>,
      children:[
        {
            path: "/",
            element:<Home/>
        },
        {
            path: "/stories/:id",
            element:<StoryDetailPage stories={stories}/>
        }
      ]
    }
    ])