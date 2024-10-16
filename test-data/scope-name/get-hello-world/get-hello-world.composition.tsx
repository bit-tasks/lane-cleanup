import { getHelloWorld } from './get-hello-world';
// return correct value
export function ReturnsCorrectValue() {
  return <div>{getHelloWorld()}</div>;
}
