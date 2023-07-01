import Header from "../../components/Header/Header";
import { DivDetails, ImgDetails, TextAbilities, TextDetails } from "./styles";

function PokemonDetails({pokemon, goBack}){

    return(
        <div>
            <Header goBack={goBack}/>

            <DivDetails>
                <TextDetails>
                    <div>
                        <ImgDetails src={pokemon.sprites?.front_default} alt={pokemon.name} />
                        <ImgDetails src={pokemon.sprites?.back_default} alt={pokemon.name}/>
                    </div>
                    <h1>{pokemon.name.toUpperCase()}</h1>
                    <TextAbilities>Habilidades: {pokemon.abilities}</TextAbilities>
                </TextDetails>
            </DivDetails>
        </div>
    )

    
}

export default PokemonDetails