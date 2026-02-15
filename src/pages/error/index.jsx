import { Link } from "react-router";

export const Error = () => {
    return (
        <>

    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-800 px-4">
        <h1 className="text-[30vh] font-extrabold text-orange-950">404</h1>
        <h2 className="text-3xl md:text-4xlfont-bold mt-4 text-amber-2"> Page Not Found</h2>
        <p className="mt-2 text-gray-500 text-center max-w-md">
        The page you are looking for does not exist. It might have been moved or deleted.
        </p>
        <Link
        to="/"
        className="mt-6 px-6 py-3 bg-orange-950 text-amber-200 rounded-lg font-semibold hover:bg-amber-400 hover:text-amber-900 transition-colors"
        >
        Go Back Home
    </Link>
    </div>
    
        </>
    );
};

