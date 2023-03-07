import './App.css';
import { RouterProvider } from 'react-router-dom';
import Route from "../src/Components/Routes/Route/Route";
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import { Toaster } from 'react-hot-toast';


function App() {
  
    useEffect(() => {
      AOS.init();
      AOS.refresh();
    }, []);

  return (
    <div>
      <RouterProvider router={Route}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
