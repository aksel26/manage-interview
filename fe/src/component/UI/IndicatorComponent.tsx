import { useState } from "react";
import { FloatingIndicator, UnstyledButton } from "@mantine/core";
import classes from "./indicator.module.css";

const userTypeENUM = [
  { label: "면접관", value: "ADVISOR" },
  { label: "매니저", value: "STAFF" },
  { label: "관리자", value: "ADMIN" },
];
type TIndicatorState = {
  label: string;
  value: string;
};
type IndicatorComponentProps = {
  userType: TIndicatorState;
  setUserType: (value: any) => void;
};

export const IndicatorComponent = ({ userType, setUserType }: IndicatorComponentProps) => {
  const [rootRef, setRootRef] = useState<HTMLDivElement | null>(null);
  const [controlsRefs, setControlsRefs] = useState<Record<string, HTMLButtonElement | null>>({});

  const setControlRef = (value: string) => (node: HTMLButtonElement) => {
    controlsRefs[value] = node;
    setControlsRefs(controlsRefs);
  };

  const controls = userTypeENUM.map((item: TIndicatorState) => (
    <UnstyledButton
      key={item.value}
      className={classes.control}
      ref={setControlRef(item.value)}
      onClick={() => setUserType(item)}
      mod={{ active: userType.value === item.value }}
    >
      <span className={classes.controlLabel}>{item.label}</span>
    </UnstyledButton>
  ));

  return (
    <div className={classes.root} ref={setRootRef}>
      {controls}
      <FloatingIndicator target={controlsRefs[userType.value]} parent={rootRef} className={classes.indicator} />
    </div>
  );
};
