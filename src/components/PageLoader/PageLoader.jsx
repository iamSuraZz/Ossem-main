import React from 'react';
import './pageLoader.css';

const PageLoader = () => {
    // const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setLoading(false);
    //     }, 200000); // Simulate a 2-second page load delay

    //     return () => clearTimeout(timer);
    // }, []);

    return (
        <div class="overlay">
            <div class="part1" id="part1-id"></div>
            {/* <div class="loaderfont" id="loaderfont-id">
                <h1 class="loader-h1">loading...</h1>
            </div> */}
            <div class="loader" id="loader-id"></div>
            <div class="part2" id="part2-id"></div>
        </div>
    );

    // return (
    //     <div className="overlay">
    //         {loading && (
    //             <>
    //                 <div className="loaderfont" id="loaderfont-id">
    //                     <h1 className="loader-h1">loading...</h1>
    //                 </div>
    //                 <div className="loader" id="loader-id"></div>
    //             </>
    //         )}
    //         <div className="part1" id="part1-id"></div>
    //         <div className="part2" id="part2-id"></div>
    //         {!loading && (
    //             <div className="finish">
    //                 <h1 id="finish-h1">finish loading</h1>
    //             </div>
    //         )}
    //     </div>
    // );
};

export default PageLoader;

{/* <div class="overlay">
    <div class="part1" id="part1-id"></div>
    <div class="loaderfont" id="loaderfont-id">
        <h1 class="loader-h1">loading...</h1>
    </div>
    <div class="loader" id="loader-id"></div>
    <div class="part2" id="part2-id"></div>
</div> */}
