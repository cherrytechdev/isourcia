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
promotionCode: string;

  ressource: string;
  marketMainObj: string[];
  otherMarketMainObj: string;
  marketExpSearch: string[];
  otherMarketExpSearch: string;
  marketContent: string;
  marketMissionDelay: string;
  marketDateWish: string;
  marketMailFreq: string;
  marketContactBase: string;
  marketOptionComp: string[];
  otherMarketOptionComp: string;
  marketTechTools: string[];
  otherMarketTechTools: string;

  objectiveMobile: string[]
  otherObjectiveMobile: string
  plateformMobile: string[]
  otherPlateformMobile: string
  designMobile: string
  designStyleMobile: string[]
  inspirationAppMobile: string
  functionalityMobile: string[]
  otherFunctionalityMobile: string
  apkContentMobile: string
  dataManageMobile: string[]
  otherDataManageMobile: string
  maintainMobile: string
  techMobile: string[]
  otherTechMobile: string


  resourceExt: string[];
  otherResExt: string;
  dateStartExt: string;
  durationExt: string[];
  timeExt: string[];
  otherTimeExt: string;
  competenciesExt: string;
  experiencesExt: string[];
  languageExt: string[];
  otherLangExt: string;
  chooseDeg: string;
  yesInpExt: string;
  commentTxt: string;
  modalityExt: string[];
  facturationModExt: string[];
  maintenanceExt: string;

  webObj: string[];
  otherWebObj: string;
  chooseChart: string;
  webDesign: string[];
  inspirationWeb: string;
  webContent: string[];
  webContentReady: string;
  webFunctionality: string[];
  webMaintenance: string;
  webOptions: string[];
  webTechnology: string[];
  otherWebTechnology: string;

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
  travelDuration: '',
  yearExperiences: '',
  competencies: [],
  otherComp: '',
  language: [],
  otherLang: '',
  level: '',
  message: '',
  contractUnits: {},
  day: {},
  night: {},
  ressource: "",


  marketMainObj: [],
  otherMarketMainObj: "",
  marketExpSearch: [],
  otherMarketExpSearch: "",
  marketContent: "Oui, j'ai déjà mes textes et visuels",
  marketMissionDelay: "Ponctuelle (1 campagne)",
  marketDateWish: "",
  marketMailFreq: "Ponctuelle",
  marketContactBase: "< 1000",
  marketOptionComp: [],
  otherMarketOptionComp: "",
  marketTechTools: [],
  otherMarketTechTools: "",

  objectiveMobile: [],
  otherObjectiveMobile: "",
  plateformMobile: [],
  otherPlateformMobile: "",
  designMobile: "Non (j'aimerais en créer une)",
  designStyleMobile: [],
  inspirationAppMobile: "",
  functionalityMobile: [],
  otherFunctionalityMobile: "",
  apkContentMobile: "À créer (j'ai besoin de rédaction/visuels)",
  dataManageMobile: ["Stockage local"],
  otherDataManageMobile: "",
  maintainMobile: "Oui, mises à jour simples",
  techMobile: [],
  otherTechMobile: "",
  promotionCode:"",

  resourceExt: [],
  otherResExt: "",
  dateStartExt: "",
  durationExt: [],
  timeExt: [],
  otherTimeExt: "",
  competenciesExt: "",
  experiencesExt: [],
  languageExt: [],
  otherLangExt: "",
  chooseDeg: "Non",
  yesInpExt: "",
  commentTxt: "",
  modalityExt: [],
  facturationModExt: [],
  maintenanceExt: "Non, uniquement la mission définie",

  webObj: [],
  otherWebObj: "",
  chooseChart: "non",
  webDesign: [],
  inspirationWeb: "",
  webContent: [],
  webContentReady: "Déjà prêt (fourni par client)",
  webFunctionality: [],
  webMaintenance: "Non, livraison uniquement",
  webOptions: [],
  webTechnology: [],
  otherWebTechnology: "",
};

export const useFormStore = create<FormStore>((set) => ({
  values: initialValues,
  setValues: (data) => set((state) => ({ values: { ...state.values, ...data } })),
  reset: () => set({ values: initialValues }),
}));
