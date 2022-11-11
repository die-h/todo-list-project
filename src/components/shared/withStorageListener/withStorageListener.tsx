import React, { useState, useEffect } from "react";
import { storageChangeAlert } from "types";

function withStorageListener(
  WrappedComponent: React.ComponentType<storageChangeAlert>
) {
  return function WrapperComponentWithStorageListener() {
    useEffect(() => {
      window.addEventListener("storage", (e) => {
        console.log(e.key);
        if (e.key === "dh_todos_V1") {
          window.location.reload();
        }
      });
    }, []);

    const [storageChange, setStorageChange] = useState<boolean>(false);
    return (
      <WrappedComponent show={storageChange} toggleShow={setStorageChange} />
    );
  };
}

export { withStorageListener };
