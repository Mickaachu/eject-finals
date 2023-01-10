import Head from "next/head"
import MyForm from "./form"

export default function Home() {
  return (
    <>
      <Head>
        <title>Form Registration</title>
      </Head>
      <div class="mainDiv">
        <MyForm />
      </div>
    </>
  )
}