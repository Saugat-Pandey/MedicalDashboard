# Anweisungen zur Installation:
1. Die Daten sind in JSON-Dateien im Projekt enthalten. Notwendige Module können mit npm install installiert werden. Die App kann mit npm run dev gestartet werden.
2. Alternativ können die Module mit folgenden Befehlen installiert werden:
- npm install react-router-dom
- npm install recharts
- npm install react-datepicker

# Nutzung
### Dashboard:
Das Programm startet im Dashboard. Über die Sidebar auf der linken Seite kann zu den anderen Seite navigiert werden. Auf allen Seiten können die Patienten angeklickt werden, damit navigiert man zur entsprechenden Patientendetailseite. Auf dem Dashboard kann dafür auch die Komponente "Next Patient Details" angeklickt werden.

### Patientendetailseite:
In der Mitte der Patientendetailseite gibt es eine Timeline zur Darstellung der Patientenhistorie. Werden die Punkte in der Timeline angeklickt öffnet sich ein Overlay mit Details. Die Buttons "Medikament", "Lab", etc. stellen die Legende der Farben dar und können auch angeklickt werden zum Filtern. Genauso kann der Anzeigebereich mit Eingabe eines Datums gefiltert werden. Über "Add Event" können neue Daten hinzugefügt werden, diese erscheinen als Punkt auf der Timeline.

### Notizen:
Die Notizen sind in zwei Felder unterteilt, auf der linken Seite Previous Notes und auf der rechten Seite New Note. Es können neue Notizen eingegeben werden, diese werden automatisch zwischengespeichert, falls die Seite verlassen wird. Mit dem Save Note Button, werden die Notizen gespeichert und erscheinen auf der linken Seite. Die Notizen können in der Liste angeklickt und im neuen Overlay angesehen, bearbeitet oder gelöscht werden.

### Overview:
Das Overview auf der rechten Seite zeigt dynamisch die aktuellsten Diagnosen, Medikationen und Allergien an. Es können neue Allergien mit Klick auf den + Button hinzugefügt werden. 

# Dateistruktur
- assets/:  Beinhaltet Bilder, die wir benutzt haben, z.B. Arzt, Patient.
- components/: Beinhaltet  wiederverwendbare React-Komponenten wie Tabellen, Diagramme und Filter.
- data/: Enthält statische JSON-Dateien, die Daten wie Termine, Patienteninformationen und Medikationspläne simulieren.
- pages/: Hauptseiten der Anwendung, darunter App.jsx und die globale Initialisierung in main.jsx.
