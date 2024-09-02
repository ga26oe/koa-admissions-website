import React, { useEffect, useRef, ReactNode } from "react";
import { Box } from "@chakra-ui/react";

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

  return (
    <Box
      ref={scrollerRef}
      className="scroller"
      data-direction={direction}
      data-speed={speed}
      css={{
        width: "60%",
        margin: "0 auto",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Box
        ref={scrollerInnerRef}
        className="scroller__inner"
        display="flex"
        flexWrap="nowrap"
        position="relative"
        css={{
          animation: `scroll ${40 * speedMultiplier}s linear infinite ${
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
            width="100px"
            height="100px"
            flexShrink={0}
            display="flex"
            alignItems="center"
            justifyContent="center"
            marginRight="1rem"
          >
            {logo}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default LogoScroll;
