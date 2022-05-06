import { customRender } from "@alura/test-commons/react-testing-library";
import { HomeScreen } from "./HomeScreen";

function CustomWrapper({ children }) {
  return <section>{children}</section>;
}
const render = customRender(CustomWrapper);

describe("<HomeScreen />", () => {
  it("renders the page", () => {
    const { container } = render(<HomeScreen />);

    expect(container).toMatchSnapshot();
  });
});
