import React, { useEffect } from "react";
import ReactDOM from "react-dom";

  const Modal = ({ children }: { children: React.ReactNode }) => {
    const test = window || false;
    if (window) {
      const modal = document.getElementById("modal") as HTMLElement;
      return ReactDOM.createPortal(children, modal);
    }
    return <></>
  };

export { Modal };
