import { ButtonDetails, ContainerCard, DivPokemon, Image, TextCard } from "./styles"

const typeColor={
    fire: "red",
    water:"blue",
    normal:"black"
}



function Card({pokemon, onDetailsClick}){

    const color= typeColor[pokemon.types.split('/')[0]]
    return(
        <ContainerCard color={color}>
            <TextCard>
                <p>#{pokemon.id}</p>
                <h2>{pokemon.name}</h2>
                <p>{pokemon.types}</p>
                <ButtonDetails onClick={()=> onDetailsClick(pokemon)}>Detalhes</ButtonDetails>
            </TextCard>

            <DivPokemon>
                <Image src={pokemon.sprites.front_default} alt={pokemon.name} />
            </DivPokemon>
        </ContainerCard>

    )
}

export default Card