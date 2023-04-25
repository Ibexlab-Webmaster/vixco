import React from "react";
import Image from "next/image";
import Link from "next/link";
import close from "../../public/assets/images/menu-close.svg";
import styles from './menu.module.css'
import { CSSTransition } from 'react-transition-group';

const MenuModal = ({ isOpen, onClose }) => {


    return (

        <CSSTransition
            in={isOpen}
            timeout={100}
            classNames={{
                enter: styles.menuModalEnter,
                enterActive: styles.menuModalEnterActive,
                exit: styles.menuModalExit,
                exitActive: styles.menuModalExitActive,
            }}
            unmountOnExit
        >
            <div className={`${styles.menuModal} fixed inset-0 bg-white z-20`}>
                {/* Rest of the MenuModal content */}
                <div className="w-full mx-auto flex flex-col h-screen">
                    <div className="flex justify-end pt-9 px-6">
                        <Image src={close} alt="close" onClick={onClose} className="w-[32px] h-[32px]" />
                    </div>
                    <nav className="flex flex-col items-center justify-center mt-10">
                        {/* Add your menu items here */}
                        <Link href={"/"} className="p-2 font-PoppinsMedium text-md-regular text-tonal-600" onClick={onClose}>
                            Home
                        </Link>
                        <Link href={"/#about"} className="p-2 font-PoppinsMedium text-md-regular text-tonal-600" onClick={onClose}>
                            About
                        </Link>
                        <Link href={"/#advantages"} className="p-2 font-PoppinsMedium text-md-regular text-tonal-600" onClick={onClose}>
                            Advantages
                        </Link>
                        <Link href={"/#vixpay"} className="p-2 font-PoppinsMedium text-md-regular text-tonal-600" onClick={onClose}>
                            Vixpay
                        </Link>
                        <Link href={"/#solution"} className="p-2 font-PoppinsMedium text-md-regular text-tonal-600" onClick={onClose}>
                            Solution
                        </Link>
                        <Link href={"/#token"} className="p-2 font-PoppinsMedium text-md-regular text-tonal-600" onClick={onClose}>
                            VIXCO Token
                        </Link>
                        <Link href={"/#roadmap"} className="p-2 font-PoppinsMedium text-md-regular text-tonal-600" onClick={onClose}>
                            RoadMap
                        </Link>
                        <Link href={"/notice"} className="p-2 font-PoppinsMedium text-md-regular text-tonal-600" onClick={onClose}>
                            Notice
                        </Link>
                        <Link href={"/#vixpay"} className="p-2 font-PoppinsMedium text-md-regular text-tonal-600" onClick={onClose}>
                            Block scan
                        </Link>
                        {/* Add more menu items as needed */}
                    </nav>
                </div>
            </div>
        </CSSTransition>
    );
};

export default MenuModal;
