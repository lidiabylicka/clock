# clock

Devstock Homework World Clock

# Światowy Zegar z Możliwością Dodawania Stref Czasowych

Termin - do poniedziałku 25 września!
Forma - tworzymy własne repo na którym stawiamy cały projekt, tak jak robiliśmy to do tej pory, następnie wysyłamy link do repo na DM do mnie

# Cel:

Utworzenie aplikacji, która umożliwia wyświetlanie bieżącego, działającego zegaru dla różnych stref czasowych, a także dodawanie i usuwanie stref z listy.

# Przygotujcie następujące komponenty:

App - główny komponent aplikacji.
TimezoneSelector - komponent do wybierania i dodawania nowych stref czasowych.
Clock - komponent wyświetlający czas dla konkretnej strefy czasowej.
ClockList - komponent wyświetlający listę zegarów.

# Wskazówki do realizacji:

<!-- App:

- Przechowuje listę stref czasowych, które mają być wyświetlane (np. ["UTC", "UTC+1", "UTC-1"]). OK
- Dostarcza funkcje do dodawania i usuwania stref z listy. OK

TimezoneSelector:

- Posiada własny stan dla aktualnie wybranej strefy czasowej. OK
- Umożliwia wybór strefy czasowej z rozwijanej listy (zwykły input select). OK
- Przycisk "Dodaj" dodaje wybraną strefę do listy w komponencie App. OK -->

<!-- Clock:

- Otrzymuje strefę czasową jako props.
- Wykorzystuje useEffect i useState do zarządzania czasem -->

ClockList:

- Otrzymuje listę stref czasowych z App i dla każdej strefy renderuje komponent Clock.
<!-- - Dla każdego zegara jest przycisk "Usuń", który usuwa zegar ze strefą z listy. -->

# dla chętnych!

Możecie spróbować zainstalować i wykorzystać paczkę npm która pomoże interpretować strefy czasowe. Szczegóły użycia/instalacji są dostępne w dokumentacji.
https://www.npmjs.com/package/date-fns-tz
zadanie jest wykonalne zarówno z paczką npm jak i bez niej.
