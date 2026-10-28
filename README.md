# TexClean

Sitio web estático para TexClean. No requiere Electron, Node.js ni instalar dependencias. Bootstrap y el cliente de Supabase se cargan desde CDN.

Para probarlo, sirve esta carpeta con una extensión de servidor estático como Live Server en VS Code y abre `login.html`. No abras los archivos directamente con `file://`: el navegador necesita cargar los módulos JavaScript mediante HTTP/HTTPS.

El cliente de Supabase se carga desde esm.sh. Para publicar el sitio, despliega los archivos HTML y `supabaseClient.js` en cualquier hosting estático con conexión a internet.
