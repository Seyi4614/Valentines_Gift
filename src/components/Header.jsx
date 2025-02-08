import React from "react";

function Header() {
    return (
        <header style={styles.header}>
            <h1 style={styles.title}>A Gift From the Heart 💌</h1>
        </header>
    );
}

const styles = {
    header: {
        textAlign: "center",
        padding: "20px",
        backgroundColor: "#fce4ec",
        color: "#880e4f",
        fontFamily: "serif",
    },
    title: {
        fontSize: "24px",
    },
};

export default Header;
