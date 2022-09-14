import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { ArchivePage, DetailPage, HomePage, LostPage } from "./pages";

const App = () => {
  return (
    <div className="main-container">
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/note/:id" element={<DetailPage />} />
          <Route path="/arsip" element={<ArchivePage />} />
          {/* 404 Page */}
          <Route path="*" element={<LostPage />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
