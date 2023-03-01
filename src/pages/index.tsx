import Header from "@/components/Header"
import { Inter } from "next/font/google"
import Head from "next/head"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <>
      <main>
        <Head>
          <title>Portfolio</title>
        </Head>

        <section>
          <Header />
        </section>
        {/* Header */}
      </main>
    </>
  )
}
