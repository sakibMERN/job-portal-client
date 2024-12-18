import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../../context/AuthContext/AuthContext";
import jobLogo from "../../assets/jobsLogo.png"

const Navbar = () => {
  const { user, SingOutUser } = useContext(AuthContext);

  const handleSignOut = () => {
    SingOutUser()
    .then(()=> {
      console.log("Sign out successful");
    })
    .catch((err) => {
      console.log(err.message);
    })

  }
  const links = (
    <>
      <li>
        <NavLink to={'/'}>Home</NavLink>        
      </li>
      <li>
        <NavLink to={'/myApplication'}>My Applications</NavLink>        
      </li>
      <li>
        <NavLink to={'/addJob'}>Add A Job</NavLink>        
      </li>
      <li>
        <NavLink to={'/myPostedJobs'}>My Posted Jobs</NavLink>        
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">
          <img src={jobLogo} alt="" />
          <h3 className="text-3xl">Job Portal</h3>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end space-x-2">
        {user ? (
          <>
            <button onClick={handleSignOut} className="btn btn-error">Logout</button>
          </>
        ) : (
          <>
            <Link to={"/register"}>Register</Link>
            <Link to={"/login"} className="btn btn-outline p-1 btn-primary">
              Sign In
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
