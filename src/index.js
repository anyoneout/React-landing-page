import React from "react";
import { createRoot } from "react-dom/client";
import handleClick from "./utils/handleClick";
import handleSubmit from "./utils/handleSubmit";

const root = createRoot(window.bodyTag);
root.render(
  <main>
    <h1>Hello World! test new</h1>
    <form onSubmit={handleSubmit}>
      <input type="email"></input>
      <input type="submit"></input>
    </form>
  </main>
)