import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { Route, Routes } from "react-router-dom";
import Unauthenticated from "./components/Unauthenticated";

export default function App() {
  return (
    <MantineProvider
      theme={{
        primaryColor: "blue",
        fontFamily: "Montserrat, sans-serif",
        defaultRadius: 8,
      }}
    >
      <Notifications position="top-right" />
      <Routes>
        <Route path="/*" element={<Unauthenticated />} />
      </Routes>
    </MantineProvider>
  );
}
