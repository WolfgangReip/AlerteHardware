// ProductComponentsList.tsx
import { ComposantDetails } from "./types";

interface ProductComponentsListProps {
  components: ComposantDetails[];
}

const ProductComponentsList: React.FC<ProductComponentsListProps> = ({
  components,
}) => (
  <ul>
    {components.map((comp) => (
      <li key={comp.composant_reference._id} className="my-1">
        {comp.composant_reference.nom}
      </li>
    ))}
  </ul>
);

export default ProductComponentsList;
