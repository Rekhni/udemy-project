function amountOfPages(summary) {
    let totalDigits = 0;
    let currentPage = 0;
    
    while (totalDigits < summary) {
        currentPage++;
        totalDigits += currentPage.toString().length;
    }
    
    return currentPage;

}

console.log(amountOfPages(1095));


function unique(arr) {
    return Array.from(new Set(arr));
}
  
  function isPangram(string) {
      let arr = string.split(' ');
      
      for (let i = 0; i < arr.length; i++) {
          if (unique(arr[i]).length < arr[i].length) {
              return false;
          } else {
              return true;
          }
      }
  }

// console.log(duplicateCount('abba'));//2 (а и b)
// console.log(duplicateCount('arca'));//1 (а)
console.log(isPangram('Adidas'));//1 (и)



