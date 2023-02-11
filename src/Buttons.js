import React from "react";
import { useGlobalContext } from "./context";

const Buttons = () => {
  const { isLoading, page, nbPages, handleAction } = useGlobalContext();
  return (
    <div className="btn-container">
      <button disabled={isLoading} onClick={() => handleAction("dec")}>
        prev
      </button>
      <p>
        {page + 1}/{nbPages}
      </p>
      <button disabled={isLoading} onClick={() => handleAction("inc")}>
        next
      </button>
    </div>
  );
};

export default Buttons;
