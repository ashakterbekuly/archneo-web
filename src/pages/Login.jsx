import "../App.css"
import "../assets/css/main.css"
import axios from "axios";

export const Login = () => {

    const body = {
        email: '',
        password: ''
    }


    const login = async () => {
        await axios.post('https://archneo.herokuapp.com/v1/login', body).then((res) => {
            console.log(res)
            sessionStorage.setItem('token', res.data.token)
            if (res.data) {
                window.location.assign("/")
            }
        }).catch(err => {
            console.log(err)
        })
    }


    return (
            <div className="row login">
                <div className="col-12 flex justify-center align-middle">
                        <div
                            className="card shadow-lg p-3 mb-64 bg-body flex flex-col px-10 bg-white"
                            style={{ width: "40rem" }}
                        >
                            <img
                                src={require('../assets/img/logo.png')}
                                className="align-self-center card-img-top"
                                alt="archneo_Logo"
                            />
                            <p className="mt-4 text-3xl text-center md:text-3xl lg:text-4xl lg:mx-4 md:mx-2 sm:mx-2 h-1 text-black mb-20">Welcome
                                Back!</p>
                            <label className="mt-3" htmlFor="Input_Email">Email</label>
                            <input type="email" className="border-1 border-b-black mt-2 p-2" name="email"
                                   id="Input_Email" placeholder="e.g. johndoe123@gmail.com" onChange={(e) => body.email = e.target.value} />
                            <label className="mt-3" htmlFor="Input_Password">Password</label>
                            <input type="password"
                                   className="border-1 border-b-black mt-2 p-2"
                                   name="password"
                                   id="Input_Password"
                                   placeholder="Min. 8 characters"
                                   onChange={(e) => body.password = e.target.value}
                            />
                            <div className="text-center md:text-center lg:text-center mx-16 mt-8">
                                    <button
                                        onClick={() => login()}
                                        type="submit"
                                        className="bg-[#fca311] lg:text-xl md:text-xl sm:text-xl text-black my-1 py-2 px-44 focus:outline-none transform transition hover:scale-105 duration-300 ease-in-out">
                                        Log
                                        In
                                    </button>
                            </div>

                            <p className="text-center text-muted mt-3 mb-0">Don't have an account?
                                <a href="/register-role" className="fw-bold text-body">
                                    <u>Register here</u>
                                </a>
                            </p>
                        </div>
                </div>
            </div>
    )
}