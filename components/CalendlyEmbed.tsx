import React from "react";
import { InlineWidget } from "react-calendly";

interface CalendlyWidgetProps {
  url: string;
}

const CalendlyWidget: React.FC<CalendlyWidgetProps> = ({ url }) => {
  return (
    <div className="h-fit">
      <InlineWidget
        url={url}
        styles={{
          height: "1000px", // Adjust this value as needed
        }}
      />
    </div>
  );
};

export default CalendlyWidget;
