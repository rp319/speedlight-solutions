import "./css/Header.css"
// import Style from './css/Home.css';
import 'bootstrap/dist/css/bootstrap.css';

// import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { NavLink } from 'react-router-dom'



// const navigation = [
//   { name: 'Home', href: '#', current: true },
//   { name: 'Services', href: '#', current: false },
//   { name: 'About Us', href: '#', current: false },
//   { name: 'Contact Us', href: '#', current: false },
// ]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

 const Header = () => {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-black">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-4 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <h6 href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-14 w-auto logo"
                src='./Logo/SSLOGO_LIGHT.svg'
                alt=""
              />
            </h6>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-200"
              onClick={() => setMobileMenuOpen(true)}>
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <NavLink to={"/"} style={{ textDecoration: 'none' }}>
              <h6 className='menuItem'>Home </h6>
            </NavLink>
            <NavLink to={"/services"} style={{ textDecoration: 'none' }}>
              <h6 className='menuItem'>Services </h6>
            </NavLink>
            <NavLink to={"/about"} style={{ textDecoration: 'none' }}>
              <h6 className='menuItem'>About Us </h6>
            </NavLink>
            <NavLink to={"/contact"} style={{ textDecoration: 'none' }}>
              <h6 className='menuItem'>Contact Us </h6>
            </NavLink>
          </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-slate-50/10">
            <div className="flex items-center justify-between">
              <h6 href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-12 w-auto"
                  src="./Logo/SSLOGO_LIGHT.svg"
                  alt=""
                />
              </h6>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-slate-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-slate-500/10">
                <div className="space-y-2 py-6">
                  <NavLink to={"/"} style={{ textDecoration: 'none', width: '100%' }}>
                    <h6 className='menuItem -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate-50 hover:bg-red-800' onClick={() => setMobileMenuOpen(false)}>Home </h6>
                  </NavLink>
                  <NavLink to={"/services"} style={{ textDecoration: 'none', width: '100%' }}>
                    <h6 className='menuItem -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate-50 hover:bg-red-800' onClick={() => setMobileMenuOpen(false)} >Services </h6>
                  </NavLink>
                  <NavLink to={"/about_us"} style={{ textDecoration: 'none', width: '100%' }}>
                    <h6 className='menuItem -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate-50 hover:bg-red-800' onClick={() => setMobileMenuOpen(false)}>About Us </h6>
                  </NavLink>
                  <NavLink to={"/contact_us"} style={{ textDecoration: 'none', width: '100%' }}>
                    <h6 className='menuItem -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate-50 hover:bg-red-800' onClick={() => setMobileMenuOpen(false)}>Contact Us </h6>
                  </NavLink>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </div>
  )
}
export default Header;
