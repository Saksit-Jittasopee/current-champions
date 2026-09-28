import { fallbackChampions } from '../data/fallbackChampions';

const WIKI_API_BASE = 'https://en.wikipedia.org/w/api.php';
const CACHE_PREFIX = 'wiki_champs_v2_';

const PROMOTION_PAGES = {
  wwe: 'List_of_current_champions_in_WWE',
  nxt: 'List_of_current_champions_in_WWE',
  aew: 'List_of_current_champions_in_All_Elite_Wrestling',
  tna: 'List_of_current_champions_in_TNA_Wrestling',
  njpw: 'List_of_current_champions_in_New_Japan_Pro-Wrestling'
};

function isBrowserStorageAvailable() {
  try {
    return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
  } catch {
    return false;
  }
}

function cleanHtmlText(html) {
  if (!html) return '';
  return html
    .replace(/<sup[^>]*>[\s\S]*?<\/sup>/gi, '')
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/&#91;/g, '[')
    .replace(/&#93;/g, ']')
    .replace(/&ndash;/g, '–')
    .replace(/&mdash;/g, '—')
    .replace(/\s+/g, ' ')
    .trim();
}

function extractImage(tdHtml) {
  if (!tdHtml) return '';
  const srcsetMatch = tdHtml.match(/srcset="([^"]+)"/i);
  if (srcsetMatch) {
    const parts = srcsetMatch[1].split(',').map((s) => s.trim().split(' '));
    const higherRes = parts.find((p) => p[1] === '2x' || p[1] === '1.5x');
    if (higherRes && higherRes[0]) {
      let url = higherRes[0];
      if (url.startsWith('//')) url = 'https:' + url;
      return url.replace(/&amp;/g, '&');
    }
  }

  const srcMatch = tdHtml.match(/src="([^"]+)"/i);
  if (srcMatch) {
    let url = srcMatch[1];
    if (url.startsWith('//')) url = 'https:' + url;
    return url.replace(/&amp;/g, '&');
  }
  return '';
}

function extractLinks(cellHtml) {
  if (!cellHtml) return [];
  const links = [];
  const matches = [...cellHtml.matchAll(/<a\s+(?:[^>]*?\s+)?href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/gi)];
  for (const m of matches) {
    const href = m[1];
    const text = cleanHtmlText(m[2]);
    if (!href.startsWith('#') && !href.includes('action=edit') && text) {
      links.push({
        name: text,
        url: href.startsWith('http') ? href : `https://en.wikipedia.org${href}`
      });
    }
  }
  return links;
}

export function calculateDaysHeld(dateString, fallbackDays) {
  if (!dateString) return fallbackDays || '';
  const cleanDate = dateString.replace(/^.*\(([^)]+)\).*$/, '$1');
  const parsed =
    Date.parse(cleanDate.replace(/([0-9]+)\/([a-zA-Z]+)\/([0-9]+)/, '$2 $1, $3')) ||
    Date.parse(cleanDate) ||
    Date.parse(dateString);
  if (!isNaN(parsed)) {
    const diffTime = Math.max(0, Date.now() - parsed);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    return `${diffDays}+ Days`;
  }
  return fallbackDays ? `${fallbackDays.replace(/\+/g, '').trim()}+ Days` : '';
}

