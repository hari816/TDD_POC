const func=require('./leapyear')
describe('test',() =>{
    it('It should return true',()=>{
        expect(func(2000)).toBe(true);
    })
    it('should be false',()=>{
        expect(func(1999)).toBe(false);
    })
    it('should be false',()=>{
        try{
            expect(func('hello'))
        }
        catch(e){
            expect(e).toBe('Not a number')
        }
    })
    
})