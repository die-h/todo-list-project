import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

const Modal = ({ children }: { children: React.ReactNode }) => {
const [onClient, setOnClient] = useState(false)
  useEffect(() => {
    setOnClient(true);
  }, [])
  
  return onClient ? ReactDOM.createPortal(children, document.getElementById("modal") as HTMLElement) : null

};

export { Modal };
