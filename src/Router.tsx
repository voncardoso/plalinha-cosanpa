import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Obra } from "./pages/Obra";

export function Router(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/obra" element={<Obra/>}/>
        </Routes>
    )
}