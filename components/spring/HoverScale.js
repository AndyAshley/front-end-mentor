import React, { useState, useEffect } from "react";

// react-spring
import { animated, useSpring } from "react-spring";

export default function HoverScale(props) {
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    if (!hovering) {
      return;
    }

    if (props.temporary) {
      const timeoutId = window.setTimeout(() => {
        setHovering(false);
      }, 150);

      return () => {
        window.clearTimeout(timeoutId);
      };
    }
  }, [hovering, props.timing]);

  const style = useSpring({
    display: "inline-block",
    backfaceVisibility: "hidden",
    transform: hovering
      ? `translate(${props.x ? props.x : 0}px, ${props.y ? props.y : 0}px)
        rotate(${props.rotation ? props.rotation : 0}deg)
        scale(${props.scale ? props.scale : 0})`
      : `translate(0px, 0px)
        rotate(0deg)
        scale(1)`,
    config: {
      tension: 300,
      friction: 10,
    },
  });

  return (
    <animated.span
      onMouseEnter={() => {
        setHovering(true);
      }}
      onMouseLeave={() => {
        setHovering(false);
      }}
      style={style}
    >
      {props.html}
    </animated.span>
  );
}
