import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useCallback, useState } from "react";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import axios from 'axios';

function Details() {
  const routeParams = useParams();
  const[selectedMeal, setSelectedMeal] = useState([]);
  const navigate = useNavigate();

  const navigateToNotFoundPage = () => {
    navigate('*');
  };
  
  const getMealDetails = useCallback(async () => {

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${routeParams.name}`;

    axios
    .get(url)
    .then((res) => {
      setSelectedMeal(...res.data.meals);
    })
    .catch((error) => {
      navigateToNotFoundPage();
        console.log(error.message);
    }); 
    
  },[routeParams]);


  useEffect(() => {
    getMealDetails();
    window.scrollTo(0,0);
  },[getMealDetails])


  return (
    <section className="details-page">
      <HelmetProvider>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{selectedMeal.strMeal}</title>
        </Helmet>
      </HelmetProvider>
      <div className="container meal-details">
        <div className='meal-info'>
          <div className="meal-image">
            <img src={selectedMeal.strMealThumb} alt={selectedMeal.strMeal}/>
          </div>
          <div className="details">
            <h3 className='details-title'>{selectedMeal.strMeal}</h3>
            <p className='details-area'><i className="fa-solid fa-circle"></i> {selectedMeal.strArea} cusine</p>
            <div className='details-video'>
              <a href='#!'className='watch-video' >Watch Video</a>
            </div>
          </div>
        </div>
        <div className='ingredients'>
          <h3 className='details-title'>Ingredients</h3>
          <ul>
            <li>{selectedMeal.strMeasure1 } {selectedMeal.strIngredient1}</li>
            <li>{selectedMeal.strMeasure2 } {selectedMeal.strIngredient2}</li>
            <li>{selectedMeal.strMeasure3 } {selectedMeal.strIngredient3}</li>
            <li>{selectedMeal.strMeasure4 } {selectedMeal.strIngredient4}</li>
            <li>{selectedMeal.strMeasure5 } {selectedMeal.strIngredient5}</li>
            <li>{selectedMeal.strMeasure6 } {selectedMeal.strIngredient6}</li>
            <li>{selectedMeal.strMeasure7 } {selectedMeal.strIngredient7}</li>
            <li>{selectedMeal.strMeasure8 } {selectedMeal.strIngredient8}</li>
            <li>{selectedMeal.strMeasure9 } {selectedMeal.strIngredient9}</li>
            <li>{selectedMeal.strMeasure10 } {selectedMeal.strIngredient10}</li>
            <li>{selectedMeal.strMeasure11 } {selectedMeal.strIngredient11}</li>
            <li>{selectedMeal.strMeasure12 } {selectedMeal.strIngredient12}</li>
            <li>{selectedMeal.strMeasure13 } {selectedMeal.strIngredient13}</li>
            <li>{selectedMeal.strMeasure14 } {selectedMeal.strIngredient14}</li>
            <li>{selectedMeal.strMeasure15 } {selectedMeal.strIngredient15}</li>
            <li>{selectedMeal.strMeasure16 } {selectedMeal.strIngredient16}</li>
            <li>{selectedMeal.strMeasure17 } {selectedMeal.strIngredient17}</li>
          </ul>
        </div>
        <div className='instructions'>
          <h3 className='details-title'>Directions</h3>
            <article>
              <p>{selectedMeal.strInstructions}</p>
            </article>
        </div>
      </div>
    </section>
  )
}

export default Details;