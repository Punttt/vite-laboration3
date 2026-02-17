CSS-preprocessorer

Beskrivning: Detta projekt är en enkel responsiv webbplats som har en startsidan och en textsida med fokus på SASS-kod.

SASS egenskaper som används i dett aprojekt:
- Variabler
- Functions
- Nesting
- Mixins
- Selector inheritance
- If/else satser
- Partials - _base, _components, _layout, _reset & main

Webbplatsen har även ett ljust och ett mörkt tema som kan ändras genom webbläsarens inställningar.
Mediaqueries för temat är inlagt i projektet med hjälp av:
 - prefers-color-scheme:

Startsidan: Här möts man av en bannerbild och en välkomsttext, samt knappar och huvud navigering för att ta sig runt på sidan.

Undersida (SASS): Här är en sida med text som förklarar projektets gång, samt för och nackdelar som jag kommit fram till efter att ha använt SASS.

Undersida (Animering): Här visar jag tre olika typer av CSS-animationer som är implementerade med hjälp av SASS. Syftet var att demonstrera Keyframes, transition, och användar interaktion med hjälp av grafiska effekter. 

Animering som visas är:
- Vågeffekt (Keyframes), tre stycken olikt färgade block animeras till fullbredd, där varje block har 1 sekunds delay så effekten blir en vågliknande rörelse.
- Pulserande rubrik (Keyframes), en animation som ändrar  rubrikens färg till de tre färger som blocken har. När varje block har laddats till full bredd så ändras rubrikens färg till det blockets färg.
- Hover-effekt (Transition), När en användare hovrar över blocken så sänks opacityn med en mjuk transition på 3 sekunder.

Bonus: På startsidan lades en extra animation till för knappen som finns i hero-delen. Med hjälp av transform och scale(1.2) blev det en extra effekt vid hover över knappen som skapade en mer proffsigt intryck.



Installation: npm install npm run dev

Bygg projektet: npm run build

Publicerad webbplats: https://vite-lab3.netlify.app/
