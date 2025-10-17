import { fireEvent, render,screen } from "@testing-library/react"
import Body from "../Body"
import MOCK_DATA from "../mocks/mockdata.json"
import { BrowserRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() =>{
    return Promise.resolve(() =>{
        json:() =>{
            return Promise.resolve(MOCK_DATA)
        }
    })
})
beforeAll(() =>{
    console.log("Before All");
})

beforeEach(() =>{
    console.log("before Each")
})
it("Should render the body component with search",async() => {
   await act(async() =>  render(
    <BrowserRouter>
    <Body /></BrowserRouter>
   ))
     const searchbtn = screen.getByRole("button" , {name:"Search"});
     const searchInput = screen.getByTestId("searchInput")
     fireEvent.change(searchInput,{target : {value:"garden"}})
     fireEvent.click(searchbtn);
     console.log(searchInput);
     
     const cards = screen.getAllByTestId("resdataid")
     expect(cards.length).toBeInTheDocument(1);
   
    // const show = screen.getByRole("botton")
    // expect(show).toBeInTheDocument();
})