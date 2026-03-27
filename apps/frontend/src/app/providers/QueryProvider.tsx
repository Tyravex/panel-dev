import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const client = new QueryClient();

export const QueryProvider = ({ children }: any) => {
  return (
    <QueryClientProvider client={client}>
      {children}
    </QueryClientProvider>
  );
};