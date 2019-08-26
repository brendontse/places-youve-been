// business logic
// function placeKeeper(){
//   this.places = []
// }
// PlaceKeeper.prototype.addPlace = function(place){
//   this.places.push(place)
// }
function Place(location, landmarks, date, notes) {
  this.location = location;
  this.landmarks = landmarks;
  this.date = date;
  this.notes = notes;
}

Place.prototype.allInfo = function() {
  return this.location + " " + this.notes;
}

var portland = new Place("Portland", "Columbia Gorge", "2019", "it was dope");
var seattle = new Place("Seattle", "Trees", "2014", "cool stuff");
var sanFran = new Place("San Fransisco", "Golden Gate Bridge", "2011", "Best place ever");

var portlandInfo = portland.allInfo()
var seattleInfo = seattle.allInfo()
var sanFranInfo = sanFran.allInfo()

$(document).ready(function(){
console.log("its working")
$("#formOne").submit(function(event){
  event.preventDefault();
  var userInput = new Place($("#place1").val(), $("#landmark1").val(),$("#date1").val(), $("#notes").val());
  console.log(userInput)
})
//   $("#pic").click(function(){
// console.log("its working")
//     $("img").hide()
//     $("#yup").append("<li>" + portlandInfo + "</li>")
//   });
//   $("#seattle").click(function(){
//     $("img").hide()
//     $("#yup").append("<li>" + seattleInfo + "</li>")
//   });
//   $("#sanfran").click(function(){
//     $("img").hide()
//     $("#yup").append("<li>" + sanFranInfo + "</li>")
//   });
});
