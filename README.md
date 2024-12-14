This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

フリマアプリをモダンなスタックで再構築する計画について、以下のように段階的なアプローチを提案

## 1. 技術スタックの利点
```bash
// Next.js 15 + App Routerの基本構造
// app/layout.tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>{children}</body>
    </html>
  )
}
```

## 2. データモデルの移行計画
```bash
// prisma/schema.prisma
model User {
  id              String    @id @default(cuid())
  nickname        String
  email           String    @unique
  hashedPassword  String
  lastName        String
  firstName       String
  lastNameKana    String
  firstNameKana   String
  birthday        DateTime
  items           Item[]
  orders          Order[]
}

model Item {
  id              String    @id @default(cuid())
  name            String
  description     String
  categoryId      Int
  statusId        Int
  postageId       Int
  stateId         Int
  shippingDateId  Int
  price           Int
  userId          String
  user            User      @relation(fields: [userId], references: [id])
  order           Order?
}
```

## 3. API設計
```bash
// app/api/items/route.ts
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const supabase = createRouteHandlerClient({ cookies })
  const { name, price, description } = await request.json()
  
  const { data, error } = await supabase
    .from('items')
    .insert([{ name, price, description }])
    
  return NextResponse.json({ data })
}
```
## 4. 段階的な実装計画  
1. フェーズ1: 基本設定とユーザー認証
- Next.js プロジェクト設定
- Supabase セットアップ
- Prisma スキーマ定義
- ユーザー認証実装  
2. フェーズ2: 商品関連機能
- 商品一覧表示
- 商品詳細表示
- 商品出品機能
- 画像アップロード
3. フェーズ3: 取引機能
- Stripe決済統合
- 購入フロー実装
- 取引履歴管理

## 5. セキュリティ考慮事項
```bash
// middleware.ts
import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'

export async function middleware(req) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res })
  await supabase.auth.getSession()
  return res
}
```

## 6. 開発環境構築手順
```bash
# プロジェクト初期化
npx create-next-app@latest --typescript --tailwind --app

# 必要なパッケージのインストール
npm install prisma --save-dev  
npm install @supabase/supabase-js @prisma/client @stripe/stripe-js @clerk/nextjs

# Prisma初期化
npx prisma init
```

## 主なメリット
1. パフォーマンス向上
- App Routerによるサーバーコンポーネントの活用
- 効率的なデータフェッチング
2. 開発効率
- TypeScriptによる型安全性
- Prismaの強力なORM機能
3. スケーラビリティ
- Supabaseの柔軟なインフラ
- Stripeの信頼性の高い決済システム
## 注意点
1. 移行時の考慮事項
- データの整合性確保
- 既存機能の完全な移植確認
- パフォーマンステスト実施
1. 新機能追加の検討
- リアルタイム更新機能
- より洗練されたUI/UX
- SEO最適化

## 目的
より保守性が高く、スケーラブルなアプリケーション構築