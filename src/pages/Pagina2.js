import { useParams } from "react-router";
export default function Pagina2(){
    const { name } = useParams();
    return(
        <div>
            <h2>Finalmente Pagina Dinamica</h2>
            <p>Nombre: {name}</p>
        </div>
    )
};