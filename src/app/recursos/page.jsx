'use client'
import { Divider } from '@nextui-org/react'

import RecHero from '../components/Recursos/RecHero'
import RecPadlet from '../components/Recursos/RecPadlet'
import RecPadletVideo from '../components/Recursos/RecPadletVideo'
import AtiUnindoFerramentas from '../components/Recursos/AtiUnindoFerramentas'
import RecPodcast from '../components/Recursos/RecPodcast'
import RecPodcastSug from '../components/Recursos/RecPodcastSug'
import RecDica from '../components/Recursos/RecDica'


function Recursos() {
  return (
    <>
        
        <RecHero />
        <RecPadlet />
        <Divider className='max-w-5xl mx-auto my-4 '/>
        <RecPadletVideo />
        <Divider className='max-w-5xl mx-auto my-4 '/>
        <AtiUnindoFerramentas />
        <RecPodcast />
        <RecPodcastSug />
        <RecDica />
        
        
    
    </>
    
  )
}

export default Recursos