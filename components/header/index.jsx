import Image from "next/image"
import Link from "next/link"
import korzinka from "../../public/korzinka.png"
const Header = () => {
  return (
    <div className="container mx-auto ">
<nav className="flex justify-between  text-yellow-300 items-center mt-10 p-4 rounded-2xl   ">
  <Link className="text-3xl logo" href="#">Vodiy Parfum</Link>
  <ul className="flex items-center gap-6">
    <li>
      <Link href="#">Asosiy</Link>
    </li> 
    
     <li>
      <Link href="#">Biz haqimizda</Link>
    </li> 
    
     <li>
      <Link href="#">Aloqa</Link>
    </li> 
    
     <li>
      <Link href="#">Buyurtmalar tarixi</Link>
    </li> 
    
     <li>
      <Link href="#">Chiqish</Link>
    </li> 
       <li className="korzinka p-2 rounded-2xl">
      <Link href="#">
      <Image
      src={korzinka}
      alt="korzinka"
      width={50}
      height={50}
    />
      </Link>
    </li>


  </ul>
</nav>
    </div>
  )
}

export default Header