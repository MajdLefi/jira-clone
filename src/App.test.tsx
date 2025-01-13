import { render, screen } from "@testing-library/react";
import Header from "./components/layout/Header"; // Adjust the import path as necessary
import "@testing-library/jest-dom";

describe("Header Component", () => {
  test("should render six items in the header", () => {
    render(<Header />);
    
    // Assert that there are 6 interactive items in the header
    const menuIcon = screen.getByLabelText("open drawer");
    const searchInput = screen.getByPlaceholderText("Search…");
    const mailIcon = screen.getByLabelText("show 4 new mails");
    const notificationsIcon = screen.getByLabelText("show 17 new notifications");
    const profileIcon = screen.getByLabelText("account of current user");
    const moreIcon = screen.getByLabelText("show more");

    // Verify that all six items are rendered
    expect(menuIcon).toBeInTheDocument();
    expect(searchInput).toBeInTheDocument();
    expect(mailIcon).toBeInTheDocument();
    expect(notificationsIcon).toBeInTheDocument();
    expect(profileIcon).toBeInTheDocument();
    expect(moreIcon).toBeInTheDocument();
  });
});
