import "./header.css";
import { memo } from "react";

export const Header = memo(({ nome })=>{
  console.log("RENDERIZOU");

  return (<h3 className="header">Bem vindo: {nome}</h3>);
})
