const ProjectCard = ({children, className, title, thumbnailSrc, projectUrl}) => {
    let styles = className;
    styles += " group max-w-[375px] bg-white hover:shadow-lg transition-shadows ease-in-out duration-100";

    return (
        <div className={styles}>
            <a href={projectUrl || "#"}>
                <img className="group-hover:saturate-0 group-hover:brightness-200 transition ease-in-out duration-700" src={thumbnailSrc} alt={title + ' thumbnail'} />
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