import { describe, it, expect } from 'vitest';
import { changeOrderByPrice } from './changeOrderByPrice';

const mockProducts = [
    {
      id: 1,
      name: "Cachopo",
      price: 30,
    },
    {
      id: 2,
      name: "Chorizo a la sidra",
      price: 15,
    },
    {
      id: 3,
      name: "Navajas",
      price: 25,
    },
  ];
  
describe("changeOrderByPrice", () => {
    it("Should order all products by price in descending order", () => {
        const result = changeOrderByPrice(mockProducts);
        const cheaperProduct = {
          id: 2,
          name: "Chorizo a la sidra",
          price: 15,
        };
        const expensiveProduct = {
          id: 1,
          name: "Cachopo",
          price: 30,
        };

        expect(result[0]).toEqual(expensiveProduct);
        expect(result[2]).toEqual(cheaperProduct);
    });
});