# Etapa 1: Construcción
FROM node:20 AS builder

WORKDIR /app

# Copiar dependencias
COPY package.json package-lock.json* ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código fuente
COPY . .

# Construir la app con Vite
RUN npm run build

# Etapa 2: Servidor web
FROM nginx:stable-alpine

# Eliminar configuración por defecto de nginx
RUN rm -rf /usr/share/nginx/html/*

# Copiar archivos construidos a la carpeta pública de nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Copiar configuración de nginx (opcional)
# COPY nginx.conf /etc/nginx/nginx.conf

# Exponer puerto por defecto de nginx
EXPOSE 80

# Comando por defecto
CMD ["nginx", "-g", "daemon off;"]
