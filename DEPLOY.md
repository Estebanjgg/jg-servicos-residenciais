# Deploy Instructions

## Configuración de GitHub Actions para Deploy Automático

Este proyecto está configurado para hacer deploy automático a GitHub Pages usando GitHub Actions.

### Pasos para configurar el deploy:

#### 1. Configurar Secrets en GitHub

Ve a tu repositorio en GitHub: `https://github.com/Estebanjgg/jg-servicos-residenciais`

1. Ve a **Settings** → **Secrets and variables** → **Actions**
2. Agrega los siguientes secrets:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=tu_service_id_aqui
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=tu_template_id_aqui
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=tu_public_key_aqui
```

#### 2. Configurar GitHub Pages

1. Ve a **Settings** → **Pages**
2. En **Source**, selecciona **GitHub Actions**
3. En **Custom domain**, ingresa: `jg-servicos-residenciais.lat`
4. Marca **Enforce HTTPS**

#### 3. Configurar DNS

En tu proveedor de DNS (donde compraste el dominio), configura:

```
Tipo: CNAME
Nombre: @
Valor: estebanjgg.github.io
```

O si tu proveedor no permite CNAME en el root:

```
Tipo: A
Nombre: @
Valor: 185.199.108.153

Tipo: A
Nombre: @
Valor: 185.199.109.153

Tipo: A
Nombre: @
Valor: 185.199.110.153

Tipo: A
Nombre: @
Valor: 185.199.111.153
```

#### 4. Deploy

Una vez configurado todo:

1. Haz push de estos cambios al repositorio
2. El workflow se ejecutará automáticamente
3. En unos minutos, tu sitio estará disponible en `https://jg-servicos-residenciais.lat`

### Archivos modificados:

- ✅ `.github/workflows/deploy.yml` - Workflow de GitHub Actions
- ✅ `next.config.ts` - Configuración para exportación estática
- ✅ Este archivo de instrucciones

### Notas importantes:

- El deploy se ejecuta automáticamente en cada push a la rama `main`
- Los archivos estáticos se generan en la carpeta `out/`
- El dominio personalizado se configura automáticamente con el archivo CNAME
- Asegúrate de que todos los secrets estén configurados correctamente