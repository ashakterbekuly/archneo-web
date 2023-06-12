
import '../App.css'
import {useEffect, useState} from "react";
import axios from "axios";
export const Profile = () => {

    const [isModal, setIsmodal] = useState(false)

    const [user, setUser] = useState({})
    const headers = {
        "Authorization": sessionStorage.getItem('token')
    }

    const editProfile = async () => {
        await axios.post('https://archneo.herokuapp.com/v1/edit-client', body, {headers}).then((res) => {
            console.log(res)
        })
    }


    useEffect(() => {
        try {
            axios.post('https://archneo.herokuapp.com/v1/me', {}, { headers }).then((res) => {
                console.log(res.data)
                setUser(res.data)
                console.log(user)
            })
        } catch (e) {
            console.log(e)
        }
    }, [])

    let body = {
        photoUrl: '',
        name: '',
        bio: '',
        password: ''
    }

    const { name, bio, photoUrl} = user

    return (
        <div>
            <div className="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-12 lg:my-0">
                <div id="profile" className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white mx-6 lg:mx-0">
                    <div className="p-4 md:p-16 text-center lg:text-left">
                        <div className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-60 bg-cover bg-center"
                             style={{ backgroundImage: `url('https://source.unsplash.com/MP0IUfwrn0A')` }}></div>
                        <h1 className="text-3xl font-bold pt-8 lg:pt-0">{name}</h1>
                        <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-black opacity-25"></div>
                        <p className="pt-8 text-sm">{bio}</p>
                        <div className="pt-12 pb-8">
                            <button className="gradient bg-blue-950 hover:bg-black text-white font-bold py-2 px-4 rounded-full more-info"
                                    onClick={() => setIsmodal(!isModal) }>Edit Info</button>
                        </div>
                        {
                            isModal ?
                                <div id="myModal" className="modal">
                                    <div className="modal-content">
                                        <span className="close cursor-pointer text-xl" onClick={() => setIsmodal(!isModal) }>&times;</span>
                                        <div className="image-container">
                                            <img src={photoUrl} alt="Image" className="max-w-sm mx-auto" />
                                        </div>
                                        <h1 className="my-4 text-xl font-bold leading-tight text-black">Editing Info</h1>
                                        <label className="block mx-auto my-4">
                                            <span className="sr-only">Choose profile photo</span>
                                            <input type="file" name="photo"
                                                   className="block w-full text-sm rounded-full file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100 file:border-solid"
                                                   onChange={(e) => body.photoUrl = e.target.value}
                                            />
                                        </label>
                                        <div>
                                            <label htmlFor="first_name" className="block mt-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                                            <input type="text" name="name" id="first_name"
                                                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                   placeholder={name}
                                                   onChange={(e) => body.name = e.target.value}
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="bio" className="block mt-2 text-sm font-medium text-gray-900 dark:text-white">Bio</label>
                                            <input type="text" name="bio" id="bio"
                                                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                   placeholder={bio}
                                                   onChange={(e) => body.bio = e.target.value}
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="password" className="block mt-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                            <input type="password" name="password" id="password"
                                                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                   onChange={(e) => body.password = e.target.value}
                                            />
                                        </div>
                                        <div className="mt-6">
                                            <button
                                                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                                // onClick={() => editProfile()}
                                            >
                                                Save Changes
                                            </button>
                                        </div>
                                    </div>
                                </div> : ''
                        }
                    </div>
                </div>
                <div className="w-full lg:w-2/5">
                    <img src={photoUrl} className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block"
                         alt="Unsplash profile photo" />
                </div>
            </div>
            <div className="flex flex-wrap justify-center">
                <div className="max-w-sm w-full sm:w-auto rounded px-8 overflow-hidden shadow-lg mx-4 my-4 sm:mx-8 sm:my-8 bg-white">
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl my-8">Looking for a specialist?</div>
                        <a className="looking-for-specialist" href="/projects">
                            <button className="hover:underline bg-gray-800 text-xl text-white rounded-full my-8 py-2 px-8 sm:px-16">
                                See the projects
                            </button>
                        </a>
                    </div>
                </div>

                <div className="max-w-sm w-full sm:w-auto rounded px-8 overflow-hidden shadow-lg mx-4 my-4 sm:mx-8 sm:my-8 bg-white">
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl my-8">View projects of your colleagues!</div>
                        <a className="looking-for-specialist" href="/projects">
                            <button className="hover:underline bg-gray-800 text-xl text-white rounded-full my-8 py-2 px-8 sm:px-16">
                                See the projects
                            </button>
                        </a>
                    </div>
                </div>

                <div className="max-w-sm w-full sm:w-auto rounded px-8 overflow-hidden shadow-lg mx-4 my-4 sm:mx-8 sm:my-8 bg-white">
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl my-8">Don't miss the upcoming event</div>
                        <a className="looking-for-specialist" href="/projects">
                            <button className="hover:underline bg-gray-800 text-xl text-white rounded-full my-8 py-2 px-8 sm:px-16">
                                See the events
                            </button>
                        </a>
                    </div>
                </div>

                <svg className="wave-top" viewBox="0 0 1439 147" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <g transform="translate(-1.000000, -14.000000)" fillRule="nonzero">
                            <g className="wave">
                                <path d="M1440,84 C1383.555,64.3 1342.555,51.3 1317,45 C1259.5,30.824 1206.707,25.526 1169,22 C1129.711,18.326 1044.426,18.475 980,22 C954.25,23.409 922.25,26.742 884,32 C845.122,37.787 818.455,42.121 804,45 C776.833,50.41 728.136,61.77 713,65 C660.023,76.309 621.544,87.729 584,94 C517.525,105.104 484.525,106.438 429,108 C379.49,106.484 342.823,104.484 319,102 C278.571,97.783 231.737,88.736 205,84 C154.629,75.076 86.296,57.743 0,32 L0,0 L1440,0 L1440,84 Z"></path>
                            </g>
                            <g transform="translate(1.000000, 15.000000)" fill="#FFFFFF">
                                <g transform="translate(719.500000, 68.500000) rotate(-180.000000) translate(-719.500000, -68.500000) ">
                                    <path d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496" opacity="0.100000001"></path>
                                    <path d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z" opacity="0.100000001"></path>
                                    <path d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z" opacity="0.200000003"></path>
                                </g>
                            </g>
                        </g>
                    </g>
                </svg>
            </div>
        </div>
    )
}