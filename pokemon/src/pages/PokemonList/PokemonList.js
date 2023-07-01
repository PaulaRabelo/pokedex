import { useEffect, useState } from "react"
import Header from "../../components/Header/Header"
import logo from "../../assets/logo.svg"
import { ButtonPage, ContainerHome, DivButtonPage } from "./styles"
import axios from "axios"
import PokemonDetails from "../PokemonDetails/PokemonDetails"
import Card from "../../components/Card/Card"


function PokemonList(){
    const[pokemonList, setPokemonList] = useState([])
    const[selectedPokemon, setSelectedPokemon] =useState(null)
    const[page, setPage] = useState(0)
    const pokemonPage = 20

    const fetchPokemon = (page) =>{
        axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${pokemonPage}&offset=${page * pokemonPage}`)
        .then(res =>{
            Promise.all(res.data.results.map( pokemon =>
                axios.get(pokemon.url)
                .then(res=>{
                    const {data} = res
                    data.abilities = data.abilities.map(a => a.ability.name).join(', ')
                    data.types = data.types.map(t => t.type.name).join('/')
                    return data
                })
            ))
        .then(pokemonData => setPokemonList(pokemonData))
        .catch(err => console.log(err))
        })
        .catch(err => console.log(err))
    }

    useEffect(() =>{
        fetchPokemon(page)
    }, [page])

    if(selectedPokemon){
        return <PokemonDetails pokemon={selectedPokemon}
        goBack={() => setSelectedPokemon(null)} />
    }

    return(
        <>
            <Header logo={logo}  />
            <ContainerHome>
                {pokemonList.map((pokemon) =>(
                    <Card key={pokemon.name}
                    pokemon={pokemon}
                    onDetailsClick={setSelectedPokemon}/>
                ))}
            </ContainerHome>
            <DivButtonPage>
                <ButtonPage onClick={() => setPage(oldPage => Math.max(oldPage -1, 0))} >Anterior</ButtonPage>
                <ButtonPage onClick={() => setPage(oldPage => oldPage + 1)}>Próximo</ButtonPage>
            </DivButtonPage>
        </>
    )
}

export default PokemonList