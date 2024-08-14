updateView()
function updateView(){
document.getElementById("app").innerHTML = /*HTML*/ `
    <div id=container>
        <div class="boxes" id="enemyStats"></div>
        <div class="boxes" id="enemy"></div>
        <div class="boxes" id="me"></div>
        <div class="boxes" id="myStats"></div>
        <div class="boxes" id="actions">
            <div id="specificActions">
            </div>
            <div id="broadActions">
            <button onclick="getNewEnemy()">Get new enemy!</button>
            </div>
        </div>
    </div>
`
}
function getNewEnemy(){
    if (getRandom(1,2) == 1) {
        model.app.currentEnemy = getRandom(0,model.data.enemyTrainers.length-1);
        document.getElementById("enemy").innerHTML = `
            <img src="bilder/${model.data.enemyTrainers[model.app.currentEnemy].img}>
        `;
        trainerBattle();
    } else{
        model.app.currentEnemy = getRandom(0,model.data.wildPokemon.length-1);
        document.getElementById("enemy").innerHTML = `
        <img src="bilder/${model.data.wildPokemon[model.app.currentEnemy].img}>
    `;
        wildPokemon(model.data.wildPokemon[model.app.currentEnemy]);
    }
}

function trainerBattle(){
    document.getElementById("actions").innerHTML = `
        <div id="pokemonTrainer" onclick="startTrainerBattle()">You are challenged by Pokemon trainer ${model.data.enemyTrainers[model.app.currentEnemy].name}</div>
    `
}
function wildPokemon(pokemon){
    document.getElementById("actions").innerHTML = `
    <div id="pokemonTrainer" onclick="startWildBattle()">A wild ${pokemon.name} appeared</div>
    `
}
function startWildBattle(){
    document.getElementById("actions").innerHTML = `
    <div id="specificActions">
    
    </div>
    <div class="grid">
        <button id="gridArea1">Fight</button>
        <button id="gridArea2">Pokemon</button>
        <button id="gridArea3" onclick="showItems()">Item</button>
        <button id="gridArea4" onclick="runAway()">Run</button>
    </div>
    `
}
function startTrainerBattle(){
    let trainersCurrentPokemon = getRandom(0,2)
    document.getElementById("enemy").innerHTML = `
            <img src="bilder/${model.data.enemyTrainers[model.app.currentEnemy].pokemons[trainersCurrentPokemon].img}>
        `
    document.getElementById("actions").innerHTML = `
    <div id="specificActions">
    ${model.data.enemyTrainers[model.app.currentEnemy].name} chose ${model.data.enemyTrainers[model.app.currentEnemy].pokemons[trainersCurrentPokemon].name}
    </div>
    <div class="grid">
        <button id="gridArea1">Fight</button>
        <button id="gridArea2">Pokemon</button>
        <button id="gridArea3" onclick="showItems()">Item</button>
        <button id="gridArea4" onclick="runAway()">Run</button>
    </div>
    `
}