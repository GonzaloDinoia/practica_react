import { useState } from 'react';
import { NavLink } from "react-router-dom";
import BtnCart from './BtnCart';
const Navbar = () => {
    let links=[
        {
            name:'HOME',link:'/'
        },
        {
            name:'PRODUCTOS',link:'/'
        },
        {
            name:'QUIENES SOMOS',link:'/'
        },
        {
            name:'CONTACTO',link:'/'
        },
    ]
    let [open,setOpen]=useState(false);
    return (
   
    <div className='fixed top-0 left-0 z-50 w-full bg-white shadow-md'>
        <div className='items-center justify-between px-10 py-4 md:flex bg-gray md:'>
            <div className='flex items-center text-xl font-bold text-gray-800 duration-500 cursor-pointer hover:text-gray-400 font-ftitles'>
                <span className='pt-2 mr-1 text-indigo-600 text-3x1'>
                <ion-icon name='book'></ion-icon>
                </span>
                TIENDA DE LIBROS
            </div>
            <div onClick={()=>setOpen(!open)} className='absolute text-3xl text-gray-800 duration-500 cursor-pointer hover:text-gray-400 right-8 top-6 md:hidden'>
            <ion-icon name={open ? 'close':'menu'}></ion-icon>
            </div>
            <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-1 left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-18 opacity-100':'top-[-490px]'} md:opacity-100`}>
                {
                    links.map((link)=>(
                        <li key={link.name} className='ml-8 text-xl font-ftitles md: md:my-0 my-7'>
                            <NavLink to={link.link} className='text-gray-800 duration-500 hover:text-gray-400'>{link.name}</NavLink>
                        </li>
                    ))                }
                <NavLink to="/Carrito"><BtnCart /></NavLink>
            </ul>
        </div>
    </div>
  )
}
export default Navbar