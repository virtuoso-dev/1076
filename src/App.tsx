import * as React from "react";
import { VirtuosoHandle, Virtuoso } from "react-virtuoso";

export default function Example() {
  const ref = React.useRef<VirtuosoHandle>(null);
  const [key, setKey] = React.useState(0);

  const snapshot = history.state?.snapshot;

  console.log("Rendering with state", snapshot);
  return (
    <div>
      <button
        onClick={() => {
          ref.current?.getState((snapshot) => {
            history.replaceState({ snapshot }, "");
            console.log("saving state", snapshot);
          });
        }}
      >
        Log State
      </button>
      <button
        onClick={() => {
          setKey((value) => value + 1);
        }}
      >
        Increment key
      </button>
      <button
        onClick={() => {
          location.reload();
        }}
      >
        Reload
      </button>

      <Virtuoso
        key={key}
        ref={ref}
        restoreStateFrom={snapshot}
        computeItemKey={(key: number) => `item-${key.toString()}`}
        totalCount={100}
        itemContent={(index) => (
          <div style={{ height: index % 2 ? 30 : 20 }}>Item {index}</div>
        )}
        style={{ height: 300 }}
      />
    </div>
  );
}
