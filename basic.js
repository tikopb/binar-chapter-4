
var namaWalikota = "Asep";

function ChangePresidentName(nama){
    let candidateName = nama;
    return candidateName;
}

function changeVicePressidentName(nama){
    let candidateViceName = nama;
    return candidateViceName;
}

var returnValue = `${namaWalikota} merupakan walikota dari president `+ ChangePresidentName("JOKO")+` dan wakil President nya adalah `+ changeVicePressidentName("ANI");
console.log(returnValue);

var object = {
    hello: 'world',
    world: 'earth'
}

console.log(object.world);

var array =[
    "world", 23, "binar", "learn"
]

console.log(array)
array.push("ocean") // tambah item 
console.log(array) // cara pemanggilan array 
array.pop() //menghapus array terakhir 
console.log(array)
array.shift() //menghapus array pertama 
console.log(array)
array.unshift(24) //menambah valud pertama di array 
console.log(array)

array.forEach(function(i){
    console.log(i)
})

//fioltered array function
var filteredArray = array.filter(function(i){
    return i !=="binar"
})
console.log(filteredArray)