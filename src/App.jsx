import { useEffect, useState } from "react"

const API_RANDOM_IMG = `https://catfact.ninja/fact`
// const API_IMG_URL = `https://cataas.com/cat/says/${primeraPalabra}?size=50&color=red&json.true`

export default function App(){
    const [fact, setFact] = useState()
    useEffect(() =>{
        fetch(API_RANDOM_IMG).then(respuesta => respuesta.json())
        .then(data => {
            const { fact } = data
            setFact(fact)

            //para conseguir las primera palabra del string hacemos un split(` `)[0]
            //para conseguir mas palabras debemos hacer .split(` `).slice(0, 3).join(``)
            const primeraPalabra = fact.split(' ')[0]
            console.log(primeraPalabra)
        })
    }, [])

    return(
        <>
            <h1>Creacion de App-react con js vanila</h1>
            {fact && <p>{fact}</p>}
        </>
    )
}