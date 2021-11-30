import "./BBC.css"



function App() {
  return ( 
  <div>
    <h1>BBC Sport News</h1>
  <div className="divBox">
    <Story image = "/images/ragnick.jpg" link ="https://www.bbc.co.uk/sport/football/59439956" text ="Man Utd appoint Rangnick until end of season" myUseMap="#map1" myMap="map1"/>
    <Story image = "/images/brook_khan.png" link ="https://www.bbc.co.uk/sport/boxing/59443132" text ="Khan and Brook announce February fight - then pulled apart by security" myUseMap="#map2" myMap="map2"/>
    <Story image = "/images/markwilliams.jpg" link ="https://www.bbc.co.uk/sport/snooker/59457433" text ="Williams falls asleep during UK Championship defeat" myUseMap="#map3" myMap="map3" />
    <Story image = "/images/indiavnz.jpg" link ="https://www.bbc.co.uk/sport/cricket/59460060" text ="Last-wicket pair deny India as New Zealand secure thrilling draw" myUseMap="#map4" myMap="map4" />
    <Story image = "/images/reeva.jpg" link ="https://www.bbc.co.uk/news/world-africa-59458460" text ="Pistorius to meet victim's parents before parole decision" myUseMap="#map5" myMap="map5" />
    <Story image = "/images/djokovic.jpg" link ="https://www.bbc.co.uk/sport/tennis/59458511" text ="Djokovic 'probably won't' defend Australian Open title, says father" myUseMap="#map6" myMap="map6" />
  </div>
  </div>
  )
};




function Story(inputInfo) {
    const newLocal = <area shape="rect" coords="0,0,400,379" alt="Computer" href={inputInfo.link}></area>;
  return (
    <div className="border">
          <img src={inputInfo.image} useMap={inputInfo.myUseMap} width="400" height="379" alt=""/>
        <a href={inputInfo.link}>{inputInfo.text}</a>
            <map name={inputInfo.myMap}>
             {newLocal}
            </map>
    </div>
  )
}



export default App
