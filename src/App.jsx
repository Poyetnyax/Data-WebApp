import "./App.css";
import { Routes, Route} from 'react-router-dom';
import Landing from "./Layouts/Landing";
import SignIn from "./Layouts/SignIn";

function App() {
  return (
      <div>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/sign-in' element={<SignIn />} />
        </Routes>
      </div>
  );
}

export default App;
