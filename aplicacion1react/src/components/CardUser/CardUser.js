import axios from 'axios';
import { useEffect,useState} from "react";
import CardU from './CardU';


function CardUser(){

    /*1. Definir url del api, generar peticiones asíncronas */
    const url="https://hoteliakuepa.herokuapp.com/users";

    const getData=async()=>{
        const response=axios.get(url);
        return response;
    }

    /*useState para guardar la respuesta de la petición en un estado*/
    const [list,setList]=useState([]);

    /*usseEfect para ejecutar funciones desde el inicio del renderizado */
    useEffect(()=>{
        getData().then((response)=>{
            setList(response.data);
        })
    },[])

    
    //console.log(list)
    
    return(
        <>
        <div className='users'>
                {list.map((us,index)=>(
                    <CardU
                    key={index}
                    user={us}/>
                ))
                }
            </div>   
            
        </>
    );







    }


export default CardUser;