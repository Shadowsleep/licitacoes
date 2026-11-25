// Executar com browser_run_code_unsafe(filename: caminho absoluto deste arquivo).
// Usa Edge instalado e contexto isolado; requer servidor local na porta 5173.
async (page) => {
  const browser = await page.context().browser().browserType().launch({
    channel: 'msedge', headless: true
  });
  const results = [];
  const check = (name, actual, expected) => {
    if (actual !== expected) throw new Error(`${name}: ${actual} !== ${expected}`);
    results.push(name);
  };
  try {
    const p = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
    p.setDefaultTimeout(7000);
    const errors = [];
    p.on('pageerror', error => errors.push(error.message));
    await p.goto('http://localhost:5173', { waitUntil: 'domcontentloaded' });
    check('24 exemplos iniciais', await p.locator('#result-count').innerText(), '24');
    check('6 categorias', await p.locator('[data-category]').count(), 6);
    for (const category of ['cleaning', 'construction', 'health', 'technology', 'food', 'services']) {
      await p.locator(`[data-category="${category}"]`).click();
      check(`4 exemplos em ${category}`, await p.locator('#result-count').innerText(), '4');
      await p.locator(`[data-category="${category}"]`).click();
    }
    await p.locator('[data-view="new-tender"]').click();
    const form = p.locator('#tender-form');
    check('Título já preenchido', (await form.locator('[name="title"]').inputValue()).length > 0, true);
    check('Descrição já preenchida', (await form.locator('[name="description"]').inputValue()).length > 0, true);
    await form.locator('[name="title"]').fill('');
    await form.locator('button[type="submit"]').click();
    check('Campo obrigatório bloqueia salvamento', await form.locator('[name="title"]').evaluate(el => !el.validity.valid), true);
    await p.locator('#reset-tender').click();
    await form.locator('[name="value"]').fill('-1');
    await form.locator('button[type="submit"]').click();
    check('Valor negativo bloqueia salvamento', await form.locator('[name="value"]').evaluate(el => !el.validity.valid), true);
    await p.locator('#reset-tender').click();
    const title = 'Exemplo QA <img src=x onerror="window.__qaXss=1">';
    await form.locator('[name="title"]').fill(title);
    await form.locator('[name="agency"]').fill('Órgão fictício <svg onload="window.__qaXss=1">');
    await form.locator('[name="city"]').fill('Brasília');
    await form.locator('[name="uf"]').selectOption('DF');
    await form.locator('[name="category"]').selectOption('technology');
    await form.locator('[name="value"]').fill('123456.78');
    await form.locator('[name="date"]').fill('2026-12-15');
    await form.locator('[name="time"]').fill('10:30');
    await p.locator('#preview-tender').click();
    check('Prévia abre dialog', await p.locator('#modal').evaluate(el => el.open), true);
    check('Prévia não cria HTML do usuário', await p.locator('#modal img').count(), 0);
    await p.keyboard.press('Escape');
    check('Escape preserva formulário', await form.locator('[name="title"]').inputValue(), title);
    await form.locator('button[type="submit"]').click();
    if (await p.locator('#modal').evaluate(el => el.open)) await p.keyboard.press('Escape');
    await p.locator('[data-view="opportunities"]').click();
    await p.locator('#search').fill('Exemplo QA');
    check('Cadastro aparece na busca', await p.locator('#result-count').innerText(), '1');
    check('Título renderizado como texto', await p.locator('#results h3').innerText(), title);
    check('Sem imagem injetada na lista', await p.locator('#results img').count(), 0);
    await p.locator('#results [data-detail]').click();
    check('Sem HTML injetado nos detalhes', await p.locator('#modal img').count(), 0);
    check('Script de usuário não executado', await p.evaluate(() => window.__qaXss === undefined), true);
    await p.keyboard.press('Escape');
    await p.locator('#results [data-favorite]').click();
    await p.reload({ waitUntil: 'domcontentloaded' });
    check('Cadastro persiste após recarga', await p.locator('#result-count').innerText(), '25');
    await p.locator('[data-view="favorites"]').click();
    check('Favorito local persiste', await p.locator('#alternate-view .tender-card').count(), 1);
    await p.setViewportSize({ width: 390, height: 844 });
    await p.reload({ waitUntil: 'domcontentloaded' });
    await p.locator('#menu-toggle').click();
    await p.locator('[data-view="new-tender"]').click();
    check('Cadastro cabe no mobile', await p.evaluate(() => document.documentElement.scrollWidth <= innerWidth), true);
    check('Formulário visível no mobile', await form.isVisible(), true);
    check('Sem erros JavaScript', errors.length, 0);
    return { passed: results.length, checks: results };
  } finally {
    await browser.close();
  }
}
