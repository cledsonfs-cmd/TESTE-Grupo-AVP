import router from 'next/router'
import Cookies from 'js-cookie'
import { createContext, useEffect, useState } from 'react';
import firebase from '../../firebase/config';
import Usuario from '../../model/Usuario';
import { api, requestConfig } from "../../utils/config";

interface AuthContextProps {
    usuario?: Usuario
    carregando?: boolean
    cadastrar?: (email: string, senha: string) => Promise<void>
    login?: (email: string, senha: string) => Promise<void>
    loginGoogle?: () => Promise<void>
    logout?: () => Promise<void>
}

const AuthContext = createContext<AuthContextProps>({})

async function usuarioNormalizado(usuarioApi: Usuario): Promise<Usuario> {    
    return {
        uid: usuarioApi.uid,
        nome: usuarioApi.nome,
        email: usuarioApi.email,
        token: usuarioApi.token,
        provedor: usuarioApi.provedor,
        imagemUrl: usuarioApi.imagemUrl
    }
}

function gerenciarCookie(logado: boolean) {
    if (logado) {
        Cookies.set('admin-template-auth', logado, {
            expires: 7 //dias
        })
    } else {
        Cookies.remove('admin-template-auth')
    }

}

export function AuthProvider(props) {
    const [carregando, setCarregando] = useState(true)
    const [usuario, setUsuario] = useState<Usuario>(null)

    async function configurarSessao(usuarioAPI) {
        if (usuarioAPI?.email) {
            const usuario = await usuarioNormalizado(usuarioAPI)
            setUsuario(usuario)
            gerenciarCookie(true)
            setCarregando(false)
            return usuario.email
        } else {
            setUsuario(null)
            gerenciarCookie(false)
            setCarregando(false)
            return false
        }
    }
    async function login(email, senha) {
        const data = {
            email,
            password: senha
        }
        const config = requestConfig("POST", data);
        try {
            setCarregando(true)
            const res = await fetch(api + "/auth/login", config)
                .then((res) => res.json())
                .catch((err) => err);
            const user = JSON.stringify(res);
            console.log(user)
            await configurarSessao(user)
            router.push('/')
        } catch (error) {
            console.log(error);
            setCarregando(false)
        }

    }

    // async function login(email, senha) {
    //     try {
    //         setCarregando(true)
    //         const resp = await firebase.auth().signInWithEmailAndPassword(email, senha)

    //         await configurarSessao(resp.user)
    //         router.push('/')
    //     } finally {
    //         setCarregando(false)
    //     }
    // }

    async function cadastrar(email, senha) {
        const data = {
            email,
            password: senha
        }
        const config = requestConfig("POST", data);
        try {
            setCarregando(true)
            const res = await fetch(api + "/user", config)
                .then((res) => res.json())
                .catch((err) => err);
            const user = JSON.stringify(res);
            console.log(user)
            //await configurarSessao(user)
            router.push('/')
        } catch (error) {
            console.log(error);
            setCarregando(false)
        }
    }

    async function loginGoogle() {
        try {
            setCarregando(true)
            const resp = await firebase.auth().signInWithPopup(
                new firebase.auth.GoogleAuthProvider()
            )

            await configurarSessao(resp.user)
            router.push('/')
        } finally {
            setCarregando(false)
        }
    }

    async function logout() {
        try {
            setCarregando(true)
            await firebase.auth().signOut()
            await configurarSessao(null)
        } finally {
            setCarregando(false)
        }
    }

    useEffect(() => {
        if (Cookies.get('admin-template-auth')) {
            const cancelar = firebase.auth().onIdTokenChanged(configurarSessao)
            return () => cancelar()
        } else {
            setCarregando(false)
        }
    }, [])

    return (
        <AuthContext.Provider value={{
            usuario,
            carregando,
            cadastrar,
            login,
            loginGoogle,
            logout
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext