import React from 'react';
import App from './App';
import ReactDom from "react-dom/client"
import { RecoilRoot } from "recoil"

const rootDom = document.getElementById("root")
ReactDom.createRoot(rootDom).render(<RecoilRoot><App/></RecoilRoot>)