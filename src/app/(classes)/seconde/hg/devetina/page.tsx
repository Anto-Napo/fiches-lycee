"use client"
import Link from "next/link";
import { usePathname } from "next/navigation"

export default function PresPage() { //? Template, copier le code en laissant tout sauf le <h1> et le <p>
  const pathname = usePathname().split("/");
  return(
    <>
      <h1>Développement et inégalités</h1>

      <h2>Définitions</h2>

      <h3>Développement:</h3>
      <p>Une <b>transformation</b>, un ensemble de <b>transition</b> <span className="red-text">politiques, économiques et sociales</span>.</p>
      <p>Rend en compte la capacité d&apos;un Etat à <b>satisfaire les besoins</b> de sa population:</p>
      <ul>
        <li>assurer l&apos;<b>ordre</b> et la <b>sécurité</b>;</li>
        <li>permettre la création d&apos;<b>emplois</b> et de <b>richesses</b>;</li>
        <li>permettre l&apos;<b>accès aux soins</b></li>
      </ul>

      <h3>Inégalités:</h3>
      <p><b>Différences</b> entre <b>individus</b> ou <b>territoires</b> qui entraînent une <b>hiérarchie</b> entre eux en fonction de l&apos;échelle considérée.</p>
      <p>Elles peuvent se mesurer sur:</p>
      <ul>
        <li>le plan <b>quantitatif</b> (revenus...)</li>
        <li>le plan <b>qualitatif</b> (accès aux soins, logements...)</li>
      </ul>

      <h3>IDH:</h3>
      <p>Se calcule en fonction de:</p>
      <ul>
        <li>Niveau d&apos;<b>éducation</b></li>
        <li>Niveau <b>sanitaire</b></li>
        <li>Niveau de <b>richesse</b></li>
      </ul>
      <p>Seul ces critères étaient pris en compte jusqu&apos;aux 1980&apos;s. Maintenant, le <b>développement durable</b> est visé avec un <b>compromis</b> entre les enjeux <span className="red-text">économiques, sociaux et environnementaux</span>.</p>

      <h2>Comment le développement progresse t-il?</h2>

      <p>Le développement repose sur des transitions:</p>
      <ul>
        <li><b>économiques</b></li>
        <li><b>politiques</b></li>
        <li><b>sociales</b></li>
      </ul>

      <h3>Economique:</h3>
      <p>Passage d&apos;une économie majoritairement <b>agricole</b> qui occupe la majorité de la population et qui repose sur <span className="green-text">agriculture vivrière: traditionelle, à faible rendement</span></p>
      <p>à une économie de plus en plus <b>industrielle</b> qui permet la <b>mécanisation</b> de l&apos;agriculture qui occupe une partie de la population active moins importante.</p>
      <p>A terme, l&apos;économie se <b>tertiarise</b>, c&apos;est la <b>tertiarisation</b>.</p>

      <p><b>Exemple de l&apos;UI</b></p>
      <p>Elle est en pleine <b>industrialisation</b>, notamment avec l&apos;<b>industrie textile</b> qui contient 45 millions d&apos;indiens (plus que la population active française).</p>
      <p>L&apos;industrie est automobile: <b>4ème producteur mondial</b> (FTN comprises) derrière la Chine, les USA et le Japon.</p>

      <h3>Politique:</h3>
      <h4>Rôle de l&apos;Etat dans l&apos;économie</h4>
      <p>En premier lieu, une économie largement <b>planifiée</b> et <b>régulée</b> par l&apos;Etat: réservation du <b>monopole</b> sur certains domaines économiques (chêne, exploitation de minerais rares, nationalisation de terres agricoles). <b>Communisme</b>: très brutal, pas connu par l&apos;occident.</p>
      <p>Secondement, <b>économie de marché capitaliste</b>, <b>libérale</b> et <b>globalisée</b>.</p>

      <p><b>Exemple de la France</b></p>
      <p>La télécommunication était monopolisé par l&apos;Etat avec France Telecom. Ensuite, ouvert à la concurrence et aux entreprises privées, plus de monopole.</p>
      <p>Il y a de nombreuses nouvelles entreprises: Free, Bouygues...</p>
      <p>Elles ne se limitent pas qu&apos;à la France et profitent de l&apos;économie mondialisée.</p>

      <h4>Politique politique</h4>
      <p>Régimes <b>autoritaires</b>, <b>dicatoriaux</b>. La population est réduite au rang de <b>sujets</b>.</p>
      <p>➜ Régime <b>démocratique</b> (<b>république</b>). La population est <b>citoyenne</b>.</p>

      <h3>Social:</h3>
      <p>Population majoritairement <b>rurale</b> où l&apos;<b>extrême pauvreté</b> peut surgire (<b>famines</b>, <b>épidémies</b>).</p>
      <p>➜ <b>Urbaine</b>, beaucoup d&apos;<b>ouvriers</b>.</p>
      <p>➜ pauvreté <b>recule</b> et le confort <b>s&apos;améliore</b>. Début de l&apos;<b>industrialisation</b> avec un accès au <b>logement pour tous</b>. L&apos;Etat met en place plusieurs choses.</p>

      <p><b>Exemple de la France</b></p>
      <p>L&apos;Etat met en place des choses dans l&apos;éducation avec les lois Ferry, qui rendent l&apos;école obligatoire et gratuite.</p>

      <p><b>Exemple de l&apos;UI</b></p>
      <p>Il y a traditionellement un système de castes aboli légalement dans les 1950s. En réalité, dans certaines régions traditionelles, ce système persiste. Il hyérarchise la population et créé une société plus inégalitaire car les castes les plus bas sont discriminés, notamment les intouchables : ils ne sont pas censés apprendre à lire ou écrire, ils ont des métiers dégradants et l&apos;ascension sociale leur est impossible.</p>

      
      <Link href={`/${pathname[1]}/${pathname[2]}`}>Retour</Link>
    </>
  )
}