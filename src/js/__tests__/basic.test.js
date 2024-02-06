import {isValidInn} from "../validator";

test('validator test', () => {
  expect(isValidInn('4556546824738225')).toBe(true);
});