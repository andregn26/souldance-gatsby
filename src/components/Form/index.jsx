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
import SelectClass from "./SelectClass"
import TextFieldName from "./TextFieldName"
import TextFieldEmail from "./TextFieldEmail"

const Form = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))
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
                  gridTemplateColumns: "repeat(4, 1fr)",
                  gap: "0px 3em ",
                  justifyItems: "center",
                  alignItems: "start",
                }
          }
        >
          <SelectClass register={register} errors={errors} />
          <TextFieldName register={register} errors={errors} />
          <TextFieldEmail register={register} errors={errors} />
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
