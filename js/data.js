// ВСЁ, ЧТО МЕНЯЕТСЯ: контакты, залы с ценами, список игр. Остальные файлы трогать не нужно.
const SITE={mall:'ТЦ «Титан»',address:'Минск, просп. Дзержинского, 104',addressNote:'ТЦ «Титан». Вход через арку: лестница справа, 1 этаж',hours:'Круглосуточно',
 phone:'+375 29 669-01-01',telegram:'CUTitan',instagram:'cyberunion.titan',
 ymaps:'https://yandex.by/maps/org/kiber_yunion_titan/102185667021/',ll:[27.480363,53.861915]};
// Залы. Цены p: h1 — 1 час, h3 — 3 часа, h5 — 5 часов, night — ночной пакет 22:00–08:00 (10 ч). Нет тарифа — просто не указывай
const HALLS=[
{id:'standard',n:'Зал Стандарт',tag:'Самые доступные цены',p:{h1:5,h5:17,night:20},img:'images/hall-standard.jpg'},
{id:'vip',n:'VIP зал',tag:'',p:{h1:6,h5:22,night:25},img:'images/hall-vip.jpg'},
{id:'supervip',n:'Super VIP',tag:'',p:{h1:7,h5:30,night:35},img:'images/hall-supervip.jpg'},
{id:'duo',n:'DUO Zone',tag:'Игра вдвоём',p:{h3:30,h5:40,night:45},img:'images/hall-duo.jpg'},
{id:'ps5',n:'PlayStation 5',tag:'Sony PlayStation 5',p:{h1:10,night:50},img:'images/hall-ps5.jpg'}];
// Игры: [id (= имя файла обложки в images/games), название, жанр]
const GAMES=[['cs2','Counter-Strike 2','Шутер'],['dota2','Dota 2','MOBA'],['valorant','Valorant','Шутер'],['fortnite','Fortnite','Battle Royale'],['apex','Apex Legends','Battle Royale'],
['pubg','PUBG: Battlegrounds','Battle Royale'],['r6','Rainbow Six Siege','Шутер'],['warzone','Warzone 2.0','Battle Royale'],['lol','League of Legends','MOBA'],['rust','Rust','Песочница'],
['gta5','GTA V','Открытый мир'],['hearthstone','Hearthstone','Карточная'],['wot','World of Tanks','Техника'],['warthunder','War Thunder','Техника'],['minecraft','Minecraft','Песочница']];
// Галерея на главной: [файл, подпись]. Новое фото — положи в images/ и добавь строку
const GALLERY=[['images/pcs.jpg','Игровые места'],['images/hall-standard.jpg','Зал Стандарт'],['images/hall-vip.jpg','VIP зал'],['images/hall-ps5.jpg','PlayStation 5'],['images/entrance.jpg','Вход в клуб'],['images/arch.jpg','Вывеска в арке']];
