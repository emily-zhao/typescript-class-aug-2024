mport { describe, test, expect} from 'vitest'
describe("Opting in to Type Checking", () => {
    test('Uninitialized is Any', () => {
        let age;
        age = 13;

 
        // 3 hours later
 
        age = 'Old';
 
 
    })
 
    test('Initialize and the type is inferred', () => {
        let age = 13;
 
        age = 14;
        expect(typeof age).toBe("number");
 
        //  @ts-expect-error
        age = 'Old';
 
        expect(typeof age).toBe("string")
 
    })
 
    test("unitialized should have an annotation", () => {
        let age:number;
        age = 13;

 
        // 3 hours later
        // @ts-expect-error 
        age = 'Old';
 
    })
    test("unitialized should have an annotation", () => {
        let age:number | string = 13;
        age = 'Old';
 
    })
})