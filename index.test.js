

test('test1', () => {
    console.log('console log')
})

test('test2', () => {
    console.error('console error')
})

test('test3', () => {
    setTimeout(() => {
        console.error('console error timeout')
    },2000)
})
