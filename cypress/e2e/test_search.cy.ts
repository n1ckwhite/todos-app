describe('Проверка todos', () => {
  it('Проверка запуска/добавление/удаление задачи', () => {
    cy.visit('http://localhost:3000')
    cy.get('._input_j33im_1').type('Hello, World')
    cy.get('form').submit()
    cy.get('._label_1uzce_18').click()
    cy.get('._input_j33im_1').type('Test')
    cy.get('form').submit()
    cy.get(':nth-child(1) > ._input_checkbox_1uzce_1 > ._btn_1xv93_1').click()
    cy.get('._bottom_1idki_11 > :nth-child(3)').click()
  })
})
