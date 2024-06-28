import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { cva, VariantProps } from "class-variance-authority";
import React from "react";

const buttonVariants = cva("inline-flex items-center justify-center text-sm font-medium transition-colors whitespace-nowrap rounded-[4px] ring-offset-background  disabled:bg-neutral-silver  disabled:text-neutral-grey_blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring  focus-visible:ring-neutral-d_grey disabled:pointer-events-none", {
  variants: {
    variant: {
      primary: "bg-primary active:bg-shade-shade_2 text-neutral-white",
      secondary: "bg-neutral-white  text-primary ring-2 ring-primary active:bg-neutral-silver disabled:ring-0",
      tertiary: "text-primary hover:bg-neutral-silver active:bg-tint-tint_5",
    },
    size: {
      small: "px-3 h-8",
      medium: "px-4 h-10",
      large: "px-8 h-11 text-base",
    },
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, asChild = false, variant, size, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={cn(
          buttonVariants({
            variant,
            size,
            className,
          })
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export default Button;
