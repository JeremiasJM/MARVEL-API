import React from "react";

export const Container = ({ children }) => {
  return (
    <main className="container-mcu">
      <h3>Busca a tus personajes del  </h3>
      <h3>Universo Cinematográfico de Marvel</h3>
      {children}
    </main>
  );
};
