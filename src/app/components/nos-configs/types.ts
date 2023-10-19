export interface ComposantReference {
  _id: string;
  nom: string;
  icon: string;
}

export interface ComposantDetails {
  composant_reference: ComposantReference;
  prix: string;
  url: string;
}

export interface Configuration {
  _id: string;
  prix_config: string;
  slogan: string;
  composants: ComposantDetails[];
}
