import React from "react";

import { useRef } from "react";

function Stepper({ stage }) {
  const stage1 = useRef(null);
  const stage2 = useRef(null);
  const stage3 = useRef(null);
  const stage4 = useRef(null);
  const stage5 = useRef(null);

  return (
    <aside>
      <span className="line-stepper"></span>
      <div ref={stage1} id="stage1" className={stage === 1 ? "stage" : ""}></div>
      <div ref={stage2} id="stage2" className={stage === 2 ? "stage" : ""}></div>
      <div ref={stage3} id="stage3" className={stage === 3 ? "stage" : ""}></div>
      <div ref={stage4} id="stage4" className={stage === 4 ? "stage" : ""}></div>
      <div ref={stage5} id="stage5" className={stage === 5 ? "stage" : ""}></div>
    </aside>
  );
}

export default Stepper;
