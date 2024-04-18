import Colaborador from '../Colaborador';
import './Time.css';

const Time = (props) => {

    const css = {backgroundColor: props.corSecundaria};
    
    return (
        <section className='time' style={css}>
            <h3 style={{borderBottomColor: props.corPrimaria}}>{props.nomeTime}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => {
                    return colaborador.time === props.nomeTime ? 
                        <Colaborador 
                        key={colaborador.nome} 
                        nomeColaborador={colaborador.nome} 
                        cargo={colaborador.cargo}
                        img={colaborador.imagem}
                        />
                    : null})}
            </div>
        </section>
    );

};

export default Time;