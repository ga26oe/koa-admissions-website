import React, { useEffect, useRef, ReactNode } from "react";
import { Box, useColorModeValue } from "@chakra-ui/react";

interface LogoScrollProps {
  logos: ReactNode[];
  direction?: "left" | "right";
  speed?: "slow" | "normal" | "fast";
}

const LogoScroll: React.FC<LogoScrollProps> = ({
  logos,
  direction = "left",
  speed = "normal",
}) => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const scrollerInnerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const scroller = scrollerRef.current;
      const scrollerInner = scrollerInnerRef.current;

      if (scroller && scrollerInner) {
        scroller.setAttribute("data-animated", "true");

        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          (duplicatedItem as HTMLElement).setAttribute("aria-hidden", "true");
          scrollerInner.appendChild(duplicatedItem);
        });
      }
    }
  }, []);

  const speedMultiplier = speed === "slow" ? 1.5 : speed === "fast" ? 0.5 : 1;
  const containerBg = useColorModeValue(
    "rgba(247, 250, 252, 0.8)",
    "rgba(26, 32, 44, 0.8)"
  );
  const logoOpacity = useColorModeValue(0.9, 0.7);
  const gradientColor = useColorModeValue(
    "rgba(247, 250, 252, 1)",
    "rgba(26, 32, 44, 1)"
  );

  return (
    <Box
      ref={scrollerRef}
      className="scroller"
      data-direction={direction}
      data-speed={speed}
      bg={containerBg}
      borderRadius="xl"
      py={4}
      width="100%"
      overflow="hidden"
      position="relative"
    >
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        height="100%"
        bgGradient={`linear(to-r, ${gradientColor}, transparent 10%, transparent 90%, ${gradientColor})`}
        zIndex={2}
        pointerEvents="none"
      />
      <Box
        ref={scrollerInnerRef}
        className="scroller__inner"
        display="flex"
        flexWrap="nowrap"
        position="relative"
        css={{
          animation: `scroll ${30 * speedMultiplier}s linear infinite ${
            direction === "right" ? "reverse" : ""
          }`,
          "@keyframes scroll": {
            from: { transform: "translateX(0)" },
            to: { transform: "translateX(-50%)" },
          },
        }}
      >
        {logos.map((logo, index) => (
          <Box
            key={index}
            width="120px"
            height="120px"
            flexShrink={0}
            display="flex"
            alignItems="center"
            justifyContent="center"
            marginRight="4rem"
            opacity={logoOpacity}
            transition="opacity 0.3s ease"
            _hover={{ opacity: 1 }}
          >
            {logo}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default LogoScroll;
