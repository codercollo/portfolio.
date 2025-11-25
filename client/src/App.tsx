import React from "react";
import RoutesRoot from "./routes";
import BaseLayout from "./layout/BaseLayout";

export default function App() {
  return (
    <BaseLayout>
      <RoutesRoot />
    </BaseLayout>
  );
}
