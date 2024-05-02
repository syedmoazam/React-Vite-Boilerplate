import {QueryClientProvider} from "@tanstack/react-query";
import {queryClient} from "@services/reactQueryService";
import AuthProvider from "@context/auth/AuthProvider";
import {RouterProvider} from "react-router-dom";
import router from "./routes/router";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  )
}

export default App
