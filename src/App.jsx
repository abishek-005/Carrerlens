import Navbar from './components/navbar';
import Card1 from './components/card1';

function App() {
  return (
    <div>
      <Navbar />
      <main style={{ padding: '2rem', marginTop: '80px', height: '65vh' }}>
        <h1 id='H1'>Welcome to CareerLens</h1>
        <p id='P1'>Find the perfect career path tailored just for you </p>
      </main>
      <Card1 />
    </div>
  );
}

export default App;
