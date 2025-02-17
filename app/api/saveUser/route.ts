import { createClerkSupabaseClient } from "@/supabaseClient";
import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { user_id, email, hashedPassword, firstName, lastName, nickname, firstNameKana, lastNameKana, birthday, sessionToken } = await request.json();

  // Supabaseクライアントを作成
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || '',
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '',
  )
  // Supabaseにユーザーデータを挿入
  const { data, error } = await supabase
    .from('User') // テーブル名をUserに変更
    .upsert({
      user_id, email, hashedPassword: hashedPassword || "未設定", firstName: firstName || "未設定", lastName: lastName || "未設定", nickname: nickname || "未設定", firstNameKana: firstNameKana || "未設定", lastNameKana: lastNameKana || "未設定", birthday: birthday || '1970-01-01'
    });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
  return NextResponse.json({ data });
}