import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

type Props = { to: string; children: ReactNode; tone?: "primary" | "light" | "outline"; className?: string };
export function ActionLink({ to, children, tone = "primary", className = "" }: Props) {
  return <Link to={to} className={`action action-${tone} ${className}`}>{children}<span aria-hidden="true">↗</span></Link>;
}
