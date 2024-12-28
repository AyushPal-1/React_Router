import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Home } from "./page/Home";
import { About } from "./page/About";
import { Movie } from "./page/Movie";
import { Contact } from "./page/Contact";
import AppLayout from "./components/layout/AppLayout";
const App = () => {

  const router = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children:[
      {
        path: "/",
        element: <Home/>,
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/movie",
        element:<Movie/>
      },
      {
        path:"/contact",
        element:<Contact/>
      }
    ]
  },
 
  ])
  return <RouterProvider router={router} />
}

export default App;