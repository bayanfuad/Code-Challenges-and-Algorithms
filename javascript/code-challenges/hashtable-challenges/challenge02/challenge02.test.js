// Write your test here
const {Repeated} = require("./challenge02")

describe('Repeated', () => {

    test('Repeated TEST', () => {
     
        const str = `ASAC is a department at LTUC. ASAC teaches programming in LTUC.`;
        const str1 = ` is a department at LTUC. ASAC teaches programming in LTUC.`;
        const str2 = `I am learning programming at ASAC.`;
        
        const Repeated3 = Repeated(str)
        const Repeated1 = Repeated(str1)
        const Repeated2 = Repeated(str2)
    
        expect(Repeated3).toBe("ASAC")
        expect(Repeated1).toBe("LTUC")
        expect(Repeated2).toBe("No Repeated Words")

  });
});