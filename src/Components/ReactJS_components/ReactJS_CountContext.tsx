import React, {createContext, useState} from 'react';

export const ReactJSCountContext = createContext(0);

export const ReactJSCountAnswers = ({children}) => {
  const [countRJSCorrectOptions, setCountRJSCorrectOptions] =
    useState<number>(0);
  const [countRJSWrongOptions, setCountRJSWrongOptions] = useState<number>(0);

  return (
    <ReactJSCountContext.Provider
      value={{
        countRJSCorrectOptions,
        setCountRJSCorrectOptions,
        countRJSWrongOptions,
        setCountRJSWrongOptions,
      }}>
      {children}
    </ReactJSCountContext.Provider>
  );
};
