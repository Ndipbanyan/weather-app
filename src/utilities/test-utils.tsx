import { render as rtlRender } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { FC, ReactElement } from "react";

const render = (ui: ReactElement, { ...renderOptions } = {}) => {
  const Wrapper: FC = ({ children }) => {
    return <Provider store={store}>{children}</Provider>;
  };
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};

// re-export everything
export * from "@testing-library/react";
// override render method
export { render };
