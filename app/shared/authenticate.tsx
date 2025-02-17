'use client'

import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton, useSession, useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Authenticate() {
  const { user } = useUser();
  const { session } = useSession(); // クライアントサイドでセッションを取得
  const router = useRouter();

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

        // サーバーアクションを呼び出す
        const response = await fetch('/api/saveUser', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            user_id: id,
            email,
            firstName,
            lastName,
            nickname,
            firstNameKana,
            lastNameKana,
            birthday,
            sessionToken: session?.getToken(), // セッション情報を送信
          }),
        });

        const result = await response.json();
        if (result.ok) {
          console.log('ユーザーデータがSupabaseに保存されました:', result.data);
          // 詳細情報登録ページに遷移
          router.push('/register-details');
        } else {
          console.error('ユーザーデータの挿入エラー:', result.error);
        }
      }
    };

    saveUserToSupabase();
  }, [user, session, router]);

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


