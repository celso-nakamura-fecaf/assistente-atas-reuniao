# Como ligar os formulários a uma planilha do Google (sem criar conta em nada novo)

Isso usa só a sua conta Google: uma planilha recebe as respostas, sem
Formspree, sem backend, sem cadastro em serviço de terceiro.

## 1. Criar a planilha e o script

1. Crie uma planilha nova em https://sheets.google.com (pode chamar de
   "Validação — Assistente de Atas").
2. No menu, vá em **Extensões → Apps Script**.
3. Apague o conteúdo padrão (`function myFunction() {...}`) e cole o conteúdo
   do arquivo `apps-script/Code.gs` (está junto com os outros arquivos).
4. Salve o projeto (ícone de disquete ou Ctrl+S). Pode nomear como "Receber
   respostas".

## 2. Implantar como Web App

1. No editor do Apps Script, clique em **Implantar → Nova implantação**.
2. Em "Selecionar tipo", escolha **App da Web**.
3. Configure:
   - Executar como: **Eu** (sua conta)
   - Quem tem acesso: **Qualquer pessoa**
4. Clique em **Implantar**. O Google vai pedir autorização — autorize com sua
   própria conta (é normal aparecer um aviso de "app não verificado", porque é
   um script seu; pode continuar).
5. Copie a **URL do app da Web** que aparece (termina em `/exec`).

## 3. Colar a URL nos formulários

Abra `formulario-reuniao.html` e `formulario-feedback.html` e troque, nos dois,
a linha:

```js
var APPS_SCRIPT_URL = 'COLE_AQUI_A_URL_DO_APPS_SCRIPT';
```

pela URL que você copiou.

## 4. Testar antes de divulgar

1. Publique os arquivos no GitHub Pages (ver `SETUP.md`).
2. Abra o link, preencha o formulário 1 com um teste e confira se uma nova
   linha aparece na planilha, numa aba chamada "Reuniao".
3. Faça o mesmo com o formulário 2 — deve criar uma aba "Feedback".
4. Só depois disso comece a convidar os 5 participantes reais.

## Por que funciona sem mostrar erro de "CORS"

O formulário envia os dados com `fetch(..., { mode: 'no-cors' })`. Isso impede
o navegador de *ler* a resposta do Google (por isso não dá pra confirmar
sucesso na tela), mas o envio em si funciona — é o jeito mais simples de
mandar dados de um site estático (GitHub Pages) pra um Apps Script sem
precisar configurar nada extra no lado do Google.

## Onde ficam as respostas

Direto na planilha, em abas separadas por formulário. Pra apagar os dados
depois da entrega do trabalho, basta excluir as linhas (ou a planilha toda).
