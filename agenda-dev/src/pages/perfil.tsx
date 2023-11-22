import { useState } from "react";
import Layout from "../components/template/Layout";
import FormInput from "../components/Form/FormInput";
import Imagemadrao from '../../public/images/avatar.svg'

export default function Perfil() {

  const [nome, setNome] = useState('')
  const [dataNascimento, setDataNascimento] = useState('')
  const [sexo, setSexo] = useState('')
  const [profissao, setProfissao] = useState('')
  const [empresa, setEmpresa] = useState('')
  const [email, setEmail] = useState('')
  const [whatsApp, setWhatsApp] = useState('')
  const [celular, setCelular] = useState('')
  const [cep, setCep] = useState('')
  const [logradouro, setLogradouro] = useState('')
  const [bairro, setBairro] = useState('')
  const [cidade, setCidade] = useState('')
  const [uf, setUf] = useState('')
  const [numero, setNumero] = useState('')
  const [complemento, setComplemento] = useState('')
  const [foto, setFoto] = useState(undefined)
  const [provedor, setProvedor] = useState('')

  return (
    <Layout titulo="Perfil do Usuário" subtitulo="Administre as suas informações de usuario">
      <div className="flex flex-col items-center border-t border-gray-100">
        <div className="flex flex-col col-span-full mt-10">       

          <div className="col-span-full items-center">
            <div className="mt-3 flex flex-col items-center gap-x-3">              
            <label className="block text-xl font-medium leading-6 text-white">Photo</label>
                <img src={foto ?? '/images/avatar.svg'} alt="Foto do Usuário" className={`h-60 w-60 rounded-full cursor-pointer`}/>
                <button type="button" className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 mt-3">Selecionar</button>
            </div>
          </div>            

          <div className="flex col-span-full items-center">
            <div className="w-4/6 mr-6">
              <FormInput label="Nome" tipo="text" valor={nome} valorMudou={setNome} obrigatorio />
            </div>
            <div className="w-1/6 mr-6">
              <FormInput label="Data Nascimento" tipo="text" valor={dataNascimento} valorMudou={setDataNascimento} obrigatorio />
            </div>
            <div className="w-1/6">
              <FormInput label="Sexo" tipo="text" valor={sexo} valorMudou={setSexo} obrigatorio />
            </div>            
          </div>

          <div className="flex col-span-full items-center">
            <div className="w-3/6 mr-6">
              <FormInput label="Profissão" tipo="text" valor={profissao} valorMudou={setProfissao} obrigatorio />
            </div>
            <div className="w-3/6">
              <FormInput label="Empresa" tipo="text" valor={empresa} valorMudou={setEmpresa} obrigatorio />
            </div>            
          </div>
          
          <div className="flex col-span-full items-center">
            <div className="w-4/6 mr-6">
              <FormInput label="Email" tipo="email" valor={email} valorMudou={setEmail} obrigatorio />
            </div>
            <div className="w-2/6 mr-6">
              <FormInput label="WhatsApp" tipo="text" valor={whatsApp} valorMudou={setWhatsApp} obrigatorio />
            </div>
            <div className="w-2/6">
              <FormInput label="Celular" tipo="text" valor={celular} valorMudou={setCelular} obrigatorio />
            </div>            
          </div>
          
          <div className="flex col-span-full items-center">
            <div className="w-1/6">
              <FormInput label="CEP" tipo="text" valor={cep} valorMudou={setCep} obrigatorio />
            </div>
          </div>
          
          <div className="flex col-span-full items-center">
            <div className="w-5/6 mr-6">
              <FormInput label="Logradouro" tipo="text" valor={logradouro} valorMudou={setLogradouro} obrigatorio />
            </div>            
            <div className="w-1/6">
              <FormInput label="Número" tipo="text" valor={numero} valorMudou={setNumero} obrigatorio />
            </div>            
          </div>
          
          <div className="flex col-span-full items-center">
          <div className="w-3/6 mr-6">
              <FormInput label="Bairro" tipo="text" valor={bairro} valorMudou={setBairro} obrigatorio />
            </div>
            <div className="w-2/6 mr-6">
              <FormInput label="Cidade" tipo="text" valor={cidade} valorMudou={setCidade} obrigatorio />
            </div>                      
            <div className="w-1/6">
              <FormInput label="UF" tipo="text" valor={uf} valorMudou={setUf} obrigatorio />
            </div>
          </div>
          
          <div className="flex col-span-full items-center">
            <div className="w-full">
              <FormInput label="Complemento" tipo="text" valor={complemento} valorMudou={setComplemento} obrigatorio />
            </div>
          </div>
          
          <div className="flex col-span-full items-center">
            <div className="w-full">
              <FormInput label="Provedor" tipo="text" valor={provedor} valorMudou={setProvedor} obrigatorio />
            </div>          
          </div>

          <div className="flex col-span-full items-center mt-6">
            <div className="w-full">
            <button type="button" className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">Salvar</button>
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