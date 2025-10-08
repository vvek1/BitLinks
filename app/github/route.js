import { redirect } from "next/navigation";

export function GET() {
  const repo = "https://github.com/vvek1/BitLinks";
  redirect(repo);
}


