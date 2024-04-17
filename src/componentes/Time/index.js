import './Time.css';

const Time = (props) => {

    const css = {backgroundColor: props.corSecundaria};

    return (
        <section className='time' style={css}>
            <h3 style={{borderBottomColor: props.corPrimaria}}>{props.nomeTime}</h3>

        </section>
    );

};

export default Time;