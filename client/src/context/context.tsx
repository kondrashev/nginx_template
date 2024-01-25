import { createContext, ReactNode, useContext, useState } from 'react';
interface IProps {
  children: ReactNode;
}
interface IValuesTypes {
  isShowPassword: boolean;
  showErrorForm: boolean;
  errorForm: boolean;
  errorMessage: string;
  loginForm: string;
  registration: boolean;
}
interface IValues {
  values: IValuesTypes;
  setValues: (values: IValuesTypes) => void;
}

export const AppContext = createContext<null | IValues>(null);
export const useAppContext = () => useContext(AppContext);

const AppContextPovider: React.FC<IProps> = ({ children }) => {
  const [values, setValues] = useState({
    isShowPassword: false,
    showErrorForm: false,
    errorForm: false,
    errorMessage: '',
    loginForm: '',
    registration: false,
  });
  const value = {
    values,
    setValues,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
export default AppContextPovider;
