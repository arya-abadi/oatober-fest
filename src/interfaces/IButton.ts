import React from "react";

export interface IButton {
    onClick: () => void;
    color?: "dark" | "light";
    className?: string;
    children: React.ReactNode;
}