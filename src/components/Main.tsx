import React from "react";
import Header from "./header/Header";
import MainContent from "./MainContent";

export default function Main() {
  return (
    <div className={`w-full min-h-screen overflow-hidden`}>
      <Header />
      <MainContent />
    </div>
  );
}
