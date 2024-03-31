'use client'
import { useState } from 'react';
import cardList from '../src/data';
import { Providers } from './Providers';

export default function Page() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
      <main className={`container mx-auto py-24 px-8 ${darkMode ? "text-white" : "text-black"}`}>
        <h3 className={`ms-5 mb-5 text-xl font-bold ${darkMode ? "text-white" : "text-black"}`}>
          <span style={{ textDecoration: 'underline', textDecorationColor: 'rgb(115, 143, 255)', color: darkMode ? 'white' : 'black' }}>Sports</span>
        </h3>

        <div className="grid lg:grid-cols-5 gap-6">
          {cardList.map((card, index) => (
            <div key={index} className={`shadow-lg ${darkMode ? "bg-gray-800 text-white" : ""}`}>
              <img src={card.img} alt="" />
              <h3 className={`pt-5 text-1xl font-bold mb-3 ${darkMode ? "text-white" : "text-black"}`}>{card.title}</h3>
              <p className={`${darkMode ? "text-white" : "text-black"}`}>{card.data}</p>
              <div className="flex">
                <div>
                  <h4 className={`text-1lg font-normal text-gray-600 ${darkMode ? "text-white" : "text-black"}`}>{card.total}</h4>
                  <h3 className={`text-l font-bold ${darkMode ? "text-white" : "text-black"}`}>{card.Event}</h3>
                </div>
                <div className="ms-5">
                  <h4 className={`text-1lg font-normal text-gray-600 ${darkMode ? "text-white" : "text-black"}`}>{card.sport}</h4>
                  <h3 className={`text-l font-bold ${darkMode ? "text-white" : "text-black"}`}>{card.baseball}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <button className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${darkMode ? "dark:bg-gray-800" : ""}`}>
            See more
          </button>
        </div>
        <div className={`bg-slate-200 ${darkMode ? "dark:bg-gray-900 dark:text-white" : ""} mt-5`}>
          <h1 className={`text-center text-5xl font-sans font-bold ${darkMode ? "text-white" : "text-black"}`}>Collection Spotlight</h1>
          <br />
          <p className={`text-center ${darkMode ? "text-white" : "text-black"}`}>Discover extraordinary moments with our Spotlight Collection metatickets—exclusive access to premium events for an unforgettable
            <br />experience. Grab yours today!</p>
          <br />
          <div className='pt- pl-10 flex'>
          <img className=' mt-96 h-10' src="./images/rightt.png" alt="" />
         
          {/* <img src="./images/right arrow.png" alt="" /> */}
          <div className="flex justify-center gap-4 p-20">
            <div className={`bg-[url('/images/frame.png')] bg-no-repeat bg-cover bg-center ${darkMode ? "bg-gray-800 text-white" : ""}`} style={{ "height": "760px" }}>
              <img className="w-full" src="./images/next 1.png" alt="" />
              <h1 className={`text-center font-medium ${darkMode ? "text-white" : "text-black"}`}>Las Vegas Aviators</h1>
              <br />
              <h1 className={`text-center font-medium ${darkMode ? "text-white" : "text-black"}`}> OCT 15 | SUN | 4:30 PM</h1>
              <br />
              <p className={`text-center ${darkMode ? "text-white" : "text-black"}`}>Las Vegas Ballpark, Las Vegas,<br /> Nevada</p>
              <br />
              <div className="flex justify-center">
                <button className={`bg-gray-800 text-white font-medium py-2 px-4 rounded ${darkMode ? "dark:bg-gray-700" : ""}`}>
                  Take Flight Collection
                </button>
              </div>
            </div>

            <div className={`bg-[url('/images/frame.png')] bg-no-repeat bg-cover bg-center ${darkMode ? "bg-gray-800 text-white" : ""}`} style={{ "height": "760px" }}>
              <img className="w-full" src="./images/next 2.png" alt="" />
              <h1 className={`text-center font-medium ${darkMode ? "text-white" : "text-black"}`}>Las Vegas Aviators</h1>
              <br />
              <h1 className={`text-center font-medium ${darkMode ? "text-white" : "text-black"}`}> OCT 15 | SUN | 4:30 PM</h1>
              <br />
              <p className={`text-center ${darkMode ? "text-white" : "text-black"}`}>Las Vegas Ballpark, Las Vegas,<br /> Nevada</p>
              <br />
              <div className="flex justify-center">
                <button className={`bg-gray-800 text-white font-medium py-2 px-4 rounded ${darkMode ? "dark:bg-gray-700" : ""}`}>
                  Take Flight Collection
                </button>
              </div>
            </div>

            <div className={`bg-[url('/images/frame.png')] bg-no-repeat bg-cover bg-center ${darkMode ? "bg-gray-800 text-white" : ""}`} style={{ "height": "760px" }}>
              <img className="w-full" src="./images/next 1.png" alt="" />
              <h1 className={`text-center font-medium ${darkMode ? "text-white" : "text-black"}`}>Las Vegas Aviators</h1>
              <br />
              <h1 className={`text-center font-medium ${darkMode ? "text-white" : "text-black"}`}> OCT 15 | SUN | 4:30 PM</h1>
              <br />
              <p className={`text-center ${darkMode ? "text-white" : "text-black"}`}>Las Vegas Ballpark, Las Vegas,<br /> Nevada</p>
              <br />
              <div className="flex justify-center">
                <button className={`bg-gray-800 text-white font-medium py-2 px-4 rounded ${darkMode ? "dark:bg-gray-700" : ""}`}>
                  Take Flight Collection
                </button>
              </div>
            </div>
            
          </div>
          <img className='mt-96 h-10 pr-10' src="./images/download.png" alt="" />

          </div>

        </div>
        
      </main>
    </div>
  );
}
