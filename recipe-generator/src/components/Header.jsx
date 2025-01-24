import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBowlFood } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const icon = <FontAwesomeIcon icon={faBowlFood} className="bowl-food" />;

  return (
    <header>
      {icon}
      <h1>Recipe Generator</h1>
    </header>
  );
}
