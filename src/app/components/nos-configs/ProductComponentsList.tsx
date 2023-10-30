// ProductComponentsList.tsx
import { ComposantDetails } from "./types";
import { FaExternalLinkAlt } from "react-icons/fa";

interface ProductComponentsListProps {
  components: ComposantDetails[];
}

const ProductComponentsList: React.FC<ProductComponentsListProps> = ({
  components,
}) => (
  <>
    <ul>
      {components &&
        components.map((comp) => (
          <li
            key={comp.composant_reference._id}
            className="flex flex-justify-center">
            <span className="text-white font-bold w-1/3">
              {comp.composant_reference.nom}
            </span>
            <a
              href={comp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-2/3">
              <span className="text-white hover:text-blue-600 transition-colors duration-200 flex justify-center">
                {comp.nom}
              </span>
            </a>
          </li>
        ))}
    </ul>
  </>
);

export default ProductComponentsList;
