# Aurora Prime Design System

Design system criado para a Aurora Prime, uma plataforma imobiliaria premium ficticia voltada para apresentacao de propriedades, gestao de listings, agentes, leads e experiencia administrativa.

Este documento reune a linguagem visual, os tokens, os componentes e os padroes de interface definidos para manter consistencia entre telas publicas, formularios, dashboards e fluxos administrativos.

## Visao Geral

A proposta visual da Aurora Prime combina uma estetica editorial com uma interface funcional e discreta. O sistema foi pensado para transmitir sofisticação, clareza e confianca, sem depender de excesso de decoracao visual.

Principios principais:

- Clareza antes de ornamentacao
- Hierarquia visual forte
- Superficies claras e suaves
- Tipografia com alto contraste
- Poucas cores, bem aplicadas
- Componentes reutilizaveis
- Layouts com respiro e boa leitura
- Interface adequada para uso repetido no painel administrativo

## Identidade Visual

A Aurora Prime usa uma linguagem minimalista, editorial e premium.

Diretrizes:

- Fundos claros com tom levemente quente
- Texto principal em preto
- Textos secundarios em cinza neutro
- Divisores finos para organizar conteudo
- Acento dourado para foco, interacao e detalhes de marca
- Cards discretos, com bordas suaves e sombras leves
- Layouts amplos, com bastante espaco entre blocos

## Tipografia

Fonte principal:

```text
Inter
```

A tipografia foi definida para funcionar tanto em paginas editoriais quanto em interfaces administrativas.

Escala tipografica:

- Display XL: titulos principais, capas e secoes de alto impacto
- Heading LG: cabecalhos de paginas e secoes importantes
- Heading MD: titulos internos de cards, paineis e formularios
- Eyebrow: rotulos curtos em caixa alta
- Body: textos de apoio, descricoes e conteudo corrido
- Small: metadados, labels e informacoes auxiliares

Regras de uso:

- Titulos devem ter peso visual forte e boa respiracao
- Labels usam caixa alta para criar ritmo editorial
- Textos longos priorizam legibilidade
- O uso de letter spacing fica concentrado em labels e metadados

## Paleta de Cores

### Cores principais

| Nome | Valor | Uso |
| --- | --- | --- |
| Surface | `#f9f9f7` | Fundo principal da interface |
| Surface Raised | `#ffffff` | Cards, paineis e superficies elevadas |
| Surface Muted | `#f2f1ec` | Areas neutras e fundos secundarios |
| Text | `#000000` | Texto principal |
| Text Soft | `#5f5f5f` | Texto de apoio |
| Text Muted | `#888888` | Labels, metadados e descricoes |
| Accent | `#b79a60` | Foco, interacoes e detalhes premium |
| Danger | `#be123c` | Erros e acoes destrutivas |
| Success | `#047857` | Feedbacks positivos |

### Uso da cor

- Preto e off-white formam a base da interface
- Dourado deve ser usado com moderacao
- Verde e vermelho aparecem apenas em estados de feedback
- Cinzas organizam informacoes secundarias
- Gradientes devem ser discretos e usados apenas como apoio visual

## Espacamento, Bordas e Sombras

O sistema usa bordas e sombras leves para separar conteudos sem pesar a composicao.

Tokens principais:

| Token | Valor | Uso |
| --- | --- | --- |
| Radius Small | `4px` | Botoes e controles compactos |
| Radius Medium | `8px` | Cards, paineis e inputs |
| Radius Large | `14px` | Blocos maiores e composicoes especiais |
| Shadow Small | `0 10px 30px rgba(0,0,0,.045)` | Elevacao sutil |
| Shadow Medium | `0 18px 70px rgba(0,0,0,.06)` | Paineis de maior destaque |

Diretrizes:

- Evitar cantos excessivamente arredondados
- Preferir bordas finas para organizacao
- Usar sombras apenas quando houver necessidade real de profundidade
- Manter espacamento generoso entre secoes

## Componentes

### Button

Usado para acoes principais, secundarias e destrutivas.

Variantes:

- Primary: acao principal
- Secondary: acao alternativa ou navegacao
- Danger: exclusao ou acao irreversivel
- Disabled: estado indisponivel

Diretrizes:

- Botoes devem ter texto curto
- A hierarquia da acao deve ser clara
- Acoes destrutivas precisam de destaque visual proprio

### Field

