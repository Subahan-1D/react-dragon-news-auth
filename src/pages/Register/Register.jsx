import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";


const Register = () => {
    const handleRegister = e =>{
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password);
    }
    return (
        <div>
            <Navbar></Navbar>
            <h1 className="text-center text-3xl mb-2">Please Register</h1>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Enter Your Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                        <p className="text-center"> Already have an account.. <Link to='/login'><button className="btn btn-link">login</button></Link></p>
                    </div>
        </div>
    );
};

export default Register;