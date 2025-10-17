import { render,screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom";
describe("Contect us test case",() => {
    test('testing to load the contact us form ', () => { 
    render(<Contact />)
    const heading =  screen.getByRole('heading', { name: /contact us/i });

    // Assertion
    expect(heading).toBeInTheDocument();

 })

    it('testing the button the contact us form ', () => { 
    render(<Contact />)
    const button =  screen.getByText('Submit');

    // Assertion
    expect(button).toBeInTheDocument();

 })
} )

