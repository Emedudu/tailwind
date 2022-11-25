import React from "react";
import { lorem } from "../lib/lorem";

function Overview(props) {
  return (
    <div className="flex flex-wrap border rounded-lg p-5">
      <p>{lorem}</p>
    </div>
  );
}

export default Overview;
