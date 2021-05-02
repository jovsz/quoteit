import React, { useState, useEffect, useRef } from "react";



const ContainerQoute = () => {
  const [quotes, setQuotes] = useState('');
  const changeColor = useRef();

  const backgroundColors = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
  '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
  '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
  '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
  '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
  '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
  '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
  '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
  '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
  '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF']
  
  /*Genera el Array de las frases*/
  const getQuote = () => {
    fetch("https://raw.githubusercontent.com/jovsz/quotes/main/quotes.json")
    .then(res => res.json())
    .then((data) => {
      let mixNum = Math.floor(Math.random() * data.length);
      setQuotes(data[mixNum]);
    });
  };

  /*Se utilizar useEffect para inicializar con una fase al cargar la aplicacion*/
  useEffect(()=> {
    getQuote();
  }, []);

  /**/
  useRef(() => {
    changeColor.current.style.color = backgroundColors[Math.floor(Math.random * backgroundColors.length)]
  }, [quotes])

  function authorStyle(authorContent){
    if(authorContent){
      return '-'+authorContent;
    }else{
      return '';
    } 
  }

  /*Se crea el contenedor de las frases*/
  return (
    <div  ref={changeColor} className="background">
      <div className = "card">
      <div className = "container-quote" >
        <p >{quotes.quote}</p>
      </div>
      <div className="author-container">
        <p>{authorStyle(quotes.author)}</p>
      </div>
      <div className="buttons">
        <a href={`https://twitter.com/intent/tweet?text=${quotes.quote + ' Author: ' + quotes.author}`} target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter"></i></a>
        <button onClick= {getQuote}><i class="fas fa-book"></i></button>
      </div>
      </div>
    </div>
    
  );
}

export default ContainerQoute