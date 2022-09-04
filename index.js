const rootElement = document.getElementById("app-body");

fetch("https://api.teleport.org/api/cities", {
    method: "GET",
})
    .then(response => response.json())
    .then((result) => {
        // console.log(result)
        const myArray = result._embedded["city:search-results"]
        // console.log(myArray)
        myArray.forEach((myArray)=> {
            console.log (myArray)
            const parentDiv = document.createElement("div");
            const childName = document.createElement("p");
            const matchName = document.createElement("p");

            // populating childP with data
            childName.innerHTML = myArray._links["city:item"].href;
            matchName.innerHTML = myArray.matching_full_name;
            // append to parentDiv
            parentDiv.appendChild(childName);
            parentDiv.appendChild(matchName);

            rootElement.appendChild(parentDiv);
        })
    })
    .catch(err => console.log(err));

const cityValue = document.getElementById("btn").addEventListener("click", getCity);

function getCity() {
    console.log(document.getElementById("text-typo").value)
}
// console.log(getCity())
