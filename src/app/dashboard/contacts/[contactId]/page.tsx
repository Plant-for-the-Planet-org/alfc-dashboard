"use client";

import { useParams } from "next/navigation";
import CardExample from "~/app/_components/CardExample";

export default function ViewContactPage() {
  const { contactId } = useParams();

  return (
    <div>
      <p>View Contact (ContactId = {contactId})</p>
      <br />
      <CardExample />
    </div>
  );
}
