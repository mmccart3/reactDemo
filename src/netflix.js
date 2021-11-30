import "./netflix.css"



function App() {
  return ( 
  <div className="App">
    <h1>Popular on Netflix</h1>
  <div className="divBox">
    <Story image = "/images/fate.png" link ="https://www.bbc.co.uk/sport/football/59439956" text ="Man Utd appoint Rangnick until end of season" myUseMap="#map1" myMap="map1"/>
    <Story image = "/images/outsidethewire.png" link ="https://www.bbc.co.uk/sport/boxing/59443132" text ="Khan and Brook announce February fight - then pulled apart by security" myUseMap="#map2" myMap="map2"/>
    <Story image = "/images/startrek.png" link ="https://www.bbc.co.uk/sport/snooker/59457433" text ="Williams falls asleep during UK Championship defeat" myUseMap="#map3" myMap="map3" />
    <Story image = "/images/queensgambit.png" link ="https://www.bbc.co.uk/sport/cricket/59460060" text ="Last-wicket pair deny India as New Zealand secure thrilling draw" myUseMap="#map4" myMap="map4" />
    <Story image = "/images/witcher.png" link ="https://www.bbc.co.uk/news/world-africa-59458460" text ="Pistorius to meet victim's parents before parole decision" myUseMap="#map5" myMap="map5" />
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
