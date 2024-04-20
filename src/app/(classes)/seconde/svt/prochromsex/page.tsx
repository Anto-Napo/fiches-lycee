"use client"
import Link from "next/link";
import { usePathname } from "next/navigation"

export default function PresPage() { //? Template, copier le code en laissant tout sauf le <h1> et le <p>
  const pathname = usePathname().split("/");
  return(
    <>
      <h1>Procréation, hormones et sexualité</h1>
      <h2>Vocabulaire</h2>
      <ul>
        <li><b>Phénotype: </b>: ensemble de caractères morphologiques ou chimiques observables chez un individu.</li>
        <li><b>Gamètes</b>: cellule reproductrice femelle ou mâle.</li>
        <li><b>Gonades</b>: organes reproducteurs qui produisent des gamètes.</li>
        <li><b>Gonosome</b>: chromosome dont la fonction est la détermination du sexe.</li>
      </ul>

      <h2>Passage du sexe génotypique au sexe phénotypique</h2>
      <p>Ce sont deux <b>hormones</b>: la <b>testostérone</b> et l&apos;<b>AMH</b> (= hormone anti mullerienne) qui vont permettre la différenciation des <b>gonades en testicules</b>.</p>

      <h2>Mise en évidence du plaisir</h2>
      <p>Dans l&apos;espèce humaine, le <b>système nerveux</b> est impliqué dans la réalisation de la sexualité. En effet, le <b>plaisir</b> ressenti lors d&apos;une activité sexuelle repose en particulier sur l&apos;activation dans le cerveau de <b>structures impliquées dans le plaisir</b>: le <b>système de la récompense</b>. Il peut aussi s&apos;activer lors d&apos;autres activités comme manger du chocolat.</p>
      <p>Le comportement sexuel chez l&apos;espèce humaine n&apos;est pas seulement contrôlé par des facteyrs horonaux, coontrairement aux mammifères et aux primates. Il est davantage associé aux <b>fonctions cérébrales</b>. Il est influencé par des facteurs <b>cognitifs</b> et <b>affectifs</b>.</p>
      <p className="separation-text">separation</p>
      <p><b>Système de la récompense</b>: ensemble des <b>zones du cerveau</b> activées lors d&apos;une expérience <b>procurant du plaisir</b>.</p>
      <p><b>Comportement sexuel</b>: c&apos;est l&apos;ensemble des <b>conduites</b> qui aboutissent à l&apos;<b>accouplement</b> et à la <b>reproduction</b>.</p>
      <h2>Le rôle du fonctionnement des gonades</h2>


      
      <Link href={`/${pathname[1]}/${pathname[2]}`}>Retour</Link>
    </>
  )
}