import React, { useEffect, useState } from "react";
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
import { getUserLogged, putAccessToken } from "./utils/api";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LocaleProvider } from "./contexts/LocaleContext";
import "./styles/style.css";

const App = () => {
  const [authUser, setAuthUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [locale, setLocale] = useState(localStorage.getItem("locale") || "id");

  useEffect(() => {
    checkAuth();
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const checkAuth = async () => {
    const { data } = await getUserLogged();
    setAuthUser(data);
    setLoading(false);
  };

  const onLoginHandler = async ({ accessToken }) => {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();
    setAuthUser(data);
  };

  const onLogout = () => {
    setAuthUser(null);
    putAccessToken("");
  };

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  const toggleLocale = () => {
    const newLocale = locale === "id" ? "en" : "id";
    localStorage.setItem("locale", newLocale);
    setLocale(newLocale);
  };

  if (loading) {
    return null;
  }

  if (authUser === null) {
    return (
      <ThemeProvider value={{ theme, toggleTheme }}>
        <LocaleProvider value={{ locale, toggleLocale }}>
          <div className="main-container">
            <header>
              <Header user={authUser} />
            </header>
            <main>
              <Routes>
                <Route
                  path="/*"
                  element={
                    <LoginPage onLogin={(data) => onLoginHandler(data)} />
                  }
                />
                <Route path="/register" element={<RegisterPage />} />
                {/* 404 Page */}
                <Route path="*" element={<LostPage />} />
              </Routes>
            </main>
          </div>
        </LocaleProvider>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider value={{ theme, toggleTheme }}>
      <LocaleProvider value={{ locale, toggleLocale }}>
        <div className="main-container">
          <header>
            <Header user={authUser} logout={() => onLogout()} />
          </header>
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/notes/:id" element={<DetailPage />} />
              <Route path="/arsip" element={<ArchivePage />} />
              {/* 404 Page */}
              <Route path="*" element={<LostPage />} />
            </Routes>
          </main>
        </div>
      </LocaleProvider>
    </ThemeProvider>
  );
};

export default App;
