"use client";

import { useParams } from "next/navigation";

export default function EditContactPage() {
  const { contactId } = useParams();

  return <div>Edit Contact (ContactId = {contactId})</div>;
}
