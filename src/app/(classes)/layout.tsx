"use client"
import styles from "@/styles/modules/header.module.css"
import React from "react"
import { secLinks, premLinks, termLinks } from "@/app/_lib/links";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function ClassesLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  let useLink;
  const pathname = usePathname();
  const router = useRouter();
  if (pathname.startsWith("/seconde")) {
    useLink = secLinks;
  } else if (pathname.startsWith("/premiere")) {
    useLink = premLinks;
  } else if (pathname.startsWith("/term")) {
    useLink = termLinks;
  } else {
    useLink = [{name: 'Error', href: '/not-found'}];
  }

  function handleClick() {
    localStorage.setItem("defaultClass", '');
    router.push("/");
  }

  return (
    <>
      <header className={styles.header}>
        <section className={styles.logocont}>
          <img tabIndex={0} onClick={() => handleClick()} className={styles.logo} alt="logo" src="/logo.png" />
        </section>
        <nav className={styles.nav}>
          {useLink.map((link, key) => {
            return (
              <Link className={pathname.includes(link.href) ? styles.activelink : styles.link} key={key} href={link.href}>{link.name}</Link>
            )
          })}
        </nav>
      </header>
      <main>
        {children}
      </main>
    </>
  )
}