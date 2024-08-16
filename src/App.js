import { Container, Content, Row } from './styles';
import Input from './components/Input';
import Button from './components/Button';
import { useState } from 'react';

function App() {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operator, setOperator] = useState(null);

  function handleOnClear() {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperator(null);
  }

  function handleAddNumber(num) {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`);
  }

  function handleOperator(op) {
    setFirstNumber(currentNumber);
    setCurrentNumber('0');
    setOperator(op);
  }

  function handleEquals() {
    if (operator && firstNumber !== '0') {
      const result = calculate(Number(firstNumber), Number(currentNumber), operator);
      setCurrentNumber(String(result));
      setFirstNumber('0');
      setOperator(null);
    }
  }

  function calculate(num1, num2, operator) {
    switch (operator) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case 'x':
        return num1 * num2;
      case '÷':
        return num2 !== 0 ? num1 / num2 : 'Erro';
      default:
        return num1;
    }
  }

  function handleSquareRoot() {
    if (currentNumber !== '0') {
      const squareRoot = Math.sqrt(Number(currentNumber));
      setCurrentNumber(String(squareRoot));
    }
  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button label="x" onClick={() => handleOperator('x')} />
          <Button label="÷" onClick={() => handleOperator('÷')} />
          <Button label="C" onClick={handleOnClear} />
          <Button label="√" onClick={handleSquareRoot} />
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')} />
          <Button label="8" onClick={() => handleAddNumber('8')} />
          <Button label="9" onClick={() => handleAddNumber('9')} />
          <Button label="-" onClick={() => handleOperator('-')} />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')} />
          <Button label="5" onClick={() => handleAddNumber('5')} />
          <Button label="6" onClick={() => handleAddNumber('6')} />
          <Button label="+" onClick={() => handleOperator('+')} />
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')} />
          <Button label="2" onClick={() => handleAddNumber('2')} />
          <Button label="3" onClick={() => handleAddNumber('3')} />
          <Button label="=" onClick={handleEquals} />
        </Row>
        <Row>
        <Button label="0" onClick={() => handleAddNumber('0')} />
        </Row>
      </Content>
    </Container>
  );
}

export default App;
