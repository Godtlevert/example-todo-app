import React from "react";

const usePersistentState = () => {
  const [persistentState, setPersistentState] = useState(null);

  // TODO: Implement this hook

  return [persistentState, setPersistentState];
};

export default usePersistentState;
