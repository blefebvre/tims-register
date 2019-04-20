import { useEffect } from "react";

// Hook implementation inspired by https://medium.com/@nicolaslopezj/reusing-logic-with-react-hooks-8e691f7352fa
export function useKeyboardEvent(
  keys: string[],
  callback: (key: string) => void
) {
  useEffect(() => {
    const handler = function(event: any) {
      const key = event.key;
      if (key) {
        if (keys.includes(key)) {
          // Fire the callback with the given key
          callback(key);
        }
        // Special case for Del key (map to Backspace)
        const deleteKey = "Del";
        if (key === "Backspace" && keys.includes(deleteKey)) {
          callback(deleteKey);
        }
      }
    };
    window.addEventListener("keydown", handler);
    return () => {
      window.removeEventListener("keydown", handler);
    };
  }, []);
}
