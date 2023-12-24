
import doneTodo from '../../../assets/doneTodo.jpg'
import login from '../../../assets/loginDo.jpg'
import createTodo from '../../../assets/createTodo.png'
const EXplorSteep = () => {
    return (
        <div>
            
            <div className='text-center p-4 shadow-md'>
             <h1 className="text-2xl md:text-4xl font-bold">How  <span className="text-3xl text-blue-600 md:text-5xl"> KoDo ToDo</span> Works</h1>

             <p>Get started in 3 easy step</p>
            
            <div className='flex flex-wrap justify-around items-center gap-4'>

            <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={login} alt="Shoes" className="rounded-xl max-w-48" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Create Profile!</h2>
    <p>Create your detail profile, add photos.</p>
    <div className="card-actions">
      {/* <button className="btn btn-primary">Buy Now</button> */}
    </div>
  </div>
            </div>

            <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={createTodo} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Create Todo</h2>
    <p>Create your daily todo. </p>
    <div className="card-actions">
      {/* <button className="btn btn-primary">Buy Now</button> */}
    </div>
  </div>
            </div>

            <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={doneTodo} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title"> Mark As Done </h2>
    <p>Complete your todo and make it done.</p>
    <div className="card-actions">
      {/* <button className="btn btn-primary">Buy Now</button> */}
    </div>
  </div>
            </div>


            </div>
        </div>
            
        </div>
    );
};

export default EXplorSteep;