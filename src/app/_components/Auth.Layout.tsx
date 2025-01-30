interface AuthLayoutProps {
  children?: React.ReactNode;
}
export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div>
      <div className="flex h-screen w-screen items-center justify-center">
        <div>{children}</div>
      </div>
    </div>
  );
}
