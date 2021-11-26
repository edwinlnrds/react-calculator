import { ACTIONS } from "../utils/state-reducer"

export default function DigitButton({ dispatch, digit }) {
  function digitOnClick() {
    dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })
  }

  return (
    <button onClick={digitOnClick} >{digit}</button>
  )
}