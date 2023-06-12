import axios from "axios";
import {useState} from "react";

export const RegisterClient = () => {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [phone, setPhone] = useState()
    const [photo, setPhoto] = useState()
    const [bio, setBio] = useState()


    const body = {
        name: '',
        email: '',
        password: '',
        phone: '',
        photo: '',
        bio: ''
    }

    const formData = new FormData()
    formData.append('name', name)
    formData.append('email', email)
    formData.append('password', password)
    formData.append('phone', phone)
    formData.append('bio', bio)
    formData.append('photo', photo)
    const register = async () => {
        await axios.post('https://archneo.herokuapp.com/v1/register-client', formData).then((res) => {
           if (res.data) {
               sessionStorage.setItem('token', res.data.token)
               window.location.assign("/")
           }
        }).catch(err => {
            console.log(err)
        })

    }


    return (
        <div className="row login">
            <div className="col-12 flex justify-center align-middle">
                <div className="col-12 d-flex justify-content-center">
                    <div
                        className="card shadow-lg p-3 mb-64 bg-body flex flex-col px-10 bg-white "
                        style={{width: "40rem"}}
                    >
                        <img
                            src={require('../assets/img/logo.png')}
                            className="align-self-center card-img-top"
                            alt="archneo_Logo"
                        />
                        <p className="mt-4 text-3xl text-center md:text-3xl lg:text-4xl lg:mx-4 md:mx-2 sm:mx-2 h-1 text-black mb-20">Register</p>
                        <label className="mt-3" htmlFor="Input_Name">Name</label>
                        <input type="text" className="border-1 border-b-black mt-2 p-2" name="name" id="Input_Name"
                               placeholder="e.g. John Doe"
                        onChange={(e) => setName(e.target.value)}/>
                        <label className="mt-3" htmlFor="Input_Phone">Phone number</label>
                        <input type="text"
                               className="border-1 border-b-black mt-2 p-2"
                               name="phone"
                               id="Input_Phone"
                               placeholder="e.g. +7 777 777 77 77"
                               onChange={(e) => setPhone(e.target.value)}
                        />
                        <label className="mt-3" htmlFor="Input_Email">Email</label>
                        <input type="email"
                               className="border-1 border-b-black mt-2 p-2"
                               name="email"
                               id="Input_Email"
                               placeholder="e.g. johndoe123@gmail.com"
                               onChange={(e) => setEmail(e.target.value)}
                        />
                        <label className="mt-3" htmlFor="Input_Phone">Bio</label>
                        <input type="text"
                               className="border-1 border-b-black mt-2 p-2"
                               name="phone"
                               id="Input_Phone"
                               placeholder="smth about you"
                               onChange={(e) => setBio(e.target.value)}
                        />
                        <label className="mt-3" htmlFor="Input_Password">Password</label>
                        <input type="password"
                               className="border-1 border-b-black mt-2 p-2"
                               name="password"
                               id="Input_Password"
                               placeholder="Min. 8 characters"
                               onChange={(e) => setPassword(e.target.value)}
                        />
                        <label className="mt-3" htmlFor="Profile_Photo">Profile photo</label>
                        <input type="file"
                               className="border-1 border-b-black mt-2 p-2"
                               name="photo"
                               id="Profile_Photo"
                               onChange={(e) => setPhoto(e.target.files[0])}
                        />
                        <div className="form-check mt-3">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                I have agreed to the terms and conditions
                            </label>
                        </div>
                        <div className="text-center md:text-center lg:text-center mx-16 mt-8">
                            <button
                                className="bg-[#fca311] lg:text-xl md:text-xl sm:text-xl text-black my-1 py-2 px-44 focus:outline-none transform transition hover:scale-105 duration-300 ease-in-out"
                                onClick={() => register()}
                            >
                                Confirm
                            </button>
                        </div>
                        <p className="text-center text-muted mt-3 mb-0">
                            Have already an account?
                            <a href="/login" className="fw-bold text-body">
                                <u>Login here</u>
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}