import React, { useEffect } from 'react';
import Navbar from "./navbar/Navbar";
import './app.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"; // Добавьте Navigate в импорт
import Registration from "./authorization/Registration";
import Login from "./authorization/Login";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../actions/user";
import Disk from "./disk/Disk";

function App() {
    const isAuth = useSelector(state => state.user.isAuth);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(auth());
    }, [dispatch]);

    return (
        <BrowserRouter>
            <div className='app'>
                <Navbar />
                <div className="wrap">
                    {!isAuth ?
                        <Routes>
                            <Route path="/registration" element={<Registration />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="*" element={<Navigate replace to="/login" />} />
                        </Routes>
                        :
                        <Routes>
                            <Route path="/" element={<Disk />} />
                            <Route path="*" element={<Navigate replace to="/" />} />
                        </Routes>
                    }
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
