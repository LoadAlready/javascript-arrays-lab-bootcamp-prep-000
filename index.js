const app = "I don't do much.";
var kittens = ["Milo", "Otis", "Garfield"];
function destructivelyAppendKitten(Ralph){
  kittens.push("Ralph");
  return kittens;
}
function destructivelyPrependKitten(Bob){
  kittens.unshift("Bob");
  return kittens;
}
function destructivelyRemoveLastKitten(){
  kittens.pop(0, kittens.length -1);
  return kittens;
}
function destructivelyRemoveFirstKitten(){
  kittens.shift(0);
  return kittens;
}

function appendKitten(Broom){
  kittens.append("Broom")
  return kittens
}