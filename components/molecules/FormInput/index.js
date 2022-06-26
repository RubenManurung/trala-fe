import React from "react";
import InputContainer from "./InputContainer";
import Label from "@components/atom/Label";
import Input from "@components/atom/Input";
import TextError from "@components/atom/TextError";
import IconContainer from "./IconContainer";

const FormInput = (props) => {
  const {
    title,
    inputValue,
    isIcon,
    activeInputElement,
    errorInput,
    validateInputError,
    inputCategory,
    inputName,
    inputType,
    inputPlaceHolder,
    children,
    ...nativeProps
  } = props;

  return (
    <>
      <Label
        title={title}
        activeInputElement={activeInputElement === inputName}
        errorLabel={errorInput}
      />

      <InputContainer>
        <Input
          inputType={inputType}
          inputName={inputName}
          inputValue={inputValue}
          errorInput={errorInput}
          inputPlaceHolder={inputPlaceHolder}
          {...nativeProps}
        />

        {isIcon && <IconContainer>{children}</IconContainer>}
      </InputContainer>
      <TextError>{validateInputError}</TextError>
    </>
  );
};

export default FormInput;
