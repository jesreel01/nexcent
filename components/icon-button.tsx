import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { VariantProps, cva } from "class-variance-authority";
import React from "react";

const iconButtonVariants = cva(
  "inline-flex items-center justify-center text-sm font-medium transition-colors whitespace-nowrap rounded-[4px] ring-offset-background  disabled:bg-neutral-silver  disabled:text-neutral-grey_blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring  focus-visible:ring-neutral-d_grey disabled:pointer-events-none",
  {
    variants: {
      variant: {
        primary: "bg-primary active:bg-shade-shade_2 text-neutral-white",
        secondary:
          "bg-neutral-white  text-primary ring-2 ring-primary active:bg-neutral-silver disabled:ring-0",
        tertiary: "text-primary hover:bg-neutral-silver active:bg-tint-tint_5",
      },
      size: {
        small: "w-8 h-8",
        medium: "w-11 h-10",
        large: "w-11 h-11 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "medium",
    },
  }
);

interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof iconButtonVariants> {
  asChild?: boolean;
}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ asChild = false, className, variant, size, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        ref={ref}
        className={cn(
          iconButtonVariants({
            className,
            variant,
            size,
          })
        )}
        {...props}
      />
    );
  }
);

IconButton.displayName = "IconButton";

export default IconButton;
