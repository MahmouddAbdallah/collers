import { useState } from "react"
import { LogoIcon, MenuIcon } from "./icons"
import { useRef } from "react"
import { useEffect } from "react"

const Navbar = () => {
    const items = [
        {
            name: "Home",
            link: "/"
        },
        {
            name: 'Solutions',
            link: '/'
        },
        {
            name: 'Products',
            link: '/'
        }, {
            name: 'Pricing',
            link: '/'
        },
        {
            name: 'Resources',
            link: '/'
        }
    ]
    const [open, setOpen] = useState(false)
    const eleRef = useRef();
    useEffect(() => {
        const handleCloseMenu = (e) => {
            if (eleRef.current && !eleRef.current.contains(e.target)) {
                setOpen(false)
                document.body.style.overflowY = 'auto'
            }
        }
        document.addEventListener('click', handleCloseMenu);
        return () => {
            document.removeEventListener('click', handleCloseMenu)
        }
    }, [])
    return (
        <nav className=''>
            <div className='flex justify-between py-5 p-container items-center'>
                <div>
                    <a href="/"><LogoIcon /></a>
                </div>
                <div className="z-10 hidden lg:flex gap-8 items-center">
                    <ul className="flex gap-5">
                        {items.map(item => {
                            return (
                                <li key={item.name}>
                                    <a className="font-medium text-amber-900" href={item.link}>
                                        {item.name}
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                    <div className="space-x-5">
                        <button className="font-medium text-amber-800">
                            Log In
                        </button>
                        <button className="font-medium text-amber-800 border-2 rounded-md border-amber-900 py-2 px-5">
                            Sign up now
                        </button>
                    </div>
                </div>
                <div ref={eleRef} className="z-50 lg:hidden">
                    <button onClick={() => {
                        setOpen(true);
                        document.body.style.overflowY = 'hidden'
                    }}>
                        <MenuIcon />
                    </button>
                    <div className={`bg-amber-400 fixed w-10/12 h-full top-0 right-0 lg:hidden flex-col items-center justify-between py-10 ${open ? 'right-to-left' : 'left-to-right'}`}>
                        <ul className="w-full">
                            {items.map(item => {
                                return (
                                    <li className="w-full text-center " key={item.name}>
                                        <a className="font-medium text-amber-900 block py-3" href={item.link}>
                                            {item.name}
                                        </a>
                                    </li>
                                )
                            })}
                        </ul>
                        <div className="space-x-5">
                            <button className="font-medium text-amber-800">
                                Log In
                            </button>
                            <button className="font-medium text-amber-800 border-2 rounded-md border-amber-900 py-2 px-5">
                                Sign up now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar