// Write here the code challenge solution
const Repeated = (str)=>{
    let Words = new Map()
    str=str.replaceAll('.', '')
    str = str.replace(/\s+/g, ' ').trim()
    let arr = str.split(" ")   
    for (let index = 0; index < arr.length; index++) {
        if(Words.get(arr[index]))
            return arr[index];
        Words.set(arr[index],{reg : true})
    }
return "No Repeated Words" ;
} 

module.exports = {Repeated};