"use client"
import Link from "next/link";
import { usePathname } from "next/navigation"

export default function PresPage() { //? Template, copier le code en laissant tout sauf le <h1> et le <p>
  const pathname = usePathname().split("/");
  return(
    <>
      <h1>Dissertation</h1>
      <h2>Etapes pour lire un sujet et construire un plan </h2>
      <h3>Etape 1: <b>analyser</b> le sujet</h3>

      <p>Le sujet se présente sous la forme d&apos;une <b>question</b> ou d&apos;une <b>consigne</b> invitant à la <b>réflexion</b>.</p>
      <p>Il faut repérer les <b>mots-clés</b> pour comprendre les enjeux de la question et ouvrir des pistes de réflexion.</p>

      <h4>1. Repérez et <b>définir</b> les mots-clés</h4>
      <ul>
        <li><b>Définir</b> chaque terme de l&apos;énoncé (<b>synonymes</b>, <b>notions proches</b>).</li>
        <li>Chercher à quoi <b>correspond</b> le mot dans l&apos;oeuvre étudiée.</li>
      </ul>

      <h4>2. Identifier les <b>relations logiques</b> entre mots-clés</h4>
      <ul>
        <li>Quels <b>problèmes</b> le lien entre les mots-clés peut-il poser? Y a-t-il une <b>opposition</b> ou une <b>équivalence</b> entre deux notions?</li>
        <li>Y a-t-il des notions <b>oposées</b>? Des <b>contre-examples</b>, des <b>limites</b>?</li>
      </ul>

      <h4>3. <b>Analyser</b> la consigne</h4>
      <p>Le sujet contient-il:</p>
      <ul>
        <li>une question <b>fermée</b>: discuter une <b>thèse</b>.</li>
        <li>Une question <b>ouverte</b>: apporter <b>différentes</b> réponses.</li>
      </ul>

      <h3>Etape 2: formuler la <b>problématique</b></h3>
      <p>La problématique est une <b>question</b>, directe ou indirecte. Elle répond à deux objectifs:</p>
      <ul>
        <li>reformuler le sujet en reprenant ses <b>mots-clés</b>,</li>
        <li>rendre <b>explicites</b> tous les enjeux du sujet.</li>
      </ul>

      <h3>Etape 3: déterminer le <b>type</b> de plan</h3>
      <p>A partir de la problématique, créer deux pistes de réflexion: ce seront les grandes parties.</p>
      <p><b>Deux</b> types de plan:</p>
      <h4>Dialectique</h4>
      <p>Il est ammené par une <b>question femée</b> ou équivalent (dans quelle mesure...).</p>
      <p>On discute une thèse en montrant:</p>
      <ul>
        <li>son <b>bien-fondé</b> (partie I)</li>
        <li>ses <b>limites</b> (partie II)</li>
        <li><i>comment dépasser l&apos;opposition (partie III)</i></li>
      </ul>
      <h4>Analytique</h4>
      <p>Il est ammené par une <b>question ouverte</b>.</p>
      <p>On développe les <b>différents aspects</b> d&apos;une thèse: chaque partie est uene <b>réponse possible</b> allant du plus simple au complexe.</p>
      
      <h3>Etape 4: rédiger le plan détaillé avec les arguments et les examples</h3>
      <p><b>Deux ou trois sous-parties</b> par partie.</p>
      <p>Trouver <b>un ou deux examples</b> par arguments.</p>
      <p>L&apos;exemple doit être <b>précis</b> et <b>commenté</b>. Il peut être pris:</p>
      <ul>
        <li>dans l&apos;oeuvre étudiée pendant l&apos;année: remarque sur l&apos;<b>ensemble de l&apos;oeuvre</b> (structure, évolution d&apos;un personnage, thème récurrent, etc...), <b>passage précis</b>: situé (chapitre / acte / titre) et cité;</li>
        <li>dans le <b>parcours</b> en lien avec cette oeuvre: donnez son <b>auteur</b>, son <b>titre</b>, et <b>citer</b> ou <b>résumer</b> le texte. On peut faire référence à un aspect précis d&apos;un <b>mouvement littéraire</b>.</li>
      </ul>
      <p>Organiser les arguments et les examples dans un plan détaillé.</p>

      <h3>Remarque</h3>
      <p>Lors de l&apos;élaboration du plan détaillé, ne pas confondre <b>arguments</b> (idées générales) et <b>exemples</b> (cas particuliers d&apos;un ou plusieurs textes, références précises).</p>
      <Link href={`/${pathname[1]}/${pathname[2]}`}>Retour</Link>
    </>
  )
}