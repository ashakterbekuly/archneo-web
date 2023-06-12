import './App.css';
import {Header} from "./components/header";
import {Footer} from "./components/footer";
import {useEffect, useState} from "react";
import Slider from 'react-slick'
import axios from "axios";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from "react-responsive-carousel";

function App() {
  const [sliderElements, setSliderElements] = useState()



  const getSliderElements = () => {
    try {
      axios.get('https://archneo.herokuapp.com/v1/').then((response) => {
        console.log(response.data)
        setSliderElements(response.data)
      })
    } catch (e) {
      console.log(e)
    }
  }
  useEffect(() => {
    getSliderElements()
  }, [])

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };


  return (
      <div>
        <Header />
        <div className="pt-8 md:pt-24 w-full">
          <div className="container">
            <p className="w-50 my-2 text-3xl md:text-6xl lg:text-8xl font-monospace lg:mx-4 md:mx-2 sm:mx-2 text-center md:text-right text-black">creating
              dream spaces</p>
            <p className="mt-4 my-4 text-3xl md:text-6xl lg:text-8xl font-bold mx-4 md:mx-8 h-16 text-right md:text-right text-[#fca311] italic">together</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 my-8">
            <div className="text-center md:text-right lg:text-center">
              <p className="text-lg md:text-xl lg:text-xl mx-4 md:mx-6 text-black text-left">We help to find professionals in
                their field and help to acquire new knowledge and skills</p>
            </div>
            <div className="text-center md:text-right lg:text-center">
              <a href="#download-div">
                <button
                    className="bg-transparent border border-5 border-gray-800 hover:text-white hover:bg-[#14213d] text-xl md:text-2xl lg:text-2xl text-black my-2 py-2 px-8 md:px-12 lg:px-16 focus:outline-none transform transition hover:scale-105 duration-300 ease-in-out">Download
                  App
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="mx-8 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
          <div className="mx-3">
            <section className="flex justify-center">
              <div className="container w-full sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4 m-4 rounded-lg shadow-xl bg-white">
                <Carousel>
                  {sliderElements ? sliderElements.projects.map((item) => (
                      <div>
                        <img src={item.projectImageUrl} alt="#"/>
                        <p className="legend">{item.name}</p>
                      </div>
                  )) : ''}
                </Carousel>
              </div>
            </section>
          </div>


        </div>
        <div className="pt-4 pb-4 mt-16 bg-white mx-4 md:mx-20">
          <h1 className="font-monospace float-right text-right md:text-[100px] text-[#fca311] m-0 h-auto">OUR <br /> WORKS</h1>
          <section className="mt-16 md:mt-60 text-right grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 z-10">
            <div className="mt-8 md:mt-24">
              <img className="h-auto w-auto" src={require('./assets/img/house-drafts.png')} alt="" onClick={() => window.location.assign('/house-drafts')}/>
            </div>
            <div className="mt-16 md:mt-60">
              <img className="h-auto w-auto" src={require('./assets/img/interior-design.png')} alt="" onClick={() => window.location.assign('/interior')}/>
            </div>
            <div className="mt-8">
              <img className="h-auto w-auto" src={require('./assets/img/urban-projects.png')} alt="" onClick={() => window.location.assign('/urban')}/>
            </div>
            <div className="mt-16 md:mt-80">
              <img className="h-auto w-auto" src={require('./assets/img/reconstructions.png')} alt="" onClick={() => window.location.assign('/reconstructions')}/>
            </div>
          </section>
        </div>
        <div className="w-100 flex flex-col grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-6 bg-[#fca311]">
          <div>
            <h2 className="text-4xl md:text-7xl font-monospace leading-tight mx-4 md:mx-8 text-white"
                id="download-div">ArchNEO Mobile App</h2>
            <h3 className="my-4 mx-4 md:mx-8 text-xl md:text-3xl leading-tight text-black">Join Us in our app and reach
              us even quicker</h3>
          </div>
          <div className="flex flex-row md:col-span-2 lg:col-span-2 app-collage">
            <div className="app-screen">
              <img className="h-75" src={require('./assets/img/Mockup.png')} alt="App screen 1"/>
            </div>
            <div className="app-screen">
              <img className="h-75" src={require('./assets/img/Mockup2.png')} alt="App screen 2"/>
            </div>
            <div className="app-screen">
              <img className="h-75" src={require('./assets/img/Mockup3.png')} alt="App screen 3"/>
            </div>
          </div>
          <div className="text-center mx-4 md:text-center lg:text-center">
            <a href="#download-div">
              <button
                  className="bg-white text-black text-lg md:text-2xl lg:text-2xl my-4 md:my-1 py-4 md:py-6 px-12 md:px-16 focus:outline-none transform transition hover:scale-105 duration-300 ease-in-out">Download
                App
              </button>
            </a>
          </div>
        </div>

        <Footer />
      </div>
  )
}

export default App
