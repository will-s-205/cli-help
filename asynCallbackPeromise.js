// What are asynchronous operations, callbacks, promises, async/await? And how to handle them?

// callback 
function fetchData(callback) {
    // Simulating async operation using setTimeout
    setTimeout(() => {
        callback('Data fetched!');
    }, 1000);
}
fetchData((data) => {
    console.log(data);  // Outputs: "Data fetched!" after 1 second
});

// promise
function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulating async operation using setTimeout
        setTimeout(() => {
            resolve('Data fetched!');
        }, 1000);
    });
}
fetchData().then(data => {
    console.log(data);  // Outputs: "Data fetched!" after 1 second
}).catch(error => {
    console.log('Error:', error);
});

// async/await 
async function fetchData() {
    return new Promise((resolve) => {
        // Simulating async operation using setTimeout
        setTimeout(() => {
            resolve('Data fetched!');
        }, 1000);
    });
}
(async () => {
    try {
        const data = await fetchData();
        console.log(data);  // Outputs: "Data fetched!" after 1 second
    } catch (error) {
        console.log('Error:', error);
    }
})();


// ASYNC APROACH
function getPost() {
    console.log(1);

    fetch('https://swapi.dev/api/people/1')
        .then((data) => data.json())
        .then((json) => console.log(2))
        .catch((error) => console.log(e));

    console.log(3);
}

getPost(); // 1 3 2

// SYNC APROACH WITH ASYNC/AWAIT
async function getPost() {
    console.log(1);
  
    // fetch('https://jsonplaceholder.typicode.com/posts/1')
    // .then((data) => data.json())
    // .then((json) => console.log(2))
    // .catch((error) =>  console.log(e));
    // OR
    try {
        const response = await fetch('https://swapi.dev/api/people/1');
        const json = await response.json();
        console.log(json);

    } catch (e) {
        console.log(e)
    }
  
    console.log(3);
}

getPost(); // 1 JSON 3
