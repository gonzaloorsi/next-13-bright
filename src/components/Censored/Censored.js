"use client";

import React from "react";

function Censored({ children }) {
  const [isCensored, setIsCensored] = React.useState(false);

  return (
    <>
      {isCensored ? (
        children
      ) : (
        <div className="reveal">
          <button onClick={() => setIsCensored(!isCensored)}>
            Reveal Content
          </button>
        </div>
      )}
    </>
  );
}

export default Censored;
