import { apiRequest } from "./api";
import React, { createContext, useEffect, useState } from "react";

//! Виноградов:  контекст.
// 1. создал контекст.
// 2. Файл App.js - обернул все компоненты в DataProvider, для доступа к контексту
// 3. Пример использования файл medicalHistory.js ( один из самых "дальних" файлов ). Получаем массив докторов без прокидывания через компоненты - const { doctorArray } = useContext(DataContext);
// - так же использую в services.js
export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [servicesArray, setServicesArray] = useState([]);
  const [doctorArray, setDoctorArray] = useState([]);

  useEffect(() => {
    apiRequest("departments", "GET").then((data) => {
      setServicesArray(data);
    });
  }, []);

  useEffect(() => {
    apiRequest("doctors", "GET").then((data) => {
      setDoctorArray(data);
    });
  }, []);

  return (
    <DataContext.Provider value={{ servicesArray, doctorArray }}>
      {children}
    </DataContext.Provider>
  );
};
