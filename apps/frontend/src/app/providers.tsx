import { AuthProvider } from "@/modules/auth/store/auth.store";

export const AppProviders = ({ children }: any) => {
  return (
    <AuthProvider>{children}</AuthProvider>
  );
};
