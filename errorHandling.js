// lisdjfs;

// try {
//     console.log("Start of try");
//     lksdjf;
//     console.log("End of try");
//   } catch(error) {
//     console.log("Error has occurred:",error);
//   }

/// if we want to print error message independently

// try {
//   console.log("Start of try");
//   lksdjf;
//   console.log("End of try");
// } catch (error) {
//   console.log(error.name);
//   console.log(error.message);
//   console.log(error.stack);
// }

//if we want to get any certain type of error using try catch

try {
  bsdudf;
} catch (error) {
  if (error instanceof ReferenceError) {
    console.log("Refernce Error:", error.message);
  } else if (error instanceof TypeError) {
    console.log("TypeError:", error.message);
  } else {
    console.log("Unknown Error");
  }
}

/// try catch using json
const fetchData = async () => {
  try {
    let a = await fetch("./json/users.json"); //it returns us response from the server
    const b = await a.json(); //it returns us data in the form of object
    const json = JSON?.stringify(b); //  it converts JS object to json data format
    console.log("json===>", json);
    const obj = JSON.parse(json);      //it converts json data format to JS object
    console.log("object===>", obj);


    for (let i = 0; i < obj.length; i++) {
        if (!obj[i].name) {                        //if due to some error obj name is not fetch then we can use this in try catch
            throw new Error("Name field is not found");                 //throw is used to throw exception or error in try catch block
        }   
    }     

  } catch (error) {
    console.log(error);
  }
  finally{
    console.log("Final");                       // it runs on every condition either on catch or on try
  }
};

fetchData();


