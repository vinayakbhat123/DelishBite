import {sum} from "../sum";

test('should first', () => { 
    const result = sum(3,4);

    // Asertion
    expect(result).toBe(7);
 })