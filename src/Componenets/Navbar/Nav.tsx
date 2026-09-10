 
import logo from '../../assets/logo-text.png'
const Nav = () => {
    return (
        <div className="navbar container mx-auto py-4">
        <div className="navbar-start">
            <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
                tabIndex={-1}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                <li><a>Home</a></li>
                <li><a>Technologies</a></li>
                <li><a>Projects</a></li>
                <li><a>About</a></li>
                <li><a>Contact</a></li>
            </ul>
            </div>
            <img className='w-24 md:w-36' src={logo} alt="Logo" />
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-xl font-semibold">
                <li><a className='text-[#DB2777]'>Home</a></li>
                <li><a>Technologies</a></li>
                <li><a>Projects</a></li>
                <li><a>About</a></li>
                <li><a>Contact</a></li>
            </ul>
        </div>
        <div className="navbar-end">
            <a className=" mr-4 text-[14px]  md:text-[18px] border-0 font-semibold">Sign In</a>
            <a className="text-white text-[14px] md:text-[18px] btn font-semibold my-3 md:py-6 md:px-7  border-0 rounded-3xl bg-[#DB2777]">Sign Up</a>
        </div>
        </div>
    );
};

export default Nav;