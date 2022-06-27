import styles from "./[Modal[.module.css";

const Modal = (props) => {
  const { open, children } = props;

  return (
    <section
      className={styles.rootContainer}
      style={{ display: open ? "block" : "none" }}
    >
      <div className={styles.modalContentContainer}>{children}</div>
    </section>
  );
};

export default Modal;
