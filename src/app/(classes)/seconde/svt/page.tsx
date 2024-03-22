"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function SubjectPage() {
  const links = [{name: "Présentation", href:"/pres"}, //? Ajoutes des noms et le lien (le même nom que le dossier créé)
                 {name: "", href: ""},]

  const pathname = usePathname();
  const currentPath = pathname.split('/');
  return(
    <>
      <h1>SVT</h1>
      <section>
        {links.map((link, key) => {
          return(
            <Link href={`/${currentPath[1]}/${currentPath[2]}/${link.href}`} key={key}>{link.name}</Link>
          )
        })}
      </section>
    </>
  )
}