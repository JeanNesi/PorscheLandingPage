import { icon } from "@/assets";
import Image from "next/image";
import * as Style from "./styles";

export const ModelsSection = () => {
  return (
    <Style.ModelsContainer>
      <h1>Models</h1>
      <Style.ModelsContent>
        <Style.CarContainer>
          <Style.CarImage>
            <Image src={icon.iris} alt="" />
          </Style.CarImage>
          <Style.CarInfo>
            <h4>911</h4>
            <p className="p3">
              911 Career 4<br />
              From EUR 121,346.00 including VAT
            </p>
          </Style.CarInfo>
          <Style.ButtonsContainer>
            <button>
              <p className="p3">Setup</p>
            </button>
            <button>
              <p className="p3">Buy</p>
            </button>
          </Style.ButtonsContainer>
        </Style.CarContainer>

        <Style.CarContainer>
          <Style.CarImage>
            <Image src={icon.taycan} alt="" />
          </Style.CarImage>

          <Style.CarInfo>
            <h4>Taycan</h4>
            <p className="p3">
              Taycan Turbo S<br />
              From EUR 189,668.00 including VAT
            </p>
          </Style.CarInfo>
          <Style.ButtonsContainer>
            <button>
              <p className="p3">Setup</p>
            </button>
            <button>
              <p className="p3">Buy</p>
            </button>
          </Style.ButtonsContainer>
        </Style.CarContainer>

        <Style.CarContainer>
          <Style.CarImage>
            <Image src={icon.macan} alt="" />
          </Style.CarImage>

          <Style.CarInfo>
            <h4>Macan T</h4>
            <p className="p3">
              Macan T<br />
              From EUR 70,771.00 including VAT
            </p>
          </Style.CarInfo>
          <Style.ButtonsContainer>
            <button>
              <p className="p3">Setup</p>
            </button>
            <button>
              <p className="p3">Buy</p>
            </button>
          </Style.ButtonsContainer>
        </Style.CarContainer>
      </Style.ModelsContent>
    </Style.ModelsContainer>
  );
};
