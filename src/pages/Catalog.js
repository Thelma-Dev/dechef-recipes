import { useEffect, useState } from "react";
import { useNavigate} from 'react-router-dom';
import axios from "axios";


function Catalog() {
  const [catalogList, setCatalog] = useState([]);
  const navigate = useNavigate();

  const handleClick = (id) => {
    const mealSelected = catalogList.find(meal => meal.idMeal === id);
    navigate('/recipe/' + mealSelected.strMeal, {state: {meal:mealSelected}} );
  };


  const getCatalog = async () => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=chicken`;

    axios
    .get(url)
    .then((res) => {
      setCatalog(res.data.meals);
    })
    .catch((error) => {
        console.log(error.message);
    });
  };

  useEffect(() => {
    getCatalog();
  }, [])

  const handleNewRecipe = () => {
    navigate('/recipe/new');
  };

  const handleSortingMethod = (event) => {
    const sortMethod = event.target.value;
    const copyArray = [...catalogList]; 

    copyArray.sort((a, b) => {
      return sortMethod === "1" ? a.strMeal > b.strMeal ? 1 : -1 : a.strArea > b.strArea ? 1 : -1;
    });

    setCatalog(copyArray); 
  }


  return (
    <>
      <section className="hero-banner">
        <div className='banner'>
          <div className="hero-text">
            <h2>D&#233;Chef Recipes</h2>
            <p>
              No matter what culture, everywhere around the world, people eat together.
              You don't need a silver fork to eat good food
              Great recipe, delicious meal!
            </p>
            <button>Find a recipe</button>
          </div>
        </div>
      </section>
      <section className="catalog">
        <div className="container">
          <div className="section-heading">
            <h2>Our Cuisines</h2>
            <p>Cooking is like painting or writing a song. Just as there are only so many notes or colors, 
              there are only so many flavors. It is how you combine them that sets you apart.
            </p>
          </div>
          <div className="buttons">
            <select className="sort" defaultValue={0} onChange={handleSortingMethod}>
              <option value={0} disabled>Sort By</option>
              <option value={1}>Meal Name</option>
              <option value={2}>Cuisine Type</option>
            </select>
            <button className="new-recipe" onClick={() => handleNewRecipe()}>Add Recipe</button>
          </div>
          <div className="catalog-display">
            {catalogList.map(meal => (
              <div className="meal" key={meal.idMeal}>
                  <img src={meal.strMealThumb} alt={meal.strMeal} 
                  onClick={() =>  handleClick(meal.idMeal)}
                  />
                  <div className="meal-info">
                      <p className="meal-name">{meal.strMeal}</p>
                      <p className="meal-area">{meal.strArea}</p>
                  </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Catalog;