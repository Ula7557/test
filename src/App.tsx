import Footer from 'container/header/footer/footer';
import './app.scss'
import Header from './container/header/header';
import Home from './page/home';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
      <Route
          path={"/"}
          element={<Home/>}
          />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
