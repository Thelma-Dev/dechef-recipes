import './style/index.css';
import { Routes, Route } from 'react-router-dom';
import companyLogo from './media/favicon.png';
import Header from './components/Header';
import Footer from './components/Footer';
import Catalog from './pages/Catalog';
import NewRecipe from './pages/NewRecipe';
import Details from './pages/Details';


function App() {
  let footerAltText = "Company logo";
  let facebookLogo = <i className="fa-brands fa-facebook"></i>;
  let instagramLogo = <i className="fa-brands fa-instagram"></i>;
  let twitterLogo = <i className="fa-brands fa-twitter"></i>;
  let developer = 'Thelma Osifo';
  return (
    <>
    <Header/>
    <main>
    <Routes>
      <Route exact path='/' element={<Catalog />} />
      <Route exact path='/recipe/new' element={<NewRecipe />}/>
      <Route exact path='/details/:name' element={<Details />}/>
    </Routes> 
    <Footer
          url = {companyLogo}
          altText = {footerAltText}
          facebookLogo = {facebookLogo}
          instagramLogo = {instagramLogo}
          twitterLogo = {twitterLogo}
          developer = {developer}
          />
    </main>
    </>
  );
}

export default App;
