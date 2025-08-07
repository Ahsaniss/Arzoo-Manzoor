import * as React from "react"
import { cn } from "@/lib/utils"

const CyberCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border bg-card text-card-foreground shadow-lg hover:shadow-red-500/20 transition-all duration-300 hover:border-red-500/30",
      className
    )}
    {...props}
  />
))
CyberCard.displayName = "CyberCard"

const CyberCardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CyberCardHeader.displayName = "CyberCardHeader"

const CyberCardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight text-primary",
      className
    )}
    {...props}
  />
))
CyberCardTitle.displayName = "CyberCardTitle"

const CyberCardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CyberCardDescription.displayName = "CyberCardDescription"

const CyberCardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CyberCardContent.displayName = "CyberCardContent"

export { CyberCard, CyberCardHeader, CyberCardTitle, CyberCardDescription, CyberCardContent }