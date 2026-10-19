"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Container } from "./container";
import { ModeToggle } from "./mode-toggle";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetClose,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
} from "@/components/ui/sheet";

import { navLinks } from "@/data/navigation"

export default function Header() {
  const [open, setOpen] = React.useState(false);
  const [currentYear, setCurrentYear] = React.useState<number | null>(null);

  React.useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between">
        {/* Brand / Logo */}
        <Link href="/" className="inline-block transition-opacity hover:opacity-90">
          <Image
            src="/logo-light.png"
            alt="Sabri Alshibani Logo"
            width={110}
            height={36}
            className="h-7 w-auto sm:h-9 dark:hidden object-contain"
            priority
          />
          <Image
            src="/logo-dark.png"
            alt="Sabri Alshibani Logo"
            width={110}
            height={36}
            className="hidden dark:block h-7 w-auto sm:h-9 object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          <ModeToggle />

          {/* Mobile Sheet */}
          <div className="md:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger
                render={
                  <Button variant="ghost" size="icon" aria-label="Toggle Navigation Menu">
                    <Menu className="h-5 w-5" />
                  </Button>
                }
              />
              <SheetContent side="right" showCloseButton={false} className="flex flex-col w-75 sm:w-87.5 p-6">
                {/* Drawer Header: Logo on left, Close button on right */}
                <div className="flex items-center justify-between pb-4 border-b">
                  <Link
                    href="/"
                    onClick={() => setOpen(false)}
                    className="inline-block transition-opacity hover:opacity-90"
                  >
                    <Image
                      src="/logo-light.png"
                      alt="Sabri Alshibani Logo"
                      width={100}
                      height={32}
                      className="h-7 w-auto dark:hidden object-contain"
                    />
                    <Image
                      src="/logo-dark.png"
                      alt="Sabri Alshibani Logo"
                      width={100}
                      height={32}
                      className="hidden dark:block h-7 w-auto object-contain"
                    />
                  </Link>

                  <SheetClose
                    render={
                      <Button
                        variant="ghost"
                        size="icon-sm"
                        aria-label="Close navigation menu"
                        className="rounded-full"
                      />
                    }
                  >
                    <X className="h-5 w-5" />
                    <span className="sr-only">Close</span>
                  </SheetClose>
                </div>

                {/* Accessible description & title for screen readers */}
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <SheetDescription className="sr-only">
                  Mobile site navigation links
                </SheetDescription>

                <nav className="flex flex-col gap-1.5 py-6 flex-1">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center px-3 py-2.5 rounded-md text-base font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground active:bg-muted/80"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>

                <div className="border-t pt-4 text-xs text-muted-foreground" suppressHydrationWarning>
                  © {currentYear ?? 2026} All rights reserved.
                </div>

              </SheetContent>
            </Sheet>
          </div>
        </div>
      </Container>
    </header>
  );
}