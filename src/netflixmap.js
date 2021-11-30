import "./netflix.css"

const filmFeed =[
    {
        image:"/images/fate.png",
        link:"https://www.netflix.com/watch/80235274",
        myUseMap:"#map1",
        myMap:"map1"
    },
    {
        image:"/images/outsidethewire.png",
        link:"https://www.netflix.com/watch/81074110",
        myUseMap:"#map2",
        myMap:"map2"
    },
    {
        image:"/images/startrek.png",
        link:"https://www.netflix.com/watch/70177765",
        myUseMap:"#map3",
        myMap:"map3"
    },
    {
        image:"/images/queensgambit.png",
        link:"https://www.netflix.com/watch/80243261",
        myUseMap:"#map4",
        myMap:"map4"
    },
    {
        image:"/images/witcher.png",
        link:"https://www.netflix.com/watch/80189599",
        myUseMap:"#map5",
        myMap:"map5"
    }
]

const films = filmFeed.map(film => {
    return <Story image = {film.image} link = {film.link} text = {film.text} myUseMap = {film.myUseMap} myMap = {film.myMap} /> });

function App() {
  return ( 
  <div className="App">
    <h1>Popular on Netflix</h1>
  <div className="divBox">
    {films}
   </div>
  </div>
  )
};




function Story(inputInfo) {
    const newLocal = <area shape="rect" coords="0,0,400,379" alt="Computer" href={inputInfo.link}></area>;
  return (
    <div className="border">
          <img src={inputInfo.image} useMap={inputInfo.myUseMap} width="250" height="480" alt=""/>
        
            <map name={inputInfo.myMap}>
             {newLocal}
            </map>
    </div>
  )
}



export default App
