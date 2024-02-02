import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Components/Card";
import CardContainer from "./Components/CardContainer";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Product from "./Components/Product";

function App() {
  return (
    <>
      <div style={{ width: "100vw" }}>
        <Navbar />
        <Outlet />
      </div>
    </>
  );
}

export default App;
