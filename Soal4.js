var str = "4aie562";
var chars = [];

if (str!=""){
for (var i = 0; i < str.length; i++) {
  if(/^\d+$/.test(str.charAt(i))){
    chars.push(str.charAt(i));
    }
}
}else{
  console.log("No Number Found");
}

chars = chars.sort().join("");
console.log(chars