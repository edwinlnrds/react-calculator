import { ACTIONS } from "../utils/state-reducer"

export default function OperationButton({ dispatch, operation }) {
  function operandOnClick() {
    dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })
  }

  return (
    <button onClick={operandOnClick}>{operation}</button>
  )
}