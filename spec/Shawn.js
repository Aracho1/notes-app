function it(label, callback) {
  console.log(`Test: ${label}`)
  callback()
}


function expect(value) {
  return {
    toEqual: function(expected) {
      if (value == expected) {
        console.log("Pass") ;
      } else {
        console.log("Fail") ;
      }
      
    }, // add comma!!
    notToEqual: function(expected) {
      if (value != expected) {
        return "Pass"
      }
      return "Fail"
    },
    toBe: function(expected) {
      if (value === expected) {
        return "Pass";
      }
      return "Fail";
    },
    notToBe: function(expected) {
      if (value !== expected) {
        return "Pass"
      }
      return "Fail"
    },
    toThrowWhen: function(expected) {
      if (value == expected) {
        return "true"
      }
      throw "error";
    },
    change: function(expected, change, method) {
      if (value === expected) {
        var state1 = expected;
        if (method === change) {
          return "Pass"
        }
        return "Fail"
      }
      throw ["Fail", "Initial state not equal to expected state"];
    }
  }
}
