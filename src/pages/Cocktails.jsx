import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Cocktails = () => {
  // faire un appel fetch pour récupérer sur l'api les cocktails
  // les afficher dans mon rendu jsx

  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita");
      const data = await response.json();
      setCocktails(data.drinks);
    })();
  }, []);

  return (
    <>
      <Header />
      <main>
        <h1>Cocktails</h1>
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
      </main>
      <Footer />
    </>
  );
};

export default Cocktails;
