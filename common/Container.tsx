import React from "react";
interface ContainerProps {
  children: React.ReactNode;
  tag?: "section" | "div" | "header" | "footer";
  className?: string;
  ref?: React.Ref<HTMLDivElement> | undefined;
}

export default function Container(props: ContainerProps) {
  const { children, tag = "section", className = "", ref } = props;
  const Tag = tag;
  return (
    <Tag
      ref={ref}
      className={`mx-auto w-full h-fit relative max-w-[1440px] px-5 md:px-7 lg:px-12   ${className}`}
    >
      {children}
    </Tag>
  );
}
