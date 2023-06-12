import {Header} from "../components/header";
import {Footer} from "../components/footer";
import {useEffect, useState} from "react";
import axios from "axios";

export const Events = () => {

    const [items, setItems] = useState()
    const [isModal, setIsModal] = useState(false)

    const[id, setId] = useState()

    useEffect(() => {
        try {
            axios.get('https://archneo.herokuapp.com/v1/events').then((res) => {
                console.log(res.data)
               setItems(res.data.events)
                console.log(items)
            })
        } catch (e) {
            console.log(e)
        }
    }, [])

    function toggleModal(index) {
        setIsModal(!isModal)
        setId(index)
        console.log(123)
    }


    return (
        <div>
            <Header />
            <section className="bg-white mx-auto">
                <div className="my-8 flex flex-wrap pt-4 pb-12">
                    <p className="mt-8 mb-8 text-4xl md:text-5xl lg:text-7xl font-monospace lg:mx-4 md:mx-2 sm:mx-2 h-16 text-[#fca311]">UPCOMING EVENTS</p>
                    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 bg-white">
                        {items &&
                            items.map((item, index) => (
                                <div key={index} className="py-4 border border-black p-5">
                                    <div className="grid">
                                        <img className="object-fill h-64 w-auto h-auto" src={item.imageUrl} alt="..." />
                                        <div className="h-12 mt-6">
                                            <span className="card-title text-xl text-black hover:underline">{item.title}</span>
                                        </div>
                                        <button
                                            className="flex justify-end hover:underline px-2 py-2 text-black text-md mt-8 more-info text-right"
                                            onClick={(e) => {
                                                toggleModal(index);
                                            }}
                                        >
                                            REGISTER
                                        </button>
                                    </div>
                                </div>
                            ))}

                        {isModal && (
                            <div className="modal text-black h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-50">
                                <div className="bg-white rounded shadow-lg w-1/3">
                                    <div className="border-b px-4 py-2">
                                        <h3>{items[id].title}</h3>
                                    </div>
                                    <div className="px-4 py-2">
                                        <img className="flex-shrink-0 max-h-60 max-w-40 object-fill" src={items[id].imageUrl} alt="..." />
                                    </div>
                                    <div className="p-3">{items[id].description}</div>
                                    <div className="flex justify-end items-center w-full border-t p-3">
                                        <button
                                            className="bg-red-500 hover:bg-red-600 px-6 py-2 py-1 rounded-full text-white mr-1 close-modal"
                                            onClick={() => setIsModal(!isModal)}
                                        >
                                            Cancel
                                        </button>
                                        <a href="/register-arch">
                                            <button className="bg-blue-500 hover:bg-blue-600 px-6 py-2 py-1 rounded-full text-white register">
                                                Register
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>


            <Footer />
        </div>
    )
}