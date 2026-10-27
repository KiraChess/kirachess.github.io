// Add posts to this array. See DEVLOG-README.md for instructions.
window.kiraPosts = [
  {
    "slug": "kira-1-alpha-v1-0-2-hotfix",
    "date": "2026-10-27",
    "title": "Kira 1 Alpha v1.0.2: Linux x64 and a cleaner repo",
    "body": [
      "Kira 1 Alpha v1.0.2 adds a Linux x64 build. Download the ZIP, extract it, and add kira1a to your UCI chess GUI. Keep kira1a-retrained.nnue next to the executable so Kira can load it automatically. If necessary, run chmod +x kira1a after extracting.",
      "I also cleaned up the repository and made the documentation easier to read, so it is simpler to find what you need to install, use, and build Kira.",
      "This is a platform and documentation update. The engine and NNUE weights are unchanged, and the original Alpha strength estimate still has the same measurement caveats. macOS Apple Silicon and Windows x64 packages are available too."
    ],
    "releaseUrl": "https://github.com/KiraChess/Kira/releases/tag/kira-1-alpha-v1.0.2",
    "translations": {
      "ja": {
        "title": "Kira 1 Alpha v1.0.2：Linux x64対応とリポジトリの整理",
        "body": [
          "Kira 1 Alpha v1.0.2ではLinux x64ビルドを追加しました。ZIPをダウンロードして展開し、kira1aをUCI対応チェスGUIに追加してください。NNUEを自動で読み込めるよう、kira1a-retrained.nnueを実行ファイルの隣に置いてください。必要に応じて展開後にchmod +x kira1aを実行してください。",
          "リポジトリも整理し、インストール、使用、ビルドに必要な情報を探しやすいようドキュメントを読みやすくしました。",
          "今回はプラットフォームとドキュメントの更新です。エンジンとNNUEの重みは変わっておらず、元のAlphaの棋力推定には同じ測定上の注意点があります。macOS Apple Silicon版とWindows x64版もあります。"
        ]
      },
      "zh-Hans": {
        "title": "Kira 1 Alpha v1.0.2：Linux x64 与仓库整理",
        "body": [
          "Kira 1 Alpha v1.0.2 新增 Linux x64 版本。下载并解压 ZIP，将 kira1a 添加到支持 UCI 的国际象棋 GUI。请将 kira1a-retrained.nnue 放在可执行文件旁边，以便 Kira 自动加载。必要时，解压后运行 chmod +x kira1a。",
          "我还整理了仓库，让文档更易读，方便找到安装、使用和构建 Kira 所需的信息。",
          "这次更新针对平台支持和文档。引擎和 NNUE 权重保持不变，原版 Alpha 的棋力估计仍有相同的测量限制。也提供 macOS Apple Silicon 和 Windows x64 安装包。"
        ]
      },
      "es": {
        "title": "Kira 1 Alpha v1.0.2: Linux x64 y un repositorio más limpio",
        "body": [
          "Kira 1 Alpha v1.0.2 añade una versión para Linux x64. Descarga y extrae el ZIP, y añade kira1a a tu interfaz de ajedrez UCI. Mantén kira1a-retrained.nnue junto al ejecutable para que Kira lo cargue automáticamente. Si hace falta, ejecuta chmod +x kira1a después de extraerlo.",
          "También he limpiado el repositorio y aclarado la documentación para que sea más fácil encontrar cómo instalar, usar y compilar Kira.",
          "Esta actualización afecta a las plataformas y la documentación. El motor y los pesos de NNUE no han cambiado, y la estimación de fuerza de la Alpha original conserva las mismas limitaciones de medición. También hay paquetes para macOS Apple Silicon y Windows x64."
        ]
      },
      "de": {
        "title": "Kira 1 Alpha v1.0.2: Linux x64 und ein aufgeräumtes Repository",
        "body": [
          "Kira 1 Alpha v1.0.2 bringt einen Linux-x64-Build. Lade die ZIP-Datei herunter, entpacke sie und füge kira1a zu deiner UCI-Schachoberfläche hinzu. Lege kira1a-retrained.nnue neben die ausführbare Datei, damit Kira das Netz automatisch lädt. Führe bei Bedarf nach dem Entpacken chmod +x kira1a aus.",
          "Ich habe außerdem das Repository aufgeräumt und die Dokumentation lesbarer gemacht, damit du Informationen zum Installieren, Verwenden und Kompilieren von Kira leichter findest.",
          "Dieses Update betrifft Plattformen und Dokumentation. Engine und NNUE-Gewichte sind unverändert; für die ursprüngliche Alpha-Spielstärkeschätzung gelten dieselben Einschränkungen. Pakete für macOS Apple Silicon und Windows x64 sind ebenfalls verfügbar."
        ]
      },
      "pl": {
        "title": "Kira 1 Alpha v1.0.2: Linux x64 i porządki w repozytorium",
        "body": [
          "Kira 1 Alpha v1.0.2 dodaje wersję dla Linux x64. Pobierz i rozpakuj ZIP, a następnie dodaj kira1a do programu szachowego obsługującego UCI. Umieść kira1a-retrained.nnue obok pliku wykonywalnego, aby Kira automatycznie wczytała sieć. W razie potrzeby po rozpakowaniu uruchom chmod +x kira1a.",
          "Uporządkowałem też repozytorium i uprościłem dokumentację, żeby łatwiej było znaleźć informacje o instalacji, używaniu i kompilacji Kiry.",
          "Ta aktualizacja dotyczy obsługi platform i dokumentacji. Silnik i wagi NNUE nie zmieniły się, a pierwotne oszacowanie siły Alphy ma te same ograniczenia pomiarowe. Dostępne są też paczki dla macOS Apple Silicon i Windows x64."
        ]
      }
    }
  },
  {
    "slug": "kira-1-alpha-v1-0-1-hotfix",
    "date": "2026-10-27",
    "title": "Kira 1 Alpha v1.0.1: usability and compatibility hotfix",
    "body": [
      "Kira 1 Alpha v1.0.1 is a usability and compatibility hotfix that makes the engine easier to get running. Prebuilt ZIP packages are available for Apple Silicon Macs and Windows x64 machines.",
      "Extract the ZIP for your platform and add kira1a on macOS or kira1a.exe on Windows to your UCI chess GUI. Keep kira1a-retrained.nnue beside the executable: Kira now loads it automatically and uses NNUE when it is available.",
      "If the network is missing or cannot be loaded, Kira reports the problem in its UCI log and falls back to HCE evaluation. You can still use the EvalFile option to choose a different network path.",
      "Both packages passed targeted UCI checks and runtime smoke tests on their respective platforms. An interactive Windows chess GUI was not tested. The network weights are unchanged from the original Alpha, and the original match campaigns were not repeated for this hotfix."
    ],
    "translations": {
      "ja": {
        "title": "Kira 1 Alpha v1.0.1：使いやすさと互換性の修正",
        "body": [
          "Kira 1 Alpha v1.0.1は、エンジンをより簡単に使い始められるようにするための修正版です。Apple Silicon搭載MacとWindows x64向けにビルド済みのZIPパッケージを用意しています。",
          "お使いのプラットフォーム向けZIPを展開し、macOSではkira1a、Windowsではkira1a.exeをUCI対応チェスGUIに追加してください。kira1a-retrained.nnueは実行ファイルと同じ場所に置いてください。Kiraはネットワークを自動で読み込み、使用可能な場合はNNUEを使います。",
          "ネットワークが見つからない、または読み込めない場合、KiraはUCIログに問題を記録し、HCE評価に切り替えます。EvalFileオプションを使えば、別のネットワークパスを指定できます。",
          "両パッケージはそれぞれのプラットフォームで、対象を絞ったUCIテストと実行時のスモークテストに合格しました。Windowsの対話型チェスGUIではテストしていません。ネットワークの重みは元のAlphaから変更されておらず、この修正版で元の対局シリーズは再実行していません。"
        ]
      },
      "zh-Hans": {
        "title": "Kira 1 Alpha v1.0.1：易用性与兼容性修复",
        "body": [
          "Kira 1 Alpha v1.0.1 是一次易用性和兼容性修复，让引擎更容易上手。现已提供适用于 Apple Silicon Mac 和 Windows x64 的预编译 ZIP 包。",
          "解压适合你平台的 ZIP 包，然后将 macOS 上的 kira1a 或 Windows 上的 kira1a.exe 添加到支持 UCI 的国际象棋 GUI。请将 kira1a-retrained.nnue 与可执行文件放在同一目录：Kira 现在会自动加载网络，并在可用时使用 NNUE。",
          "如果网络文件缺失或无法加载，Kira 会在 UCI 日志中报告问题，并回退到 HCE 评估。你仍可通过 EvalFile 选项指定其他网络文件路径。",
          "两个安装包分别在各自平台上通过了针对性的 UCI 测试和解压后的运行冒烟测试。交互式 Windows 国际象棋 GUI 尚未测试。网络权重与原版 Alpha 相同，此次修复没有重新进行原来的对局测试。"
        ]
      },
      "es": {
        "title": "Kira 1 Alpha v1.0.1: corrección de usabilidad y compatibilidad",
        "body": [
          "Kira 1 Alpha v1.0.1 es una actualización de usabilidad y compatibilidad que facilita poner en marcha el motor. Hay paquetes ZIP precompilados para Mac con Apple Silicon y equipos Windows x64.",
          "Extrae el ZIP de tu plataforma y añade kira1a en macOS o kira1a.exe en Windows a tu interfaz de ajedrez compatible con UCI. Mantén kira1a-retrained.nnue junto al ejecutable: ahora Kira carga la red automáticamente y usa NNUE cuando está disponible.",
          "Si la red falta o no se puede cargar, Kira informa del problema en su registro UCI y recurre a la evaluación HCE. La opción EvalFile sigue disponible para indicar otra ruta de red.",
          "Ambos paquetes superaron pruebas UCI específicas y comprobaciones básicas de ejecución en sus respectivas plataformas. No se probó una interfaz gráfica de ajedrez interactiva en Windows. Los pesos de la red no han cambiado respecto a la Alpha original y las campañas de partidas originales no se repitieron para esta corrección."
        ]
      },
      "de": {
        "title": "Kira 1 Alpha v1.0.1: Hotfix für Bedienbarkeit und Kompatibilität",
        "body": [
          "Kira 1 Alpha v1.0.1 ist ein Hotfix für Bedienbarkeit und Kompatibilität, der den Einstieg erleichtert. Vorgefertigte ZIP-Pakete stehen für Macs mit Apple Silicon und Windows-x64-Rechner bereit.",
          "Entpacke das ZIP für deine Plattform und füge unter macOS kira1a beziehungsweise unter Windows kira1a.exe zu deiner UCI-Schachoberfläche hinzu. Lege kira1a-retrained.nnue neben die ausführbare Datei: Kira lädt das Netz jetzt automatisch und verwendet NNUE, sofern es verfügbar ist.",
          "Falls das Netz fehlt oder nicht geladen werden kann, meldet Kira das Problem im UCI-Protokoll und fällt auf die HCE-Bewertung zurück. Über die Option EvalFile lässt sich weiterhin ein anderer Netzpfad festlegen.",
          "Beide Pakete haben gezielte UCI-Tests und grundlegende Laufzeittests auf ihren jeweiligen Plattformen bestanden. Eine interaktive Windows-Schachoberfläche wurde nicht getestet. Die Netzwerkgewichte sind gegenüber der ursprünglichen Alpha unverändert; die ursprünglichen Wettkampfserien wurden für diesen Hotfix nicht wiederholt."
        ]
      },
      "pl": {
        "title": "Kira 1 Alpha v1.0.1: poprawka użyteczności i zgodności",
        "body": [
          "Kira 1 Alpha v1.0.1 to poprawka użyteczności i zgodności, która ułatwia uruchomienie silnika. Gotowe paczki ZIP są dostępne dla komputerów Mac z Apple Silicon oraz komputerów z Windows x64.",
          "Rozpakuj plik ZIP dla swojego systemu i dodaj kira1a w macOS lub kira1a.exe w Windows do programu szachowego obsługującego UCI. Umieść kira1a-retrained.nnue obok pliku wykonywalnego: Kira automatycznie wczytuje teraz sieć i używa NNUE, gdy jest dostępna.",
          "Jeśli sieci brakuje lub nie można jej wczytać, Kira zgłasza problem w dzienniku UCI i przełącza się na ocenę HCE. Opcja EvalFile nadal pozwala wskazać inną ścieżkę do sieci.",
          "Obie paczki przeszły ukierunkowane testy UCI oraz podstawowe testy uruchomieniowe na odpowiednich platformach. Nie testowano interaktywnego graficznego programu szachowego w Windows. Wagi sieci są takie same jak w oryginalnej Alphie, a pierwotnych serii meczów nie powtarzano dla tej poprawki."
        ]
      }
    }
  }
];
