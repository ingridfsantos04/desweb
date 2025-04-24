// src/App.jsx
import Header from './components/Header';
import CounterCard from './components/CounterCard';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

function App() {
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <Header />
      <CounterCard />

      <p className="read-the-docs">
        Clique nos logos do Vite e React para saber mais.
      </p>
    </>
  );
}

export default App;
