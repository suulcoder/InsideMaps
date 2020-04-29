const auth = require('../reducers/auth')

import * as actions from '../actions'

const action1 = actions.startLogin('test','test')

test('Signals the start of the loggin process ',()=>{
    expect(login(null,action1)).toBe(true)
})

const action2 = actions.startSingUp('test','test','test','test@test.com','test','test','test')
test('Signals the start of the sing up process',()=>{
    expect(signup(null,action2)).toBe(true)
})

const action3 = actions.completeLogin('test')
test('Returns the users token ',()=>{
    expect(token(null,action3)).toBe('test')
})

const action4 = actions.failLogin('test','test')
test('Returns the error',()=>{
    expect(error(null,action4)).toBe('test')
})

const action4 = actions.completeLogin()
test('Signals the start of the logout process ',()=>{
    expect(signup(null,action3)).toBe('test')
})