import React from "react";
import "./cardSection.css";

const CardSection = ({ data }) => {

console.log(data)

const datos = data.results ? data.results.data ? data.results.data ? data.results.data  : '' : '' : ''

const datosMapeados = datos.length > 0 && datos.map((e) => {
  return e
})
console.log(datosMapeados)

let datosMapeados2 = datosMapeados.length > 0 && datosMapeados.map((article) => {
  return article
})

let datosMapeadosSlice = datosMapeados2.length > 0 && datosMapeados2.slice(datosMapeados2.length-4)
 console.log('datosMapeadosSlice', datosMapeadosSlice)     

  return (
    <>
      <div className="title-card">
        <div className="sub-title-card">
          Latest Articles
        </div>
        <button> + Add new article</button>
      </div>
      <div className="card-container">
      {datosMapeadosSlice.length > 0 && datosMapeadosSlice.map((articles => {
        return (
            <div className="cards">
             <div className="container">
              <img className="cardImage" src={articles?articles.image_url : ''}/>
              <p className="cardAutor">by {articles?articles.author : ''}</p>
              <div className="cardTitle">{articles?articles.title : ''}</div>
              <div className="cardDescription">{articles?articles.content : ''}</div> 
            </div>
            </div>
          )
       }))}
       </div>
    </>
  )
}

export default CardSection;
