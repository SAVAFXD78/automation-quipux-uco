const { Builder, By, until } = require('selenium-webdriver');
const fs = require('fs');
const path = require('path');
const SEGUNDO = 1000;

(async function automationWithSelenium() {
  let driver = await new Builder().forBrowser('chrome').build();
  const url = 'https://inventory-flutter.vercel.app';

  logReport("=== INICIO DEL REPORTE DE AUTOMATIZACIÓN ===");

  try {
    await driver.get(url);
    logReport(`Navegando a la URL: ${url}`);
    await driver.sleep(SEGUNDO * 10);

    const inputUsuario = await driver.wait(until.elementLocated(By.xpath('//*[@id="flt-semantic-node-7"]/input')), SEGUNDO * 30);
    logReport("Buscando el campo 'Usuario'...");
    await inputUsuario.sendKeys('qxuco2024');
    logReport("Campo 'Usuario' llenado con éxito", "SUCCESS");
    
    const inputClave = await driver.findElement(By.xpath('//*[@id="flt-semantic-node-8"]/input'));
    logReport("Buscando el campo 'Clave'...");
    await inputClave.sendKeys('qxuco2024*');
    logReport("Campo 'Clave' llenado con éxito", "SUCCESS");

    const botonLogin = await driver.findElement(By.xpath('//*[@id="flt-semantic-node-10"]'));
    logReport("Buscando el botón 'Login'...");
    await botonLogin.click();
    logReport("Botón 'Login' clickeado con éxito", "SUCCESS");
    
    await driver.sleep(SEGUNDO * 5);
    
    // Navegar a Productos (CORREGIDO - Necesitas verificar este XPath)
    const productsLink = await driver.wait(until.elementLocated(By.xpath('//*[@id="flt-semantic-node-19"]')), 10000);
    logReport("Buscando el apartado 'Productos'...");
    await productsLink.click();
    logReport("Apartado 'Productos' clickeado con éxito", "SUCCESS");
    await driver.sleep(SEGUNDO * 5);
    
    const addProductLink = await driver.findElement(By.xpath('//*[@id="flt-semantic-node-48"]'), 1000);
    logReport("Buscando el apartado '+'...");
    await addProductLink.click();
    logReport("Apartado '+' clickeado con éxito", "SUCCESS");
    await driver.sleep(SEGUNDO * 5);
    
    //Datos del producto 
    const inputNombre = await driver.wait(until.elementLocated(By.xpath('//input[@aria-label="Nombre del Producto"]')), SEGUNDO * 30);
    logReport("Buscando el campo 'Nombre del Producto'...");
    await inputNombre.sendKeys('Lampara Ultra Led');
    logReport("Campo 'Nombre del Producto' llenado con éxito", "SUCCESS");
    await driver.sleep(SEGUNDO * 5);
    
    const inputDescripcion = await driver.wait(until.elementLocated(By.xpath('//input[@aria-label="Descripción (opcional)"]')), SEGUNDO * 30);
    logReport("Buscando el campo 'Descripción (opcional)'...");
    await inputDescripcion.sendKeys('Lampara con luz Ultra violeta 16V');
    logReport("Campo 'Descripción (opcional)' llenado con éxito", "SUCCESS");
    await driver.sleep(SEGUNDO * 5);
    
    const inputVenta = await driver.wait(until.elementLocated(By.xpath('//input[@aria-label="Precio de Venta"]')), SEGUNDO * 30);
    logReport("Buscando el campo 'venta'...");
    await inputVenta.sendKeys('20000');
    logReport("Campo 'venta' llenado con éxito", "SUCCESS");
    await driver.sleep(SEGUNDO * 5);
    
    const inputIva = await driver.wait(until.elementLocated(By.xpath('//input[@aria-label="IVA (%)"]')), SEGUNDO * 30);
    logReport("Buscando el campo 'Iva'...");
    await inputIva.sendKeys('10');
    logReport("Campo 'Iva' llenado con éxito", "SUCCESS");
    await driver.sleep(SEGUNDO * 5);
    
    //Añadir al Inventario
    const addInventoryLink = await driver.findElement(By.xpath('//flt-semantics[text()="Añadir inventario"]'), 1000);
    logReport("Buscando el apartado 'Añadir al inventario'...");
    await addInventoryLink.click();
    logReport("Apartado 'Añadir al inventario' clickeado con éxito", "SUCCESS");
    await driver.sleep(SEGUNDO * 5);
    
    const inputProveedor = await driver.wait(until.elementLocated(By.xpath('//input[@aria-label="Proveedor (opcional)"]')), SEGUNDO * 30);
    logReport("Buscando el campo 'Proveedor'...");
    await inputProveedor.sendKeys('Quipux');
    logReport("Campo 'Proveedor' llenado con éxito", "SUCCESS");
    await driver.sleep(SEGUNDO * 5);
    
    const inputPrice = await driver.wait(until.elementLocated(By.xpath('//input[@aria-label="Precio de compra (unitario)"]')), SEGUNDO * 30);
    logReport("Buscando el campo 'Precio Unitario'...");
    await inputPrice.sendKeys('20000');
    logReport("Campo 'Precio Unitario' llenado con éxito", "SUCCESS");
    await driver.sleep(SEGUNDO * 5);
    
    const inputCantidad = await driver.wait(until.elementLocated(By.xpath('//input[@aria-label="Cantidad"]')), SEGUNDO * 30);
    logReport("Buscando el campo 'Cantidad'...");
    await inputCantidad.sendKeys('10');
    logReport("Campo 'Cantidad' llenado con éxito", "SUCCESS");
    await driver.sleep(SEGUNDO * 5);
    
    const agregarProducto = await driver.findElement(By.xpath('//flt-semantics[text()="Agregar"]'), 1000);
    logReport("Buscando el apartado 'Agregar'...");
    await agregarProducto.click();
    logReport("Apartado 'Agregar' clickeado con éxito", "SUCCESS");
    await driver.sleep(SEGUNDO * 5);
    
    //Guardar Productos
    const saveProductLink = await driver.findElement(By.xpath('//flt-semantics[text()="Guardar Producto"]'), 1000);
    logReport("Buscando el apartado 'Guardar Producto'...");
    await saveProductLink.click();
    logReport("Apartado 'Guardar Producto' clickeado con éxito", "SUCCESS");
    await driver.sleep(SEGUNDO * 5);
    

   //Salimos del apartado productos
   const salirLink = await driver.findElement(By.xpath('//flt-semantics[text()="Atrás"]'), 1000);
   logReport("Buscando la opción 'Atrás'...");
   await salirLink.click();
   logReport("Opción 'Atrás' clickeado con éxito", "SUCCESS");
   await driver.sleep(SEGUNDO * 5);
   
   /*
   //Apartado de ventas
   const ventasLink = await driver.findElement(By.xpath("//flt-semantics[span[text()='Ventas']]"), 1000);
   logReport("Buscando el apartado 'Ventas'...");
   await ventasLink.click();
   logReport("Apartado 'Ventas' clickeado con éxito", "SUCCESS");
   await driver.sleep(SEGUNDO * 5);
   
   //Datos para la venta
   const buscarLink = await driver.findElement(By.xpath("//flt-semantics[span[text()='Buscar producto']]"), 1000);
   logReport("Buscando el apartado 'Ventas'...");
   await buscarLink.click();
   logReport("Apartado 'Ventas' clickeado con éxito", "SUCCESS");
   await driver.sleep(SEGUNDO * 5);
   
   const buscarProductoLink = await driver.wait(until.elementLocated(By.xpath('//input[@aria-label="Buscar producto"]')), SEGUNDO * 30);
   logReport("Buscando el campo 'Buscar producto'...");
   await buscarProductoLink.sendKeys('Lampara Ultra Led');
   logReport("Campo 'Buscar producto' llenado con éxito", "SUCCESS");
   await driver.sleep(SEGUNDO * 5);
   
   //En este parte, depende mucho de en el momento es que se ejecute, porque hay otro elemento que obstruye el el select
   const opcionProductoLink = await driver.findElement(By.xpath("//flt-semantics[span[text()='Lampara Ultra Led']]"), 1000); 
   logReport("Buscando la opción 'Lampara Ultra Led'...");
   await opcionProductoLink.click();
   logReport("Apartado 'Lampara Ultra Led' clickeado con éxito", "SUCCESS");
   await driver.sleep(SEGUNDO * 5);
   
   const confirmarVentaLink = await driver.findElement(By.xpath("//flt-semantics[text()='Confirmar']"), 1000);
   logReport("Buscando la opción 'confirmar'...");
   await confirmarVentaLink.click();
   logReport("Apartado 'confirmar' clickeado con éxito", "SUCCESS");
   await driver.sleep(SEGUNDO * 5);
   
   const clienteVentaLink = await driver.findElement(By.xpath("//flt-semantics[span[text()='0 Cliente (opcional)']]"), 1000);
   logReport("Buscando la opción 'Buscar producto'...");
   await clienteVentaLink.click();
   logReport("Apartado 'Buscar producto' clickeado con éxito", "SUCCESS");
   await driver.sleep(SEGUNDO * 5);
   
   const documentoLink = await driver.wait(until.elementLocated(By.xpath('//input[@aria-label="Número de Identificación"]')), SEGUNDO * 30);
   logReport("Buscando el campo 'Número de Identificación'...");
   await documentoLink.sendKeys('1011236469');
   logReport("Campo 'Número de Identificación' llenado con éxito", "SUCCESS");
   await driver.sleep(SEGUNDO * 5);
   
   const nombreLink = await driver.wait(until.elementLocated(By.xpath('//input[@aria-label="Nombres"]')), SEGUNDO * 30);
   logReport("Buscando el campo 'Nombres'...");
   await nombreLink.sendKeys('Juan');
   logReport("Campo 'Nombres' llenado con éxito", "SUCCESS");
   await driver.sleep(SEGUNDO * 5);
   
   const apellidoLink = await driver.wait(until.elementLocated(By.xpath('//input[@aria-label="Apellidos"]')), SEGUNDO * 30);
   logReport("Buscando el campo 'Apellidos'...");
   await apellidoLink.sendKeys('Juan');
   logReport("Campo 'Apellidos' llenado con éxito", "SUCCESS");
   await driver.sleep(SEGUNDO * 5);
   
   const emailLink = await driver.wait(until.elementLocated(By.xpath('//input[@aria-label="Email"]')), SEGUNDO * 30);
   logReport("Buscando el campo 'Email'...");
   await emailLink.sendKeys('juan@gmail.com');
   logReport("Campo 'Email' llenado con éxito", "SUCCESS");
   await driver.sleep(SEGUNDO * 5);
   
   const metodoPagoLink = await driver.findElement(By.xpath("//flt-semantics[span[text()='0 Métodos de Pago']]"), 1000);
   logReport("Buscando la opción 'Buscar producto'...");
   await metodoPagoLink.click();
   logReport("Apartado 'Buscar producto' clickeado con éxito", "SUCCESS");
   await driver.sleep(SEGUNDO * 5);
   
    const añadirLink = await driver.findElement(By.xpath("//flt-semantics[text()='Añadir método de pago']"), 1000);
    logReport("Buscando la opción 'Añadir método de pago'...");
    await añadirLink.click();
    logReport("Apartado 'Añadir método de pago' clickeado con éxito", "SUCCESS");
    await driver.sleep(SEGUNDO * 5);
    
    const montoLink = await driver.wait(until.elementLocated(By.xpath('//input[@aria-label="Monto"]')), SEGUNDO * 30);
    logReport("Buscando el campo 'Monto'...");
    await montoLink.sendKeys('50000');
    logReport("Campo 'Monto' llenado con éxito", "SUCCESS");
    await driver.sleep(SEGUNDO * 5);
    
    const confirmarLink = await driver.findElement(By.xpath("//flt-semantics[text()='Confirmar']"), 1000);
    logReport("Buscando la opción 'Confirmar'...");
    await confirmarLink.click();
    logReport("Apartado 'Confirmar' clickeado con éxito", "SUCCESS");
    await driver.sleep(SEGUNDO * 5);
    
    const confirmarCompraLink = await driver.findElement(By.xpath("//flt-semantics[text()='Confirmar Venta (20.000,00 COP)']"), 1000);
    logReport("Buscando la opción 'Confirmar Venta (20.000,00 COP)'...");
    await confirmarCompraLink.click();
    logReport("Apartado 'Confirmar Venta (20.000,00 COP)' clickeado con éxito", "SUCCESS");
    await driver.sleep(SEGUNDO * 5);
    
    const volverLink = await driver.findElement(By.xpath("//flt-semantics[text()='Volver']"), 1000);
    logReport("Buscando la opción 'Confirmar'...");
    await volverLink.click();
    logReport("Apartado 'Confirmar' clickeado con éxito", "SUCCESS");
    await driver.sleep(SEGUNDO * 5);

    //Salimos del apartado ventas
   const salirVentaLink = await driver.findElement(By.xpath('//flt-semantics[text()="Atrás"]'), 1000);
   logReport("Buscando la opción 'Atrás'...");
   await salirVentaLink.click();
   logReport("Opción 'Atrás' clickeado con éxito", "SUCCESS");
   await driver.sleep(SEGUNDO * 5);
   */
    

   
  } catch (error) {
    logReport(`Error en la automatización: ${error.message}`, "ERROR");
  } finally {
    await driver.quit();
    logReport("Cerrando el navegador.");
    logReport("=== FIN DEL REPORTE DE AUTOMATIZACIÓN ===");
  }
})();



// Función para agregar entradas al reporte de logs con formato bonito
function logReport(message, status = "INFO") {
  const timestamp = new Date().toLocaleString();
  const statusIcon = status === "ERROR" ? "❌" : status === "SUCCESS" ? "✅" : "ℹ️";
  const logMessage = `[${timestamp}] ${statusIcon} ${message}\n`;

  console.log(logMessage.trim()); // Mostrar en consola
  fs.appendFileSync(path.join(__dirname, 'test-report.log'), logMessage); // Escribir en archivo
}