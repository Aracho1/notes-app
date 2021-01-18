function expect(value) {
  return {
    toEqual: function(expected) {
      if (value == expected) {
        return "Pass";
      }
      return "Fail";
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


let name = new Name();
console.log("testing the change method:", expect(name.name).change("Sarah", "Timmy", (name.changeName("Boris"))));
