'use client'
import React from 'react';
import ReactPlayer from 'react-player';
import { motion } from 'framer-motion'


function MatVideo2() {
    return (

        <div className='my-8'>
          <div className="max-w-screen-xl mx-auto relative py-4">
            
            <div className="absolute top-0 left-0 md:w-4/5 w-full h-full bg-gradient-to-br from-primary to-primary-focus z-0"></div>
    
            <div className="flex flex-col-reverse md:flex-row items-center justify-between p-4 md:p-8 relative z-10">
              <motion.div className="w-full md:w-1/2 pr-4"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                >
                <motion.h1 className="text-3xl font-bold text-white mb-4 mx-8 py-4"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  >
                  Números inteiros: usos, história, ordenação, associação com pontos da reta numérica e operações</motion.h1>
                <p className="text-white text-lg mx-8">
                O professor Rafael Procópio inicia falando um pouco sobre a história dos números inteiros. A seguir, coloca um desafio matemático envolvendo números inteiros negativos e positivos. Faz uma explicação detalhada sobre conjuntos, simétricos, opostos, módulo, ordenação e reta numérica.
                </p>
                <br />
              </motion.div>
              <motion.div className="w-full md:w-1/2"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}>
                <ReactPlayer url='https://youtu.be/XVKlC7v0ifU' width="100%" />
              </motion.div>
            </div>
          </div>
        
        </div>
      );
    }

export default MatVideo2




