const Button = ({children, className, type}) => {
    let styles = className;

    if(type === "primary" || type === "" || type === undefined) styles += " btn btn-primary mr-2";
    if(type === "secondary") styles += " btn btn-secondary mr-2";

    return <button className={styles}>{children}</button>;
};

export default Button;