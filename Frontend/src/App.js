import './App.css';
// import './Add.css';
import './Dashboard.css'; // Import the CSS file
import { BroweserRouter, Routes, Route, BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import Home from './pages/Home';
import EditorPage from './pages/EditorPage';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <>
      <div>
        <Toaster
          position='top-right'
          toastOptions={{
            success: {
              theme: {
                primary: "#4aed88"
              }
            }
          }}
        ></Toaster>
      </div>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn/>}></Route>
          <Route path="/signup" element={<SignUp/>}></Route>
          <Route path="/dashboard" element={<Dashboard/>}></Route>
          <Route path="/room" element={<Home/>}></Route>
          <Route path="/compiler" element={<EditorPage/>}></Route>
          <Route path="/editor/:roomId" element={<EditorPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
