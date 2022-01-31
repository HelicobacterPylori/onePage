import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from "react";

const Home: NextPage = () => {

  const onChangeUserId = () => {
    console.log("onChangeUserId");
  }

  const onChangePassword = () => {
    console.log("onChangePassword");
  }

  const onClickLogin = () => {
    console.log(userId + " / " + password);
  }

  const [ userId, setUserId ] = useState("");
  const [ password, setPassword ] = useState("");
  
    return (
    <div>
      <Head>
        <title>PDF管理 - ログイン</title>
      </Head>

      <main>
        ユーザID：
        <input
            placeholder={"UserId"}
            type={"text"}
            value={userId}
            onChange={onChangeUserId}
          /><br/>
          パスワード:
        <input
            placeholder={"PassWord"}
            type={"password"}
            value={password}
            onChange={onChangePassword}
          /><br/>
        <button
          onClick={onClickLogin}
        >ログイン</button>
      </main>
    </div>
  )
}

export default Home
