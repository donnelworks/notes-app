import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import {
  ArchivePage,
  DetailPage,
  HomePage,
  LoginPage,
  LostPage,
  RegisterPage,
} from "./pages";

const App = () => {
  const [authUser, setAuthUser] = useState(null);

  if (authUser === null) {
    return (
      <div className="main-container">
        <header>
          <Header />
        </header>
        <main>
          <Routes>
            <Route path="/*" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            {/* 404 Page */}
            <Route path="*" element={<LostPage />} />
          </Routes>
        </main>
      </div>
    );
  }

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
