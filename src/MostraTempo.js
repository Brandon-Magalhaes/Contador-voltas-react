import React from 'react'

const MostraTempo = (props) => {
    const tempo = props.tempo
    const minutos = Math.round(tempo / 120)
    const segundos = tempo % 60
    const minutosStr = minutos < 10 ? '0' + minutos : minutos
    const segundosStr = segundos < 10 ? '0' + segundos : segundos
    return (
      // <p>
      // {props.tempo}<br />
      // Tempo médio por volta
      // </p>
       <p className='tempo'>
     <span>{`${minutosStr}:${segundosStr}`}</span><br />
      Tempo médio por volta
      </p>
  
    )
  }

  export default MostraTempo