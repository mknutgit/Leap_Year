describe('leapYear', function () {
  it("is false for a year that is not divisable by 4, 100 or 400", function () {
    expect(leapYear(1993)).to.equal(false);
  });
});
