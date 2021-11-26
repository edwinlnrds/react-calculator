export const ACTIONS = {
  CHOOSE_OPERATION: 'choose-operation',
  ADD_DIGIT: 'add-digit',
  DELETE_DIGIT: 'delete-digit',
  CLEAR: 'clear',
  EVALUATE: 'evaluate'
}

function evaluate({ previousOperand, currentOperand, operation }) {
  const previous = parseFloat(previousOperand)
  const current = parseFloat(currentOperand)
  if (isNaN(previous) || isNaN(current)) return ""
  let result;
  switch (operation) {
    case "*":
      result = previous * current
      break
    case "÷":
      result = previous / current
      break
    case "+":
      result = previous + current
      break
    case "-":
      result = previous - current
      break
    default:
      return
  }
  return result
}

export default function reducer(state, { type, payload }) {
  const { previousOperand, currentOperand, operation, previousCalculation } = state
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      if (currentOperand === "0" && payload.digit === "0") return state
      if (payload.digit === "." && currentOperand?.includes(".")) return state

      if (previousCalculation) return { currentOperand: `${payload.digit}` }

      return {
        ...state,
        currentOperand: `${currentOperand || ""}${payload.digit}`
      }

    case ACTIONS.DELETE_DIGIT:
      if (!currentOperand) return state
      return {
        ...state,
        currentOperand: `${currentOperand.slice(0, -1)}`
      }

    case ACTIONS.CHOOSE_OPERATION:
      if (!currentOperand) return state
      return {
        previousOperand: `${currentOperand}`,
        operation: payload.operation,
        currentOperand: null
      }

    case ACTIONS.EVALUATE:
      return {
        ...state,
        currentOperand: `${evaluate(state)}`,
        previousCalculation: `${previousOperand} ${operation} ${currentOperand}=`,
        previousOperand: null,
        operation: null
      }

    case ACTIONS.CLEAR:
      return {}
    default:
      return state
  }
}
