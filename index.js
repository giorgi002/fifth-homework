// First task  👇
// function logUntilDifferent(argumentNumber){
//     if( argumentNumber < 0 || argumentNumber > 10){
//         console.log("argument number must be between 0 and 10");
//         return;
        
//     }
// let randomNumber = Math.floor(Math.random() * 11);
// while(randomNumber === argumentNumber){
//     console.log(randomNumber);
//     randomNumber = Math.floor(Math.random() * 11);
// }
//     console.log(randomNumber);
// }
// logUntilDifferent(5)



// second task 👇 with then.catch
// function fetchFakeData(){
//     return new Promise((resolve) => {
//         setTimeout(() =>{
//             resolve("this is fake data");
//         }, 2000)
//     })
// }
// fetchFakeData()
// .then(data => {
//     console.log("fetshced", data);
// })
// .catch(error => {
//     console.log("error", error);
    
// })



// second task 👇 with async/await
// function fetchFakeData(){
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("this is fake data")
//         }, 2000);
//     })
// }
// async function getData(){
//     const data = await fetchFakeData();
//     console.log("fetched", data);
    

// }
// getData();



// third task 👇 
// function sleep(ms){
//     return new Promise(resolve => {
//         setTimeout(resolve, ms)
//     })
// }
// async function test(){
//     console.log('first');
//     await sleep( 2000);
//     console.log('second');
    
// }
// test();
