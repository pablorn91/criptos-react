import styled from "@emotion/styled"

const Contenedor = styled.div`
    color: #ffffff;
    font-family: 'Lato', sans-serif;
    display: flex;
    align-items: center;
    gap: 2rem;
    margin-top: 30px;

`
const Imagen = styled.img`
    display: block;
    width: 100px;
`

const Texto = styled.p`
      font-size: 18px;
    span {
        font-weight: 700;
    }
`
const Precio = styled.p`
    font-size: 25px;
    span {
        font-weight: 700;
    }
`

const Resultado = ({resultado}) => {
    const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE} = resultado;
  return (
    <Contenedor>
        <Imagen src={`http://cryptocompare.com/${IMAGEURL}`} alt="Imagen cripto"/>
        <div>
        <Precio>El precio es de: <span>{PRICE}</span></Precio>
        <Texto>El precio más alto del día: <span>{HIGHDAY}</span></Texto>
        <Texto>El precio más bajo del día: <span>{LOWDAY}</span></Texto>
        <Texto>Variación en las ultimas 24 horas: <span>{CHANGEPCT24HOUR}</span></Texto>
        <Texto>Última actualización: <span>{LASTUPDATE}</span></Texto>
        </div>
    </Contenedor>
  )
}

export default Resultado