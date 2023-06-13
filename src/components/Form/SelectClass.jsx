import * as React from "react"

import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"
import { FormHelperText } from "@mui/material"

export default function SelectClass({ register, errors }) {
  const [age, setAge] = React.useState("")

  const handleChange = event => {
    setAge(event.target.value)
  }

  return (
    <FormControl
      fullWidth
      {...register("aula", { required: "Campo obrigatório" })}
      error={!!errors.aula}
    >
      <InputLabel id="demo-simple-select-label">Modalidades</InputLabel>
      <Select
        fullWidth
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={age}
        label="Modalidades"
        onChange={handleChange}
      >
        <MenuItem value={10}>Salsa</MenuItem>
        <MenuItem value={20}>Kizomba</MenuItem>
        <MenuItem value={30}>Latinas</MenuItem>
      </Select>
      <FormHelperText>{errors.aula?.message}</FormHelperText>
    </FormControl>
  )
}
