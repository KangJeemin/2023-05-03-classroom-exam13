function one(value, callback) {
    callback(value + 1);
  }
  
  function two(value, callback) {
    callback(value + 2);
  }
  
  function three(value, callback) {
    callback(value + 3);
  }
  
  function four(value, callback) {
    callback(value + 4);
  }
  
  function five(value, callback) {
    callback(value + 5);
  }
  
  function q1(number) {
    if (Number.isInteger(number)) {
      one(number, (result1) => {
        two(result1, (result2) => {
          three(result2, (result3) => {
            four(result3, (result4) => {
              five(result4, (result5) => {
                console.log(result5);
              });
            });
          });
        });
      });
    }
  }
  
  q1(8);