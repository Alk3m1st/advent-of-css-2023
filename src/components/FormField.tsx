import { useState } from "react";
import { Icon } from "./Icon";

type FormFieldProps = {
  label: string;
  name: string;
};

export const PasswordFormField = ({ label, name, ...rest }: FormFieldProps) => {
  const [isPasswordShowing, setIsPasswordShowing] = useState(false);

  const toggle = () => {
    setIsPasswordShowing((prevValue) => !prevValue);
  };

  return (
    <div className="relative">
      <label htmlFor={name}>{label}</label>
      <input
        type={isPasswordShowing ? "text" : "password"}
        id={name}
        name={name}
        placeholder=""
        required
        {...rest}
      />
      <button className="absolute top-8 right-6" onClick={() => toggle()}>
        <Icon id={isPasswordShowing ? "eyeOpened" : "eyeClosed"} size={32} />
      </button>
    </div>
  );
};

export const TextFormField = ({ label, name, ...rest }: FormFieldProps) => {
  return (
    <div className="relative">
      <label htmlFor={name}>{label}</label>
      <input
        type="text"
        id={name}
        name={name}
        placeholder=""
        required
        {...rest}
      />
    </div>
  );
};
