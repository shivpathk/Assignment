import Navbar from "@/Components/navbar/navbar";
import Home from "@/Components/home/home";
import Address from "@/Components/address/address";
import About from "@/Components/about/about";
import Sandesh from "@/Components/sandesh/Sandesh";
import Register from "@/Components/Register/register";
import Sanyojak from "@/Components/sanyojak/sanyojak";
import Footer from "@/Components/footer/footer";

export default function Page() {
  return (
    <div>
      <Navbar />
      <Home />
      <Address />
      <About/>
      <Sandesh/>
      <Register/>
      <Sanyojak/>
      <Footer/>
    </div>
  );
}
