import { Button, ContainerButton, ContainerLogo, ImagemLogo } from "./styles"

function Header({logo, goBack}){
    return(
        <>
        {logo ? (
        <ContainerLogo>
            <ImagemLogo src={logo}/>
        </ContainerLogo>) : (
            <ContainerButton>
                <Button onClick={goBack}>Voltar para a lista</Button>
            </ContainerButton>
        )}
            
        </>
    )
}

export default Header