import { useEffect } from "react";
import { Toaster, toast, useToasterStore } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/main.router";
import { AppContextProvider } from "./shared/context/AppContext";

function App() {
  const { toasts } = useToasterStore();
  const TOAST_LIMIT = 5;

  useEffect(() => {
    toasts
      .filter((t) => t.visible)
      .filter((_, i) => i >= TOAST_LIMIT)
      .forEach((t) => toast.dismiss(t.id));
  }, [toasts]);

  return (
    <AppContextProvider>
      <Toaster position="top-right" />
      <RouterProvider router={router} />
    </AppContextProvider>
  );
}

export default App;
