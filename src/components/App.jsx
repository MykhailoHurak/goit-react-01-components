import PaintingList from "./PaintingList";
import paintings from '../paintings.json';
import Section from './Section'

export default function App() {
  return (
    <div>
      {/* <PaintingList items={paintings} /> */}
      <Section title="Top of Week">
        <PaintingList items={paintings} />
      </Section> 
      <Section />
    </div>
  );
}


// =========================================================
// import Painting from "./Painting";
// import paintings from '../paintings.json';

// export default function App() {
//   return (
//     <div>
//       <Painting
//         imageUrl={paintings[0].url}
//         title={paintings[0].title}
//         authorUrl={paintings[0].author.url}
//         authorTag={paintings[0].author.tag}
//         price={paintings[0].price}
//         quantity={paintings[0].quantity}
//       />

//       <Painting
//         imageUrl={paintings[1].url}
//         title={paintings[1].title}
//         authorUrl={paintings[1].author.url}
//         authorTag={paintings[1].author.tag}
//         price={paintings[1].price}
//         quantity={paintings[1].quantity}
//       />

//       <Painting
//         imageUrl={paintings[2].url}
//         title={paintings[2].title}
//         authorUrl={paintings[2].author.url}
//         authorTag={paintings[2].author.tag}
//         price={paintings[2].price}
//         quantity={paintings[2].quantity}
//       />
//     </div>
//   );
// }

// =========================================================
// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
