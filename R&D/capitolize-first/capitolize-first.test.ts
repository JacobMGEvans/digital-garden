import { capitolizeFirst } from "./index";

describe(`Capitolize First Module Test`, () => {
  test(`should convert words to first letter uppercased following letters lowerased`, () => {
    expect(capitolizeFirst(`hello world`)).toEqual([`Hello World`]);
  });
});
