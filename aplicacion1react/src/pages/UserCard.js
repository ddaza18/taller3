import CardUser from "../components/CardUser/CardUser";

function UserCard(){
    return(
        <>
         <Link to="/new">Nuevo Usuario</Link>
            <h1>Listado Usuarios</h1>

            <CardUser/>
        </>
    );
}

export default UserCard