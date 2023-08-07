import Image from "next/image";
import Link from "next/link";
import telegram from "../../public/telegram.png"
import instagram from "../../public/instagram.png"
import facebook from "../../public/facebook.png"
import youtobe from "../../public/youtobe.png"
const Footer = () => {
  return (
    <div className="container footContent mt-10 mb-2 p-8 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between">
      <ul className="card  mx-auto" >
        <h2 className="text-yellow-300 text-3xl">
        Biz haqimizda
        </h2>
       <div className="flex gap-2 pt-4">

          <Link href="#">
            <Image src={telegram} alt="rasm" width={40} height={40}/>
          </Link>
      
      
          <Link href="#"> <Image src={instagram} alt="rasm" width={40} height={40}/></Link>
      
      
          <Link href="#"> <Image src={facebook} alt="rasm" width={40} height={40}/></Link>
      
      
          <Link href="#"> <Image src={youtobe} alt="rasm" width={40} height={40}/></Link>
       </div>
      </ul>

      <ul className="text-left text-yellow-300 mx-auto">
        <h2 className="text-3xl pb-4">
Biz bilan aloqa
        </h2>
        <li>
         {` Farg'ona viloyati,Qo'qon tumani`}
        </li>
        <li>
          +998901859499
        </li>
      </ul>

      <ul className="text-yellow-300 mx-auto">
        <h2 className="text-3xl ">Yangiliklar</h2>
      </ul>
    </div>
  );
};

export default Footer;
