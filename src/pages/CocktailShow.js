import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const CocktailShow = () => {
  const { id } = useParams();

  const [cocktail, setCocktail] = useState({});

  useEffect(() => {
    (async () => {
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
      const data = await response.json();
      setCocktail(data.drinks[0]);
    })();
  }, [id]);

  return (
    <>
      <Header />
      <main>
        <h1> Détail du cocktail</h1>
        {cocktail && (
          <div>
            <h2>{cocktail.strDrink}</h2>
            <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
            <p>{cocktail.strInstructions}</p>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
};

export default CocktailShow;
