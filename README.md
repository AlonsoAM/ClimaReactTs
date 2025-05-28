# 🌤️ Clima React TS

Una aplicación moderna para consultar el clima construida con React, TypeScript y Vite.

## ✨ Características

- 🔍 **Búsqueda de clima por ciudad**: Consulta las condiciones meteorológicas de cualquier ciudad
- 🌍 **Soporte multinacional**: Incluye países como Estados Unidos, México, Argentina, Colombia, Costa Rica, España y Perú
- ⚡ **Interfaz rápida y responsiva**: Construida con Vite para un desarrollo ágil
- 🎨 **CSS Modules**: Estilos modulares y mantenibles
- 📡 **APIs integradas**: Conexión con servicios meteorológicos externos
- 🔄 **Estados de carga**: Indicadores visuales de carga y manejo de errores
- 🎯 **TypeScript**: Código tipado para mayor seguridad y mantenibilidad

## 🚀 Tecnologías

<div align="center">

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white) ![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E) ![CSS Modules](https://img.shields.io/badge/CSS_Modules-000000?style=for-the-badge&logo=css3&logoColor=1572B6) ![Axios](https://img.shields.io/badge/Axios-671DDF?style=for-the-badge&logo=axios&logoColor=white) ![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)

</div>

- **⚛️ React 19.1.0** - Biblioteca de interfaz de usuario
- **📘 TypeScript 5.8.3** - Superset tipado de JavaScript
- **⚡ Vite 6.3.5** - Herramienta de construcción rápida
- **🌐 Axios 1.9.0** - Cliente HTTP para llamadas a APIs
- **✅ Valibot 1.1.0** & **🔒 Zod 3.25.30** - Validación de esquemas
- **🎨 CSS Modules** - Estilos modulares
- **🔍 ESLint** - Linting y calidad de código


## 📦 Instalación

1. Clona el repositorio:
`git clone https://github.com/AlonsoAM/ClimaReactTs.git`

2. Instala las dependencias:
`npm install`

3. Inicia el servidor de desarrollo:
`npm run dev`

4. Abre tu navegador en `http://localhost:5173`

## 🛠️ Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run lint` - Ejecuta el linter para revisar el código
- `npm run preview` - Previsualiza la construcción de producción

## 🏗️ Estructura del Proyecto
````
src/
├── components/     # Componentes reutilizables
│   ├── form/       # Formulario de búsqueda
│   ├── detail/     # Detalles del clima
│   ├── spinner/    # Indicador de carga
│   └── alert/      # Componente de alertas
├── data/           # Datos estáticos (países)
├── hooks/          # Custom hooks
├── types/          # Definiciones de tipos TypeScript
├── utils/          # Funciones utilitarias
├── App.tsx         # Componente principal
└── main.tsx        # Punto de entrada
````


## 🌐 Funcionalidades

### Búsqueda de Clima
- Formulario intuitivo para buscar por ciudad y país
- Validación de datos de entrada
- Manejo de estados de carga y errores

### Visualización de Datos
- Información detallada del clima actual
- Interfaz limpia y fácil de leer
- Responsive design para dispositivos móviles

## 🔧 Configuración de ESLint

El proyecto incluye una configuración robusta de ESLint con:
- Reglas recomendadas para TypeScript
- Plugins específicos para React
- Configuración para React Hooks

## 📱 Responsive Design

La aplicación está optimizada para funcionar en:
- 💻 Desktop
- 📱 Tablets
- 📱 Móviles

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -m 'Agrega nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la [Licencia MIT](LICENSE).

---

<div align="center">

**Desarrollado con ❤️ usando**

![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB) ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white) ![Vite](https://img.shields.io/badge/Vite-B73BFE?style=flat-square&logo=vite&logoColor=FFD62E)

</div>