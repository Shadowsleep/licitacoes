# Pesquisa de produto e conceito LicitaRadar

Pesquisa das páginas públicas em 24/11/2026. O nome LicitaRadar é provisório.

## Escopo e limites da engenharia reversa

Esta análise reconstrói a proposta de produto e os fluxos descritos publicamente. Não houve acesso autenticado, inspeção do código proprietário, contratação ou validação das integrações dos concorrentes. A existência de funcionalidades anunciadas não prova como foram implementadas internamente.

## O que as referências mostram

### ConLicitação

A [página de planos](https://conlicitacao.com.br/planos/) organiza a oferta em níveis e apresenta ferramentas de busca, boletins, gestão de licitações, documentos, análise e assessoria. O texto menciona assinatura semestral, anual ou bienal. A página apresenta quatro nomes de planos, embora a introdução diga três: não tratar esse texto como um contrato estável.

A página [Encontrar Licitações](https://conlicitacao.com.br/ferramentas/banco-de-dados/) descreve agregação de fontes, personalização por filtros e acompanhamento de processos. A oportunidade de produto é reduzir o trabalho de procurar editais em fontes dispersas.

### Effecti

A [plataforma](https://effecti.com.br/plataforma/) organiza a jornada em encontrar, cadastrar, disputar e monitorar. Anuncia busca por perfil, automação de propostas, robô de lances, monitoramento e análise de editais. A oferta segmenta iniciantes, profissionais, grandes contas e consultores; os valores dependem de proposta comercial.

O [aplicativo](https://effecti.com.br/aplicativo/) prioriza descoberta, favoritos, filtros, alertas e continuidade entre web e celular. Isso sugere uma divisão útil: acompanhamento rápido no mobile e operação mais detalhada na web.

## Decisões para o nosso conceito

- Priorizar descoberta por **tipo de fornecimento**, com categoria separada de modalidade jurídica. Limpeza é segmento; pregão é modalidade.
- Dar acesso rápido a localização, valor estimado, órgão, modalidade e abertura da sessão.
- Permitir buscar, favoritar e consultar detalhes antes de apresentar a assinatura.
- Usar a mesma linguagem visual na web e em telas pequenas; o conceito responsivo é uma base para validar os fluxos do futuro aplicativo.
- Separar recomendações de oportunidades reais: nesta versão todos os registros são fictícios e identificados como demonstração.
- Exibir planos próprios para validar a proposta de assinatura. Preços e limites propostos são hipóteses do conceito, não preços dos concorrentes.

## Identidade

Paleta extraída de `D:\Projects\marcelo\Marcelo ENS\styles.css`:

| Uso | Cor |
| --- | --- |
| Grafite principal | `#141414` |
| Grafite secundário | `#282930` |
| Dourado | `#e2ad22` |
| Dourado claro | `#f5d672` |
| Fundo claro | `#f7f5f0` |

Também foram preservadas as famílias Manrope e DM Sans, com fontes de sistema como alternativa. A interface e a marca provisória são originais.

## Evolução para produto

O próximo incremento deve substituir fixtures por uma API e uma rotina de ingestão de fontes oficiais, com rastreabilidade, deduplicação, atualização e normalização das categorias. A integração com o PNCP é uma possibilidade a validar tecnicamente; não está presente no protótipo.

A assinatura real exigirá autenticação, isolamento entre empresas, permissões por plano, gateway de pagamentos e processamento idempotente dos eventos de pagamento. Notificações precisarão de consentimento, preferências, filas e controle de entregas. Favoritos e configurações deverão sair do armazenamento local para sincronizar entre dispositivos.

Para o APK, avaliar aplicação dedicada ou empacotamento após validar os fluxos e requisitos de notificações e distribuição. Esta entrega não inclui APK, publicação em loja, pagamento real, monitoramento de pregões, IA ou envio automatizado de propostas.
