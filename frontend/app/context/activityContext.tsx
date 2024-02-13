import React, {
  createContext,
  Dispatch,
  ReactElement,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

type ActivityContextType = {
  activity: { [key: string]: any } | null;
  setActivity: Dispatch<SetStateAction<{ [key: string]: any } | null>>;
};

const ActivityContext = createContext<ActivityContextType | undefined>(
  undefined
);

function useActivity(): ActivityContextType {
  const context = useContext(ActivityContext);
  if (!context) {
    throw new Error("useActivity must be used within an Activity provider");
  }
  return context;
}

const ActivityProvider = (props: { children: ReactNode }): ReactElement => {
  const [activity, setActivity] = useState<{ [key: string]: any } | null>(null);

  return (
    <ActivityContext.Provider {...props} value={{ activity, setActivity }} />
  );
};

export { ActivityProvider, useActivity };
