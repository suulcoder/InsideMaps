const validateEmail = require('./validate')

test('properly validates email',()=>{
    expect(
        validateEmail('gus@gmail.com')
    ).toBe(true)
})