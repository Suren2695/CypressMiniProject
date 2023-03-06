//test suit 
describe("Login Form", ()=>{   //describe block
    it("implicit Assertion",()=>{    //it block
        
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.url().should('include','orangehrmlive.com') //keyword,value(param)
        cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.url().should('contains','orangehrmlive')
    })
})

