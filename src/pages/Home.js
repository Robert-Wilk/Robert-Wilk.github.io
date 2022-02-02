import Hero from "../components/home-page/Hero";
import Interests from "../components/home-page/interests-section/Interests";
import PortfolioPreview from "../components/home-page/portfolio-preview-section/PortfolioPreview";
export default function Home() {
  return (
    <div>
      <Hero />
      <Interests />
      <PortfolioPreview />
    </div>
  );
}
