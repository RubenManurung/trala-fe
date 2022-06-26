import styles from "./[Modal[.module.css";

const Modal = (props) => {
  const { open, children } = props;

  // const handleCloseModal = () => {
  //   onClose();
  // };

  return (
    <section
      className={styles.rootContainer}
      style={{ display: open ? "block" : "none" }}
    >
      <div className={styles.modalContentContainer}>
        {/* <button
          onClick={handleCloseModal}
          style={{
            cursor: "pointer",
            position: "relative",
            top: 0,
            left: 0,
            border: "none",
            padding: 4,
            background: "#FF5F2D",
          }}
        >
          <FontAwesomeIcon
            icon={faTimes}
            width={15}
            height={15}
            style={{
              cursor: "pointer",
              color: "#fff",
            }}
          />
        </button> */}
        {/* <ModalHeader>
          <h2 style={{ margin: 0, color: "#3C3C3C" }}>{title}</h2>
        </ModalHeader> */}
        {children}
      </div>
    </section>
  );
};

export default Modal;
