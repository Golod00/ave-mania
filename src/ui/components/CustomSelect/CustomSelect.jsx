"use client";

import { useState, useRef, useEffect } from "react";
import classes from "./CustomSelect.module.scss";

export default function CustomSelect({
  options,
  value,
  onChange,
  placeholder,
  parentClassName,
  selectedClassName,
  name
}) {
  const [open, setOpen] = useState(false);
  const selectRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (selectRef.current && !selectRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (val) => {
    onChange({ target: { name, value: val } });
    setOpen(false);
  };

  const selectedLabel = options.find((o) => o.value === value)?.label || placeholder;

  return (
    <div className={`${classes.customSelect} ${parentClassName || ""}`} ref={selectRef}>
      <div className={`${classes.selected} ${selectedClassName || ""}`} onClick={() => setOpen(prev => !prev)}>
        {selectedLabel}
        <span className={classes.arrow}>
          {open ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M9.071 4.29277L14.728 9.94977L13.314 11.3638L8.364 6.41377L3.414 11.3638L2 9.94977L7.657 4.29277C7.84453 4.1053 8.09884 3.99998 8.364 3.99998C8.62916 3.99998 8.88347 4.1053 9.071 4.29277Z" fill="black"/>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M9.071 11.071L14.728 5.414L13.314 4L8.364 8.95L3.414 4L2 5.414L7.657 11.071C7.84453 11.2585 8.09884 11.3638 8.364 11.3638C8.62916 11.3638 8.88347 11.2585 9.071 11.071Z" fill="black"/>
            </svg>
          )}
        </span>
      </div>
      {open && (
        <ul className={classes.options}>
          {options.map((opt) => (
            <li
              key={opt.value}
              className={opt.value === value ? classes.active : ""}
              onClick={() => handleSelect(opt.value)}
            >
              {opt.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}