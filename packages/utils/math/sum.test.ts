import { sum } from "./sum";

describe("sum()", () => {
  it("when receives 1 and 1, returns 2", () => {
    expect(sum(1, 1)).toBe(2);
  });
  it("when receives 2 and 2, returns 4", () => {
    expect(sum(1, 1)).toBe(2);
  });
});
