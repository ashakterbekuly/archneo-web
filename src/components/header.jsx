import {useEffect, useState} from "react";
import axios from "axios";

export const Header = () => {
    let isLogged = false
    const [isModal, setIsModal] = useState(false)
    const [username, setUsername] = useState()
    const data = {}

    function openModal() {
        setIsModal(!isModal)
    }

    const headers = {
        "Authorization": sessionStorage.getItem('token')
    }

    if(sessionStorage.getItem('token')) {
        isLogged = true
    }

    const me = () => {
        if (sessionStorage.getItem('token')) {
            try {
                axios.post('https://archneo.herokuapp.com/v1/me', data, { headers }).then((res) => {
                    console.log(res.data)
                    setUsername(res.data.name)
                })
            } catch (e) {
                console.log(e)
            }
        }
    }

    useEffect(() => {
        me()
        document.onclick = check;

        function check(e) {

        var navMenuDiv = document.getElementById("nav-content");
        var navMenu = document.getElementById("nav-toggle");


            var target = (e && e.target);
            //Nav Menu
            if (!checkParent(target, navMenuDiv)) {
            // click NOT on the menu
            if (checkParent(target, navMenu)) {
                // click on the link
                if (navMenuDiv.classList.contains("hidden")) {
                navMenuDiv.classList.remove("hidden");
                } else {
                navMenuDiv.classList.add("hidden");
                }
            } else {
                // click both outside link and outside menu, hide menu
                navMenuDiv.classList.add("hidden");
            }
            }
        }

        function checkParent(t, elm) {
            while (t.parentNode) {
            if (t == elm) {
                return true;
            }
            t = t.parentNode;
            }
            return false;
        }
    }, [])


    const logout = () => {
        sessionStorage.removeItem('token')
        window.location.assign('/')
    }




    return (
        <nav id="header" className="header">
            <div className="header-container">
                <div className="header-inner" onClick={() => {
                    window.location.assign("/")
                }}>
                    <img src={require("../assets/img/logo_archneo_black.png")} alt="logo"/>
                    <p>ArchNEO</p>
                </div>
                <div className="block lg:hidden pr-4">
                    <button id="nav-toggle"
                            className="flex items-center p-1 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                        <svg className="fill-current h-6 w-6" color="white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                        </svg>
                    </button>
                </div>
                <div
                    className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-[#14213d] lg:bg-transparent text-black p-4 lg:p-0 z-20"
                    id="nav-content">
                    <ul className="list-reset lg:flex justify-end flex-1 items-center">
                        <li className="mr-3">
                            <a className="inline-block py-2 px-4 text-white text-lg hover:scale-105 duration-300 ease-in-out"
                               href="/">Home</a>
                        </li>
                        <li className="mr-3">
                            <a className="inline-block text-white text-lg hover:scale-105 duration-300 ease-in-out py-2 px-4"
                               href="/events">Events</a>
                        </li>
                        <li className="mr-3">
                            <a className="inline-block text-white text-lg hover:scale-105 duration-300 ease-in-out py-2 px-4"
                               href="/projects">Projects</a>
                        </li>
                        {!isLogged ?
                            <li className="mr-3">
                                <a href="/login">
                                    <button
                                        className="lg:mx-0 bg-transparent border text-xl text-white my-4 py-2 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">Log
                                        In
                                    </button>
                                </a>
                            </li> : ''}
                        {!isLogged ?
                            <li className="mr-3">
                                <a href="/register-role">
                                    <button
                                        className="lg:mx-0 bg-gray-200 text-xl text-gray-800 my-4 py-2 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">Register
                                    </button>
                                </a>
                            </li>
                            : ''}
                        {isLogged ?
                            <li className="mr-3">
                                <div className="relative">
                                    <button
                                        className="lg:mx-0 bg-transparent border text-xl text-white my-4 py-2 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
                                        id="menu-button-profile" onClick={openModal}>
                                        {username}
                                    </button>
                                </div>
                            </li>
                            : ''
                        }
                    </ul>
                </div>
            </div>
            {isModal ?
                <div className="right-0 py-2 w-48 bg-white shadow-xl z-20 float-right" id="menu-dropdown-profile">
                    <a href="/profile"
                       className="block px-4 py-2 text-gray-800 hover:text-black hover:font-bold">Profile</a>
                    <p
                        className="block px-4 py-2 text-gray-800 hover:text-black hover:font-bold"
                        onClick={() => logout()}
                    >
                        Sign out</p>
                </div>
                : ''
            }
        </nav>

    )
}