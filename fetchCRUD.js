// / to read JSON data from file using fetch
fetch("https://jsonplaceholder.typicode.com/users")
.then(response=>response.text())
.then(data=>console.log(data))
.catch(error=>console.log(error));


/// to read JSON data from file using fetch by GET

// fetch("https://jsonplaceholder.typicode.com/users",{
//     method:"GET",
//     body:JSON.data,
//     headers:{
//         "Content-type":"application/json",
//     }
// })
// .then(response=>response.json())
// .then(data=>console.log(data))
// .catch(error=>console.log(error));

///to insert JSON data to file using fetch by post

// fetch("https://jsonplaceholder.typicode.com/users",{
//     method:"POST",
//     body:JSON.stringify({
//         name:"Shehroz Arshad",
//         username:"Shehroz7834",
//         email:"Shehroz73@gmail.com"
//     }),
//     headers:{
//         "Content-type":"application/json"
//     }
// })
// .then(response=>response.json())
// .then(data=>console.log(data))
// .catch(error=>console.log(error));

// to update JSON data to file using fetch by PUT

// fetch("https://jsonplaceholder.typicode.com/users/10",{
//     method:"PUT",
//     body:JSON.stringify({
//         id:10,
//         name:"Shehroz",
//         username:"Shehroz3487",
//         email:"Shehrozarls98237@gmail.com"
//     }),
//     headers:{
//         "Content-type":"application/json",
//     }
// })
// .then(response=>response.json())
// .then(data=>console.log(data))
// .catch(error=>console.log(error));

// to delete JSON data from file using fetch by delete

// fetch("https://jsonplaceholder.typicode.com/users/10",{
//     method:"DELETE",
// })
// .then(response=>response.json())
// .then(result=>console.log("deleted",result))
// .catch(error=>console.log(error));


