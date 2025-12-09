import React, { ReactNode } from "react";

interface BtnProps {
  children: ReactNode;
  btnPrimary: boolean;
}

export const Btn = ({ children, btnPrimary }: BtnProps) => {
  return (
    <button
      className={` outline-0 cursor-pointer p-3.5  transition rounded-full text-center pt-2 ${
        btnPrimary
          ? "text-white bg-(--color-primary) hover:bg-(--neutral-500)"
          : " hover:text-(--color-primary)"
      }`}
    >
      {children}
    </button>
  );
};
