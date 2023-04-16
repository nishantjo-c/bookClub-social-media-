import navbarCSS from './navbar.module.css';

function Navbar(){
    return (
    <div>
        <nav>
            <ul>
                <li><a href='#'>home</a></li>
                <li><a href='#'>books</a></li>
                <li><a href='#'>groups</a></li>
                {/* <li><a href='#'>discussion</a></li> */}
                <li>
                    <input type="text" id="search-box" name="q" placeholder='search'/>
                </li>
                <li><a href='#'>profile</a></li>
            </ul>
        </nav>
    </div>
    );
}

export default Navbar;