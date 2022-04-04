const prerendered = [
  "/",
  "/gazetteer",
  "/gazetteer/polities/eastern_kingdoms",
  "/gazetteer/polities/eastern_kingdoms/dreaming_cities",
  "/gazetteer/polities/eastern_kingdoms/kremyat",
  "/gazetteer/regions/doyoc_plains",
  "/gazetteer/regions/kremlands",
  "/bestiary",
  "/bestiary/monstrous_intelligences",
  "/bestiary/monstrous_intelligences/changelings",
  "/bestiary/monstrous_intelligences/changelings/doppelganger",
  "/bestiary/monstrous_intelligences/changelings/ogre",
  "/bestiary/monstrous_intelligences/changelings/test",
  "/bestiary/playable_species",
  "/bestiary/playable_species/demi-apye",
  "/bestiary/playable_species/vistime",
  "/bestiary/playable_species/duarr",
  "/bestiary/playable_species/groth",
  "/bestiary/playable_species/apye",
  "/bestiary/playable_species/harj"
];
console.log(prerendered);
const worker = self;
worker.addEventListener("install", (e) => {
  console.log("E:", e);
});
worker.addEventListener("message", (e) => {
  console.log("Derp");
  if (e.data && e.data.type === "GET_CHILDREN") {
    worker.clients.matchAll({
      includeUncontrolled: true,
      type: "window"
    }).then((clients) => {
      if (clients && clients.length) {
        clients[0].postMessage({
          type: "CHILDREN",
          children: GetChildren(e.data.root)
        });
      }
    });
  }
});
function GetChildren(root) {
  return prerendered.filter((p) => p.includes(root) && p !== root);
}
