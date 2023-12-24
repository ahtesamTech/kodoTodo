
import { Link, NavLink } from 'react-router-dom';

const Navber = () => {

    const linkPath = <>
    <li><NavLink to={'/'}>Home</NavLink></li>
    <li><NavLink to={'/'}>Create Todo</NavLink></li>
    <li><NavLink to={'/login'}>Log In</NavLink></li>
    
   </>


    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="text-black font-medium menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {linkPath}
      </ul>
    </div>
    <a href='/' className="btn btn-ghost font-extrabold text-xl">KoDo ToDo</a>
  </div>
 
  <div className="navbar-end">

  <ul className="hidden text-black font-medium md:flex gap-4 items-center menu menu-horizontal">
    {linkPath}
    </ul>

  <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
 
  </div>
</div>
    );
};

export default Navber;