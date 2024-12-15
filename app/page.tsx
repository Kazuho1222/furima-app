import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className='bg-[#f8f8f8]'>
      {/* 画面上部の「人生を変えるフリマアプリ」帯部分 */}
      <div className="w-screen
  bg-[url('/images/furima-header01.png')]
  bg-cover
  bg-no-repeat
  bg-[center_top]
  flex
  flex-col
  items-start
  justify-center
  py-[5vh]
  px-[15vw]
  text-white
  [text-shadow:_0_0_5px_rgba(0,_0,_0,_0.9)]">
        <h2 className='text-[8vh]'>
          人生を変えるフリマアプリ
        </h2>
        <p className='text-[2.5vh] leading-[40px]'>
          FURIMAはだれでもかんたんに出品・購入できる
        </p>
        <p className='text-[2.5vh] leading-[40px]'>
          フリマアプリです
        </p>
        <div className='flex mt-[24px]'>
          <Link href="#">
            <Image
              src={"/images/app-store.svg"}
              alt={""}
              width={100}
              height={100}
              className="mr-[1vw] h-[9vh]"
            />
          </Link>
          <Link href="#">
            <Image
              src={"/images/google-play.png"}
              alt={""}
              width={100}
              height={50}
              className="h-[9vh]"
            />
          </Link>
        </div>
      </div>
      {/* <%# /画面上部の「人生を変えるフリマアプリ」帯部分  %> */}

      {/* <%# FURIMAが選ばれる3つの理由部分 %> */}
      <div className='py-[5vh] px-[15vw]'>
        <h2 className='text-center text-[3.5vh] font-bold mb-[5vh] relative'>
          FURIMAが選ばれる3つの理由
        </h2>
        <ul className='flex justify-between flex-wrap'>
          <li className='w-[33vh] flex flex-col items-center relative'>
            <Image
              src="/images/furima-intro01.png"
              alt="furima-intro01"
              className="mb-5 w-full"
              width={200}
              height={200}
            />
            <span className='absolute top-0 left-0 w-[60px] h-[60px] text-[30px] text-center leading-[60px] bg-[#3ccace] text-white'>1</span>
            <h3 className='font-bold text-[24px] leading-[50px]'>
              <span className='text-[#3ccace]'>3分</span>
              ですぐに出品
            </h3>
            <p className='text-[18px] mt-5'>
              スマホで入力するだけで簡単に出品できる！
            </p>
          </li>
          <li className='w-[33vh] flex flex-col items-center relative'>
            <Image
              src="/images/furima-intro02.png"
              alt="furima-intro02"
              className="mb-5 w-full"
              width={200}
              height={200}
            />
            <span className='absolute top-0 left-0 w-[60px] h-[60px] text-[30px] text-center leading-[60px] bg-[#3ccace] text-white'>2</span>
            <h3 className='font-bold text-[24px] leading-[50px]'>
              <span className='text-[#3ccace]'>シンプル</span>
              で使いやすい
            </h3>
            <p className='text-[18px] mt-5'>
              めんどくさい入力は必要なく、検索も購入もスムーズ！
            </p>
          </li>
          <li className='w-[33vh] flex flex-col items-center relative'>
            <Image
              src="/images/furima-intro03.png"
              alt="furima-intro03"
              className="mb-5 w-full"
              width={200}
              height={200}
            />
            <span className='absolute top-0 left-0 w-[60px] h-[60px] text-[30px] text-center leading-[60px] bg-[#3ccace] text-white'>3</span>
            <h3 className='font-bold text-[24px] leading-[50px]'>
              手数料
              <span className='text-[#3ccace]'>業界最安</span>
            </h3>
            <p className='text-[18px] mt-5'>
              10%でお得に出品&購入！
            </p>
          </li>
        </ul>
      </div>
      {/* <%# /FURIMAが選ばれる3つの理由部分 %> */}

      {/* <%# 画面中央の「会員数日本一位」帯部分 %> */}
      <div className="ad-contents w-screen bg-[url('/images/furima-header02.png')] bg-cover bg-no-repeat bg-[center_top] flex flex-col items-start justify-center py-[5vh] px-[15vw] text-white shadow-[0_0_5px_rgba(0,0,0,0.9)]">
        <h2 className='text-[5vh] mb-[2vh]'>
          会員数日本一位
        </h2>
        <p className='text-[2.5vh] leading-[30px]'>
          FURIMAは、フリマアプリで最も人気。
        </p>
        <p className='text-[2.5vh] leading-[30px]'>
          出品・購入回数も業界最多です！
        </p>
        <p className='text-[2.5vh] leading-[30px]'>
          ほしかったあの商品に出会えるかもしれません。
        </p>
        <div className='flex mt-6'>
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
      {/* <%# /画面中央の「会員数日本一位」帯部分 %> */}

      {/* <%# FURIMAの特徴 %> */}
      <div className='py-[5vh] px-[15vw]'>
        <h2 className='text-center text-[3.5vh] font-bold mb-[5vh] relative'>
          FURIMAの特徴
        </h2>
        <ul className='flex justify-between flex-wrap'>
          <li className='w-[33vh] flex flex-col items-center'>
            <Image
              src="/images/furima-intro04.png"
              alt="furima-intro04"
              className="mb-[20px] w-full"
              width={200}
              height={200}
            />
            <h3 className='font-bold text-[22px] leading-[50px]'>
              簡単に売り買いできる
            </h3>
            <p className='text-[18px] mt-5'>
              スマホひとつで、いつでもどこでも簡単に出品・購入が可能！
            </p>
          </li>
          <li className='w-[33vh] flex flex-col items-center'>
            <Image
              src="/images/furima-intro05.png"
              alt="furima-intro05"
              className="mb-[20px] w-full"
              width={200}
              height={200}
            />
            <h3 className='font-bold text-[22px] leading-[50px]'>
              売上金は即日振込みに対応
            </h3>
            <p className='text-[18px] mt-5'>
              午前9時までに振込を依頼いただければ、翌日に指定の口座に入金いたします。
            </p>
          </li>
          <li className='w-[33vh] flex flex-col items-center'>
            <Image
              src="/images/furima-intro06.png"
              alt="furima-intro06"
              className="mb-[20px] w-full"
              width={200}
              height={200}
            />
            <h3 className='font-bold text-[22px] leading-[50px]'>
              様々な支払いに対応
            </h3>
            <p className='text-[18px] mt-5'>
              お支払いは、クレジットカードだけでなく、ポイントや売上金など多彩な方法があります。
            </p>
          </li>
        </ul>
      </div>
      {/* <%# /FURIMAの特徴 %> */}

      {/* <%# 商品一覧 %> */}
      <div className='bg-white flex flex-col items-center py-[10vh]'>
        <h2 className='text-[5vh] font-bold leading-[1.4]'>ピックアップカテゴリー</h2>
        <div className="text-[3vh] my-[1vh] text-[#3ccace] font-bold" >
          新規投稿商品
        </div>
        <ul className='w-screen flex flex-wrap justify-center'>
          {/* <% if @items.present? %> */}
          {/* <% @items.each do |item| %> */}
          <li className='w-[37vh] p-[1vw] bg-white'>
            {/* <%= link_to "/items/#{item.id}" do %> */}
            <div className='relative'>
              <Image
                src="/images/item.jpg"
                alt="Item"
                className="item-img w-[33vh] h-[33vh]"
                width={200}
                height={200}
              />
              {/* <%= image_tag item.image, class: "item-img" %> */}

              {/* アイテムが売り切れの場合 */}
              {/* <% if item.order.present? %> */}
              <div className='absolute top-[40%] w-full text-center bg-crimson transform skew-y-[-10deg]'>
                <span className="text-white text-[45px] font-bold">Sold Out!!</span>
              </div>

            </div>
            <div className='bg-white text-black p-[1vw]'>
              <h3 className='text-[2.5vh]'>
                {/* アイテム名 */}
              </h3>
              <div className='text-[1.5vh] flex justify-between'>
                <span>（値段）円<br />
                  {/* item.postage.name */}
                </span>
                <div className='flex items-center'>
                  <Image
                    src="/images/star.png"
                    className="h-[2vh] w-[2vh] mr-[0.5vw]"
                    alt="star-icon"
                    width={100}
                    height={100}
                  />
                  <span className='text-[2vh]'>0</span>
                </div>
              </div>
            </div>
            {/* <% end %> */}
          </li>
          {/* <% end %> */}

          {/* else */}
          <li className='w-[37vh] p-[1vw] bg-white'>
            {/* <%= link_to '#' do %> */}
            <Image
              src="https://tech-master.s3.amazonaws.com/uploads/curriculums/images/Rails1-4/sample.jpg"
              width={500}
              height={500}
              className="item-img"
              alt="image_tag"
            />
            <div className='bg-white text-black p-[1vw]'>
              <h3 className='text-[2.5vh]'>
                商品を出品してね！
              </h3>
              <div className='text-[1.5vh] flex justify-between'>
                <span>99999999円<br />(税込み)</span>
                <div className='flex items-center'>
                  <Image
                    src="/images/star.png" className="h-[2vh] w-[2vh] mr-[0.5vw]" alt="star-icon"
                    width={100}
                    height={100}
                  />
                  <span className='text-[2vh]'>0</span>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      {/* 商品一覧 */}
      {/* 出品ボタン */}
    </div >
  )
}