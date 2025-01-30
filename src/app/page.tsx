import Link from "next/link";
import { HydrateClient } from "~/trpc/server";

export default async function Home() {
  return (
    <HydrateClient>
      <div className="text-center">
        <div>Create T3 App</div>

        <div>
          <Link className="hover:text-blue-500 hover:underline" href={"/login"}>
            Login
          </Link>
        </div>
      </div>
    </HydrateClient>
  );
}
