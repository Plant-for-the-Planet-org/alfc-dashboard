import { Suspense } from "react";
import { TRPCReactProvider } from "~/trpc/react";
import DashboardLayout from "../_components/Dashboard.Layout";

export default function Dashboard({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Suspense>
        <DashboardLayout>
          <TRPCReactProvider>{children}</TRPCReactProvider>
        </DashboardLayout>
      </Suspense>
    </>
  );
}
