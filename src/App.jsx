import "./App.css";
import { Routes, Route} from 'react-router-dom';
import Landing from "./Layouts/Landing";
import SignIn from "./Layouts/SignIn";
import SignUp from "./Layouts/SignUp"

function App() {
  return (
      <div>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/sign-up' element={<SignUp />} />
        </Routes>
      </div>
  );
}

export default App;
