"use client"
import Link from "next/link";
import { usePathname } from "next/navigation"

export default function PresPage() { //? Template, copier le code en laissant tout sauf le <h1> et le <p>
  const pathname = usePathname().split("/");
  return(
    <>
      <h1>La versification</h1>
      <h2>Vers, mètres et strophes</h2>
      <h3>Vers et strophes</h3>
      <p>Strophe de ...</p>
      <ul>
        <li>deux vers: <b>distique</b></li>
        <li>trois vers: <b>tercet</b></li>
        <li>quatre vers: <b>quatrain</b></li>
        <li>Cinq vers: <b>quintil</b></li>
        <li>Six vers: <b>sizain</b></li>
        <li>Huit vers: <b>huitain</b></li>
        <li>Dix vers: <b>dizain</b></li>
      </ul>
      <p>Un {"{nombre}"}ain pour la plupart sauf deux (<b>distique</b>), trois (<b>tercet</b>) et cinq (<b>quintil</b>).</p>

      <h3>Mètre d'un vers</h3>
      <p>La longueur d'un vers, on compte le nombre de syllabes.</p>
      <p>Le <i>e</i> est muet à la fin d'un vers ou quand il est suivi d'une autre voyelle.</p>
      <p>Un vers de ...</p>
      <ul>
        <li>12 syllabes: <b>Alexandrin</b></li>
        <li>10 syllabes: <b>Décasyllabe</b></li>
        <li>8 syllabes: <b>Octosyllabe</b></li>
      </ul>

      <p><b>Remarque sur la prononciation de deux voyelles qui se suivent</b></p>
      <p>Quand elles se prononcent en <b>une syllabe</b>, on appelle cela une <b>synérèse</b>.</p>
      <p>Ex: L'arc meur<b>trier</b>.</p>
      <p>Quand elles se prononcent en <b>deux syllabe</b>, on appelle cela une <b>diérèse</b>.</p>
      <p>Ex: L'air supér<b>i/eur</b>.</p>

      <h2>Sonorités et rythme</h2>
      <h3>Rimes</h3>
      <p>Les rimes peuvent être ...</p>
      <ul>
        <li><b>plates</b> (AA)</li>
        <li><b>suivies</b> (AABB)</li>
        <li><b>croisées</b> (ABAB)</li>
        <li><b>embrassées</b> (ABBA)</li>
      </ul>
      <p>Quand les rimes se terminent par un <i>e</i>, elles sont <b>féminines</b>, sinon, elles sont <b>masculines</b>.</p>
      <p>Les rimes sont ...</p>
      <ul>
        <li><b>pauvres</b>: 1 son</li>
        <li><b>suffisantes</b>: 2 sons</li>
        <li><b>riches</b>: {">"} 3 sons</li>
      </ul>

      <h3>Assonances et allitérations</h3>
      <p><b>Alitération</b>: répétition même son <b>consonne</b> dans un ou plusieurs vers.</p>
      <p><b>Assonance</b>: répétition même son <b>voyelle</b> dans un ou plusieurs vers.</p>

      <h3>Rythme</h3>
      <h4>Enjambement</h4>
      <p>Il se produit lorsqu'une phrase se poursuit sur <b>deux vers sans pause</b>.</p>
      <p>L'élément mis en valeur à la <b>fin</b> du <b>1<sup>er</sup> vers</b> est le <b>contre-rejet</b>.</p>
      <p>L'élément mis en valeur au <b>début</b> du <b>2<sup>ème</sup> vers</b> est le <b>rejet</b>.</p>
      <h4>Césure</h4>
      <p>C'est la <b>coupe</b> principale qui <b>partage le vers</b> en <b>deux parties</b>.</p>
      <p>Quand elles sont <b>égales</b>, elles sont appelées <b>hémistiches</b>.</p>
      
      <Link href={`/${pathname[1]}/${pathname[2]}`}>Retour</Link>
    </>
  )
}