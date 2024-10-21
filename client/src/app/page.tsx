import Image from "next/image"
import Navbar from '../components/Navbar'
import Header from "imp/components/Header";
import CurrencyRates from "imp/components/CurrencyRates";

export default function Home() {
  return (
    <main>
      <Header />

      <CurrencyRates />
    </main>
  );
}
