import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages";
import Profile from "./pages/profile";
import Header from "./components/header";

const App = () => {

    return(
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path={'/profile/:userId'} element={<Profile />} />
                </Routes>
            </BrowserRouter>
        </>
        
    )
}

export default App;