import { render,screen } from "@testing-library/react"
import  RestaurantCard  from "../RestaurantCard"
import MOCK_DATA from "../mocks/mockdata.json"
import "@testing-library/jest-dom";

test("Should be render the rescard ",() => {
    render(<RestaurantCard  resData={MOCK_DATA}/>)
    const name=screen.getByText("Spice Garden");
    expect(name).toBeInTheDocument();
});

// it("should render restaurants card component with  promoted card label",() =>{
//     render(withpromoted(RestaurantCard));
//     const label = screen.getByText("Spice Garden")
//     expect(label).toBeInTheDocument()
// }) 