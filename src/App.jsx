//importo l'array come modulo
import articles from "./data/articoli"



function App() {


  return (
    <>
      <h1>Benvenuto allo shop</h1>
      <ul>
        {articles.map(article => <li key={article.id}>{article.title}</li>)}
      </ul>
    </>
  )
}

export default App
