import { motion } from "framer-motion";

const ProjectCard = ({ children, className, title, thumbnailSrc, projectUrl, animation }) => {
    // TODO: make sure that the card has a max height and scales the thumbnail to a default size
    // TODO: add pretty child component for tech used

    let styles = className;
    styles += " group max-w-[375px] bg-white hover:shadow-lg transition-shadows ease-in-out duration-100 dark:bg-transparent dark:hover:ring-2 ring-slate-700";

    const generateProjectCard = () => {
        return (
            <div className={styles}>
                <a href={projectUrl || ""} target="_blank">
                    <img className="object-cover w-[375px] h-[375px] saturate-50 brightness-100 group-hover:saturate-100 group-hover:brightness-150 transition ease-in-out duration-500" src={thumbnailSrc} alt={title + ' thumbnail'} />
                </a>
                <div className="p-5 flex flex-col">
                    <h1 className="mb-2">{title}</h1>
                    <div>
                        {children}
                    </div>
                </div>
            </div>
        );
    }

    if (animation) {
        return (
            <motion.div 
                whileHover={{ scale: 1.05 }}>
                {generateProjectCard()}
            </motion.div>
        );
    } else {
        return generateProjectCard();
    }          
};

export default ProjectCard;