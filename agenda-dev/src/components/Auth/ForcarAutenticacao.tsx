import Image from 'next/image'
import bgimg from '../../../public/images/bgemail.jpg'
import useAuth from '../../data/hook/useAuth'
import router from 'next/router'

import { CountdownCircleTimer } from 'react-countdown-circle-timer'

export default function ForcarAutenticacao(props) {

    const { usuario, carregando } = useAuth()    

    function renderizarConteudo() {
        return (
            <>
                {props.children}
            </>
        )
    }

    function renderizarCarregando() {

        function redirect() {
             router.push('/autenticacao')
        }

        return (            
                 <div className="relative overflow-hidden rounded-lg bg-cover bg-no-repeat p-12 text-center opacity-20">
                    <Image 
                        src="/images/bgemail.jpg"
                        layout="fill"
                        objectFit="cover"
                        quality={100}
                        alt=''                        
                    />
                <div className={`
                flex justify-center items-center h-screen
            `}>
                    <CountdownCircleTimer
                        onComplete={(redirect)}
                        isPlaying
                        duration={5}
                        colors={[
                            '#004777',
                            '#F7B801',
                            '#A30000',
                        ]}
                        colorsTime={[
                            0.33,
                            0.33,
                            0.33
                        ]}
                    >
                        {({ remainingTime }) => remainingTime}
                    </CountdownCircleTimer>
                </div>
            </div>
        )
    }

    if (!carregando && usuario?.email) {
        return renderizarConteudo()
    } else if (carregando) {
        return renderizarCarregando()
    } else {
        router.push('/autenticacao')
        return null
    }
}