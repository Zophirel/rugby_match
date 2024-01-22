(() => {
    var request = new XMLHttpRequest();
    request.open("GET", "../assets/matches.json", false);
    request.send(null)
    var allRugbyMatches = JSON.parse(request.responseText);
    console.log(allRugbyMatches);
    let main = document.getElementsByTagName("main");
    console.log(main);
    console.log(allRugbyMatches.data[0]);
    
    for(i = 0; i < allRugbyMatches.data.length; i++){
        
        let date = document.createElement("div");
        date.className = "date";
        date.innerHTML = allRugbyMatches.data[i].date.toUpperCase();
        main[0].append(date);

        console.log(allRugbyMatches.data[i].matches);
        
        for(j = 0; j < allRugbyMatches.data[i].matches.length; j++){
            console.log("match");
            console.log(allRugbyMatches.data[i].matches);
            let card = document.createElement("div");
            let firstTeam = allRugbyMatches.data[i].matches[j].teams[0];
            let secondTeam = allRugbyMatches.data[i].matches[j].teams[1];
            console.log(firstTeam.logo);
            console.log(secondTeam.logo);
            card.className = "card";
            card.style.background = `linear-gradient(90deg, rgba(${firstTeam.color},1) 0%, rgba(105,47,142,1) 49%, rgba(106,17,104,1) 50%, rgba(${secondTeam.color},1) 100%)`;
            card.innerHTML = 
            `
            <div id="cardHeader">
                <span>${allRugbyMatches.data[i].matches[j].type.toUpperCase()}</span>
            </div>
            <div id="firstTeam">
                <div id="firstTeamInfo">
                    <div class="team">
                        <img src="assets/img/${firstTeam.logo}" id="firstTeamIcon"></img>
                        <div class="position">
                            <span>${firstTeam.conference}</span><p>${firstTeam.position}</p>
                        </div>
                    </div>
                    <span id = "firstTeamName">${firstTeam.name.toUpperCase()}</span>
                    <div class="mobileElments">
                        <div class="firstTeamPoints">
                            <h1>${firstTeam.score}</h1>
                        </div>
                        <p id = "firstTeamName">${firstTeam.name}</p>
                        <div  id="mobile" class="position">
                            <span>${firstTeam.conference}</span><p>${firstTeam.position}</p>
                        </div>
                    </div>  
                
                </div>
            </div>

            <img src="assets/img/united-rugby-copy.png" class="league">
            <div id="secondTeam">
                <div id="secondTeamInfo">
                    <div class="team">
                        <img src="assets/img/${secondTeam.logo}" id="secondTeamIcon"></img>
                        <div class="position">
                            <p>${secondTeam.position}</p><span>${secondTeam.conference}</span>
                        </div>
                    </div>
                    <span id = "secondTeamName">EMIRATES</span>
                    <div class="mobileElments">
                        <div class="secondTeamPoints">
                            <h1>${secondTeam.score}</h1>
                        </div>
                        <p id = "secondTeamName">${secondTeam.name.toUpperCase()}</p>
                        <div  id="mobile" class="position">
                            <p>${secondTeam.position}</p><span>${secondTeam.conference}</span>
                        </div>
                    </div>   
                </div>
                <p class="stadium">${allRugbyMatches.data[i].matches[j].place}</p>       
            </div>  
            `

           console.log(card.children);
            card.children[1].style.background = `linear-gradient(90deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 50%),  url("../assets/img/${firstTeam.themeImage}.png")`;
            card.children[3].style.background = `linear-gradient(90deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 50%),  url("../assets/img/${secondTeam.themeImage}.png")`;
            main[0].append(card);
        }
    }
})();

