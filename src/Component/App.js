import { useDispatch } from 'react-redux';
import './App.css';
import Header from './Header/Header';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Page1 from './Home/Page1';
import Page2 from './Home/Page2';
import About from './About/About';
import { getSearchedMovieName } from '../reducer/fetchMoviesListReducer';

function App() {

  const dispatch = useDispatch();

  const onSearchInputChange = (event) =>{
    const movieName = event.target.value;
    dispatch(getSearchedMovieName(movieName));
  }

  return (
    <div className="App">
       <Router>
        <Header 
          onSearchInputChange={onSearchInputChange}
        />
        <Routes>
          <Route
            path="/"
            element={<Page1 />}
          />
           <Route
            path="/page2"
            element={<Page2 />}
          />
          <Route
            path="/about"
            element={<About />}
          />          
      </Routes>
      </Router>
    </div>
  );
}

export default App;
