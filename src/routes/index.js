import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/login";
import Home from "../pages/home";
import { Menu } from "../components";
import Inputs from "../pages/inputs";
import Outputs from "../pages/outputs";
import Users from "../pages/users";
import CreateInput from "../pages/inputs/create";

const RoutesComponents  = () => {
    return (
        <Routes>
            <Route path="/" element={<Menu><Home /></Menu>} />
            <Route path="/login" element={<Login />} /> 
            <Route path="/inputs" element={<Menu><Inputs/></Menu>} />
            <Route path="/inputs/create" element={<Menu><CreateInput/></Menu>} />
            <Route path="/outputs" element={<Menu><Outputs /></Menu>} />
            <Route path="/users" element={<Menu><Users/></Menu>} />
        </Routes>
    );
};

export default RoutesComponents;