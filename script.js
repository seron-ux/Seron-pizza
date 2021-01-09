var pizzaFlavour = [
    "Bacon",
    "sausage",
    "chicken",
    "Black olives",
    "Turkish Ground"
]
var pizzaSize =["Regular", "Medium","Large"]
var pizzaCrust=["Thin crust","Thick crust","Deep crust"
var pizzaTopping =["Mushroom","onion","Berry"]

function getFlavour() {
    var flavour =$("#pizzaflavour :selected").val();
    return parseInt(flavour);
}
function getSize() {
   var size = $("#pizzasize :selected").val();
   return parseInt(size);
}
function getCrust() {
    var crust = $("#pizzacrust :selected").val();
    return parseInt(crust);
  }
  
