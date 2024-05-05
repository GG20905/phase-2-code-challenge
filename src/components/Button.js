import { Deletebot } from "../Utilities";


export default function Button({children, id}){

    //Delete a transaction from the database
  
 

    return(
        <button onClick={()=> Deletebot(id)} className="btn btn-md btn-danger mx-2">{children}</button>
    )
}