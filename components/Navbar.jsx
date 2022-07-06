import Link from "next/link"

const Navbar = () => {
  return (
    <>
    <nav>
        {/* <a href="/"></a> */}
        <Link href='/'>Home</Link>
        <Link href='/about'>About</Link>
        <Link href='/contact'>Contact</Link>
    </nav>
    </>

);
};

export default Navbar