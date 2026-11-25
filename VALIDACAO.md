# Validação do conceito

Verificações realizadas em 24/11/2026:

- `npm run check`: sintaxe de `app.js` e `server.mjs` aprovada.
- Revisão estática independente do frontend e servidor, com correção do tratamento de URL inválida, cálculo do indicador semanal e foco do menu mobile.
- Navegador desktop: pesquisa `higienizacao` retornou dois registros; pesquisa inexistente exibiu estado vazio; categoria Limpeza + DF + Dispensa eletrônica retornou um registro.
- Favorito salvo e mantido após recarga; detalhes abriram e fecharam em dialog.
- Alternância mensal/anual alterou o valor ilustrativo; escolha do plano foi salva localmente.
- Perfil de alerta criado, pausado e excluído no armazenamento local, sem envio.
- Calendário navegou entre novembro e dezembro de 2026.
- Viewport mobile 390 × 844: seis telas sem overflow horizontal; drawer com isolamento por `inert`, fechamento por Escape e restauração de foco confirmados.
- Servidor rejeitou caminhos privados com 404 e URL malformada com 400.
- Capturas `preview-desktop.png` e `preview-mobile.png` inspecionadas visualmente.

## Complemento com Playwright

Após a autorização do usuário, os testes foram repetidos com `locator.click`, `fill`, `selectOption` e teclado, sem disparar eventos DOM manualmente e sem forçar cliques. A aba conectada era reportada como oculta e continuou apresentando timeouts de estabilidade. Foi usada uma sessão isolada do Edge instalado, em modo headless, que executou os testes normalmente, sem instalar dependências ou alterar o perfil do usuário.

Fluxo completo aprovado em desktop 1440 × 1000 e mobile 390 × 844:

- Busca sem acentos, estado vazio, limpeza e combinação de categoria, UF e modalidade.
- Favorito mantido após recarga; detalhes abertos por clique e fechados com Escape.
- Alerta criado, pausado, mantido após recarga e excluído.
- Alternância mensal/anual; confirmação do plano e persistência após recarga.
- Navegação de novembro para dezembro e retorno no calendário.
- Menu mobile aberto por clique, isolamento do conteúdo, Escape e restauração de foco.
- Navegação mobile até os planos, sem overflow horizontal.
- Nenhum erro JavaScript não tratado durante o fluxo (`pageerror`).

Não foram necessárias alterações no código da aplicação nesta revalidação. Os dados de teste ficaram somente no contexto isolado, encerrado ao final.

Limites: estes testes exercitam o frontend de demonstração. Não há backend nem integrações reais para testar nesta entrega. O roteiro foi executado pelo conector Playwright; não foi adicionada uma suíte de testes com dependências ao projeto.

## Ampliação dos exemplos e tela de cadastro

A base passou de 12 para **24 exemplos fictícios**, quatro por segmento. A nova tela **Nova licitação** abre preenchida, permite editar e pré-visualizar e salva cadastros locais, incluindo-os nos contadores, busca, calendário e favoritos.

O roteiro reutilizável `qa/cadastro.playwright.js` foi executado pelo conector Playwright com Edge headless em contexto isolado: **25 verificações aprovadas**, sem erros JavaScript. Foram cobertos os seis segmentos, campos preenchidos, bloqueio de título vazio e valor negativo, prévia e fechamento por Escape, salvamento e busca, persistência após recarga, favoritos de cadastros locais e layout mobile.

Textos contendo marcação HTML foram usados no título e no órgão para verificar que lista e detalhes mostram texto sem criar imagens ou executar os scripts enviados. A revisão estática também conferiu validação dos registros recuperados do armazenamento.

`npm run check` e `node --check qa/cadastro.playwright.js` passaram. Capturas `preview-cadastro-desktop.png` e `preview-cadastro-mobile.png` foram inspecionadas visualmente. Nenhuma dependência foi instalada. Os dados do teste ficaram no contexto isolado, encerrado ao final.
