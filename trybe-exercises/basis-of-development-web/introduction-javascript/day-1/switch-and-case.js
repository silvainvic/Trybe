const result = "aprovada"

switch(result) {
  case "aprovada":
    console.log("\n\nParabéns, você foi aprovada!\n\n");
    break;
  case "lista":
    console.log("\n\nVocê está na nossa lista de espera.\n\n");
    break;
  case "reprovada":
    console.log("\n\nVocê foi reprovada!\n\n");
    break;
  default:
    console.log("\n\nNão se aplica!\n\n");
}