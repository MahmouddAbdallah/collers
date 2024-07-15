import { LogoIcon } from "./icons"


const Footer = () => {
    return (
        <footer>
            <div className='p-container '>
                <div className="py-4 flex justify-between items-center">
                    <div className='flex items-center gap-3'>
                        <a href="/"><LogoIcon /></a>
                        <span className='hidden md:block'>@ 2023 collor, Inc. All rights reserved.</span>
                    </div>
                    <ul className='flex gap-3 py-0 my-0'>
                        <li>Terms</li>
                        <li>Privacy</li>
                        <li>Support</li>
                    </ul>
                </div>
                <div className='border-t md:hidden'>
                    <p>@ 2023 collor, Inc. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer