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

  return (
    <Box
      ref={scrollerRef}
      className="scroller"
      data-direction={direction}
      data-speed={speed}
      css={{
        maxWidth: "100%",
        overflow: "hidden",
        mask: "linear-gradient(90deg, transparent, white 20%, white 80%, transparent)",
        WebkitMask:
          "linear-gradient(90deg, transparent, white 20%, white 80%, transparent)",
      }}
    >
      <Box
        ref={scrollerInnerRef}
        className="scroller__inner"
        display="flex"
        flexWrap="nowrap"
        gap="1rem"
        css={{
          animation:
            "scroll var(--_animation-duration, 40s) var(--_animation-direction, forwards) linear infinite",
          "@keyframes scroll": {
            to: {
              transform: "translate(calc(-50% - 0.5rem))",
            },
          },
        }}
      >
        {logos.map((logo, index) => (
          <Box key={index} width="100px" height="100px">
            {logo}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default LogoScroll;
