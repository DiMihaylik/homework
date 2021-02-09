function sumFunc (array) {

  let res = 0;
  let sum = 0;
  
    for (let item of array) {
  
      if (sum > 10) {
  
        return res
  
      }
  
      sum += item
      res += 1
  
      }
       console.log(res)
    }
  
   
  
  sumFunc([5,5,5,5])