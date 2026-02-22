export const AuthCard = ({ title, children }: any) => {
  return (
    <div className="w-full max-w-md bg-surface p-8 rounded-xl shadow-xl">
      <h2 className="text-2xl font-semibold mb-6">{title}</h2>
      {children}
    </div>
  );
};