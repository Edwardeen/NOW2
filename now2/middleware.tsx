// /middleware.ts
import { NextResponse, NextRequest } from "next/server";
import { getServerSession } from "next-auth";
import authOptions from "@/lib/auth";

export async function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;

  // Validate session globally for specific routes
  if (pathname.startsWith("/protected")) {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.redirect(new URL("/login", request.url)); // Redirect to login
    }
  }

  // Validate query parameters for checkTransaction
  if (pathname.startsWith("/finalize/checkTransaction")) {
    const landfillId = searchParams.get("landfillId");
    const waqfId = searchParams.get("waqfId");

    if (!landfillId || !waqfId) {
      return new NextResponse("Missing required parameters", { status: 400 });
    }
  }

  return NextResponse.next(); // Allow the request to proceed
}
