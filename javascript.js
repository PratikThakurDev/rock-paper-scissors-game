function getComputerChoice(){
    comp_ch=Math.floor(Math.random()*3)
    if (comp_ch===0) {   
        return "Rock"
    }
    else if (comp_ch===1){
        return "Paper"
    }
    else if (comp_ch===2){
        return "Scissors"
    }
}

function getHumanChoice(){
    let human_ch = prompt("Enter your choice {Rock, Paper, Scissors}")
    if (((human_ch.slice()).toUpperCase()) ==='ROCK') { 
        return 'Rock'
    }
    else if (((human_ch.slice()).toUpperCase()) ==='PAPER') {
        return "Paper"
    }
     else if (((human_ch.slice()).toUpperCase()) ==='SCISSORS') {
        return "Scissors"
    }
}

let humanscore=0
let computerscore=0

function playround(humanchoice,computerchoice){
    
    for (let i=0;i<5;i++){
        humanchoice = getHumanChoice()
        computerchoice = getComputerChoice()
        if (humanchoice==='Rock' && computerchoice==='Rock'){
            console.log(`Human choice : ${humanchoice} 
                \nComputer choice : ${computerchoice}
                \nResult is a draw!!
                \nHuman score : ${humanscore}\tComputer score : ${computerscore}`)

        }

        else if (humanchoice==='Rock' && computerchoice==='Paper'){
            computerscore+=1
            console.log(`Human choice : ${humanchoice} 
                \nComputer choice : ${computerchoice}
                \nResult is a win for Computer!!
                \nHuman score : ${humanscore}\tComputer score : ${computerscore}`)
        }

        else if (humanchoice==='Rock' && computerchoice==='Scissors'){
            humanscore+=1
            console.log(`Human choice : ${humanchoice} 
                \nComputer choice : ${computerchoice}
                \nResult is a win for Human!!
                \nHuman score : ${humanscore}\tComputer score : ${computerscore}`)
        }

        else if (humanchoice==='Paper' && computerchoice==='Rock'){
            humanscore+=1
            console.log(`Human choice : ${humanchoice} 
                \nComputer choice : ${computerchoice}
                \nResult is a win for Human!!
                \nHuman score : ${humanscore}\tComputer score : ${computerscore}`)
        }

        else if (humanchoice==='Paper' && computerchoice==='Paper'){
            console.log(`Human choice : ${humanchoice} 
                \nComputer choice : ${computerchoice}
                \nResult is a draw!!
                \nHuman score : ${humanscore}\tComputer score : ${computerscore}`)
        }

        else if (humanchoice==='Paper' && computerchoice==='Scissors'){
            computerscore+=1
            console.log(`Human choice : ${humanchoice} 
                \nComputer choice : ${computerchoice}
                \nResult is a win for Computer!!
                \nHuman score : ${humanscore}\tComputer score : ${computerscore}`)
        }

        else if (humanchoice==='Scissors' && computerchoice==='Rock'){
            computerscore+=1
            console.log(`Human choice : ${humanchoice} 
                \nComputer choice : ${computerchoice}
                \nResult is a win for Computer!!
                \nHuman score : ${humanscore}\tComputer score : ${computerscore}`)
        }

        else if (humanchoice==='Scissors' && computerchoice==='Paper'){
            humanscore+=1
            console.log(`Human choice : ${humanchoice} 
                \nComputer choice : ${computerchoice}
                \nResult is a win for Human!!
                \nHuman score : ${humanscore}\tComputer score : ${computerscore}`)
        }

        else if (humanchoice==='Scissors' && computerchoice==='Scissors'){
            console.log(`Human choice : ${humanchoice} 
                \nComputer choice : ${computerchoice}
                \nResult is a draw!!
                \nHuman score : ${humanscore}\tComputer score : ${computerscore}`)
        }
    }
}


