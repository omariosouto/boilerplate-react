import { render as rtlRende } from "@testing-library/react";


interface DefaultWrapperProps {
  children: React.ReactNode;
}

function DefaultWrapper({ children }: DefaultWrapperProps) {
  return children;
}

export const customRender = (AllTheProviders = DefaultWrapper) => (ui: React.ReactElement, options?: any) =>
  rtlRende(ui, { wrapper: AllTheProviders, ...options });


export { default as userEvent } from '@testing-library/user-event';
export * from "@testing-library/react";

export const render = () => console.error("Please create your own render method using customRender()");