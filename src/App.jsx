import { useRef } from "react";
import "./App.css";
import { Header } from "./Header";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(1, "O nome é obrigatório"),
  email: z
    .string()
    .email("Digite um email válido")
    .min(1, "O email é obrigatório"),
  username: z
    .string()
    .min(3, "O username deve ter mais de 3 caracteres")
    .max(10, "O username deve ter menos de 10 caracteres").min(1, "Username é obrigatório"),
});

function App() {
  const { register, handleSubmit } = useForm();

  function handleSave(data) {
    console.log(data);
  }

  return (
    <div className="container">
      <h1>React</h1>
      <Header />

      <form className="form" onSubmit={handleSubmit(handleSave)}>
        <input
          type="text"
          placeholder="Digite seu nome..."
          className="input"
          {...register("name")}
          id="name"
        />

        <input
          type="text"
          placeholder="Digite seu email..."
          className="input"
          {...register("email")}
          id="email"
        />

        <input
          type="text"
          placeholder="Digite seu username..."
          className="input"
          {...register("username")}
          id="username"
        />

        <button className="button" type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
}

export default App;
