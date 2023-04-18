import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          navigate("/write");
        }}
      >
        차용증 쓰기
      </button>
    </div>
  );
}
