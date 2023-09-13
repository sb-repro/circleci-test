

test('test1', () => {
    console.log('console log')
})

test('test2', () => {
    console.log('console error')
})

test('test3', (done) => {
    setTimeout(() => {
        done();
        console.log('console error timeout')
    },2000)
})
