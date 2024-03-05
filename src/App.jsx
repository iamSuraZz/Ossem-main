// import { useState, useEffect } from "react";
// import Home from "./pages/Home";
// import Features from "./pages/Features";
// import Routing from "./Routing";
// import Header from "./components/Header/Header";
// import Footer from "./components/Footer/Footer";

// import { BrowserRouter, Routes, Route } from 'react-router-dom';

// // import PageLoader from "./components/PageLoader/PageLoader";

// import "./App.css";

// function App() {

//   // const [isLoading, setLoading] = useState(true);

//   // useEffect(() => {
//   //   setTimeout(() => {
//   //     setLoading(false);
//   //   }, 3000);
//   // }, []);

//   useEffect(() => {
//     let registration;

//     if ("serviceWorker" in navigator) {
//       const onLoad = () => {
//         navigator.serviceWorker
//           .register("/service-worker.js")
//           .then((reg) => {
//             registration = reg;
//             console.log("Service Worker registered:", registration);
//           })
//           .catch((error) => {
//             console.error("Service Worker registration failed:", error);
//           });
//       };

//       window.addEventListener("load", onLoad);

//       return () => {
//         // Cleanup function: Remove event listener and unregister service worker
//         window.removeEventListener("load", onLoad);
//         if (registration) {
//           registration.unregister().then(() => {
//             console.log("Service Worker unregistered:", registration);
//           });
//         }
//       };
//     }
//   }, []);

//   return (
//     // <BrowserRouter>
//     //   {isLoading ? <PageLoader /> : (
//     //     <>
//     //       <div className="pg__Wrap">
//     //         <Header />
//     //         <Routes>
//     //           <Route path="/" element={<Routing />}>
//     //             <Route index element={<Home />} />
//     //             <Route path="home" element={<Home />} />
//     //             <Route path="features" element={<Features />} />
//     //             {/* <Route path="post/:topic" element={<PostDetails />} /> */}
//     //             {/* <Route path="profile" element={<Profile />} /> */}
//     //           </Route>
//     //         </Routes>
//     //         <Footer />
//     //       </div>
//     //     </>
//     //   )
//     //   }

//     // </BrowserRouter>
//     <BrowserRouter>
//       <div className="pg__Wrap">
//         <Header />
//         <Routes>
//           <Route path="/" element={<Routing />}>
//             <Route index element={<Home />} />
//             <Route path="home" element={<Home />} />
//             <Route path="features" element={<Features />} />
//             {/* <Route path="post/:topic" element={<PostDetails />} /> */}
//             {/* <Route path="profile" element={<Profile />} /> */}
//           </Route>
//         </Routes>
//         <Footer />
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;

// import React, { useState, useEffect } from 'react';

// import "./App.css";
// import Home from "./pages/Home";
// import Features from "./pages/Features";
// import Routing from "./Routing";
// import Header from "./components/Header/Header";
// import Footer from "./components/Footer/Footer";
// import About from './pages/About';

// import { BrowserRouter, Routes, Route } from 'react-router-dom';

// const App = () => {
//   const [loaded, setLoaded] = useState(false);
//   const [kill, setKill] = useState(false);
//   const [showContent, setShowContent] = useState(false);

//   useEffect(() => {
//     const polygonTimeout = setTimeout(() => {
//       setLoaded(true);
//     }, 5000);

//     const loaderTimeout = setTimeout(() => {
//       setKill(true);
//       setShowContent(true);
//     }, 6000);

//     return () => {
//       clearTimeout(polygonTimeout);
//       clearTimeout(loaderTimeout);
//     };
//   }, []);

//   return (
//     <>
//       <BrowserRouter>
//         <div className={`loader ${kill ? 'kill' : ''}`}>

//           <div className={`polygon ${loaded ? 'loaded' : ''}`}>
//             {/* <div className='loader__img'>
//               <img src='assets/img/loader.png'></img>
//             </div> */}

//           </div>


//         </div>
//         <div className="wrapper">
//           <div className="border">
//             <div className={`page_Content ${showContent ? 'show' : ''}`}>
//               <div className="pg__Wrap">
//                 <Header />
//                 <Routes>
//                   <Route path="/" element={<Routing />}>
//                     <Route index element={<Home />} />
//                     <Route path="home" element={<Home />} />
//                     <Route path="features" element={<Features />} />
//                     <Route path="about" element={<About />} />
//                   </Route>
//                 </Routes>
//                 <Footer />
//               </div>
//             </div>
//           </div>
//         </div>
//       </BrowserRouter>

//     </>
//   );
// };

// export default App;



import React, { useState, useEffect } from 'react';

import "./App.css";
import Home from "./pages/Home";
import Features from "./pages/Features";
import Routing from "./Routing";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import About from './pages/About';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {

  return (
    <>
      <BrowserRouter>
        <div className="pg__Wrap">
          <Header />
          <Routes>
            <Route path="/" element={<Routing />}>
              <Route index element={<Home />} />
              <Route path="home" element={<Home />} />
              <Route path="features" element={<Features />} />
              <Route path="about" element={<About />} />
            </Route>
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;



