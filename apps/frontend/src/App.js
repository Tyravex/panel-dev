import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
export default function App() {
    const [count, setCount] = useState(0);
    return (_jsx(_Fragment, { children: _jsx("p", { className: "read-the-docs", children: "Click on the logos to learn more" }) }));
}
