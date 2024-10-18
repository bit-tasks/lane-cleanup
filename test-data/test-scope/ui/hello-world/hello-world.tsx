import { getHelloWorld } from '@learnbit/hello-world.get-hello-world';

/**
 * renders a "hello world" message
 */

export function HelloWorld() {
  return <div>{getHelloWorld()}</div>;
}
