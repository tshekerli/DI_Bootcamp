



//   fetch('http://localhost:3000/posts', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//         title: 'My Post',
//         content: 'This is my first post',
//         id: 1
//     }),
// })
// .then(response => response.json())
// .then(data => console.log(data))
// .catch((error) => console.error('Error:', error));



// fetch('http://localhost:3000/posts/2',{
//     method: 'PUT',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(
//         {
//             title: 'Second Post',
//             content: "This is the second post",
//             id: 2

//         }
//     ),

// })
// .then(response=> response.json())
// .then(data=> console.log(data))
// .catch((error) => console.error('Error', error))


// fetch('http://localhost:3000/posts')
//   .then(response => {
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     return response.text();
//   })
//   .then(text => {
//     try {
//       const data = JSON.parse(text);
//       console.log(data);
//     } catch (error) {
//       console.log('Error parsing JSON:', error);
//       console.log('Raw response:', text);
//     }
//   })
//   .catch(error => console.log('Request failed:', error));


// fetch('http://localhost:3000/posts/2', {
//     method: 'DELETE',
// })
// .then(response => response.json())
// .then(data => console.log(data))
// .catch((error) => console.error('Error:', error));