import { useReducer } from 'react'
import './App.css'
import DigitButton from './components/DigitButton'
import OperationButton from './components/OperationButton'
import formatOperand from './utils/formatter'
import reducer, { ACTIONS } from './utils/state-reducer'


function App() {
  const [{ currentOperand, previousOperand, operation, previousCalculation }, dispatch] = useReducer(reducer, {})

  const clearCalculator = () => dispatch({ type: ACTIONS.CLEAR })

  const deleteDigit = () => dispatch({ type: ACTIONS.DELETE_DIGIT })

  const evaluate = () => dispatch({ type: ACTIONS.EVALUATE })

  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand">{previousCalculation} {formatOperand(previousOperand)} {operation}</div>
        <div className="current-operand">{formatOperand(currentOperand)}</div>
      </div>
      <button className="span-two" onClick={clearCalculator}>AC</button>
      <button onClick={deleteDigit}>DEL</button>
      <OperationButton operation="÷" dispatch={dispatch} />
      <DigitButton digit={1} dispatch={dispatch} />
      <DigitButton digit={2} dispatch={dispatch} />
      <DigitButton digit={3} dispatch={dispatch} />
      <OperationButton operation="*" dispatch={dispatch} />
      <DigitButton digit={4} dispatch={dispatch} />
      <DigitButton digit={5} dispatch={dispatch} />
      <DigitButton digit={6} dispatch={dispatch} />
      <OperationButton operation="+" dispatch={dispatch} />
      <DigitButton digit={7} dispatch={dispatch} />
      <DigitButton digit={8} dispatch={dispatch} />
      <DigitButton digit={9} dispatch={dispatch} />
      <OperationButton operation="-" dispatch={dispatch} />
      <DigitButton digit="." dispatch={dispatch} />
      <DigitButton digit="0" dispatch={dispatch} />
      <button className="span-two" onClick={evaluate}>=</button>
    </div>
  )
}

export default App
