import React, { useMemo } from "react";
import "./styles.scss";

type Props = {
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

type Handler = (args: number) => void;

const NumericInput: React.FC<Props> = (props) => {
  const {
    value = 0,
    min = 0,
    max = 10,
    step = 0.1,
    decimal = 9,
    className = "",
    id = "",
    disabled = false,
    readOnly = false,
    onChange = (n) => {},
    width = "300px",
  } = props;

  const dec: number = useMemo(
    () => (decimal != null ? decimal : Math.ceil(-Math.log10(step))),
    [step, decimal]
  );

  const btnDisabled: boolean = readOnly || disabled;

  const correctStep = (val: number): number => {
    return Math.round(val * 10 ** dec) / 10 ** dec;
  };

  const handleMinus = (): void => {
    const val = correctStep(value - step);
    onChange(val < min ? min : val);
  };

  const handlePlus = (): void => {
    const val = correctStep(value + step);
    onChange(val > max ? max : val);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const val = correctStep(parseFloat(e.target.value));
    const ret = isNaN(val) || val < min ? min : val > max ? max : val;
    onChange(ret);
  };

  return (
    <span className="numeric-input-container" style={{ width }}>
      <button
        className="numeric-input-minus-button"
        onClick={handleMinus}
        disabled={btnDisabled || min >= value}
      >
        <span className="numeric-input-line" />
      </button>
      <input
        type="number"
        value={value}
        min={min}
        max={max}
        step={step}
        onChange={handleChange}
        disabled={disabled}
        readOnly={readOnly}
        className={"numeric-input-input " + className}
        id={id}
      />
      <button
        className="numeric-input-plus-button"
        onClick={handlePlus}
        disabled={btnDisabled || max <= value}
      >
        <span className="numeric-input-line" />
      </button>
    </span>
  );
};

export default NumericInput;
