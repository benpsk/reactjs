import Grudge from "./Grudge";

const Grudges = ({grudges = [], onForgive}) => {

    return (

        <section>
            <h2>Grudges ({grudges.length})</h2>
            { grudges.length > 0 ? 
                grudges.map((grudge) => {
                    return <Grudge grudge={grudge} key={grudge.id}
                    onForgive={onForgive}
                            ></Grudge>
                })
            : <h2>No Grudges Found!</h2>}
        </section>

    );
}

export default Grudges;