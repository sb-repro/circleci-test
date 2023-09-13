

test('test1', () => {
    console.log('console log')
})

test('test2', () => {
    console.error('console error')
})

test('test3', (done) => {
    setTimeout(() => {
        console.error('console error timeout')
        done();
    },2000)
})
