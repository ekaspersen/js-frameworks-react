import styles from "./Paragraph.module.css";

function Paragraph(props) {
    return <p className={styles.Paragraph}>{props.children}</p>;
}

export default Paragraph;
