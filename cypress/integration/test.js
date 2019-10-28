/// <reference types="Cypress" />
//import md5 from "md5";
//import fs from "fs-extra";
import * as config from '../config/config';
 
describe('Simple test',() => {
 
    before(() => {
        Cypress.config('baseUrl', config.baseUrl)
        Cypress.config('pageLoadTimeout', 100000)
    })
 
    beforeEach(() => {
        cy.visit('/')
        Cypress.Cookies.preserveOnce('laravel_session')
        Cypress.Cookies.preserveOnce('_token')
        Cypress.Cookies.preserveOnce('currentUser')
        Cypress.Cookies.preserveOnce('sessionid')
        Cypress.Cookies.preserveOnce('isSuperAdmin')
        Cypress.Cookies.preserveOnce('isOrganizationAdmin')
    })
 
    afterEach(() => {
        //cacheLocalStorageAuth()
        //cy.saveLocalStorage();
    })
 
    it('log in',() => {
        //this.skip();
 
        cy.visit('/login')
        .get('#user-name')
        .type(config.username)
 
        cy.get('#password')
        .type(config.password, { log: false })
 
        cy.get('button[type=submit]')
        .click()
 
        cy.get('button')
        .should('contain', 'Admin')
        .visible
    })
 
    it('log out', function () {
        this.skip();
        cy.get('button')
        .should('contain', 'Wyloguj')
        .click()
    })
 
    it('Simple test datasets', function () {
        //this.skip();
        cy.contains('Zbiory')
        .click()

        cy.get('a[href*=datasets]')
        .click
 
        // cy.get('a[href*=login]').click()
        // cy.get('button[type="submit"]').click()
    })
})