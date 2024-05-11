import { IoMdNotificationsOutline } from "react-icons/io";
const Navbar = () => {
    return (
        <div className="bg-[#1F2937]">
            <div className="navbar max-w-screen-2xl mx-auto">

                <div className="navbar-start hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-gray-300">
                        <li className="text-lg font-semibold"><a>Dashboard</a></li>
                        <li className="text-lg font-semibold"><a>Master Price</a></li>
                        <li className="text-lg font-semibold"><a>Custom Price</a></li>
                        <li className="text-lg font-semibold"><a>Calender</a></li>
                        <li className="text-lg font-semibold"><a>Reports</a></li>
                    </ul>
                </div>
                <div className="navbar-end text-gray-300">
                    <div className="flex items-center space-x-3">
                        <IoMdNotificationsOutline className="text-3xl" />
                        <div className="avatar">
                            <div className=" w-12 rounded-full">
                                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;