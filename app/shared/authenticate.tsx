'use client'

import { createClerkSupabaseClient } from '@/supabaseClient';
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton, useUser } from '@clerk/nextjs';
import { useEffect } from 'react';

export default function Authenticate() {
  const { user } = useUser();
  const supabase = createClerkSupabaseClient();

  useEffect(() => {
    const saveUserToSupabase = async () => {
      if (user) {
        const { id, hashedPassword, firstName, lastName, nickname, firstNameKana, lastNameKana, birthday } = user as unknown as { id: string, hashedPassword: string, firstName: string, lastName: string, nickname: string, firstNameKana: string, lastNameKana: string, birthday: Date };
        // emailAddressesからメールアドレスを取得
        const email = user.emailAddresses[0]?.emailAddress; // 最初のメールアドレスを取得

        if (!email) {
          console.error('Email is required but is null or undefined.');
          return; // 処理を中断
        }

        // Supabaseにユーザーデータを挿入
        const { data, error } = await supabase
          .from('User') // テーブル名をUserに変更
          .upsert({
            user_id: id, email, hashedPassword: hashedPassword || "未設定", firstName: firstName || "未設定", lastName: lastName || "未設定", nickname: nickname || "未設定", firstNameKana: firstNameKana || "未設定", lastNameKana: lastNameKana || "未設定", birthday: birthday || '1970-01-01'
          });

        if (error) {
          console.error('ユーザーデータの挿入エラー:', error);
        } else {
          console.log('ユーザーデータがSupabaseに保存されました:', data);
        }
      }
    };

    saveUserToSupabase();
  }, [user]);

  return (
    <div>
      <ul className='lists-right flex list-none items-end'>
        {/* <% if user_signed_in? %> */}
        <li>
          <SignedIn>
            <UserButton />
          </SignedIn>
          {/* <%= link_to current_user.nickname, "#", class: "user-nickname" %> */}
        </li>
        <li>
          {/* <%= link_to 'ログアウト', "/users/sign_out", method: :delete, class: "logout" %> */}
        </li>
        {/* <% else %> */}
        <li>
          <SignedOut>
            <SignInButton>
              <button className="login no-underline text-[#333333] leading-[32px] mr-[3vw]">
                ログイン
              </button>
            </SignInButton>
          </SignedOut>
          {/* <%= link_to 'ログイン', "/users/sign_in", class: "login" %> */}
        </li>
        <li>
          <SignedOut>
            <SignUpButton>
              <button className="sign-up no-underline text-[#333333]">
                新規登録
              </button>
            </SignUpButton>
          </SignedOut>
          {/* <%= link_to '新規登録', "/users/sign_up", class: "sign-up" %> */}
        </li>
      </ul>
    </div>
  )
}


