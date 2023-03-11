import { icon } from "@/assets";
import Image from "next/image";
import Link from "next/link";
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

          <Style.RightSide>
            <Style.Nav>
              <Link href="">
                <Image src={icon.bag} alt="" /> <p className="p4">Shop</p>
              </Link>
              <Link href="">
                <Image src={icon.user} alt="" />{" "}
                <p className="p4">My Porsche</p>
              </Link>
            </Style.Nav>
            <Image src={icon.hamburguerMenu} alt="" priority />
          </Style.RightSide>
        </Style.NavbarContent>
      </Style.NavbarContainer>
    </>
  );
}
