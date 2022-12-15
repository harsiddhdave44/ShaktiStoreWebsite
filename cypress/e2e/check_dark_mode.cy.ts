describe('empty spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/');
    cy.get('.nextui-c-eJPKci').click();
    cy.get('.nextui-c-jjKPqy').click({ force: true });
  })
})