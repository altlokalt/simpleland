import React from "react";

const variantClasses = {
  h1: "font-bold sm:text-[38px] md:text-[44px] text-[48px]",
  h2: "sm:text-[36px] md:text-[38px] text-[40px]",
  h3: "font-semibold text-[20px]",
  h4: "text-[16px]",
  h5: "font-normal text-[14px]",
};

const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variant && variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
