import * as Progress from "react-native-progress";

interface progressBarProps {
  progress: number;
}

export default function ProgressBar({ progress }: progressBarProps) {
  return (
    <Progress.Bar
      progress={progress}
      width={334}
      color={"rgba(169, 32, 201, 1)"}
      unfilledColor={"rgba(217, 217, 217, 1)"}
      borderWidth={0}
      height={15}
      borderRadius={8}
    />
  );
}
