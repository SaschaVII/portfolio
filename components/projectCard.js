const ProjectCard = ({ children, className, title, thumbnailSrc, projectUrl }) => {
    // TODO: make sure that the card has a max height and scales the thumbnail to a default size
    // TODO: add pretty child component for tech used
    
    let styles = className;
    styles += " group max-w-[375px] bg-white hover:shadow-lg transition-shadows ease-in-out duration-100 dark:bg-transparent dark:hover:ring-2 ring-slate-700";
    styles += " group max-w-[375px] bg-white hover:shadow-lg transition-shadows ease-in-out duration-100 dark:bg-transparent dark:hover:ring-2 ring-slate-700";

    return (
        <div className={styles}>
            <a href={projectUrl || ""} target="_blank">
                <img className="saturate-0 brightness-150 group-hover:saturate-100 group-hover:brightness-100 transition ease-in-out duration-500" src={thumbnailSrc} alt={title + ' thumbnail'} />
            </a>
            <div className="p-5 flex flex-col">
                <h1 className="mb-2">{title}</h1>
                <div>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;