import type { ReactNode } from "react";
import "@/app/globals.css";
import Navbar from "@/components/content/navigation/navbar";

type Props = {
  children: ReactNode;
};

export default function ContentLayout({ children }: Props) {
  return (
  <>
    <Navbar />
    {children}
  </>);
}