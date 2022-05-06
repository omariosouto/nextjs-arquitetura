import { render as rtlRender } from '@testing-library/react'

function DefaultWrapper({ children }) {
  return children;
}

export const customRender = (AllTheProviders = DefaultWrapper) => {
  return (ui, options = {}) => {
    return rtlRender(ui, {wrapper: AllTheProviders, ...options});
  }
}

// re-export everything
export * from '@testing-library/react'

// override render method
export const render = () => console.error('Please create your own render method using customRender()');
