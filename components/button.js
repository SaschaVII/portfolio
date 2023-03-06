const Button = ({children, className, onClick, type}) => {
    let styles = className;

    if(type === "primary" || type === "" || type === undefined) styles += " btn btn-primary mr-2";
    if(type === "secondary") styles += " btn btn-secondary mr-2";

    return <button className={styles} onClick={onClick}>{children}</button>;
};

export default Button;