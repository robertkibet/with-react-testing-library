import {render, screen} from "@testing-library/react";
import FollowersList from "../FollowersList";
import {BrowserRouter} from "react-router-dom";

describe("FollowersList", () => {
  it("renders followers list and we can get the first card", async () => {
    render(
      <BrowserRouter>
        <FollowersList />
      </BrowserRouter>
    );

    const followerDiv = await screen.findByTestId("follower-item-0");
    expect(followerDiv).toBeInTheDocument();
  });

  //   it("renders multiple followers", async () => {
  //     render(
  //       <BrowserRouter>
  //         <FollowersList />
  //       </BrowserRouter>
  //     );

  //     const followerDivs = await screen.findAllByTestId(/follower-item/);
  //     expect(followerDivs.length).toBeGreaterThan(2);
  //   });
});
