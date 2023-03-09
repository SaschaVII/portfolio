import { TbLoader2 } from "react-icons/tb";

const LoadingIndicator = ({ isLoading }) => {
    return (
        <>
            {isLoading && (<div><div className="inline-block animate-spin"><TbLoader2 /></div> loading...</div>)}
        </>
    );
}

export default LoadingIndicator;