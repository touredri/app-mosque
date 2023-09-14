export interface Mosque {
  info: {
    id: number;
    nom: string;
    quartier: string;
    imam: string;
    numero: string;
  };
  localisation: {
    latitude: number;
    longitude: number;
  };
  prieres: {
    fadjr: string;
    dhuhr: string;
    asr: string;
    maghrib: string;
    isha: string;
    djuma: string;
  };
  tabsir: {
    lundi: string;
    mardi: string;
    mercredi: string;
    jeudi: string;
    vendredi: string;
    samedi: string;
    dimanche: string;
  };
  image: string; // Chemin de l'image dans Firebase Storage
}
