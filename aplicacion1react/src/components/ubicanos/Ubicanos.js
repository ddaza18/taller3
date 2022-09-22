import "./Ubicanos.css";

function Ubicanos() {
    return (
        <section id="ubicacion">
            <h1>Ubìcanos</h1>
            <div class="maps">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15906.009096716783!2d-74.1076701879501!3d4.682411509079804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9b149f0a3983%3A0xa75f2423b286c124!2sConjunto%20Residencial%20Reserva%2067!5e0!3m2!1ses!2sco!4v1659574541763!5m2!1ses!2sco"
                    allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <h3>Avenida Carrera 8, #12A-42, Bogotá DC, Colombia</h3>
            <hr />
            <h3>+57 601 4567899</h3>
        </section>
    );
}

export default Ubicanos;