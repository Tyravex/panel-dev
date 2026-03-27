import { QueryProvider, ThemeProvider } from "@/app/providers";
import { useEffect } from "react";
import { useAuthStore } from "@/app/store/auth.store";
import { AppRouter } from "@/app/router/RouterProvider";

function App() {
  const login = useAuthStore((s) => s.login);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      login({
        user: { id: "1", email: "persisted" },
        token,
      });
    }
  }, []);

  return <AppRouter />;
  // return (
  //   <ThemeProvider>  
  //     <QueryProvider>
  //       <AppRouter />
  //     </QueryProvider>
  //   </ThemeProvider>
  // );
}

export default App;