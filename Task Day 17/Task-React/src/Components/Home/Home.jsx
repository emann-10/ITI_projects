import React from "react";
import Navbar from "../Nav/Navbar";
import About from "../About/About";
import Contact from "../Contact/Contact";
import { useState } from "react";
import Child from "./Child/Child";
import Parent from "./Parent/Parent";
export default function Home() {
    return (
        <>
            <Navbar></Navbar>
            <h1 class="bg-dark text-white text-center p-5">Welcome in My Websiite</h1>
            <div className="container">
                <div className="row g-3">
                    <div className="col-6">
                        <About />
                    </div>
                    <div className="col-6">
                        <Contact />
                    </div>
                </div>
            </div>
            <Parent></Parent>
        </>
    );
}
