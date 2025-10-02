"use client";
import { create } from "zustand";

interface FormValues {
  ressourceRecrut: string
  service: string

  date: string
  contratDuration: string
  travelDuration: string
  yearExperiences: string
  competencies: string[]
  otherComp: string
  language: string[]
  otherLang: string
  level: string
  message: string
  contractUnits: Record<string, string>
  day: Record<string, string>
  night: Record<string, string>

}

interface FormStore {
  values: FormValues;
  setValues: (data: Partial<FormValues>) => void;
  reset: () => void;
}

const initialValues: FormValues = {
  ressourceRecrut: "",
  service: "",
  date: "",
  contratDuration: '',
  travelDuration:  '',
  yearExperiences: '',
  competencies: [],
  otherComp: '',
  language: [],
  otherLang:'',
  level: '',
  message: '',
  contractUnits: {},
  day: {},
  night: {},
};

export const useFormStore = create<FormStore>((set) => ({
  values: initialValues,
  setValues: (data) => set((state) => ({ values: { ...state.values, ...data } })),
  reset: () => set({ values: initialValues }),
}));
