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
  function getTopping() {
    var topping = $("#pizzatopping :selected").val();
    return parseInt(topping);
  }
  function getNumber() {
    var number = $("#number").val();
    return parseInt(number);
  }
  function getAmount(flavour, size, crust, topping, number) {
    var results =
      (parseInt(flavour.val()) +
        parseInt(size.val()) +
        parseInt(crust.val()) +
        parseInt(topping.val())) *
      parseInt(number.val());
      function getAmount(flavour, size, crust, topping, number) {
        var results =
          (parseInt(flavour.val()) +
            parseInt(size.val()) +
            parseInt(crust.val()) +
            parseInt(topping.val())) *
          parseInt(number.val());
        