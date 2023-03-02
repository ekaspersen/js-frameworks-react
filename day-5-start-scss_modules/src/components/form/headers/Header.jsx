import styles from "./Header.module.css";
function Header(props) {
    return <h3 className={styles.Header}>{props.children}</h3>;
}

export default Header;
