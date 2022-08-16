describe('Busqueda de viajes con checkout', ()=>{

    before(function(){
        cy.visit('http://demo.testim.io')
      })

    describe('Busqueda de viajes por filtro de nombre', ()=>{
        it('puede seleccionar un viaje', ()=>{

            // seleccionar fecha de ida
            cy.get('[data-react-toolbox="input"]').children('input[type="text"]').first().click()
            cy.get('[data-react-toolbox="day"]').not('.theme__disabled___2N4Gy').eq(5).click()
            cy.get('nav').children('button').last().click()



            // seleccionar fecha de regreso
            cy.get('[data-react-toolbox="input"]').children('input[type="text"]').first().click()
            cy.get('[data-react-toolbox="day"]').not('.theme__disabled___2N4Gy').eq(15).click()
            cy.get('nav').children('button').last().click()
 

            cy.get('[data-react-toolbox="input"]').siblings('ul')
            cy.get('[data-react-toolbox="input"]').siblings('ul').children('li').eq(1).click()

        });
    })

})