import {
  Box,
  Button,
  Paper,
  TextField,
  useTheme,
  useMediaQuery,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material"
import React from "react"
import { StyledContainerSection } from "../../helpers/Containers"
import { useForm } from "react-hook-form"
import { DevTool } from "@hookform/devtools"

const Form = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))
  const [age, setAge] = React.useState("")

  const handleChange = event => {
    setAge(event.target.value)
  }
  const form = useForm({
    defaultValues: {
      aula: "",
      nome: "",
      email: "",
    },
  })
  const { register, handleSubmit, formState, control } = form
  const { errors } = formState
  const onSubmit = data => {
    console.log(data)
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box
          sx={
            isMobile
              ? {
                  display: "grid",
                  gridTemplateColumns: "1fr",
                  gridTemplateRows: "repeat(4, 1fr)",
                  gap: "1.5em 0px",
                  justifyItems: "center",
                  alignItems: "center",
                }
              : {
                  display: "grid",
                  gridTemplateRows: "1fr",
                  gridTemplateColumns: "repeat(5, 1fr)",
                  gap: "0px 3em ",
                  justifyItems: "center",
                  alignItems: "center",
                }
          }
        >
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
          <TextField
            label="Nome"
            type="text"
            fullWidth
            {...register("nome", { required: "Campo obrigatório" })}
            error={!!errors.nome}
            //     helperText={errors.nome.message}
          />
          <TextField
            label="Email"
            type="email"
            fullWidth
            {...register("email", { required: "Campo obrigatório" })}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
          <Button type="submit" variant="contained" fullWidth>
            Submit
          </Button>
        </Box>
      </form>
      <DevTool control={control} />
    </>
  )
}

export default Form
