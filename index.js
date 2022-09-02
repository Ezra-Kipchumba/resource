fetch("https://api.teleport.org/api/cities/")
	.then(response => response.json())
	.then(randomCity)
	.catch(err => console.error(err));

const cityValue = document.getElementById("btn").addEventListener("click", getCity);

function getCity(){
    console.log (document.getElementById("text-typo").value)
}
console.log(getCity())

// const cityFound = document.getElementById("city");

function randomCity(data) {
    myArray = data._embedded["city:search-results"];
}

// myArray.map((x) => {
//     for (let i = 0; i< 25; i++){
//         let x = myArray[a];
//         if (data._embedded["city:search-results"][x] === cityValue){
//             return true;
//         }
//     }
// });

let empty = "" ;
myArray.map((values)=>{
    console.log(values)
})
