import './App.css';
import './App.sass'
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";
import ThirdPage from "./ThirdPage";
import FourthPage from "./FourthPage";
import Header from "./Header";
import FifthPage from "./FifthPage";
import SixthPage from "./SixthPage";
import SeventhPage from "./SeventhPage";


function App() {
    return (
        <div className="App">
            <Header/>
            <FirstPage/>
            <SecondPage/>
            <ThirdPage/>
            <FourthPage/>
            <FifthPage/>
            <SixthPage/>
            <SeventhPage/>
        </div>
    );
}

export default App;
