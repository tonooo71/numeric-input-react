import React from "react";
import "./styles.scss";
declare type Props = {
    value?: number;
    min?: number;
    max?: number;
    step?: number;
    decimal?: number;
    className?: string;
    id?: string;
    disabled?: boolean;
    readOnly?: boolean;
    onChange?: Handler;
    width?: string;
};
declare type Handler = (args: number) => void;
declare const NumericInput: React.FC<Props>;
export default NumericInput;
