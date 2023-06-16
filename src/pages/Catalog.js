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
      {/* <section className="svg">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#013220" fillOpacity="1" d="M0,128L21.8,154.7C43.6,181,87,235,131,240C174.5,245,218,203,262,197.3C305.5,192,349,224,393,229.3C436.4,235,480,213,524,186.7C567.3,160,611,128,655,106.7C698.2,85,742,75,785,90.7C829.1,107,873,149,916,170.7C960,192,1004,192,1047,165.3C1090.9,139,1135,85,1178,96C1221.8,107,1265,181,1309,192C1352.7,203,1396,149,1418,122.7L1440,96L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"></path>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#013220" fillOpacity="1" d="M0,128L21.8,154.7C43.6,181,87,235,131,240C174.5,245,218,203,262,197.3C305.5,192,349,224,393,229.3C436.4,235,480,213,524,186.7C567.3,160,611,128,655,106.7C698.2,85,742,75,785,90.7C829.1,107,873,149,916,170.7C960,192,1004,192,1047,165.3C1090.9,139,1135,85,1178,96C1221.8,107,1265,181,1309,192C1352.7,203,1396,149,1418,122.7L1440,96L1440,0L1418.2,0C1396.4,0,1353,0,1309,0C1265.5,0,1222,0,1178,0C1134.5,0,1091,0,1047,0C1003.6,0,960,0,916,0C872.7,0,829,0,785,0C741.8,0,698,0,655,0C610.9,0,567,0,524,0C480,0,436,0,393,0C349.1,0,305,0,262,0C218.2,0,175,0,131,0C87.3,0,44,0,22,0L0,0Z"></path>
        </svg>
      </section> */}
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