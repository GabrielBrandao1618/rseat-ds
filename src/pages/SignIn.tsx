import { FormEvent, useState } from "react";

import axios from 'axios';

import { Checkbox } from "@radix-ui/react-checkbox";
import { Envelope, Lock } from "phosphor-react";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { TextInput } from "../components/TextInput";
import { Text } from "../components/Text";
import { ReactLogo } from "../ReactLogo";

export function SignIn(){
  const [isUserSignedIn, setIsUserSignedIn] = useState(false);

  async function handleSignIn(e: FormEvent){
    e.preventDefault();
    await axios.post('/signin', {
      name: 'Name',
      password: 'password'
    });
    setIsUserSignedIn(true);

  }
  return (
    <div className="w-screen h-screen bg-gray-900 flex items-center flex-col justify-center text-gray-100">
      <header className="flex flex-col items-center">
        <ReactLogo />
        <Heading size='lg' className="mt-4">
          Ignite Lab
        </Heading>
        <Text size="lg" className="text-gray-400 mt-1">
          Faça login e comece a usar
        </Text>
      </header>
      <form 
        className="flex flex-col items-stretch w-full max-w-sm mt-10 gap-4"
        onSubmit={handleSignIn}
      >
        {isUserSignedIn && <Text>Login realizado</Text>}
        <label htmlFor="email" className="flex flex-col gap-3">
          <Text className="font-semibold">
            Endereço de e-mail
          </Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>
            <TextInput.Input 
              placeholder="Digite seu email"
              id="email"
              type="email"
            />
          </TextInput.Root>
        </label>
        <label htmlFor="password" className="flex flex-col gap-3">
          <Text className="font-semibold">
            Sua senha
          </Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
            <TextInput.Input 
              placeholder="Digite sua senha"
              id="password"
              type="password"
            />
          </TextInput.Root>
        </label>
        <label 
          htmlFor="remember"
          className="flex items-center gap-2"
        >
          <Checkbox 
            id="remember"
          />
          <Text size="sm">
            Lembrar de mim por 30 dias
          </Text>
        </label>
        <Button 
          type="submit"
          className="mt-4"
        >
          Entrar na plataforma
        </Button>

      </form>
      <footer className="flex flex-col items-center gap-4 mt-8">
        <Text asChild className="text-gray-400 underline hover:text-gray-200" size="sm">
          <a href="">Esqueceu sua senha?</a>
        </Text>
        <Text asChild className="text-gray-400 underline hover:text-gray-200" size="sm">
          <a href="" >Não possui uma conta? Crie uma agora!</a>
        </Text>
      </footer>
    </div>
  );
}