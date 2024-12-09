interface ourTeam {
  name: {
    en: string;
    ru: string;
  };
  avatar: string;
  specialization: {
    en: string;
    ru: string;
  };
  id?: string;
}
interface IUniverse {
  id: number;
  name: {
    en: string;
    ru: string;
    ky: string;
    png: string;
  };
  country: {
    en: string;
    ru: string;
    ky: string;
    flag: string;
  };
  location: {
    en: string;
    ru: string;
    ky: string;
  };
  established: number;
  specialization: Array<{
    en: string;
    ru: string;
    ky: string;
  }>;
  type: {
    en: string;
    ru: string;
    ky: string;
  };
  language: {
    en: string;
    ru: string;
    ky: string;
  };
  descr: {
    NominalDuration: {
      en: string;
      ru: string;
      ky: string;
    };
    Awards: {
      en: string;
      ru: string;
      ky: string;
    };
    TuitionFee: {
      en: string;
      ru: string;
      ky: string;
    };
    ApplicationFee: {
      en: string;
      ru: string;
      ky: string;
    };
    RegistrationFee: {
      en: string;
      ru: string;
      ky: string;
    };
    EntryQualication: {
      en: string;
      ru: string;
      ky: string;
    };
    Pre_deadline: {
      en: string;
      ru: string;
      ky: string;
    };
    Application_deadline: {
      en: string;
      ru: string;
      ky: string;
    };
  };
  cost: {
    title: {
      en: string;
      ru: string;
      ky: string;
    };
    value_1: {
      en: string;
      ru: string;
      ky: string;
    };
    value_2: {
      en: string;
      ru: string;
      ky: string;
    };
  };
  photo: Array<string>;
}
