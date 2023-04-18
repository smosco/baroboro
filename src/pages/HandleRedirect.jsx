import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function HandleRedirect() {
  const navigate = useNavigate();
  let code = new URL(window.location.href).searchParams.get("code");

  useEffect(() => {
    localStorage.setItem("code", code);
    navigate("/", { replace: true });
  });
  return <div>Redirecting</div>;
}
