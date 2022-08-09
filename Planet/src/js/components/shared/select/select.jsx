import React, { useState, useRef, useEffect } from "react";

export const Select = React.forwardRef(
  (
    { items, onBlur, onChange, name, label, value, errors, ...restProps },
    ref
  ) => {
    const reference = useRef(ref);
    const [displayLabel, setLabel] = useState(label || "Выберите");
    const [open, setOpen] = useState(false);
    const errorCls = errors && errors[name] ? "error" : "";

    useEffect(() => {
      document.addEventListener("click", outSideClick);
      return () => {
        document.removeEventListener("click", outSideClick);
      };
    }, []);

    const outSideClick = (event) => {
      if (
        reference.current &&
        !reference.current.contains(event.target) &&
        reference.current.classList.contains("open")
      ) {
        close();
      }
    };

    const close = () => {
      setOpen(false);
    };

    const handleOpenItems = () => {
      setOpen((open) => !open);
    };

    const handleValue = (_, value, displayValue) => {
      setLabel(displayValue);
      onChange(value);
      close();
    };

    const itemsList = items.map(({ displayValue, value }) => (
      <li
        onClick={(e) => handleValue(e, value, displayValue)}
        value={value}
        key={value}
        className="select-items"
      >
        {displayValue}
      </li>
    ));

    const openClass = open ? "open" : "";
    const errorClass = errors && errors[name] ? "error" : "";

    return (
      <div
        name={name}
        tabIndex={0}
        className={`select-wrap ${openClass} ${errorClass}`}
        ref={reference}
        {...restProps}
      >
        <label onClick={handleOpenItems} className="label">
          {label}
        </label>
        <div className="select" onClick={handleOpenItems}>
          {value ? (
            displayLabel
          ) : (
            <span className="placeholder">{displayLabel.replace("*", "")}</span>
          )}
          <div className="arrow">
            <svg
              focusable="false"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
            </svg>
          </div>
        </div>
        {open && <ul className={`select-list ${openClass}`}>{itemsList}</ul>}
        <p className="error-text">{errors && errors[name]?.message}&nbsp;</p>
      </div>
    );
  }
);
