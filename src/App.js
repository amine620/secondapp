import Tasks from "./tasks/Tasks";
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Users from "./users/Users";
import Navbar from "./navbar/Navbar";
import Page from "./test/Page";
import Details from "./users/Details";

function App() {

  return (
    <div className="App">

      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path='/users' element={<Users/>} />
          <Route path='/tasks' element={<Tasks/>} />
          <Route path='/page' element={<Page/>} />
          <Route path='/details/:id' element={<Details/>} />
        </Routes>

      </BrowserRouter>

     
    </div>
  );
}

export default App;
