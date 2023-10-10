
it('should calculate the monthly rate correctly', function () {
  // ... 
  const values = {
    amount : 300000,
    years : 30,
    rate : 7
  }
  expect(calculateMonthlyPayment(values)).toEqual(1995.91);
});


it("should return a result with 2 decimal places", function() {
  // ..
  const values = {
    amount : 300000,
    years : 30,
    rate : 7
  }
  expect(calculateMonthlyPayment(values)).toEqual(1995.91);
});

/// etc
