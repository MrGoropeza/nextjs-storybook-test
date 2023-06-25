"use client";

import { useState } from "react";
import { UiDropdown } from "./components";

export default function Home() {
  const [value, setValue] = useState(null);
  const options = ["Opcion 1", "Opcion 2"];

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <UiDropdown
        inputId="hola"
        label="Label"
        placeholder="Placeholder"
        options={options}
        value={value}
        onChange={(e) => setValue(e.value)}
        error="Campo requerido."
        touched
        showClear
        floatLabel
      />

      <UiDropdown
        inputId="hola"
        label="Label"
        placeholder="Placeholder"
        options={options}
        value={value}
        onChange={(e) => setValue(e.value)}
        error="Campo requerido."
        touched
        showClear
        floatLabel
      />
    </main>
  );
}
