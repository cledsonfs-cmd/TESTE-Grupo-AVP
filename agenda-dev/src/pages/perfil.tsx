import { useState } from "react";
import Layout from "../components/template/Layout";

export default function Perfil() {
  const [nome, setNome] = useState('')

  return (
    <Layout titulo="Perfil do Usuário" subtitulo="Administre as suas informações de usuario">
      <div className="flex flex-col items-center border-t border-gray-100 ">
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

          <div className="col-span-full items-center">
            <label className="block text-sm font-medium leading-6 text-white">Photo</label>
            <div className="mt-2 flex items-center gap-x-3">
              <svg className="h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clip-rule="evenodd" />
              </svg>
              <button type="button" className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">Change</button>
            </div>
          </div>    


          <div className="flex col-span-full items-center">

            <div className="sm:col-span-12 mr-6">
              <label className="block text-sm font-medium leading-6 text-white">Nome</label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input type="text" name="username" id="username" className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" />
                </div>
              </div>
            </div>

            <div className="sm:col-span-12">
              <label className="block text-sm font-medium leading-6 text-white">Email</label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input type="email" name="username" id="username" className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </Layout>
  )
}

/**
 * 
 nome: string;
    email: string;
    dataNascimento: Date;
    sexo: string;
    profissao: string;
    empresa?: string;
    whatsApp?: string;
    celular?: string;
    cep?: string;
    logradouro?: string;
    bairro?: string;
    cidade?: string;
    uf?: string;
    numero?: string;
    complemento?: string;
    foto?: string;
    provedor?: string;
 * 
 */