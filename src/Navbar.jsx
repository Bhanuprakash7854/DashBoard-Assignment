import './Navbar.css'

export default function Navbar({search,setSearch})
{
    return(
        <div id="navbar">
            <h1>Dashboard V2</h1>
            <div id="search-bar">
                <input type="text" placeholder='Search anything' value={search} onChange={(e)=>setSearch(e.target.value)}></input>
                <i className="fa-solid fa-magnifying-glass" id="search-icon"></i>
            </div>
            <a href='https://www.linkedin.com/in/bhanu-prakash7854/' id="contact">Contact Developer</a>
        </div>
    )
}