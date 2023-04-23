import navbarCSS from './styles/navbar.module.css';


function Navbar( {search, setSearch} ){

    return (
    <div>
        <nav>
            <ul>
                <li><a href='#'>home</a></li>
                <li><a href='#'>books</a></li>
                <li><a href='#'>groups</a></li>
                <li>
                    <input 
                        type="text" 
                        placeholder='search'
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        />
                </li>
                <li><a href='#'>profile</a></li>
            </ul>
        </nav>
    </div>
    );
}

export default Navbar;