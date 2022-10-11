var string1 = "Uwielbiam JavaScript";
var string2 = "Jestem świetnym programistą";

function porownanie(a, b) {
    if (a.length > b.length) {
        return a;
   } else {
       return b;
  }
 }
console.log(porownanie(string1, string2));