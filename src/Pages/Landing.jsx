import Navbar from "../Components/Navbar";

const Landing = () => {
    return (
        <>
            <Navbar />
            <div className='max-w-screen-2xl mx-auto p-2'>
                <h1 className="text-3xl font-bold">Master Price</h1>
            </div>
            <hr className="border-gray-300 border-1" />
        </>
    );
};

export default Landing;