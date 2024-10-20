import React from "react";

function MainLayout({ children }) {
  return (
    <div>
      <header>Header</header>
      {children}
    </div>
  );
}

export default MainLayout;
