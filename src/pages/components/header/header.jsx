import Home from "../home"


const Header = () => {
    return (
        <div className='flex bg-gray-600 justify-between items-center p-4'>
            <h1 className='text-white text-3xl font-bold'>My Website</h1>
            <nav className='flex space-x-4'>
                <a href="/" className='text-white hover:text-gray-300'>Home</a>
                <a href="/about" className='text-white hover:text-gray-300'>About</a>
                <a href="/blog" className='text-white hover:text-gray-300'>Blog</a>
                <a href="/contact" className='text-white hover:text-gray-300'>Contact</a>
                <a href="/projects" className='text-white hover:text-gray-300'>Projects</a>
            </nav>
        </div>
        
    
)
}

export default Header
