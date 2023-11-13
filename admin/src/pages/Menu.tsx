import { useParams } from "react-router-dom";
import MenuProvider from "../providers/MenuProvider";

export default function Menu() {
  const { id } = useParams() as { id: string };

  return <MenuProvider id={id}>Menu</MenuProvider>;
}
