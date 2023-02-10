import React from "react";
import ReactJoyride from "react-joyride";
import { steps } from "./Env";
export function JoyrideComponent() {
  //   const [steps, setSteps] = useState<any[]>([]);
  return (
    <ReactJoyride
      steps={steps}
      continuous={steps.length !== 0}
      run={steps.length !== 0}
      styles={{
        options: {
          // arrowColor: "#e3ffeb",
          // backgroundColor: "#e3ffeb",
          // overlayColor: "rgba(79, 26, 0, 0.4)",
          primaryColor: "#DE5028",
          textColor: "#19529C",
          // width: 900,
          zIndex: 1000,
        },
      }}
      // stepIndex={0}
      // scrollToFirstStep={true}
    ></ReactJoyride>
  );
}
