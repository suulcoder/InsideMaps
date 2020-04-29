const bodyParser = require('./parser')




test('properly parse',()=>{
    expect(
        bodyParser({})
    ).toEqual([])
})