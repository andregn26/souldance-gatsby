import React from "react"
import { TextField } from "@mui/material"

const TextFieldEmail = ({ register, errors }) => {
  return (
    <TextField
      label="Email"
      type="email"
      fullWidth
      {...register("email", { required: "Campo obrigatório" })}
      error={!!errors.email}
      helperText={errors.email?.message}
    />
  )
}

export default TextFieldEmail
