import Header from "../components/Header";
import Footer from "../components/Footer";
import ListCocktails from "../components/ListCocktails";

const Cocktails = () => {
  // faire un appel fetch pour récupérer sur l'api les cocktails
  // les afficher dans mon rendu jsx

  return (
    <>
      <Header />
      <main>
        <h1>Cocktails</h1>
        <ListCocktails />
      </main>
      <Footer />
    </>
  );
};

export default Cocktails;
