import { Link } from 'react-router-dom';
import img from '../../assets/banner.jpg';
import EXplorSteep from './ExplorSteep/EXplorSteep';

const Home = () => {
    return (
        <div>
            <div className="hero min-h-screen ">
  <div className="hero-content gap-5 flex-col lg:flex-row-reverse">
    <img src={img} className="max-w-sm rounded-lg shadow-2xl" />
    <div className='flex flex-col gap-4 justify-center items-center'>
      <h1 className="text-5xl font-bold">Make Your ToDo Now!</h1>
     
     <Link to={'/login'}> <button className="btn bg-blue-400 text-white font-extrabold">Let’s Explore</button></Link>
    </div>
  </div>
</div>




<div>
    <EXplorSteep></EXplorSteep>
</div>
        </div>
    );
};

export default Home;