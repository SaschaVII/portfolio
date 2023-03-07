import { FaCircleNotch } from "react-icons/fa";

const LoadingIndicator = ({ isLoading }) => {
    return (
        <>
            {isLoading && (<div><div className="inline-block animate-spin"><FaCircleNotch /></div> loading...</div>)}
        </>
    );
}

export default LoadingIndicator;