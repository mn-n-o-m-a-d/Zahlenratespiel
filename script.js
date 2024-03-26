function output(text) {
    $(".output").text(text);
  }
  
  // 1. Zahl ausdenken
  const zufallsZahl = Math.floor(Math.random() * 100 + 1);
  let zahl;
  
  function handleFormSubmit(e) {
    
    e.preventDefault();
    
    // 2. Benutzer nach Zahl fragen
    const eingabe = $("input[name='text']").val();
  
    zahl = parseInt(eingabe);
  
    if (isNaN(zahl)) {
      output("Geben Sie eine gültige Zahl ein.");
      // Zurück zu Schritt 2
      return;
    }
  
    // 3. Zahl vergleichen
    // 3a. Eingegebene Zahl ist kleiner → Die gesuchte Zahl ist größer.
  
    if (zahl < zufallsZahl) {
      output("Die gesuchte Zahl ist größer.");
  
      // 3b. Eingegebene Zahl ist größer → Die gesuchte Zahl ist kleiner.
    } else if (zahl > zufallsZahl) {
      output("Die gesuchte Zahl ist kleiner.");
    } else {
      // 5. → Sie haben die Zahl erraten.
      output("Sie haben die Zahl erraten.");
    }
    // 4. Wenn die Zahl nicht erraten wurde, wiederholen ab 2
    
    $("input[name='text']").trigger("focus").select();
    
  }
  
  $("#form").on("submit", handleFormSubmit);