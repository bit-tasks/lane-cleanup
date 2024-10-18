import { getHelloWorld } from '@bit-tasks/test-scope.get-hello-world';

/**
 * renders a "hello world" message
 */

export function HelloWorld() {
  return <div>{getHelloWorld()}</div>;
}
