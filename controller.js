function getRandom(min, max){
 return Math.floor(Math.random() * (max - min +1) + min);
}

function runAway(){
    // document.getElementById("enemy").innerHTML = ''
    // document.getElementById("actions").innerHTML = `
    // <div id="specificActions">
    //         </div>
    //         <div id="broadActions">
    //         <button onclick="getNewEnemy()">Get new enemy!</button>
    //         </div>
    // `
    updateView()
}
function showItems(){
    if(model.app.currentEnemy == 0){
        document.getElementById("specificActions") = `
            
        `
    }
    else {
        document.getElementById("specificActions") = `
        <div class="grid">
            
        </div>
        `
    }
}