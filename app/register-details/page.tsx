import React from 'react'

export default function registerDetails() {
  return (
    <div className='w-full min-w-[800px] h-full bg-gray-100 flex justify-center'>
      <div className='w-1/2 bg-white pb-16'>
        <div className='w-full h-[120px] text-center text-lg'>
          <h1 className='leading-[100px] border-b border-gray-200 font-bold'>
            会員情報入力
          </h1>
        </div>

        <div className="w-1/2 flex flex-col mx-auto pt-5">
          <div className='w-full h-[20%]'>
            <label htmlFor="nickname" className="text-sm font-bold">ニックネーム</label>
            <span className="text-red-500">必須</span>
          </div>
          <textarea id="nickname" className="input-default w-full mt-1 h-[48px] p-2 rounded border border-gray-300 bg-white text-lg resize-none" placeholder='例) furima太郎' maxLength={40} />
        </div>
        <div className="w-1/2 flex flex-col mx-auto pt-5">
          <div className='w-full h-[20%]'>
            <label htmlFor="email" className="text-sm font-bold">メールアドレス</label>
            <span className="text-red-500">必須</span>
          </div>
          <input id="email" className="input-default w-full mt-1 h-[48px] p-2 rounded border border-gray-300 bg-white text-lg" placeholder='PC・携帯どちらでも可' />
        </div>
        <div className="w-1/2 flex flex-col mx-auto pt-5">
          <div className='w-full h-[20%]'>
            <label htmlFor="password" className="text-sm font-bold">パスワード</label>
            <span className="text-red-500">必須</span>
          </div>
          <input id="password" className="input-default w-full mt-1 h-[48px] p-2 rounded border border-gray-300 bg-white text-lg" placeholder='6文字以上の半角英数字' />
          <p className='text-gray-600 text-base mt-1'>※英字と数字の両方を含めて設定してください</p>
        </div>
        <div className="w-1/2 flex flex-col mx-auto pt-5">
          <div className='w-full h-[20%]'>
            <label htmlFor="password_confirmation" className="text-sm font-bold">パスワード(確認)</label>
            <span className="text-red-500">必須</span>
          </div>
          <input id="password_confirmation" className="input-default w-full mt-1 h-[48px] p-2 rounded border border-gray-300 bg-white text-lg" placeholder='同じパスワードを入力して下さい' />
        </div>
        <div className="w-1/2 flex flex-col mx-auto pt-5">
          <p className='font-bold'>
            本人確認
          </p>
          <p className='text-base'>
            安心・安全にご利用いただくために、お客さまの本人情報の登録にご協力ください。他のお客さまに公開されることはありません。
          </p>
        </div>
        <div className="w-1/2 flex flex-col mx-auto pt-5">
          <div className='w-full h-[20%]'>
            <label htmlFor="name" className="text-sm font-bold">お名前(全角)</label>
            <span className="text-red-500">必須</span>
          </div>
          <div className='input-name-wrap'>
            <textarea id="last_name" className="input-name w-[130px] mt-1 mx-5 h-[48px] leading-[30px] p-2 rounded border border-gray-300 bg-white text-sm resize-none" placeholder='例) 山田' />
            <textarea id="first_name" className="input-name w-[130px] mt-1 mx-5 h-[48px] leading-[30px] p-2 rounded border border-gray-300 bg-white text-sm resize-none" placeholder='例) 陸太郎' />
          </div>
        </div>
        <div className="w-1/2 flex flex-col mx-auto pt-5">
          <div className='w-full h-[20%]'>
            <label htmlFor="name_kana" className="text-sm font-bold">お名前カナ(全角)</label>
            <span className="text-red-500">必須</span>
          </div>
          <div className='input-name-wrap'>
            <textarea id="last_name_kana" className="input-name w-[130px] mt-1 mx-5 h-[48px] leading-[30px] p-2 rounded border border-gray-300 bg-white text-sm resize-none" placeholder='例) ヤマダ' />
            <textarea id="first_name_kana" className="input-name w-[130px] mt-1 mx-5 h-[48px] leading-[30px] p-2 rounded border border-gray-300 bg-white text-sm resize-none" placeholder='例) リクタロウ' />
          </div>
        </div>
        <div className="w-1/2 flex flex-col mx-auto pt-5">
          <div className='w-full h-[20%]'>
            <label htmlFor="birthday" className="text-sm font-bold">生年月日</label>
            <span className="text-red-500">必須</span>
          </div>
          <div className="input-birth-wrap flex flex-wrap">
            <select id="birth-year" className="w-[75px] h-[45px] p-2 border border-gray-300 rounded bg-white">
              <option value="">-- 年 --</option>
              {Array.from({ length: new Date().getFullYear() - 1930 + 1 }, (_, i) => (
                <option key={i} value={1930 + i}>{1930 + i}</option>
              ))}
            </select>
            <p className="line-height-60 px-2">年</p>

            <select id="birth-month" className="w-[75px] h-[45px] p-2 border border-gray-300 rounded bg-white">
              <option value="">-- 月 --</option>
              {Array.from({ length: 12 }, (_, i) => (
                <option key={i} value={i + 1}>{i + 1}</option>
              ))}
            </select>
            <p className="line-height-60 px-2">月</p>

            <select id="birth-day" className="w-[75px] h-[45px] p-2 border border-gray-300 rounded bg-white">
              <option value="">-- 日 --</option>
              {Array.from({ length: 31 }, (_, i) => (
                <option key={i} value={i + 1}>{i + 1}</option>
              ))}
            </select>
            <p className="line-height-60 px-2">日</p>
          </div>
          <p className='text-gray-600 text-base mt-1'>※ 本人情報は正しく入力してください。会員登録後、修正するにはお時間を頂く場合があります。</p>
        </div>
        <div className="w-1/2 flex flex-col mx-auto pt-5">
          <h2 className='text-base mt-2 text-center'>
            「会員登録」のボタンを押すことにより、
            <span>利用規約</span>
            に同意したものとみなします
          </h2>
        </div>
        <div className='w-1/2 mx-auto'>
          <button type="submit" className="w-full bg-red-600 border border-red-600 text-white leading-[48px] text-sm cursor-pointer">会員登録</button>
        </div>
        <p className='mt-8 mr-44 text-blue-500 text-right cursor-pointer'>本人情報の登録について</p>
      </div>
    </div>
  )
}