import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
    return new Response(JSON.stringify({ ok: true }));
}