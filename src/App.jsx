import { useEffect, useState } from "react"

const API_RANDOM_IMG = `https://catfact.ninja/fact`
// const API_IMG_URL = `https://cataas.com/cat/says/${primeraPalabra}?size=50&color=red&json.true`
const imgCAT = `https://cataas.com`

export default function App(){
    const [fact, setFact] = useState()
    const [urlImg, setUrlImg] = useState()
    useEffect(() =>{
        fetch(API_RANDOM_IMG).then(respuesta => respuesta.json())
        .then(data => {
            const { fact } = data
            setFact(fact)

            //para conseguir las primera palabra del string hacemos un split(` `)[0]
            //para conseguir mas palabras debemos hacer .split(` `).slice(0, 3).join(``)
            const primeraPalabra = fact.split(' ')[0]
        
            fetch(`https://cataas.com/cat/says/${primeraPalabra}?fontSize=50&fontColor=red&json=true`)
            .then(res => res.json())
            .then(response => {
                const { url } = response
                setUrlImg(url)
            })
        })
    }, [])

    return(
        <main>
            <h1>Creacion de App-react con js vanila</h1>
            {fact && <p>{fact}</p>}
            {urlImg && <img src={imgCAT} alt={`Imagen extrida de la primera palabra que es ${fact}`} />}
        </main>
    )
}