# Portafolio Profesional de Desarrollador

## Descripci贸n del Proyecto
Portafolio web profesional para un desarrollador de software Full Stack, creado utilizando exclusivamente HTML5, CSS3 y JavaScript vanilla, sin frameworks, librer铆as externas ni dependencias de ning煤n tipo.

## Estructura del Proyecto
```
portafolio/
鈹溾攢鈹 index.html      鈫 Estructura HTML principal
鈹溾攢鈹 styles.css      鈫 Estilos CSS (responsive, animaciones, modo oscuro)
鈹溾攢鈹 script.js       鈫 Funcionalidad JavaScript (men煤, animaciones, formulario)
鈹斺攢鈹 replit.md       鈫 Documentaci贸n del proyecto
```

## Caracter铆sticas Implementadas

### Secciones
- **Hero**: Foto de perfil, nombre, t铆tulo con efecto typing, descripci贸n, botones CTA y redes sociales
- **Sobre M铆**: Descripci贸n personal, 10 meses de experiencia, objetivos profesionales
- **Habilidades**: Barras de progreso animadas para Frontend (HTML, CSS, JS) y Backend (Java, Spring Boot, MySQL, PostgreSQL)
- **Proyectos**: Cards con filtro por categor铆a (Frontend, Backend, Full Stack), efectos hover
- **Timeline**: L铆nea de tiempo con trayectoria y formaci贸n
- **Contacto**: Formulario con validaci贸n JavaScript, informaci贸n de contacto
- **Footer**: Copyright, enlaces r谩pidos, redes sociales

### Funcionalidades JavaScript
- Loader inicial animado
- Men煤 hamburguesa responsive
- Modo oscuro/claro con localStorage
- Animaciones al scroll (Intersection Observer)
- Efecto de escritura autom谩tica (typing)
- Filtro de proyectos por tecnolog铆a
- Validaci贸n de formulario de contacto
- Scroll to top button
- Contadores animados
- Navegaci贸n activa seg煤n secci贸n

### Dise帽o
- Paleta de colores profesional (morado/cyan)
- 100% Responsive (m贸vil, tablet, desktop)
- Animaciones CSS elegantes
- Variables CSS para f谩cil personalizaci贸n
- Modo oscuro/claro

## C贸mo Personalizar

### 馃枃锔 Foto de Perfil
Buscar en `index.html`:
```html
<!-- 馃枃锔 CAMBIAR FOTO AQU脥 -->
<img src="URL_DE_TU_FOTO" alt="Foto de perfil">
```

### 鉁忥笍 Informaci贸n Personal
Buscar comentarios como:
- `<!-- 鉁忥笍 EDITAR NOMBRE -->`
- `<!-- 鉁忥笍 EDITAR DESCRIPCI脫N -->`
- `<!-- 馃殌 EDITAR PROYECTOS -->`
- `<!-- 馃摢 EDITAR CONTACTO -->`
- `<!-- 馃敆 EDITAR REDES -->`

### 馃帹 Colores
Modificar variables en `styles.css`:
```css
:root {
    --color-primary: #6366f1;
    --color-secondary: #06b6d4;
    /* m谩s variables... */
}
```

## Tecnolog铆as Utilizadas
- HTML5 puro
- CSS3 puro (sin frameworks)
- JavaScript Vanilla (sin librer铆as)
- SVG inline para iconos
- APIs nativas del navegador (Intersection Observer, localStorage)

## Notas
- El portafolio funciona abriendo directamente `index.html` en cualquier navegador
- No requiere instalaci贸n de nada ni servidor
- Compatible con todos los navegadores modernos
- Optimizado para rendimiento y accesibilidad

## 脷ltima Actualizaci贸n
Diciembre 2024
