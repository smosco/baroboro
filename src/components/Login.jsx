import React from "react";
import { KAKAO_AUTH_URL } from "../helper/auth";

export default function Login() {
  return (
    <a href={KAKAO_AUTH_URL}>
      <span>카카오계정 로그인</span>
    </a>
  );
}
