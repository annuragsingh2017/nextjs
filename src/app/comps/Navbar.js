import Link from "next/link"

const Navbar = ()=>{
    return (
        <div>
      <nav>
        <Link href='/home'>  <li>
            Home
        </li></Link>
        <Link href='/about'> <li>
            About
        </li></Link>
        <Link href='/user'> <li>
            User
        </li></Link>
       
       
       
      </nav>
        </div>
    )
}
export default Navbar