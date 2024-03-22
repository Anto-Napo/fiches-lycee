"use client"
import styles from "@/styles/modules/home.module.css";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  //? Mets automatiquement à la classe sélectionnée lors de la première sélection.
  useEffect(() => {
    const defaultReturn = localStorage.getItem("defaultClass") || '';

    if(defaultReturn != '') {
      router.push(defaultReturn);
    }
  }, [])

  function handleClick(link: string) {
    localStorage.setItem("defaultClass", link);
    router.push(link);
  }

  return (
    <nav className={styles.nav}>
      <a tabIndex={0} className={styles.link} onClick={() => handleClick("/seconde")}>Seconde</a>
      <a tabIndex={0} className={styles.link} onClick={() => handleClick("/premiere")}>Première</a>
      <a tabIndex={0} className={styles.link} onClick={() => handleClick("/terminale")}>Terminale</a>
    </nav>
  );
}
