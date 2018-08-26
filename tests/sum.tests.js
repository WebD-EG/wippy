import test from 'ava'
import sum from '../src/sum'

if(!sum.hasOwnProperty('getSum')) {
    throw new Error('Hum.. La fonction getSum n\'existe pas. Veuillez vérifier le nom')
}

test('get the sum of the numbers', t => {
    t.is(sum.getSum(1, 2, 3), 6)
})