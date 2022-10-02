function one(){
    document.getElementById('screen').innerHTML += 1
    
}
function two(){
    document.getElementById('screen').innerHTML += 2
}
function three(){
    document.getElementById('screen').innerHTML += 3
}
function four(){
    document.getElementById('screen').innerHTML += 4
}
function five(){
    document.getElementById('screen').innerHTML += 5
}
function six(){
    document.getElementById('screen').innerHTML += 6
}
function seven(){
    document.getElementById('screen').innerHTML += 7
}
function eight(){
    document.getElementById('screen').innerHTML += 8
}
function nine(){
    document.getElementById('screen').innerHTML += 9
}
function zero(){
    document.getElementById('screen').innerHTML += 0
}
function point(){
    document.getElementById('screen').innerHTML += '.'
}
function remove(){
    let r = document.getElementById('screen').innerHTML
    document.getElementById('screen').innerHTML -=  r
}

let val = []  
let val2 = [] 
let op = []   

function sub(){
    let num1 = document.getElementById('screen').innerHTML
    val.push(Number(num1))
    let sub = document.getElementById('screen').innerHTML = '-'
    op.push(sub)
    document.getElementById('screen').innerHTML = ''
    document.getElementById('display').innerHTML =`${val} - ${val2}`

    
}
function add(){
    let num1 = document.getElementById('screen').innerHTML
    val.push(Number(num1))
    let sub = document.getElementById('screen').innerHTML = '+'
    op.push(sub)
    document.getElementById('screen').innerHTML = ''
    document.getElementById('display').innerHTML =`${val} + ${val2}`
}
function multy(){
    let num1 = document.getElementById('screen').innerHTML
    val.push(Number(num1))
    let sub = document.getElementById('screen').innerHTML = 'x'
    op.push(sub)
    document.getElementById('screen').innerHTML = ''
    document.getElementById('display').innerHTML =`${val} x ${val2}`

}
function divi(){
    let num1 = document.getElementById('screen').innerHTML
    val.push(Number(num1))
    let sub = document.getElementById('screen').innerHTML = '/'
    op.push(sub)
    document.getElementById('screen').innerHTML = ''
    document.getElementById('display').innerHTML =`${val} / ${val2}`

}


function equlto(){
    document.getElementById('display').innerHTML ='='
    let num2 = document.getElementById('screen').innerHTML
    val2.push(Number(num2))

    if(op.indexOf('-') == 0){
        let ans = Number(val)-Number(val2)
        document.getElementById('screen').innerHTML = ans
        val = []  
        val2 = [] 
        op = []   
        
    }
    else  if(op.indexOf('+') == 0){
        let ans = Number(val) + Number(val2)
        document.getElementById('screen').innerHTML = ans
        val = []  
        val2 = [] 
        op = []   
    }
    else  if(op.indexOf('x') == 0){
        let ans = Number(val) * Number(val2)
        document.getElementById('screen').innerHTML = ans
        val = []  
        val2 = [] 
        op = []   
    }
    else if(op.indexOf('/') == 0){
        let ans = Number(val)/Number(val2)
        document.getElementById('screen').innerHTML = ans
        val = []  
        val2 = [] 
        op = []   
    }
   
}

// dark mode 
function darkmode(){
    document.getElementById('mode').style.backgroundColor = 'black'
    document.getElementById('mode').style.color = 'white'
    document.getElementById('maindisplay').style.backgroundColor = 'black'
    document.getElementById('numbers').style.backgroundColor = 'black'
    document.getElementById('maindisplay').style.color = 'white'

    //btn
    document.getElementById('dark').style.color = 'gray'
    document.getElementById('dark').style.backgroundColor = 'gray'
    document.getElementById('dark').style.borderColor = 'gray'
    document.getElementById('dark').style.border = 'gray'

    document.getElementById('white').style.color = 'white'
    document.getElementById('white').style.backgroundColor = 'white'
    document.getElementById('white').style.borderColor = 'white'
    document.getElementById('white').style.border = 'white'   
}

function whitemode(){
    document.getElementById('mode').style.backgroundColor = 'white'
    document.getElementById('mode').style.color = 'black'
    document.getElementById('maindisplay').style.backgroundColor = 'white'
    document.getElementById('numbers').style.backgroundColor = 'white'
    document.getElementById('maindisplay').style.color = 'black'

    //btn  
    document.getElementById('white').style.color = 'gray'
    document.getElementById('white').style.backgroundColor = 'gray'
    document.getElementById('white').style.borderColor = 'gray'
    document.getElementById('white').style.border = 'gray'

    document.getElementById('dark').style.color = 'black'
    document.getElementById('dark').style.backgroundColor = 'black'
    document.getElementById('dark').style.borderColor = 'black'
    document.getElementById('dark').style.border = 'black'
}