function parseWikipediaTables(html, promotion) {
  const tableMatches = [...html.matchAll(/<table[^>]*class="[^"]*wikitable[^"]*"[^>]*>([\s\S]*?)<\/table>/gi)];
  const allChamps = [];

  for (let i = 0; i < tableMatches.length; i++) {
    const tableHtml = tableMatches[i][1];
    const headerMatch = tableHtml.match(/<th[^>]*colspan="[^"]*"[^>]*>([\s\S]*?)<\/th>/i);
    const headerTitle = headerMatch ? cleanHtmlText(headerMatch[1]) : '';

    const trs = [...tableHtml.matchAll(/<tr[^>]*>([\s\S]*?)<\/tr>/gi)];
    if (trs.length < 2) continue;

    let colMap = null;
    for (const tr of trs) {
      const rowHtml = tr[1];
      const ths = [...rowHtml.matchAll(/<th([^>]*)>([\s\S]*?)<\/th>/gi)];
      if (ths.length > 2 && !colMap) {
        const cols = [];
        for (const th of ths) {
          const attr = th[1];
          const raw = cleanHtmlText(th[2]).toLowerCase();
          const colspanMatch = attr.match(/colspan="?(\d+)"?/i);
          const colspan = colspanMatch ? parseInt(colspanMatch[1], 10) : 1;

          if (raw.includes('champion') && colspan === 2) {
            cols.push('photo', 'champion');
          } else if (raw.includes('championship')) {
            cols.push('championship');
          } else if (raw.includes('reign')) {
            cols.push('reign');
          } else if (raw.includes('date')) {
            cols.push('date');
          } else if (raw.includes('day')) {
            cols.push('days');
          } else if (raw.includes('defense')) {
            cols.push('defenses');
          } else if (raw.includes('location')) {
            cols.push('location');
          } else if (raw.includes('notes')) {
            cols.push('notes');
          } else {
            for (let c = 0; c < colspan; c++) cols.push(raw || `col_${cols.length}`);
          }
        }
        colMap = cols;
      }
    }

    if (!colMap) continue;

    for (const tr of trs) {
      const tds = [...tr[1].matchAll(/<td([^>]*)>([\s\S]*?)<\/td>/gi)];
      if (tds.length === 0) continue;

      const rowData = {};
      for (let c = 0; c < tds.length && c < colMap.length; c++) {
        rowData[colMap[c]] = tds[c][2];
      }

      const championship = cleanHtmlText(rowData['championship']);
      if (!championship || championship === '†' || championship === 'Championship') continue;

      const champCell = rowData['champion'] || '';
      const photoCell = rowData['photo'] || '';
      const imgUrl = extractImage(photoCell) || extractImage(champCell);
      const champName = cleanHtmlText(champCell);
      const champLinks = extractLinks(champCell);
      let reign = cleanHtmlText(rowData['reign']);
      let dateWon = cleanHtmlText(rowData['date']);
      let daysHeld = cleanHtmlText(rowData['days']);
      let location = cleanHtmlText(rowData['location']);
      let notes = cleanHtmlText(rowData['notes']);

      if (!dateWon || !/\d{4}/.test(dateWon)) {
        for (const td of tds) {
          const t = cleanHtmlText(td[2]);
          if (/(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*\s+\d{1,2},\s+\d{4}/i.test(t)) {
            dateWon = t;
            break;
          }
        }
      }

      if (!notes) {
        for (const td of tds) {
          const t = cleanHtmlText(td[2]);
          if (/^(?:Defeated|Pinned|Won|Lastly)/i.test(t)) {
            notes = t;
            break;
          }
        }
      }

      let cardClass = 'card-default';
      const lowTitle = championship.toLowerCase();
      const lowHeader = headerTitle.toLowerCase();

      if (promotion === 'wwe') {
        if (
          lowHeader.includes('smackdown') ||
          lowTitle.includes('smackdown') ||
          lowTitle.includes('united states') ||
          lowTitle.includes('undisputed')
        ) {
          cardClass = 'card-smackdown';
        } else if (lowHeader.includes('open') || lowTitle.includes("women's tag team")) {
          cardClass = 'card-open';
        } else {
          cardClass = 'card-raw';
        }
      } else if (promotion === 'nxt') {
        if (lowTitle.includes('women')) {
          cardClass = 'card-nxtwomen';
        } else {
          cardClass = 'card-nxtmen';
        }
      } else if (promotion === 'aew') {
        if (lowTitle.includes('women') || lowTitle.includes('tbs')) {
          cardClass = 'card-aewwomen';
        } else {
          cardClass = 'card-aewmen';
        }
      } else if (promotion === 'tna') {
        if (lowTitle.includes('knockout') || lowTitle.includes('women')) {
          cardClass = 'card-tnawomen';
        } else {
          cardClass = 'card-tnamen';
        }
      } else if (promotion === 'njpw') {
        if (lowTitle.includes('strong') || lowTitle.includes('tamashii')) {
          cardClass = 'card-njpwstrong';
        } else if (lowTitle.includes('junior')) {
          cardClass = 'card-njpwjrmen';
        } else if (lowTitle.includes('women')) {
          cardClass = 'card-njpwwomen';
        } else {
          cardClass = 'card-njpwmen';
        }
      }

      const calculatedDays = calculateDaysHeld(dateWon, daysHeld);

      allChamps.push({
        id: `${promotion}-${championship.toLowerCase().replace(/[^a-z0-9]/g, '-')}`,
        title: championship,
        champName: champName || 'Vacant',
        champLinks,
        imageUrl: imgUrl,
        reign: reign || '1',
        dateWon: dateWon || 'N/A',
        daysHeld: calculatedDays,
        location,
        notes: notes || `Current ${championship} holder.`,
        section: headerTitle,
        cardClass
      });
    }
  }

  return allChamps;
}

function filterChampsByPromotion(promotion, allChamps) {
  if (promotion === 'wwe') {
    return allChamps.filter((c) => {
      const s = c.section.toLowerCase();
      const t = c.title.toLowerCase();
      const isDevelopmental = s.includes('nxt') || s.includes('evolve') || s.includes('id') || t.includes('nxt');
      return !isDevelopmental;
    });
  }

  if (promotion === 'nxt') {
    return allChamps.filter((c) => {
      const s = c.section.toLowerCase();
      const t = c.title.toLowerCase();
      return s.includes('nxt') || t.includes('nxt') || t.includes('speed') || t.includes('heritage');
    });
  }

  return allChamps;
}

export function getInitialChampions(promotion) {
  const cacheKey = `${CACHE_PREFIX}${promotion}`;
  if (isBrowserStorageAvailable()) {
    try {
      const cached = localStorage.getItem(cacheKey);
      if (cached) {
        const { data, timestamp, revid } = JSON.parse(cached);
        if (Array.isArray(data) && data.length > 0) {
          const liveDays = data.map((item) => ({
            ...item,
            daysHeld: calculateDaysHeld(item.dateWon, item.daysHeld)
          }));
          return { data: liveDays, source: 'cache', timestamp, revid };
        }
      }
    } catch {
      // Ignore
    }
  }

  const baseline = (fallbackChampions[promotion] || []).map((item) => ({
    ...item,
    daysHeld: calculateDaysHeld(item.dateWon, item.daysHeld)
  }));
  return { data: baseline, source: 'fallback', timestamp: Date.now() };
}

export async function fetchLiveWikipediaChampions(promotion) {
  const page = PROMOTION_PAGES[promotion];
  if (!page) {
    return getInitialChampions(promotion);
  }

  const cacheKey = `${CACHE_PREFIX}${promotion}`;
  const now = Date.now();

  const url = `${WIKI_API_BASE}?action=parse&page=${encodeURIComponent(
    page
  )}&prop=text|revid&format=json&origin=*&smaxage=0&maxage=0&_t=${now}`;

  const res = await fetch(url, { cache: 'no-cache' });
  if (!res.ok) throw new Error(`Wikipedia API error: ${res.statusText}`);
  const json = await res.json();
  if (!json.parse || !json.parse.text) throw new Error('Invalid Wikipedia parse response');

  const html = json.parse.text['*'];
  const revid = json.parse.revid;
  const parsed = parseWikipediaTables(html, promotion);
  const filtered = filterChampsByPromotion(promotion, parsed);

  if (filtered.length === 0) {
    throw new Error('No champions parsed from Wikipedia response');
  }

  if (isBrowserStorageAvailable()) {
    try {
      localStorage.setItem(cacheKey, JSON.stringify({ data: filtered, timestamp: now, revid }));
    } catch {
      // Ignore
    }
  }

  return { data: filtered, source: 'wikipedia', timestamp: now, revid };
}

export async function getChampions(promotion, forceRefresh = false) {
  if (forceRefresh) {
    return fetchLiveWikipediaChampions(promotion);
  }

  try {
    return await fetchLiveWikipediaChampions(promotion);
  } catch (err) {
    console.warn(`[WikipediaService] Live fetch failed for ${promotion}, using cached/fallback:`, err);
    const initial = getInitialChampions(promotion);
    return { ...initial, error: err.message };
  }
}
