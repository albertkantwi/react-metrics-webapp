import Navbar from '../components/Navbar';
import Searchbox from '../components/Searchbar';
import Countries from '../components/Country';

function Home() {
  return (
    <div className="homeContainer">
      <Navbar />
      <Searchbox />
      <Countries />
    </div>
  );
}

export default Home;
