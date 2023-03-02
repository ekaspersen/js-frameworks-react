import styles from "./PageHeading.module.css";
function PageHeading(props) {
    return <h2 className={styles.Heading}>{props.children}</h2>;
}

export default PageHeading;
