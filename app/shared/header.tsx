import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div>
      <header className='box-border w-screen py-[2vh] px-[15vw] flex flex-col top-page-header'>
        <div className='search-bar-contents flex justify-between items-center'>
          <Image
            src="/images/furima-logo-color.png"
            alt="Furima Logo"
            className="furima-icon w-[10vw] mr-[10vw]"
            width={100}
            height={100}
          />
          {/* <%= link_to image_tag("furima-logo-color.png", class:"furima-icon"), "/" %> */}
          <form className="search-form flex mb-[5px] w-[65vw] h-[5vh]" action="#">
            <input className='input-box w-full h-[5vh] pl-2' placeholder='キーワードから探す' />
            <button type="submit" className="search-button w-[5vh] border-0 cursor-pointer bg-[#3ccace] p-2">
              <Image
                src="/images/search.png"
                alt="search-icon"
                className="search-icon w-full"
                width={100}
                height={100}
              />
            </button>
          </form>
        </div>
        <div className='nav text-[18px] flex justify-between flex-wrap w-full py-[1vh]'>
          <ul className='lists-left flex min-w-[200px]'>
            <li>
              <Link href="#" className="category-list no-underline mr-[3vw] text-[#333333]">
                カテゴリー
              </Link>
              {/* <%= link_to 'カテゴリー', "#", class: "category-list" %> */}
            </li>
            <li>
              <Link href="#" className="brand-list no-underline text-[#333333]">
                ブランド
              </Link>
              {/* <%= link_to 'ブランド', "#", class: "brand-list" %> */}
            </li>
          </ul>
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
      </header>
    </div>
  )
}