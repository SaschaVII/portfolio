import Button from "./button";
import IpaCard from "./ipaCard";
import { FaTrash } from "react-icons/fa";

const IpaMerger = ({ content, onDelete, copyFont }) => {
    return (
        <div className="flex">
        <IpaCard title={content} copyFont={copyFont} />
        <Button onClick={onDelete}><FaTrash /> Delete</Button>
        </div>
    );
};

export default IpaMerger;