Campo padronizado para inputs, selects e textareas.

Variantes:

- Editorial: campo com linha inferior, usado em paginas publicas
- Boxed: campo com borda completa, usado em formularios administrativos

Diretrizes:

- Labels sempre visiveis
- Estados de foco com acento dourado
- Inputs administrativos priorizam leitura rapida e preenchimento eficiente

### Alert

Componente para mensagens de sistema.

Variantes:

- Success
- Danger

Uso:

- Confirmacoes de envio
- Erros de formulario
- Falhas de comunicacao com servidor
- Mensagens administrativas

### Panel

Container base para cards, formularios, blocos de conteudo e secoes internas.

Diretrizes:

- Usar para agrupar informacoes relacionadas
- Evitar cards dentro de cards
- Manter conteudo objetivo e bem hierarquizado

### Page Header

Cabecalho padronizado para paginas internas.

Elementos:

- Eyebrow
- Titulo
- Descricao
- Acoes opcionais

Uso:

- Dashboard
- Listagens administrativas
- Paginas de documentacao
- Secoes principais do produto

### Section Title

Titulo compacto para blocos internos.

Uso:

- Formularios
- Cards detalhados
- Subsecao de dashboards
- Blocos de informacao

### Data Table

Tabela padronizada para dados administrativos.

Uso:

- Listagem de propriedades
- Leads
- Agentes
- Registros de sistema

Diretrizes:

- Cabecalho em caixa alta
- Linhas com divisores finos
- Hover discreto
- Conteudo alinhado para leitura rapida

### Status Pill

Indicador visual de status.

Exemplos:

- Active
- Inactive
- New
- Contacted
- Closed
- Sale
- Rent

Diretrizes:

- Deve ser curto e objetivo
- Usar cor apenas para reforcar significado
- Nao substituir texto explicativo quando o contexto exigir clareza

## Padroes de Interface

### Cards

Cards sao usados para representar propriedades, agentes, metricas e blocos de conteudo.

Boas praticas:

- Imagem ou icone no topo quando relevante
- Titulo claro
- Texto de apoio curto
- Acao visivel apenas quando necessaria
- Bordas e sombras suaves

### Banners

Banners aparecem em areas de destaque.

Boas praticas:

- Titulo forte
- Pouco texto
- Contraste alto
- Imagem ou bloco visual complementar
- Uma acao principal no maximo

### Formularios

Formularios seguem dois estilos:

- Publicos: mais editoriais, leves e espacados
- Administrativos: mais densos, objetivos e eficientes

Boas praticas:

- Labels persistentes
- Mensagens de erro claras
- Campos agrupados por contexto
- Botao principal no final do fluxo

### Dashboard

O dashboard prioriza leitura rapida e tomada de decisao.

Boas praticas:

- Metricas com destaque numerico
- Listas recentes com informacao essencial
- Pouco ruído visual
- Separacao por divisores e secoes

### Tabelas Administrativas

Tabelas devem ser objetivas e escaneaveis.

Boas praticas:

- Poucas colunas por tela
- Acoes agrupadas
- Status bem visivel
- Informacoes secundarias em cinza
- Espacamento suficiente para leitura

## Acessibilidade

Diretrizes consideradas:

- Alto contraste entre texto e fundo
- Estados de foco visiveis
- Labels associados aos campos
- Botoes com texto descritivo
- Uso de cor acompanhado por texto
- Hierarquia visual previsivel

## Tom de Interface

A comunicacao da interface deve ser:

- Clara
- Elegante
- Direta
- Profissional
- Sem excesso de informalidade
- Adequada a um produto premium

Exemplos de tom:

- "Create property"
- "Update agent"
- "Lead management"
- "Start a conversation"
- "Property overview"

## Aplicacoes do Sistema

Este design system foi pensado para sustentar:

- Site publico
- Paginas de propriedades
- Formularios de contato
- Login administrativo
- Dashboard
- CRUD de propriedades
- CRUD de agentes
- Inbox de leads
- Paginas de documentacao visual

## Objetivo

O objetivo principal e criar uma base visual consistente, escalavel e facil de manter.

Com o design system, novas telas podem ser criadas com mais velocidade, mantendo a mesma linguagem visual e reduzindo inconsistencias entre diferentes partes do produto.

## Licenca

Este design system foi desenvolvido para fins de estudo e portfolio. Todos os direitos reservados.
