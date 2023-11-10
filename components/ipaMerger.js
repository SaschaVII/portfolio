import Button from "./button";
import IpaCard from "./ipaCard";
import { FaTrash } from "react-icons/fa";

const IpaMerger = ({ content, onDelete }) => {
    return (
        <div className="flex">
        <IpaCard title={content} />
        <Button onClick={onDelete}><FaTrash /> Delete</Button>
        </div>
    );
};

export default IpaMerger;