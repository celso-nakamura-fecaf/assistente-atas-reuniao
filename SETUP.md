# Como colocar isso no ar

## 0. Preencher o aviso de privacidade (LGPD)

Abra `formulario-reuniao.html` e `formulario-feedback.html` e troque:
- `[SEU NOME/CONTATO AQUI]` — quem está coletando os dados (você).
- `[SEU E-MAIL/CONTATO AQUI]` — um contato real pra quem quiser pedir exclusão dos dados.

Isso cobre o básico que a LGPD pede: deixar claro quem coleta, pra quê, por quanto
tempo os dados ficam guardados e como pedir exclusão. Depois que entregar o
trabalho, apague as respostas recebidas na planilha.

## 1. Ligar os formulários a uma planilha do Google

Veja o `APPS_SCRIPT.md` — usa só a sua conta Google (Planilhas + Apps Script),
sem criar conta em nenhum serviço de terceiro.

## 2. Publicar no GitHub Pages

1. Suba esta pasta (`landing/`) pro seu repositório.
2. No repositório, vá em **Settings → Pages**.
3. Em "Source", selecione a branch (geralmente `main`) e a pasta onde estão
   estes arquivos (raiz, ou `/landing` se você mantiver a subpasta).
4. Salve — em alguns minutos o GitHub mostra o link público, algo como
   `https://seu-usuario.github.io/seu-repo/`.

## 3. Testar antes de divulgar

Abra o link, preencha o formulário 1 com um teste e confira se aparece uma
linha nova na planilha (aba "Reuniao"). Só depois disso comece a convidar
os 5 participantes reais.

## Arquivos

- `index.html` — página inicial explicando a proposta
- `formulario-reuniao.html` — formulário 1 (relato da reunião)
- `formulario-feedback.html` — formulário 2 (feedback, enviado junto com a ata)
- `obrigado-reuniao.html` / `obrigado-feedback.html` — páginas de confirmação
- `assets/style.css` — estilo visual, compartilhado por todas as páginas
- `apps-script/Code.gs` — script que recebe os envios e grava na planilha
- `APPS_SCRIPT.md` — passo a passo pra ligar tudo à planilha
