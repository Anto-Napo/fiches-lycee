"use client"
import Link from "next/link";
import { usePathname } from "next/navigation"

export default function PresPage() { //? Template, copier le code en laissant tout sauf le <h1> et le <p>
  const pathname = usePathname().split("/");
  return(
    <>
      <h1>Méthodologie analyse de document</h1>
      <h2>Travail préparatoire</h2>
      <ul>
        <li>Lecture attentive</li>
        <ul>
          <li>Surligner les thèmes du texte</li>
        </ul>
        <li>Intérêt du document</li>
        <ul>
          <li>En quoi il apporte une aide à l&apos;évènement historique</li>
        </ul>
        <li>Limite du document</li>
        <ul>
          <li>Remettre en cause le document. (vision partielle?)</li>
        </ul>
        <li>Plan</li>
        <ul>
          <li>Se référer aux thèmes, à ses connaissances ou à la consigne</li>
        </ul>
      </ul>

      <h2>Présentation du doc.</h2>
      <p>Source, auteur, nature, date Remise dans son contexte. Source historique?</p>

      <h2>Analyse</h2>
      <p><b>Expliquer</b> les documents à l'aide de ses connaissances. Pas de paraphrase.</p>

      <h2>Conclusion</h2>
      <p>Bilan et ouverture.</p>

      <h2>Attention, il faut analyser.</h2>
      <p>Pour savoir si on a réussi, savoir si l'on a expliqué le sujet à quelqu'un qui n'y connait rien.</p>
      
      <Link href={`/${pathname[1]}/${pathname[2]}`}>Retour</Link>
    </>
  )
}