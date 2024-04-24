import './Colaborador.css';

const Colaborador = ({nomeColaborador, img, cargo, cor}) => {
    return (
        <div className='colaborador'>
            <div className='cabecalho' style={{backgroundColor: cor}}>
                <img src={img} alt={nomeColaborador}></img>
            </div>
            <div className='rodape'>
                <h4>{nomeColaborador}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    );

}

export default Colaborador;