"use client";
import { createContext, useContext, useState } from "react";
import { PROGRAMS, Program, ProgramId } from "./data";

interface Sel {
  program: Program;
  sizeIdx: number;
  size: number;
  fee: number;
  setProgram: (id: ProgramId) => void;
  setSizeIdx: (i: number) => void;
}

const Ctx = createContext<Sel | null>(null);

export function SelectionProvider({ children }: { children: React.ReactNode }) {
  const [id, setId] = useState<ProgramId>("two");
  const [sizeIdx, setSizeIdx] = useState(4);
  const program = PROGRAMS.find((p) => p.id === id)!;
  const idx = Math.min(sizeIdx, program.sizes.length - 1);
  const setProgram = (next: ProgramId) => {
    const p = PROGRAMS.find((x) => x.id === next)!;
    const target = PROGRAMS.find((x) => x.id === id)!.sizes[idx];
    const found = p.sizes.indexOf(target);
    setId(next);
    setSizeIdx(found >= 0 ? found : p.sizes.length - 1);
  };
  return (
    <Ctx.Provider value={{ program, sizeIdx: idx, size: program.sizes[idx], fee: program.fees[idx], setProgram, setSizeIdx }}>
      {children}
    </Ctx.Provider>
  );
}

export const useSelection = () => {
  const c = useContext(Ctx);
  if (!c) throw new Error("SelectionProvider missing");
  return c;
};
