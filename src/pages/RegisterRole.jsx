import '../App.css'


export const RegisterRole = () => {
    return (
        <div className="row login">
            <div className="row">
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
                        <p className="mt-4 text-3xl text-center md:text-3xl lg:text-4xl lg:mx-4 md:mx-2 sm:mx-2 h-1 text-black mb-20">Select your role</p>

                        <div className="form-content">
                            <div className="row flex flex-col align-middle justify-center">
                                <button
                                    type="submit"
                                    onClick={() => window.location.assign('/register-client')}
                                    className="bg-[#fca311] lg:text-xl md:text-xl sm:text-xl text-black my-1 py-2 px-44 focus:outline-none transform transition hover:scale-105 duration-300 ease-in-out"
                                >
                                    Client
                                </button>
                                <button
                                    type="submit"
                                    onClick={() => window.location.assign('/register-arch')}
                                    className="bg-[#fca311] lg:text-xl md:text-xl sm:text-xl text-black my-1 py-2 px-44 focus:outline-none transform transition hover:scale-105 duration-300 ease-in-out"
                                >
                                    Specialist
                                </button>
                            </div>
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