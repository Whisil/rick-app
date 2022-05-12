import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages";
import Profile from "./pages/profile";
import Header from "./components/header";
import { useState } from "react";

const App = () => {

    const [profileId, setProfileId] = useState(0);

    return(
        <>
            <Header />
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home setProfileId={setProfileId}/>} />
                    <Route path={'/profile/:userId'} element={<Profile />} />
                </Routes>
            </BrowserRouter>
        </>
        
    )
}

export default App;