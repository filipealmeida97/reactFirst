import Colaborador from '../Colaborador';
import './Time.css';

const Time = (props) => {

    const css = {backgroundColor: props.corSecundaria};
    
    return (
        props.colaboradores.length > 0 && <section className='time' style={css}>
            <h3 style={{borderBottomColor: props.corPrimaria}}>{props.nomeTime}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map((colaborador, index) => {
                    return colaborador.time === props.nomeTime ? 
                        <Colaborador 
                        key={index}
                        nomeColaborador={colaborador.nome} 
                        cargo={colaborador.cargo}
                        img={colaborador.imagem}
                        cor={props.corPrimaria}
                        />
                    : null})}
            </div>
        </section>
    );

};

export default Time;