import React from "react";

function Form() {

    return (
        <form>
           <label>Write your new value</label> 
           <textarea
                placeholder="Description and value"
           />
           <div>
            <button
                type="button"
            >
                Cancelar
            </button>
            <button
                type="submit"
            >Añadir
            </button>
           </div>
        </form>
    )
}

export { Form };