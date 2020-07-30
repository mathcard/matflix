import React from 'react';

function FormField({ label, type, name, value, onChange, placeholder }){
  return(
    <div>
    <label>          
      {label}
      <input               
        type={type}
        value={value}
        name={name}       
        onChange={onChange}
        placeholder={placeholder}
      />          
    </label>
    </div>        
  )
}

export function FormFieldArrea({ label, name, value, onChange }){
  return(
    <div>
    <label>          
      {label}
      <textarea                       
        value={value}
        name={name}       
        onChange={onChange}
      />          
    </label>
  </div>
  )
}

export default (FormField);