beforeEach( () => {

    cy
      .log('starting test')
  
  })
  
  it('creates a new board', () => {
  
    let res
    cy
      .request('POST', 'http://localhost:3000', { name: 'new board' })
      .then( ({ body }) => {
        res = body
      })
  
    console.log(res)
  
  })