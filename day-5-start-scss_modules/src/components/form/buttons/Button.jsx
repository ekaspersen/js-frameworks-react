import styles from "./Buttons.module.css";
function Button(props) {
    return <button className={styles.Button}>{props.children}</button>;
}

export default Button;
