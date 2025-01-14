import React from "react";

const ActivateWindowsMessage = () => {
    const styles = {
        container: {
            position: "fixed",
            bottom: "10%",
            right: "10px",
            textAlign: "left",
            color: "rgba(230, 230, 230, 0.7)", // Light white

            fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
            userSelect: "none", // Prevent text selection
        },
        line1: {
            fontSize: "18px",
            margin: 0,
        },
        line2: {
            fontSize: "13px",
            margin: 0,
        },
    };

    return (
        <div style={styles.container}>
            <p style={styles.line1}>Activate Windows</p>
            <p style={styles.line2}>Go to Settings to activate Windows</p>
        </div>
    );
};

export default ActivateWindowsMessage;
