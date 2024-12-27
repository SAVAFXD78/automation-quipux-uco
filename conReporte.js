const { Builder, By, until } = require('selenium-webdriver');
const fs = require('fs');
const path = require('path');

// Asegura que el archivo de reporte exista antes de escribir
const logFilePath = path.join(__dirname, 'test-report-login.log');
console.log(logFilePath);

const SEGUNDO_EN_MILISEGUNDOS = 1000;

// Verifica si el archivo existe, y si no, lo crea
if (!fs.existsSync(logFilePath)) {
  fs.writeFileSync(logFilePath, ''); // Crea el archivo vacío
}

// Función para agregar entradas al reporte de logs con formato bonito
function logReport(message, status = "INFO") {
  const timestamp = new Date().toLocaleString();
  const statusIcon = status === "ERROR" ? "❌" : status === "SUCCESS" ? "✅" : "ℹ️";
  const logMessage = `[${timestamp}] ${statusIcon} ${message}\n`;

  console.log(logMessage.trim()); // Mostrar en consola
  fs.appendFileSync(path.join(__dirname, 'test-report-login.log'), logMessage); // Escribir en archivo
}

(async function automationWithSelenium() {
  // Configuración inicial
  let driver = await new Builder().forBrowser('chrome').build();
  const url = 'https://inventory-flutter.vercel.app';

  // Inicia el reporte
  logReport("=== INICIO DEL REPORTE DE AUTOMATIZACIÓN ===");

  try {
    logReport(`Navegando a la URL: ${url}`);
    await driver.get(url);

    // Esperar y llenar Username
    logReport("Buscando el campo 'Username'...");
    const usernameInput = await driver.wait(
      until.elementLocated(By.xpath('//*[@id="flt-semantic-node-7"]/input')),
      5000
    );
    await usernameInput.sendKeys('qxuco2024');
    logReport("Campo 'Username' llenado con éxito", "SUCCESS");

    // Esperar y llenar Password
    logReport("Buscando el campo 'Password'...");
    await driver.sleep(SEGUNDO_EN_MILISEGUNDOS * 3);
    const passwordInput = await driver.findElement(By.xpath('//*[@id="flt-semantic-node-8"]/input'));
    await passwordInput.sendKeys('qxuco2024*');
    logReport("Campo 'Password' llenado con éxito", "SUCCESS");

    // Hacer clic en Login
    logReport("Buscando el botón 'Login'...");
    const loginButton = await driver.findElement(By.xpath('//*[@id="flt-semantic-node-10"]'));
    await loginButton.click();
    logReport("Botón 'Login' clickeado con éxito", "SUCCESS");

    // Validación de Dashboard
    logReport("Verificando la carga del Dashboard...");
    await driver.wait(
      until.elementLocated(By.xpath('//*[@id="flt-semantic-node-28"]/input')),
      5000
    );
    logReport("Dashboard cargado correctamente", "SUCCESS");

  } catch (error) {
    logReport(`Error en la automatización: ${error.message}`, "ERROR");
  } finally {
    // Cierra el navegador y finaliza el reporte
    await driver.quit();
    logReport("Cerrando el navegador.");
    logReport("=== FIN DEL REPORTE DE AUTOMATIZACIÓN ===");
  }
})();
