import Banner from '../components/banner/Banner';
import Descripcion from '../components/descripcion/Descripcion';
import Feature from '../components/feature/Feature';
import Navbar from '../components/navbar/Navbar';
import Ubicanos from '../components/ubicanos/Ubicanos';

function Home() {
    return (
        <>
            <Navbar/>
            <Banner />
            <Descripcion />
            <Feature />
            <Ubicanos />
        </>
    );
}

export default Home;