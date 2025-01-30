import { Suspense } from "react";
import ContactsHeader from "./ContactsHeader";

export default function Contacts({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <ContactsHeader />
      <br />
      <hr />

      <Suspense>{children}</Suspense>
    </>
  );
}
