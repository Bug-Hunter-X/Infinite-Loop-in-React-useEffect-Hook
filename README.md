# React useEffect Infinite Loop Bug

This repository demonstrates a common error in React applications: an infinite loop caused by the `useEffect` hook.

The `bug.js` file contains the buggy code.  The `useEffect` hook attempts to update the state (`count`) within its own callback function, without specifying the correct dependency array.  This creates a loop where each state update triggers another render, causing the effect to run repeatedly, leading to an infinite loop and likely a browser crash.

The `bugSolution.js` file provides the corrected code, demonstrating how to use the dependency array correctly to avoid this issue.