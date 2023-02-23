import './App.css';
import { RouterProvider } from 'react-router-dom';
import Route from "../src/Components/Routes/Route/Route";

function App() {
  return (
    <div className='overflow-hidden'>
      <RouterProvider router={Route}></RouterProvider>
    </div>
  );
}

export default App;
