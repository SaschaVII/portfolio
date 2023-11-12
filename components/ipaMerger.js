import IpaCard from "./ipaCard";
import { FaArrowLeft, FaTrash } from "react-icons/fa";

const IpaMerger = ({ content, onDelete, onBackspace, copyFont }) => {
    return (
        <div className="flex">
            <IpaCard title={content} copyFont={copyFont} />
            {onBackspace && <button className="btn bg-emerald-500 text-white hover:bg-emerald-400" onClick={onBackspace}><FaArrowLeft /> Delete</button>}
            {onDelete && <button className="btn bg-red-500 text-white hover:bg-red-400" onClick={onDelete}><FaTrash /> Delete</button>}
        </div>
    );
};

export default IpaMerger;