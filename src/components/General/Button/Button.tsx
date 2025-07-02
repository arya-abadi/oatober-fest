import React from "react";
import { IButton } from "@/interfaces/IButton";
import styles from "./Button.module.scss";

const Button: React.FC<IButton> = ({
                                       onClick,
                                       className = "",
                                       color = "dark",
                                       isLoading = false,
                                       children = "Click Here",
                                   }) => {
    const colorClass =
        color === "light" ? styles["button--light"] : styles["button--dark"];
    const loadingClass = isLoading ? styles["button--loading"] : "";

    console.log("here");

    return (
        <button
            className={`${styles.button} ${colorClass} ${loadingClass} ${className}`}
            onClick={onClick}
        >
            {isLoading ? "IS LOADING" : children}
        </button>
    );
};

export default Button;
