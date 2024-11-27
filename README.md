# CodingExample

## Deine Aufgaben

Stelle dir vor, du startest ein Projekt auf grüner Wiese. Ziel ist es eine Shop-Anwendung zu entwickeln, die es ermöglicht, Produkte zu kaufen. Es wird eine Produktübersicht geben, eine Produktseite, ein Warenkorb und eine Checkout-Seite.
Die Anwendung soll responsive sein und auf Desktop und mobilen Geräten funktionieren. Wichtig ist, dass diese barrierefrei ist.

### 1. Projektstart

Wie würdest du ein solches Projekt aufbauen? Würdest du eine bestimmte Ordnerstruktur verwenden? Welche Frameworks, Libraries oder Tools würdest du verwenden?

Hinweis: Wir beachten hier nicht das Backend und starten keine Monorepo-Diskussion. Betrachte das Projekt als eigenständiges Frontend-Projekt.

### 2. Bestehende Implementierung

Ein Junior-Entwickler hat eine Uhrzeit Komponente erstellt, welche die aktuelle Uhrzeit anzeigt. Aufgabe war es diese im Format "xx Uhr - xx Minuten - xx Sekunden" anzuzeigen und sich sekündlich zu aktualisieren.

Überprüfe die Implementierung und gib Feedback. Deine Aufgabe ist es den Junior zu unterstützen und seine Programmierfähigkeiten zu fördern. Was ist dir allgemein wichtig? Beachte auch die Projektanforderungen

### 3. Neuimplementierung

Für das Refinement wurde folgende Story mitgebracht:

--------

Als Kunde möchte ich meine Kreditkarte hinzufügen, um damit zu bezahlen.

Die Karte muss vorher hinzugefügt werden und kann anschließend für die Zahlung verwendet werden.

AK:
- Auf der Checkout-Seite soll es die Möglichkeit geben mit Kreditkarte zu bezahlen
- Die Kreditkarte soll mit folgenden Feldern hinzugefügt werden können:
  - Kartennummer (Pflichtfeld, 16 Zeichen)
  - CVV (Pflichtfeld, 3 Zeichen)
- Der Karten-Typ (Visa, MasterCard, Sonstige) soll basierend auf der Eingabe der Kartennummer angezeigt werden
- Die Eingabe soll im Backend gespeichert werden

---------

Sind alle Informationen vorhanden? 

Zeit verstreicht und es kommt zum Planning / Planning 2. Lass uns das Planning 2 durchspielen. Anschließend sollst du die Story umsetzen.

Info: Als Dummy-Endpunkt für die Speicherung im Backend kannst du folgenden Endpunkt verwenden: https://dummyjson.com/http/200

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
