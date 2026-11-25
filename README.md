# LicitaRadar — conceito de produto

Frontend navegável para centralizar licitações por segmento, inspirado na análise funcional pública do ConLicitação e Effecti, com a paleta do projeto Marcelo ENS.

## Executar

Requer Node.js 18 ou superior. Não há dependências para instalar.

```powershell
npm run dev
```

Abra http://localhost:5173. Para outra porta: `$env:PORT=5174; npm run dev`.

Também é possível abrir `index.html` diretamente; use o servidor para comportamento consistente do armazenamento do navegador.

```powershell
npm run check
```

## Escopo

Layout responsivo para desktop e celular, pesquisa e filtros sobre dados fictícios, favoritos e configurações locais, detalhes de oportunidades e apresentação de assinatura demonstrativa. Os controles de assinatura não efetuam cobrança. Os dados salvos neste navegador não sincronizam entre dispositivos.

### Cadastro de licitação

Abra **Nova licitação** no menu para experimentar o formulário já preenchido com um exemplo fictício. Você pode alterar os campos, conferir a prévia e salvar a oportunidade de demonstração. O registro aparece nas buscas, categorias e agenda e permanece neste navegador após recarregar a página. **Restaurar exemplo** repõe os valores iniciais do formulário.

O cadastro não publica dados em portais oficiais. Limpar os dados do navegador também remove os registros locais.

Consulte [ANALISE-REFERENCIAS.md](ANALISE-REFERENCIAS.md) para fontes, decisões e próximos passos do produto. O frontend não inclui backend, ingestão de licitações reais, autenticação, entrega de notificações ou APK compilado.

## Organização

- `index.html`: estrutura da aplicação.
- `styles.css`: identidade, componentes e responsividade.
- `app.js`: fixtures, interações e persistência local.
- `server.mjs`: servidor local sem dependências, limitado aos arquivos públicos.

## GitHub Pages

Repositório: https://github.com/Shadowsleep/licitacoes

O workflow `.github/workflows/pages.yml` valida o JavaScript e empacota somente `index.html`, `styles.css`, `app.js` e `.nojekyll`. Documentação, testes e servidor local não entram no site publicado. Não é necessário instalar dependências ou executar o servidor Node na hospedagem.

Cada push na branch `main` valida, prepara o artefato e publica o frontend. Configure **Settings → Pages → Source: GitHub Actions**. Também é possível iniciar a publicação em **Actions → Validar e publicar no GitHub Pages → Run workflow**, na branch `main`.

O repositório foi autorizado como público pelo proprietário para habilitar o GitHub Pages. O workflow não altera a visibilidade nem contrata serviços.

O endereço esperado, após uma implantação bem-sucedida, é `https://shadowsleep.github.io/licitacoes/`. A existência desse endereço no README não confirma que o site esteja publicado. Favoritos e cadastros continuam locais a cada navegador.
