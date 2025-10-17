import { render,screen } from "@testing-library/react";
import { act } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";

global.fetch =jest.fn(() => Promise.resolve(() => {
        json:() => Promise.resolve(MOCK_DATA)
        
    })
)

it("Should load restaurant Menu Component",async() =>{
     await act( async() => render(<RestaurantMenu />))
     const accordian = screen.getByText("Spice Garden")
     console.log(accordian)
     except(accordian).toBeInTheDocument()
})