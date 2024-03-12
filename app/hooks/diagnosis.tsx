'use client'

import {create} from 'zustand'

interface DiagnosisModalStore {
    isOpen:boolean;
    onOpen:()=>void;
    onClose:()=>void;
}


const useDiagnosisModal= create<DiagnosisModalStore>((set)=>({
isOpen:false,
onOpen:()=>set({ isOpen:true}),
onClose:()=>set({ isOpen:false}),
}));

export default useDiagnosisModal