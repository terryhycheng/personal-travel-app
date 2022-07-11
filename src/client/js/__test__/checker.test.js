import { checkDate } from "../checker";

describe("Test data checkers", () => {
  test("CheckDate() should return 2 numbers if date inputs are correct", () => {
    const departure_date = "2022-10-09";
    const return_date = "2022-12-02";
    expect(checkDate(departure_date, return_date)).toEqual({
      diffDays: 54,
      diffToday: 90,
    });
  });
});
