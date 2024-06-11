import { useRef, useState } from "react";
import "./App.css";
import {Header } from "./Header";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// const schema = z.object({
//   name: z.string().min(1, "O nome é obrigatório"),
//   email: z
//     .string()
//     .email("Digite um email válido")
//     .min(1, "O email é obrigatório"),
//   username: z
//     .string()
//     .min(3, "O username deve ter mais de 3 caracteres")
//     .max(10, "O username deve ter menos de 10 caracteres")
//     .min(1, "Username é obrigatório"),
//   telefone: z.string().refine((value) => /^\d{2} ?\d{9}$/.test(value), {
//     message: "Digite um número válido no formato DD + 9 Números",
//   }),
// });

function App() {
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm({
  //   resolver: zodResolver(schema),
  // });

  // function handleSave(data) {
  //   console.log(data);
  // }
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="container">
      <h1>React</h1>
      <Header nome={nome}/>

      {/* <form className="form" onSubmit={handleSubmit(handleSave)}>
        <input
          type="text"
          placeholder="Digite seu nome..."
          className="input"
          {...register("name")}
          id="name"
        />
        {errors.name && <p className="error">{errors.name.message}</p>}

        <input
          type="text"
          placeholder="Digite seu email..."
          className="input"
          {...register("email")}
          id="email"
        />
        {errors.email && <p className="error">{errors.email.message}</p>}

        <input
          type="text"
          placeholder="Digite seu username..."
          className="input"
          {...register("username")}
          id="username"
        />
        {errors.username && <p className="error">{errors.username.message}</p>}

        <input
          type="text"
          placeholder="Digite seu telefone..."
          className="input"
          {...register("telefone")}
          id="telefone"
        />
        {errors.telefone && <p className="error">{errors.telefone.message}</p>}

        <button className="button" type="submit">
          Enviar
        </button>
      </form> */}
      <input
        type="text"
        placeholder="Digite se nome..."
        value={nome}
        onChange={(e) => {
          setNome(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Digite se email..."
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
    </div>
  );
}

export default App;
