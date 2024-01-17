'use client'

import AtiBotaoNext from '../components/Atividades/AtiBotaoNext'
import AtiEtapas from '../components/Atividades/AtiEtapas'
import AtiPlanejamento from '../components/Atividades/AtiPlanejamento'
import AtiPlanejamentoEducador from '../components/Atividades/AtiPlanejamentoEducador'
import AtivHero from '../components/Atividades/AtivHero'
import AtiEstudante from '../components/Atividades/AtiEstudante'
import AtiSugestao from '../components/Atividades/AtiSugestao'
import { Divider } from '@nextui-org/react'
import Monitoramento from '../components/Atividades/Monitoramento'
import AtiDiarioBordo from '../components/Atividades/AtiDiarioBordo'

function Atividades() {
  return (
    <>
        
        <AtivHero />
        <AtiEtapas />
        <AtiPlanejamento />
        <AtiPlanejamentoEducador />
        <AtiEstudante />
        <Divider className='max-w-5xl mx-auto my-4 bg-primary'/>
        <AtiSugestao />
        <Divider className='max-w-5xl mx-auto my-4 bg-primary'/>
        <Monitoramento />
        <AtiDiarioBordo />
        <AtiBotaoNext />
        
        
    </>
    
  )
}

export default Atividades