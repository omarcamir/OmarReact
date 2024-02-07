
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './components/Layout/Layout';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Weather from './pages/Weather';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <h2 className='text-center fs1 text-danger'>Error 404</h2>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "portfolio",
        element: <Portfolio />,
      },
      {
        path: "weather",
        element: <Weather />,
      },
      {
        path: "contact",
        element: <Contact/>,
      },
      {
        path: "*",
        element: <PageNotFound/>,
      },
    ],
  },
]);
function App() {
  return (
    <div className="App">
      <RouterProvider
    router={router}
  />
    </div>
  );
}

export default App;
