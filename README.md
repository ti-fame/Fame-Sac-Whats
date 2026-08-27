# Redirecionador SAC WhatsApp — FAME

Site estático para distribuir atendimentos do SAC da FAME entre 3 números de WhatsApp. Mobile-first, inspirado no visual de [fame.com.br](https://www.fame.com.br).

## Como funciona

Cada clique no botão **"Iniciar conversa no WhatsApp"** redireciona para um número diferente, em rotação (round-robin):

1. Primeiro acesso → WhatsApp 1  
2. Segundo acesso → WhatsApp 2  
3. Terceiro acesso → WhatsApp 3  
4. Quarto acesso → WhatsApp 1 (e assim por diante)

A rotação é controlada via `localStorage` do navegador, garantindo alternância entre os números a cada clique.

## Configurar os números

Edite o arquivo `js/config.js` e substitua pelos números reais:

```javascript
whatsappNumbers: [
  '5511999990001',  // DDD + número (com código 55)
  '5511999990002',
  '5511999990003',
],
```

**Formato:** código do país (55) + DDD + número, **sem** espaços, parênteses ou hífens.

Exemplo: `(11) 98765-4321` → `5511987654321`

## Deploy na Netlify

1. Acesse [netlify.com](https://www.netlify.com) e faça login
2. Clique em **"Add new site" → "Import an existing project"**
3. Conecte este repositório (ou faça upload da pasta)
4. Configurações de build (já configuradas no `netlify.toml`):
   - **Publish directory:** `.` (raiz)
   - **Build command:** *(deixe em branco)*
5. Clique em **Deploy**

### Variáveis de ambiente (opcional — função serverless)

| Variável | Exemplo |
|---|---|
| `WHATSAPP_NUMBERS` | `5511999990001,5511999990002,5511999990003` |
| `WHATSAPP_MESSAGE` | `Olá! Gostaria de falar com o SAC da FAME.` |

## Deploy na Vercel

1. Acesse [vercel.com](https://vercel.com) e faça login
2. Clique em **"Add New Project"**
3. Importe este repositório
4. Framework preset: **Other**
5. Root directory: `.`
6. Clique em **Deploy**

### Variáveis de ambiente (opcional)

Mesmas variáveis da Netlify, em **Settings → Environment Variables**.

## URLs úteis

| URL | Descrição |
|---|---|
| `/` | Página principal com botão de WhatsApp |
| `/go/` | Redirecionamento direto (ideal para QR Code) |
| `/api/whatsapp` | Redirecionamento via serverless (Netlify/Vercel) |

## Testar localmente

Abra o arquivo `index.html` no navegador ou use um servidor local:

```bash
npx serve .
```

Acesse `http://localhost:3000` e teste o botão.

## Estrutura

```
├── index.html          # Página principal
├── go/index.html       # Redirecionamento direto
├── css/style.css       # Estilos responsivos
├── js/
│   ├── config.js       # Números de WhatsApp (EDITAR AQUI)
│   └── app.js          # Scripts da página
├── api/whatsapp.js     # Função serverless (Vercel)
├── netlify/
│   └── functions/      # Função serverless (Netlify)
├── netlify.toml
└── vercel.json
```
