
describe("Canarytest", function(){
  it("should work", function(){
    expect(true).toBe(true);
  });
});

describe ("calculator", function() {
  it("should return a calculator object", function(){
    expect(calculator).toBeDefined();
  });

  describe ("calculator.add", function() {
    it("should return an addition object", function(){
      expect(calculator.add()).toBeDefined();
    });

    it("should return the sum of arguments", function(){
      expect(calculator.add(9,7)).toBe(16);
    });
  });

  describe ("calculator.subtract", function() {
    it("should return an subtraction object", function(){
      expect(calculator.subtract()).toBeDefined();
    });

    it("should return the sum of arguments", function(){
        expect(calculator.subtract(9,7)).toBe(2);
      });
  });

  describe ("calculator.multiply", function() {
    it("should return an multiplication object", function(){
      expect(calculator.multiply()).toBeDefined();
    });

    it("should return the sum of arguments", function(){
        expect(calculator.multiply(9,7)).toBe(63);
    });
  });

  describe ("calculator.divide", function() {
    it("should return a division object", function(){
      expect(calculator.divide()).toBeDefined();
    });

   it("should return the sum of arguments", function(){
        expect(calculator.divide(4,2)).toBe(2);
    });
  });
});



