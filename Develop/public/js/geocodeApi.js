// Open Cage API 
// https://opencagedata.com/api

console.log("GeocodeApi JS")
let searchAdrr;
let theSearch = {
    loc_search: false,
};

document.getElementById('LocSrchBtn').addEventListener('click', function(event){
    event.preventDefault(); // Prevent form submission
    searchAdrr = document.getElementById('mySrch').value;
    console.log("--------- the search was: ", searchAdrr)
    getLocationApi(searchAdrr)
})

function getLocationApi(searchAdrr) {
    console.log("   getLocationApi()");
    var queryURL1 = "https://api.opencagedata.com/geocode/v1/json?q="+ searchAdrr +"&key=2f9dc7b017e04d3daa1a27f20c2b9aad" ;
    // https://api.opencagedata.com/geocode/v1/json?q=URI-ENCODED-PLACENAME&key=2f9dc7b017e04d3daa1a27f20c2b9aad
    // https://api.opencagedata.com/geocode/v1/json?q=YourAddressHere&key=YOUR_API_KEY
  
    fetch(queryURL1)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log('data from getLocationApi:');
        console.log(data.results);
        theSearch.loc_search=true; 
        theSearch.optsNum = data.results.length;
        theSearch.place=[];
        data.results.forEach((ob)=>{
            theSearch.place.push(ob.formatted)
        })
        console.log("place: -----")
        console.log(theSearch.place);
        console.log("the obj: -----")
        console.log(theSearch);
        return theSearch;
      });
}

let xim = {
    loc_search: false,
    optsNum: 10, 
    place: [
        "hola", "si", "se", "puede"
    ]
}

// module.exports = theSearch;
module.exports = xim;