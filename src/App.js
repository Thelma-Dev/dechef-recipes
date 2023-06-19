import './style/index.css';
import { Routes, Route } from 'react-router-dom';
import companyLogo from './media/companyLogo.png';
import Header from './components/Header';
import Footer from './components/Footer';
import Catalog from './pages/Catalog';
import NewRecipe from './pages/NewRecipe';
import Details from './pages/Details';
import NotFound from './pages/NotFound';
import { useState } from 'react';



function App() {
  let footerAltText = "Company logo";
  let facebookLogo = <i className="fa-brands fa-facebook"></i>;
  let instagramLogo = <i className="fa-brands fa-instagram"></i>;
  let twitterLogo = <i className="fa-brands fa-twitter"></i>;
  let developer = 'Thelma Osifo';

  const [show,setShow] = useState(true);


  const hideHeader = () => {
    setShow(false);
  }

  const showHeader = () => {
    setShow(true);
  }
  

  return (
    <>
      {show&&<Header/>}
      <main>
        <Routes>
          <Route exact path='/' element={<Catalog />} />
          <Route exact path='/recipe/new' element={<NewRecipe />}/>
          <Route exact path='/recipe/:name' element={<Details />}/>
          <Route exact path='*' element={<NotFound hideHeader={hideHeader} showHeader={showHeader} />}/>
        </Routes> 
        {show&&<Footer
          url = {companyLogo}
          altText = {footerAltText}
          facebookLogo = {facebookLogo}
          instagramLogo = {instagramLogo}
          twitterLogo = {twitterLogo}
          developer = {developer}
        />}
      </main> 
    </>
  );
}

export default App;
