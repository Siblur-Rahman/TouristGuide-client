import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
            <div className="bg-slate-400 p-10 text-center h-svh flex justify-center items-center">
                <div>
                <h2 className="text-3xl font-extrabold text-red-600 mb-5">Oops!</h2>
                <Link to="/" className="btn btn-outline text-2xl">Go back to Home</Link>
                </div>
            </div>
    );
};

export default ErrorPage;