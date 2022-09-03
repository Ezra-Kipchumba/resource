const rootElement = document.getElementById("output");

fetch("https://api.teleport.org/api/cities/", {
    method: "GET",
})
    .then(response => response.json())
    .then((result) => {
        // console.log(result)
        const myArray = result._embedded["city:search-results"]
        // console.log(myArray)
        myArray.forEach(myArray => {
            const parentDiv = document.createElement("div");
            const childP = document.createElement("p");

            // populating childP with data
            childP.innerHTML = myArray;

            // append to parentDiv
            parentDiv.appendChild(childP);
        })
    })
    .catch(err => console.log(err));

const cityValue = document.getElementById("btn").addEventListener("click", getCity);

function getCity() {
    console.log(document.getElementById("text-typo").value)
}
// console.log(getCity())
