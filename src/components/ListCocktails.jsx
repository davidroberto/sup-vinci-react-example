import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ListCocktails = () => {
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita");
      const data = await response.json();
      setCocktails(data.drinks);
    })();
  }, []);

  return (
    <div>
      {cocktails.map((cocktail) => {
        return (
          <div key={cocktail.idDrink}>
            <Link to={"/cocktails/" + cocktail.idDrink}>
              <h2>{cocktail.strDrink}</h2>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default ListCocktails;
