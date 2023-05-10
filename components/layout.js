import Header from "./header";
import Footer from "./footer";
import Reviews from "./reviews";
import Pricing from "./pricing";
import Discount from "./discount";
import { Steps } from "./steps";
import Portfolio from "./portfolio";
import Popup from "./items/popup";
import Faq from "./faq";
import Definition from "./definion";
import Starter from "./starter";

export default function Layout(props) {
  return (
    <div className="scroll-smooth ">
      <Popup />
      <Starter />
      <Definition />
      <Portfolio />
      <Steps />
      <Reviews />
      <Discount />
      <Pricing />
      <Faq />
      <Footer />
    </div>
  );
}
