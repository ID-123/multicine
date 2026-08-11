# Multicine

Aplicación web para consultar información de películas y gestionar una experiencia básica de cine.

El proyecto se desarrolla progresivamente mientras se aprende y refuerza TypeScript, React y las herramientas utilizadas en aplicaciones web modernas.

## Objetivo

Construir una aplicación de cine funcional desde cero que permita practicar:

* TypeScript y JavaScript moderno.
* React y desarrollo basado en componentes.
* Manipulación del DOM.
* Eventos e interacción con el usuario.
* Consumo de APIs.
* Programación asíncrona.
* Manejo de estados y formularios.
* Validación de datos.
* Routing.
* Persistencia de información.
* Buenas prácticas de arquitectura frontend.

La aplicación se desarrollará por módulos y sprints. Cada concepto nuevo deberá utilizarse en una funcionalidad pequeña antes de incorporarlo al proyecto principal.

## Tecnologías

### Base

* Node.js
* npm
* TypeScript
* React
* Vite

### UI

* Tailwind CSS

### Herramientas

* ESLint
* TypeScript ESLint
* Prettier

### Tecnologías que se incorporarán progresivamente

* React Router
* Consumo de APIs
* Axios
* Zod
* Zustand
* React Hook Form
* Otras herramientas necesarias según avance el proyecto

> Las dependencias se incorporarán cuando exista una necesidad concreta de utilizarlas.

## Estructura esperada

La estructura crecerá progresivamente. No se creará toda la arquitectura desde el principio.

```text
multicine/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── types/
│   ├── hooks/
│   ├── utils/
│   ├── App.tsx
│   └── main.tsx
├── .gitignore
├── README.md
├── package.json
├── package-lock.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
└── vite.config.ts
```

La estructura anterior representa el objetivo de organización del proyecto. Los directorios se crearán cuando sean necesarios para una funcionalidad real.

## Instalación

Clonar el repositorio y entrar al proyecto:

```bash
git clone <repository-url>
cd multicine
```

Instalar las dependencias:

```bash
npm install
```

Comprobar vulnerabilidades:

```bash
npm audit
```

Iniciar el servidor de desarrollo:

```bash
npm run dev
```

Crear una compilación de producción:

```bash
npm run build
```

Previsualizar la compilación:

```bash
npm run preview
```

Ejecutar ESLint:

```bash
npm run lint
```

## Proceso de revisión

Antes de considerar terminado un sprint se comprobará:

1. La funcionalidad funciona.
2. El código se comprende.
3. Los conceptos utilizados están documentados.
4. TypeScript no presenta errores.
5. ESLint no presenta errores relevantes.
6. El proyecto puede instalarse nuevamente con `npm install`.
7. `npm audit` no presenta vulnerabilidades conocidas.
8. `npm run build` termina correctamente.

## Metodología de aprendizaje

El proyecto se desarrolla mediante pequeños módulos.

Cada módulo seguirá aproximadamente este ciclo:

```text
Concepto
   ↓
Ejemplo pequeño
   ↓
Implementación
   ↓
Error / duda
   ↓
Corrección
   ↓
Aplicación en Multicine
   ↓
Documentación
```

La prioridad no será terminar rápidamente la aplicación, sino desarrollar la capacidad de construir funcionalidades desde cero comprendiendo por qué cada pieza existe.

## Estado actual

### Sprint 0 — Setup

* [x] Crear proyecto con Vite
* [x] Configurar React
* [x] Configurar TypeScript
* [x] Configurar Vite
* [x] Configurar Tailwind CSS
* [x] Configurar ESLint
* [x] Verificar instalación
* [x] Verificar `npm audit`
* [x] Verificar `npm run build`

### Próximo objetivo

Reforzar JavaScript, TypeScript y DOM mediante módulos pequeños antes de comenzar a construir funcionalidades complejas de Multicine.
