import './App.css';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Banner from './components/banner/banner';
import Section from './components/section/section';
import CardSection from './components/cardSection/cardSection';

import { useFetch } from "./hooks/useFetch";

function App() {
  const endpoint = "articles";
  const { data, error } = useFetch(endpoint);
 

 // if (error) return <h3>!!Ocurrió un ERROR !!!</h3>;

  return (
    <div>
      <Header />
      <main>
        <Banner />
        <Section />
        <CardSection data={data}/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
