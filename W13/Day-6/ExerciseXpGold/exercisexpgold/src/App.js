import './App.css';
import BootstrapCard from './BootstrapCard';
import "bootstrap/dist/css/bootstrap.min.css"; 

function App() {
  // Exercise 1
//   const celebrities = [
//     {
//         title: 'Bob Dylan',
//         imageUrl: 'https://miro.medium.com/max/4800/1*_EDEWvWLREzlAvaQRfC_SQ.jpeg',
//         buttonLabel: 'Go to Wikipedia',
//         buttonUrl: 'https://en.wikipedia.org/wiki/Bob_Dylan',
//         description:
//             'Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer/songwriter, author, and artist who has been an influential figure in popular music and culture for more than five decades.',
//     },
//     {
//         title: 'McCartney',
//         imageUrl:
//             'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Paul_McCartney_in_October_2018.jpg/240px-Paul_McCartney_in_October_2018.jpg',
//         buttonLabel: 'Go to Wikipedia',
//         buttonUrl: 'https://en.wikipedia.org/wiki/Paul_McCartney',
//         description:
//             'Sir James Paul McCartney CH MBE (born 18 June 1942) is an English singer, songwriter, musician, composer, and record and film producer who gained worldwide fame as co-lead vocalist and bassist for the Beatles.',
//     },
// ]

// Exercise 2
const planets = ['Mars','Venus','Jupiter','Earth','Saturn','Neptune' ];
  return (
    // Exercise 1
    // <div className="App">
    //   <header className="App-header">
    //     {celebrities.map((celebrity, index) => (
    //       <BootstrapCard
    //         key={index}
    //         img={celebrity.imageUrl}
    //         title={celebrity.title}
    //         text={celebrity.description}
    //         link={celebrity.buttonUrl}
    //       />
    //     ))}
    //   </header>
    // </div>

    // Exercise 2
    //Some styling to make it look better
    <div style = {{display:"flex", justifyContent:'center', allingItems:"center", marginTop:'25%' }}> 
    <ul class="list-group" style = {{border:"1px solid black", width: "200px",}}>
      {planets.map((planet, index) => (
        <li class="list-group-item" key={index}>{planet}</li>
      ))}
    </ul>
    </div>
  );
}

export default App;
