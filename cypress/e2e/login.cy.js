
describe('Iniciar sesion en la aplicacion', () => {

  before(function(){
    cy.visit('http://demo.testim.io')
  })


  describe('Login con datos exitosos', () => {
    it('puede verificar apertura de pagina',()=>{
      cy.contains('Space Advisor')
    })

    it('puede ingresar el usuario',()=>{
        cy.get('.NavButton__nav-button___34wHC').click()
      
        cy.get('#login').children('div').children('[type="text"]').type('usuario');
        cy.get('#login').children('div').children('[type="password"]').type('pass');

        cy.get('nav').children('[type="submit"]').click()

        cy.get('.mui-dropdown').children('button').children('span').first().should('have.text','Hello, John ')

    });
  });

  
  // it('Visitar pagina', () => {
    
  //   cy.contains('type').click()
  //   cy.url().should('include','/commands/actions')
  //   cy.get('.action-email')
  //   .type('correo@correo')
  //   .should('have.value','correo@correo')
  //   //expect(true).to.equal(false)
  // })
})
