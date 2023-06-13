import React from "react"
import { TextField } from "@mui/material"

const TextFieldName = ({ register, errors }) => {
  return (
    <TextField
      label="Nome"
      type="text"
      fullWidth
      {...register("nome", { required: "Campo obrigatório" })}
      error={!!errors.nome}
      helperText={errors.nome?.message}
    />
  )
}

export default TextFieldName
