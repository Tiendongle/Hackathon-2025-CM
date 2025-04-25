# Sample usage

```
import { createFileRoute } from "@tanstack/react-router";
import { useFirstAppStore, useSecondAppStore } from "~/store";

export const Route = createFileRoute("/")({
  component: Home,
});

const getZustandValue = () => {
  return useFirstAppStore.getState().item;
};

function Home() {
  const item = useFirstAppStore((state) => state.item);
  const item2 = useSecondAppStore((state) => state.item2);
  return (
    <div className="p-2">
      <h3>Welcome Home!!!</h3>
      <h1>{item}</h1>
      <h1>{item2}</h1>
      <h1>{getZustandValue()}</h1>
    </div>
  );
}
```
