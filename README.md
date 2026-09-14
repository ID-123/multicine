# Multicine — Frontend MVP

MVP de práctica/portafolio construido con **React 19 + TypeScript + Vite + React Router + Tailwind CSS 4** siguiendo el product backlog entregado.

## Alcance del MVP

Se prioriza una primera versión ejecutable de las historias de infraestructura, ubicación, cartelera y detalle:

- HU-FE-001: arquitectura base, Router, cliente HTTP, variables de entorno, layouts, estados de error y 404.
- HU-FE-002: selección país/departamento/ciudad y persistencia en Local Storage.
- HU-FE-003: cartelera, búsqueda, fechas, horarios, formatos, skeleton, vacío y error.
- HU-FE-004: detalle de película, banner, póster, sinopsis, elenco y funciones.
- HU-FE-005: pantalla inicial de próximos estrenos como extensión visual del MVP.
- HU-FE-007: login demo + ruta privada para demostrar protección y persistencia de sesión.

El backlog especifica que las peticiones HTTP deben estar centralizadas en servicios y que ningún componente debe llamar directamente a la API. También exige estados de carga, error y contenido vacío, responsive, rutas privadas y pruebas para flujos críticos. fileciteturn0file0L19-L30

## Arquitectura

```text
src/
├── api/          # Cliente HTTP centralizado
├── assets/       # Fuentes y recursos
├── components/   # UI reutilizable
├── config/       # Variables de entorno
├── features/     # Reservado para crecer por dominio
├── hooks/        # Hooks genéricos reutilizables
├── layouts/      # Público y protegido
├── pages/        # Composición de pantallas
├── routes/       # Árbol de rutas
├── services/     # Acceso a datos/API por dominio
├── store/        # Estado global mínimo
├── styles/       # Sistema visual y tema
├── types/        # Contratos TypeScript
├── utils/        # Utilidades compartidas
├── validations/  # Reservado para validadores de formularios
└── tests/        # Reservado para suite de pruebas
```

Se mantiene una arquitectura intermedia: las capas existen porque representan responsabilidades distintas, pero no se crean carpetas adicionales para cada archivo pequeño.

## Alias y barrel imports

El alias `@/*` apunta a `src/*` en TypeScript y Vite. Los módulos principales exponen barrels (`index.ts`) para evitar rutas profundas y mantener imports limpios.

## Tema

Modo claro: combinación de `#119da4`, `#0c7489`, `#13505b`, `#040404`, `#d7d9ce`.

Modo oscuro: combinación de `#000000`, `#1d1d1d`, `#320100`, `#580000`, `#770000`.

La tipografía **TT Drugs Trial** entregada para el ejercicio está incluida en `src/assets/fonts/`.

## API

Por defecto el MVP usa datos mock para poder ejecutarse sin backend:

```env
VITE_API_URL=http://localhost:3000/api/v1
VITE_USE_MOCK_API=true
```

Para conectar el backend, copia `.env.example` a `.env` y cambia `VITE_USE_MOCK_API=false`.

Los endpoints definidos por el backlog usan una API versionada bajo `/api/v1`, con autenticación para rutas privadas y manejo uniforme de errores HTTP. fileciteturn0file0L1221-L1267

## Ejecutar

```bash
npm install
npm run dev
```

Validaciones disponibles con el package solicitado:

```bash
npm run build
npm run lint
```

> Nota: el `package.json` recibido no incluye Jest/React Testing Library, aunque el backlog los recomienda y define pruebas mínimas. Por eso este MVP deja `src/tests/` preparado, pero no inventa dependencias que no estaban en el package proporcionado. La suite de pruebas debe incorporarse cuando se decida el runner compatible. fileciteturn0file0L1294-L1304

## Próximos incrementos

1. Registro y autenticación real con refresh token.
2. TanStack Query para caché/sincronización cuando el backend esté conectado.
3. Compra: función → sillas → carrito → pago → entradas.
4. Administración y roles/permisos.
5. Tests de componentes, servicios, hooks y rutas protegidas.
6. Docker y CI.
