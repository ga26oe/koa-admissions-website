import { useColorModeValue } from "@chakra-ui/react";

export default function KoaLogo() {
  const circleFill = useColorModeValue("#268bd2", "#5eadee");
  const textFill = useColorModeValue("#268bd2", "#5eadee");
  const strokeColor = useColorModeValue("#000", "rgba(255, 255, 255, 0.92)");
  const subTextFill = useColorModeValue("#555", "rgba(255, 255, 255, 0.92)");

  return (
    <svg
      width="200"
      height="80"
      viewBox="0 0 250 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="40" cy="50" r="20" fill={circleFill} />
      <circle
        cx="80"
        cy="50"
        r="20"
        fill="none"
        stroke={strokeColor}
        strokeWidth="2"
      />
      <line
        x1="60"
        y1="50"
        x2="80"
        y2="50"
        stroke={strokeColor}
        strokeWidth="2"
      />
      <text
        x="110"
        y="40"
        fontFamily="Arial, sans-serif"
        fontSize="25"
        fill={textFill}
      >
        KOA
      </text>
      <text
        x="110"
        y="70"
        fontFamily="Arial, sans-serif"
        fontSize="15"
        fill={subTextFill}
      >
        Admissions
      </text>
    </svg>
  );
}
