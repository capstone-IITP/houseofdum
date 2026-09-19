"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { isExternal } from "@/lib/links";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline";
  size?: "md" | "sm";
  icon?: React.ReactNode;
  arrow?: boolean;
  className?: string;
  onClick?: () => void;
};

export default function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  icon,
  arrow = false,
  className = "",
  onClick,
}: Props) {
  const external = isExternal(href);
  const base =
    "group inline-flex items-center justify-center gap-2.5 font-semibold uppercase tracking-[0.18em] transition-colors duration-300";
  const sizes = size === "sm" ? "px-5 py-2.5 text-[11px]" : "px-8 py-4 text-xs";
  const styles =
    variant === "primary"
      ? "bg-gold text-ink hover:bg-gold-light"
      : "border border-gold/60 text-cream hover:border-gold-light hover:text-gold-light";

  return (
    <motion.a
      href={href}
      onClick={onClick}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      whileTap={{ scale: 0.97 }}
      className={`${base} ${sizes} ${styles} ${className}`}
    >
      {icon}
      {children}
      {arrow && (
        <ArrowUpRight
          className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      )}
    </motion.a>
  );
}
