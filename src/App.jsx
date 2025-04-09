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


  return (
    <>
      <h1>Ecco il tuo carrello</h1>

      <ul>
        {articles.map(article => <li key={article.id}>{article.title}</li>)}
      </ul>

      <form onSubmit={addArticle}>
        <input
          type="text"
          value={newArticle}
          onChange={event => { setNewArticle(event.target.value) }} />
        <button>Aggiungi nuovo articolo</button>
      </form >
    </>
  )
}

export default App
