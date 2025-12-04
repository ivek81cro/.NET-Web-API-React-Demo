import { decrement, increment } from "./counterSlice";
import { Button, ButtonGroup, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../store/store";

export default function ContactPage() {

  const {data} = useAppSelector((state => state.counter));
  const dispatch = useAppDispatch();

  return (
    <>
      <Typography variant="h2">
        Contact Page
      </Typography>

      <Typography variant="body1">
        The answer is {data}
      </Typography>

      <ButtonGroup>
        <Button onClick={() => dispatch(decrement(1))} color="error">
          Decrement
        </Button>
        <Button onClick={() => dispatch(increment(1))} color="primary">
          Increment
        </Button>
      </ButtonGroup>
    </>
  )
}