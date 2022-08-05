import { useState } from 'react';
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
   
    <div className='bg-white shadow-md w-full fixed top-0 left-0 z-50'>
        <div className='md:flex items-center justify-between bg-gray py-4 md: px-10'>
            <div className='font-bold text-2x1 cursor-pointer flex items-center text-gray-800'>
                <span className='text-3x1 text-indigo-600 mr-1 pt-2'>
                <ion-icon name='book'></ion-icon>
                </span>
                TIENDA DE LIBROS
            </div>
            <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
            <ion-icon name={open ? 'close':'menu'}></ion-icon>
            </div>
            <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-1 left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-18 opacity-100':'top-[-490px]'} md:opacity-100`}>
                {
                    links.map((link)=>(
                        <li key={link.name} className='md: ml-8 text-xl md:my-0 my-7'>
                            <a href={link.link}>{link.name}</a>
                        </li>

                    ))
                }
                <BtnCart/>
            </ul>


        </div>
    </div>
  )
}

export default Navbar