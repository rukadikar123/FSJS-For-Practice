function deepClone(obj) {
    if (obj === null || typeof obj !== "object") {
      return obj;
    }
  
    if (Array.isArray(obj)) {
      return obj.map(deepClone);
    }
  
    let clonedObj = {};
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        clonedObj[key] = deepClone(obj[key]);
      }
    }
  
    return clonedObj;
  }
  
  const obj = {
    name: "Alice",
    age: 25,
    details: {
      hobbies: ["reading", "gaming"],
      address: { city: "NY", zip: "10001" }
    }
  };
  
  const clonedObj = deepClone(obj);
  clonedObj.details.hobbies.push("traveling");
  clonedObj.details.address.city = "LA";
  
  console.log(obj.details.hobbies); // ["reading", "gaming"]
  console.log(obj.details.address.city); // "NY"
  