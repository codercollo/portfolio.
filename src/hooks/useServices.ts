// src/hooks/useServices.ts
import { useState, useEffect } from "react";
import servicesData from "../data/servicesData.json";
import type { Service } from "../types";

export function useServices(): Service[] {
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    // Simulate fetching data (can later be replaced with API call)
    setServices(servicesData);
  }, []);

  return services;
}
