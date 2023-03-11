import { icon } from "@/assets";
import Image from "next/image";
import * as Style from "./styles";

export default function Navbar() {
  return (
    <>
      <Style.NavbarContainer>
        <Style.NavbarContent>
          <Style.LeftSide>
            <Image src={icon.usaFlag} alt="" />
            <p className="p4">(USD)</p>
          </Style.LeftSide>
          <Image src={icon.porscheLogo} alt="" priority />
        </Style.NavbarContent>
      </Style.NavbarContainer>
    </>
  );
}
