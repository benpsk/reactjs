import React from "react";

const Grudge = React.memo(({ grudge, onForgive }) => {
  const forgive = () => {
    onForgive(grudge.id);
  };
  console.log("Rendering Grudge", grudge.id);

  return (
    <article className="grudge">
      <h4>{grudge.person}</h4>
      <p>{grudge.reason}</p>

      <div className="forgiven">
        <label>
          <input type="checkbox" checked={grudge.forgiven} onChange={forgive} />
          Forgiven
        </label>
      </div>
    </article>
  );
});

export default Grudge;
