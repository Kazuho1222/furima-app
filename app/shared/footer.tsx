import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div>
      {/* <%# 下部広告部分 %> */}
      <div className="ad-footer-contents w-screen bg-[url('/images/furima-footer.png')] bg-cover bg-no-repeat bg-[center_top] flex flex-col items-center justify-center py-[5vh] px-[15vw] text-white [text-shadow:_0_0_5px_rgba(0,_0,_0,_0.9)]">
        <p className='ad-footer-explain text-[3vh] leading-[30px]'>
          だれでもかんたん、人生を変えるフリマアプリ
        </p>
        <h2 className='ad-footer-title text-[4vh] mb-[2vh]'>
          今すぐ無料ダウンロード！
        </h2>
        <div className='store-btn flex mt-6'>
          <Link href="/apple">
            <Image
              src="/images/app-store.svg"
              alt="Apple Button"
              className="mr-4 h-[9vh]"
              width={100}
              height={100}
            />
          </Link>
          <Link href="/google">
            <Image
              src="/images/google-play.png"
              alt="Google Button"
              className="h-[9vh]"
              width={100}
              height={100}
            />
          </Link>
        </div>
      </div>
      {/* <%# / 下部広告部分 %> */}

      <div className='footer w-screen py-[5vh] bg-[#272727] text-white text-center'>
        <div className='footer-contents flex justify-center mb-[5vh]'>
          <div className='furima-details mx-[4vw]'>
            <h2 className='footer-content-head text-[18px] font-bold mb-[10px]'>FURIMAについて</h2>
            <ul>
              <li>
                <Link href="#" className="footer-link text-[12px] leading-[30px]">会社概要（運営会社）</Link>
              </li>
              <li>
                <Link href="#" className="footer-link text-[12px] leading-[30px]">プライバシーポリシー</Link>
              </li>
              <li>
                <Link href="#" className="footer-link text-[12px] leading-[30px]">FURIMA利用規約</Link>
              </li>
              <li>
                <Link href="#" className="footer-link text-[12px] leading-[30px]">ポイントに関する特約</Link>
              </li>
            </ul>
          </div>
          <div className='furima-details mx-[4vw]'>
            <h2 className='footer-content-head text-[18px] font-bold mb-[10px]'>FURIMAを見る</h2>
            <ul>
              <li>
                <Link href="#" className="footer-link text-[12px] leading-[30px]">カテゴリー一覧</Link>
              </li>
              <li>
                <Link href="#" className="footer-link text-[12px] leading-[30px]">ブランド一覧</Link>
              </li>
            </ul>
          </div>
          <div className='furima-details mx-[4vw]'>
            <h2 className='footer-content-head text-[18px] font-bold mb-[10px]'>FURIMAについて</h2>
            <ul>
              <li>
                <Link href="#" className="footer-link text-[12px] leading-[30px]">FURIMAガイド</Link>
              </li>
              <li>
                <Link href="#" className="footer-link text-[12px] leading-[30px]">FURIMAロゴ利用ガイドライン</Link>
              </li>
              <li>
                <Link href="#" className="footer-link text-[12px] leading-[30px]">お知らせ</Link>
              </li>
            </ul>
          </div>
        </div>
        <Link href="#" className="flex justify-center">
          <Image
            src="/images/furima-logo-white.png"
            alt="logo-white"
            className="logo-white w-[20vh] align-bottom"
            width={200}
            height={200}
          />
        </Link>
        <p className="text-[14px]">© FURIMA</p>
      </div>
    </div >
  )
}