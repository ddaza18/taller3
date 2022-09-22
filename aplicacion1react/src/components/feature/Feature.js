import CardFeture from "./Card-feature";
import "./Feature.css";

function Feature(){
    return(
       <section id="feature">

            <h4>Razones por las que disfrutaras quedarte con nosotros</h4>
            <div className="feature-row">
                <CardFeture
                texto='Reservas'
                icono='fa-solid fa-bell-concierge'
                background={true}/>
                <CardFeture
                texto='Habitaciones'
                icono='fa-solid fa-bed'
                background={false}/>
                <CardFeture
                texto='WI-FI'
                icono='fa-solid fa-wifi'
                background={true}/>
                <CardFeture
                texto='Gimnasio'
                icono='fa-solid fa-dumbbell'
                background={false}/>
            </div>
       </section>
    );
}

export default Feature;