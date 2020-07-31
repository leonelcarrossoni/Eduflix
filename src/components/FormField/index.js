import React from "react";

function FormField({label, type, name, value, onChange}) {
    return (
        <div>
          <label>
            {label}: 
            <input
              type={type}
              name={name}
              value={value}
              onChange={onChange}
              //onChange={function funcaoHandler(infosDoEvento) { 
                //setValue(infosDoEvento.target.getAttribute('name'), infosDoEvento.target.value);
                // setNomeDaCategoria(infosDoEvento.target.value);
            />
          </label>
        </div>
    )
}

export default FormField;