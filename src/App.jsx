import "./App.css";
import Header from "./component/Header";
import MainContent from "./component/MainContent";
import ProductSection from "./component/Product";
import Footer from "./component/Footer";
import FAQ from "./component/FAQ";


function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <ProductSection />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
