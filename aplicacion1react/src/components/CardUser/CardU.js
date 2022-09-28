import './CardUser.css';
function CardU({user}){
    return(
        <>
            <div className='card-user'>
                <div className='card-header'>
                    <h1>{user.nombre} {user.apellido}</h1>
                </div>
                <div className='card-body'>
                    <p><strong>No. Documento</strong>{user._id}</p>
                    <p><strong>Tipo. Documento</strong>{user.tipodoc}</p>
                    <button>Editar</button>
                    <button>Ver</button>
                    <button>Elimminar</button>
                </div>
            </div>
        </>
    );
}
export default CardU;