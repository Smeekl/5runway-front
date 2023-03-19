import React from 'react';
import { IServices } from '@serviceTypes';

const { createContext, useContext } = React;
const ServicesContext = createContext({} as IServices);

type TServiceProviderProps = {
  services: IServices;
  children: React.ReactNode;
};

export const ServiceProvider = ({
  services,
  children,
}: TServiceProviderProps) => (
  <ServicesContext.Provider value={services}>
    {children}
  </ServicesContext.Provider>
);

export const useService = () => useContext(ServicesContext);
