
"use client"

import { TiHome } from "react-icons/ti"
import { IoDocumentText, IoPerson, IoCart } from "react-icons/io5"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { RootState } from "@/app/store"

const NavigationBar = () => {

    const [homeActive, setHome] = useState<boolean>(true);
    const [menuActive, setMenu] = useState<boolean>(false);
    const [profileActive, setProfile] = useState<boolean>(false);
    const [cartActive, setCart] = useState<boolean>(false);
    const [cartCount, setCount] = useState<number>(0)

    const items = useSelector((state: RootState) => state.cart.items);

    useEffect(() => {
        if (!!items && items[0].id !== 0)
            setCount(items.length)
    }, [items])


    const handleClick = (id: string) => {
        switch (id) {
            case 'home':
                setHome(true)
                setProfile(false)
                setMenu(false)
                setCart(false)
                break;
            case 'menu':
                setHome(false)
                setProfile(false)
                setMenu(true)
                setCart(false)
                break;
            case 'profile':
                setHome(false)
                setProfile(true)
                setMenu(false)
                setCart(false)
                break;
            case 'cart':
                setHome(false)
                setProfile(false)
                setMenu(false)
                setCart(true)
                break;
            default:
                break;
        }
    }

    return (
        <div className="fixed bg-gray-300 bottom-0 w-full left-0 flex align-text-top justify-around py-2 text-center">
            <Link onClick={() => handleClick('home')} href='/'
                className={homeActive ? 'text-green-500' : 'text-gray-500'}>
                <TiHome style={{ marginLeft: '5px' }} size={20} />
                <span className="font-bold text-xs">Home</span>
            </Link>
            <Link onClick={() => handleClick('menu')} href='/menu'
                className={menuActive ? 'text-green-600' : 'text-gray-500'}>
                <IoDocumentText style={{ marginLeft: '5px' }} size={20} />
                <span className="font-bold text-xs">Menu</span>
            </Link>
            <Link onClick={() => handleClick('cart')} href='/cart'
                className={cartActive ? 'text-green-600' : 'text-gray-500'}>
                <IoCart style={{ marginLeft: '2px' }} size={20} />
                <span className="font-bold text-xs ">Cart { items[0].id !== 0 ? `(${cartCount})` : ''}</span>
            </Link>
            <Link onClick={() => handleClick('profile')} href=''
                className={profileActive ? 'text-green-600' : 'text-gray-500'}>
                <IoPerson style={{ marginLeft: '6px' }} size={20} />
                <span className="font-bold text-xs">Profile</span>
            </Link>
        </div>
    )
}

export default NavigationBar
