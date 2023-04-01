import '../index.css'
import logo from '../assets/img/logo.jpg'


const Navbar = () => {

  return (
    <div>
      <header className='fixed w-full top-0 right-0 z-[1000] flex h-[10vh] justify-between bg-slate-900/50 pl-28 pr-28 py-5 transition-all ease-in duration-500 items-center border-b-2 border-b-blue-400 shadow-lg sm:pl-5 sm:pr-5'>
        <a href="#" className="logo flex text-white text-[1.7rem] font-[600] items-center text-center" ><img src={logo} className='w-[3rem] h-[3rem] rounded-full' alt="" /><span className='text-[#0addf5]'>W</span>elcome!</a>


        <ul className="Navbar list-none text-[1.3rem] gap-4 flex justify-end text-white lg:hidden">
            <li className='mr-4'><a href="#home" className="active hover:text-blue-400 lg:block lg:my-1 lg:px-4 lg:transition-all ease-in duration-500">Home</a></li>
            <li className='mr-4'><a href="#about" className='hover:text-blue-400'>About</a></li>
            <li className='mr-4'><a href="#blog" className='hover:text-blue-400'>Blog</a></li>
            <li className='mr-4'><a href="#project" className='hover:text-blue-400'>Project</a></li>
            <li className='mr-4'><a href="#life" className='hover:text-blue-400'>Life</a></li>
            <li className='mr-4'><a href="#contact" className='hover:text-blue-400'>Contact</a></li>
        </ul>


        <div className="m flex items-center">
            <a href="https://github.com/suraj-mahato360" className="github" target="_blank"><i className="ri-github-fill text-blue-400 text-5xl hover:drop-shadow-md hover:scale-105"></i></a>
            <a href="https://www.linkedin.com/in/suraj-mahato-732a2a20b/" className="linkedin" target="_blank"><i className="ri-linkedin-box-fill text-blue-600 text-5xl hover:drop-shadow-md hover:scale-105"></i></a>
            {/* <i className="ri-menu-line text-[35px] cursor-pointer z-[10001] hidden lg:block" id="menu-icon"></i> */}
        </div>
    </header>
    </div>
  )
}

export default Navbar