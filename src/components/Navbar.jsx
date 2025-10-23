import Logo from '../../public/images/nav-logo.svg'
const Navbar = () => {
    return (
        <nav className='fixed top-0 left-0 z-50 md:p-9 p-3'>
            <img src={Logo} alt="Logo" className='md:w-24 w-20' />
        </nav>
    )
}

export default Navbar
Navbar