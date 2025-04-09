//importo l'array come modulo
import articlesData from "./data/articoli"
//importo useState
import { useState } from "react"


function App() {
  //creo una variabile dove salvo il valore di partenza, ovvero l'array che ho importato
  const [articles, setArticles] = useState(articlesData);

  //creo una variabile dove salverò i valori dell'elemento aggiunto dall'input
  const [newArticle, setNewArticle] = useState('');

  //creo una funzione per gestire l'aggiunta di un nuovo articolo alla lista e il preventDefault

  const addArticle = event => {
    event.preventDefault();
    console.log('Ho inviato il nuovo dato');

    //creo una variabile dove salverò il valore dell'id da assegnare al nuovo articolo che avrà come valore il valore dell'id dell'ultimo oggetto + 1
    let newId = (parseInt(articles[articles.length - 1].id)) + 1;

    //creo un nuovo oggetto con chiavi: id e title, nella chiave id newId verrà convertito in stringa e uso il metodo toString()
    const newArticleElement = {
      id: newId.toString(),
      title: newArticle
    }

    //vado a prendere la funzione setArticles e con l'uso dello spread operator, vado ad aggiungere al nuovo array: tutto il contenuto dell'array di partenza e il nuovo elemento
    setArticles([...articles, newArticleElement]);

    //al caricamento del nuovo articolo, vado a "svuotare" il campo di input
    setNewArticle('');
  }


  //creo una nuova funzione per cancellare un articolo dalla lista
  const removeArticle = i => {
    const updatedArticleList = articles.filter((article, index) => {
      return index !== i
    })
    //carico la nuova lista aggiornata con l'elemento/i mancante/i
    setArticles(updatedArticleList);
  }

  return (
    <>
      <h1>Ecco il tuo carrello<i className="fa-solid fa-cart-shopping mx-3"></i></h1>

      <ul className="nav flex-column gap-3 my-5 col-4">
        {articles.map((article, i) =>
          //aggiungo l'evento onClick dove aggiungerò la funzione per rimuovere elementi
          (<li className="d-flex justify-content-between fs-4" key={i}>{article.title}<button className="btn btn-danger" onClick={() => removeArticle(i)}><i className="fa-solid fa-trash-can"></i></button></li>))}
      </ul>

      <form onSubmit={addArticle}>
        <input className="border border-success mx-2 p-1"
          type="text"
          value={newArticle}
          onChange={event => { setNewArticle(event.target.value) }} />
        <button className="btn btn-success">Aggiungi nuovo articolo</button>
      </form >
    </>
  )
}

export default App
