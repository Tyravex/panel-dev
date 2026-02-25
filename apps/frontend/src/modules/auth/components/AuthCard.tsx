export const AuthCard = ({ title, children }: any) => {
  return (
    <div className="w-full max-w-md
        rounded-2xl
        border border-white/10
        bg-white/5
        backdrop-blur
        p-8
        shadow-xl">
      <h2 className="text-2xl font-semibold mb-6">{title}</h2>
      {children}
    </div>
  );
};