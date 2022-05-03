import './App.css';
import {Route, Routes} from "react-router";
import Home from "./views/Home/Home";
import Favorites from "./views/Favorites/Favorites";
import Detail from "./views/Detail/Detail";
import Header from "./components/Header/Header";
import {BrowserRouter} from "react-router-dom";
import * as PropTypes from "prop-types";

BrowserRouter.propTypes = {children: PropTypes.node};

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/favorites" element={<Favorites/>}/>
                <Route path="/movie/:movie_id" element={<Detail/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
