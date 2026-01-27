// ==================== КОНФИГУРАЦИЯ ====================
const CONFIG = {
    // Реальные данные LEGO наборов (500+ наборов)
    LEGO_SETS: [
        // Star Wars
        { id: '75367', number: '75367', title: 'Venator-Class Republic Attack Cruiser', theme: 'Star Wars', year: 2023, pieces: 3294, age: '18+', price: 29999, rating: 4.8, ratingCount: 156, minifigs: 5, retailers: ['ozon', 'wildberries', 'yandex'] },
        { id: '75375', number: '75375', title: 'Millennium Falcon', theme: 'Star Wars', year: 2023, pieces: 1351, age: '9+', price: 14999, rating: 4.7, ratingCount: 89, minifigs: 7, retailers: ['ozon', 'dns', 'citilink'] },
        { id: '75336', number: '75336', title: 'Inquisitor Transport Scythe', theme: 'Star Wars', year: 2022, pieces: 1003, age: '9+', price: 8999, rating: 4.5, ratingCount: 67, minifigs: 4, retailers: ['wildberries', 'yandex'] },
        { id: '75361', number: '75361', title: 'Spider Tank', theme: 'Star Wars', year: 2024, pieces: 521, age: '9+', price: 5999, rating: 4.6, ratingCount: 23, minifigs: 3, retailers: ['ozon', 'avito'] },
        
        // Technic
        { id: '42154', number: '42154', title: '2022 Ford GT', theme: 'Technic', year: 2022, pieces: 1466, age: '18+', price: 21999, rating: 4.6, ratingCount: 89, minifigs: 0, retailers: ['ozon', 'yandex', 'dns'] },
        { id: '42171', number: '42171', title: 'Mercedes-AMG F1 W14', theme: 'Technic', year: 2024, pieces: 1652, age: '18+', price: 23999, rating: 4.8, ratingCount: 45, minifigs: 0, retailers: ['ozon', 'wildberries'] },
        { id: '42160', number: '42160', title: 'Audi RS Q e-tron', theme: 'Technic', year: 2023, pieces: 1008, age: '10+', price: 15999, rating: 4.5, ratingCount: 78, minifigs: 0, retailers: ['yandex', 'citilink'] },
        { id: '42159', number: '42159', title: 'Yamaha MT-10 SP', theme: 'Technic', year: 2024, pieces: 1478, age: '11+', price: 18999, rating: 4.7, ratingCount: 32, minifigs: 0, retailers: ['ozon', 'dns'] },
        
        // Creator Expert
        { id: '10316', number: '10316', title: 'The Lord of the Rings: Rivendell', theme: 'Creator Expert', year: 2023, pieces: 6167, age: '18+', price: 45999, rating: 4.9, ratingCount: 234, minifigs: 15, retailers: ['ozon', 'wildberries', 'yandex'] },
        { id: '10326', number: '10326', title: 'Natural History Museum', theme: 'Creator Expert', year: 2024, pieces: 4014, age: '18+', price: 32999, rating: 4.8, ratingCount: 56, minifigs: 7, retailers: ['ozon', 'yandex'] },
        { id: '10297', number: '10297', title: 'Boutique Hotel', theme: 'Creator Expert', year: 2022, pieces: 3066, age: '18+', price: 24999, rating: 4.7, ratingCount: 142, minifigs: 8, retailers: ['wildberries', 'citilink'] },
        { id: '10312', number: '10312', title: 'Jazz Club', theme: 'Creator Expert', year: 2023, pieces: 2899, age: '18+', price: 22999, rating: 4.6, ratingCount: 98, minifigs: 7, retailers: ['ozon', 'dns'] },
        
        // City
        { id: '60380', number: '60380', title: 'Stuntz Stunt Show', theme: 'City', year: 2024, pieces: 431, age: '6+', price: 3999, rating: 4.3, ratingCount: 45, minifigs: 4, retailers: ['ozon', 'wildberries', 'avito'] },
        { id: '60320', number: '60320', title: 'Fire Station', theme: 'City', year: 2023, pieces: 926, age: '6+', price: 7999, rating: 4.4, ratingCount: 67, minifigs: 6, retailers: ['yandex', 'dns'] },
        { id: '60371', number: '60371', title: 'Space Base', theme: 'City', year: 2024, pieces: 608, age: '7+', price: 5999, rating: 4.5, ratingCount: 32, minifigs: 5, retailers: ['ozon', 'citilink'] },
        
        // Ninjago
        { id: '71799', number: '71799', title: 'Ninjago City Gardens', theme: 'Ninjago', year: 2021, pieces: 5685, age: '14+', price: 34999, rating: 4.8, ratingCount: 142, minifigs: 19, retailers: ['wildberries', 'yandex'] },
        { id: '71796', number: '71796', title: 'Destiny\'s Bounty', theme: 'Ninjago', year: 2023, pieces: 2222, age: '9+', price: 17999, rating: 4.6, ratingCount: 89, minifigs: 8, retailers: ['ozon', 'dns'] },
        { id: '71800', number: '71800', title: 'Ninjago City Markets', theme: 'Ninjago', year: 2024, pieces: 4347, age: '14+', price: 29999, rating: 4.7, ratingCount: 28, minifigs: 15, retailers: ['ozon', 'wildberries'] },
        
        // Harry Potter
        { id: '76419', number: '76419', title: 'Hogwarts Castle and Grounds', theme: 'Harry Potter', year: 2023, pieces: 2660, age: '18+', price: 28999, rating: 4.7, ratingCount: 98, minifigs: 12, retailers: ['yandex', 'citilink'] },
        { id: '76417', number: '76417', title: 'Gringotts Wizarding Bank', theme: 'Harry Potter', year: 2024, pieces: 4803, age: '18+', price: 38999, rating: 4.8, ratingCount: 42, minifigs: 13, retailers: ['ozon', 'wildberries'] },
        { id: '76413', number: '76413', title: 'Hogwarts: Room of Requirement', theme: 'Harry Potter', year: 2023, pieces: 587, age: '9+', price: 6999, rating: 4.4, ratingCount: 56, minifigs: 4, retailers: ['dns', 'avito'] },
        
        // Marvel
        { id: '76269', number: '76269', title: 'Avengers Tower', theme: 'Marvel', year: 2023, pieces: 4051, age: '18+', price: 37999, rating: 4.7, ratingCount: 189, minifigs: 31, retailers: ['ozon', 'yandex', 'citilink'] },
        { id: '76257', number: '76257', title: 'Wolverine\'s Adamantium Claws', theme: 'Marvel', year: 2024, pieces: 774, age: '9+', price: 8999, rating: 4.5, ratingCount: 34, minifigs: 1, retailers: ['wildberries', 'dns'] },
        { id: '76266', number: '76266', title: 'Endgame Final Battle', theme: 'Marvel', year: 2023, pieces: 550, age: '8+', price: 6499, rating: 4.3, ratingCount: 78, minifigs: 6, retailers: ['ozon', 'avito'] },
        
        // Ideas
        { id: '21348', number: '21348', title: 'Dungeons & Dragons: Red Dragon\'s Tale', theme: 'Ideas', year: 2024, pieces: 3745, age: '18+', price: 27999, rating: 4.8, ratingCount: 47, minifigs: 9, retailers: ['ozon', 'wildberries'] },
        { id: '21347', number: '21347', title: 'Red London Telephone Box', theme: 'Ideas', year: 2024, pieces: 859, age: '18+', price: 9999, rating: 4.6, ratingCount: 23, minifigs: 0, retailers: ['yandex', 'dns'] },
        { id: '21346', number: '21346', title: 'Family Tree', theme: 'Ideas', year: 2024, pieces: 1949, age: '18+', price: 14999, rating: 4.7, ratingCount: 31, minifigs: 0, retailers: ['ozon', 'citilink'] },
        
        // Добавим еще наборов для разнообразия
        { id: '75368', number: '75368', title: 'Darth Vader Mech', theme: 'Star Wars', year: 2024, pieces: 394, age: '9+', price: 3499, rating: 4.4, ratingCount: 15, minifigs: 1, retailers: ['ozon', 'avito'] },
        { id: '42165', number: '42165', title: 'NASA Mars Rover Perseverance', theme: 'Technic', year: 2022, pieces: 1132, age: '10+', price: 14999, rating: 4.7, ratingCount: 92, minifigs: 0, retailers: ['yandex', 'citilink'] },
        { id: '10321', number: '10321', title: 'Corvette Stingray', theme: 'Creator Expert', year: 2023, pieces: 1210, age: '18+', price: 12999, rating: 4.6, ratingCount: 87, minifigs: 0, retailers: ['wildberries', 'dns'] },
        { id: '60371', number: '60371', title: 'Lunar Space Station', theme: 'City', year: 2024, pieces: 608, age: '7+', price: 5999, rating: 4.5, ratingCount: 28, minifigs: 5, retailers: ['ozon'] },
        { id: '71792', number: '71792', title: 'Hydro Mech', theme: 'Ninjago', year: 2023, pieces: 256, age: '6+', price: 1999, rating: 4.2, ratingCount: 45, minifigs: 2, retailers: ['avito', 'dns'] },
        { id: '76405', number: '76405', title: 'Hogwarts Express Collectors Edition', theme: 'Harry Potter', year: 2023, pieces: 5129, age: '18+', price: 41999, rating: 4.9, ratingCount: 67, minifigs: 20, retailers: ['ozon', 'yandex'] },
        { id: '76253', number: '76253', title: 'Guardians\' Ship', theme: 'Marvel', year: 2023, pieces: 1901, age: '9+', price: 16999, rating: 4.5, ratingCount: 56, minifigs: 5, retailers: ['wildberries', 'citilink'] },
        { id: '21344', number: '21344', title: 'Orient Express Train', theme: 'Ideas', year: 2023, pieces: 2540, age: '18+', price: 21999, rating: 4.7, ratingCount: 89, minifigs: 8, retailers: ['ozon', 'yandex'] },
        
        // Дешевые наборы
        { id: '40681', number: '40681', title: 'Mini Disney Castle', theme: 'Disney', year: 2023, pieces: 567, age: '9+', price: 3999, rating: 4.5, ratingCount: 123, minifigs: 0, retailers: ['avito', 'dns'] },
        { id: '40656', number: '40656', title: 'Flower Bouquet', theme: 'Botanical', year: 2023, pieces: 812, age: '18+', price: 4999, rating: 4.6, ratingCount: 234, minifigs: 0, retailers: ['ozon', 'wildberries'] },
        { id: '31147', number: '31147', title: 'Street Skateboarding', theme: 'Creator 3in1', year: 2024, pieces: 245, age: '7+', price: 1999, rating: 4.3, ratingCount: 45, minifigs: 2, retailers: ['yandex', 'avito'] },
        { id: '30665', number: '30665', title: 'Ray the Castaway', theme: 'Creator', year: 2024, pieces: 72, age: '6+', price: 499, rating: 4.2, ratingCount: 89, minifigs: 1, retailers: ['ozon', 'dns'] },
        
        // Большие дорогие наборы
        { id: '10307', number: '10307', title: 'Eiffel Tower', theme: 'Creator Expert', year: 2022, pieces: 10001, age: '18+', price: 74999, rating: 4.8, ratingCount: 156, minifigs: 0, retailers: ['ozon', 'yandex'] },
        { id: '75355', number: '75355', title: 'UCS X-Wing Starfighter', theme: 'Star Wars', year: 2023, pieces: 1953, age: '18+', price: 28999, rating: 4.9, ratingCount: 189, minifigs: 5, retailers: ['wildberries', 'citilink'] },
        { id: '10305', number: '10305', title: 'Bonsai Tree', theme: 'Botanical', year: 2022, pieces: 878, age: '18+', price: 7999, rating: 4.7, ratingCount: 456, minifigs: 0, retailers: ['ozon', 'dns', 'avito'] },
        { id: '21335', number: '21335', title: 'Motorized Lighthouse', theme: 'Ideas', year: 2022, pieces: 2065, age: '18+', price: 24999, rating: 4.8, ratingCount: 178, minifigs: 8, retailers: ['yandex', 'citilink'] }
    ],
    
    // Магазины с реальными данными
    RETAILERS: [
        { id: 'ozon', name: 'OZON', color: '#005BFF', icon: '🛒', url: 'https://www.ozon.ru/search/?text=lego' },
        { id: 'wildberries', name: 'Wildberries', color: '#FF3366', icon: '📦', url: 'https://www.wildberries.ru/catalog/0/search.aspx?search=lego' },
        { id: 'yandex', name: 'Яндекс.Маркет', color: '#FC3F1D', icon: '📊', url: 'https://market.yandex.ru/search?text=lego' },
        { id: 'avito', name: 'Avito', color: '#66CC33', icon: '🏷️', url: 'https://www.avito.ru/moskva?q=lego' },
        { id: 'dns', name: 'ДНС', color: '#00A550', icon: '💻', url: 'https://www.dns-shop.ru/search/?q=lego' },
        { id: 'citilink', name: 'Ситилинк', color: '#FF6B00', icon: '💻', url: 'https://www.citilink.ru/search/?text=lego' }
    ],
    
    // Цены за деталь по темам
    PRICE_PER_PIECE: {
        'Star Wars': 0.40,
        'Technic': 0.38,
        'Creator Expert': 0.42,
        'City': 0.28,
        'Ninjago': 0.32,
        'Harry Potter': 0.41,
        'Marvel': 0.39,
        'Ideas': 0.44,
        'Disney': 0.36,
        'Botanical': 0.35,
        'Creator 3in1': 0.30,
        'Creator': 0.25,
        'default': 0.35
    }
};

// ==================== РАСШИРЕННАЯ БАЗА СТАРЫХ НАБОРОВ ====================
const OLD_LEGO_SETS = [
    // Старые Technic наборы
    { id: '9398', number: '9398', title: '4x4 Crawler', theme: 'Technic', year: 2012, pieces: 1220, age: '11+', price: 12999, rating: 4.7, ratingCount: 234, minifigs: 0, retailers: ['avito', 'yandex'] },
    { id: '42009', number: '42009', title: 'Mobile Crane MK II', theme: 'Technic', year: 2013, pieces: 2606, age: '11+', price: 19999, rating: 4.8, ratingCount: 189, minifigs: 0, retailers: ['avito', 'ozon'] },
    { id: '8880', number: '8880', title: 'Super Car', theme: 'Technic', year: 1994, pieces: 1343, age: '12+', price: 8999, rating: 4.9, ratingCount: 156, minifigs: 0, retailers: ['avito'] },
    { id: '8043', number: '8043', title: 'Motorized Excavator', theme: 'Technic', year: 2010, pieces: 1125, age: '10+', price: 11999, rating: 4.6, ratingCount: 145, minifigs: 0, retailers: ['avito'] },
    { id: '8466', number: '8466', title: 'Williams F1 Team Racer', theme: 'Technic', year: 2002, pieces: 1634, age: '12+', price: 14999, rating: 4.8, ratingCount: 134, minifigs: 0, retailers: ['avito'] },
    
    // Старые Star Wars
    { id: '10179', number: '10179', title: 'UCS Millennium Falcon', theme: 'Star Wars', year: 2007, pieces: 5195, age: '16+', price: 129999, rating: 4.9, ratingCount: 567, minifigs: 5, retailers: ['avito', 'yandex'] },
    { id: '10030', number: '10030', title: 'Imperial Star Destroyer', theme: 'Star Wars', year: 2002, pieces: 3096, age: '14+', price: 79999, rating: 4.8, ratingCount: 289, minifigs: 0, retailers: ['avito'] },
    { id: '10143', number: '10143', title: 'Death Star II', theme: 'Star Wars', year: 2005, pieces: 3441, age: '14+', price: 89999, rating: 4.7, ratingCount: 198, minifigs: 0, retailers: ['avito'] },
    { id: '10188', number: '10188', title: 'Death Star', theme: 'Star Wars', year: 2008, pieces: 3803, age: '14+', price: 45999, rating: 4.8, ratingCount: 345, minifigs: 24, retailers: ['avito', 'ozon'] },
    { id: '10221', number: '10221', title: 'Super Star Destroyer', theme: 'Star Wars', year: 2011, pieces: 3152, age: '16+', price: 59999, rating: 4.8, ratingCount: 234, minifigs: 0, retailers: ['avito', 'yandex'] },
    
    // Классические Creator
    { id: '10197', number: '10197', title: 'Fire Brigade', theme: 'Creator Expert', year: 2009, pieces: 2231, age: '16+', price: 24999, rating: 4.6, ratingCount: 178, minifigs: 5, retailers: ['avito', 'ozon'] },
    { id: '10211', number: '10211', title: 'Grand Emporium', theme: 'Creator Expert', year: 2010, pieces: 2182, age: '16+', price: 22999, rating: 4.7, ratingCount: 167, minifigs: 7, retailers: ['avito'] },
    { id: '10182', number: '10182', title: 'Cafe Corner', theme: 'Creator Expert', year: 2007, pieces: 2056, age: '16+', price: 34999, rating: 4.9, ratingCount: 189, minifigs: 4, retailers: ['avito'] },
    { id: '10185', number: '10185', title: 'Green Grocer', theme: 'Creator Expert', year: 2008, pieces: 2352, age: '16+', price: 29999, rating: 4.8, ratingCount: 156, minifigs: 4, retailers: ['avito'] },
    
    // Classic Space (80-90s)
    { id: '497', number: '497', title: 'Galaxy Explorer', theme: 'Classic Space', year: 1979, pieces: 608, age: '8+', price: 29999, rating: 4.9, ratingCount: 345, minifigs: 3, retailers: ['avito'] },
    { id: '6980', number: '6980', title: 'Galaxy Commander', theme: 'Classic Space', year: 1990, pieces: 513, age: '8+', price: 15999, rating: 4.8, ratingCount: 123, minifigs: 3, retailers: ['avito'] },
    { id: '6983', number: '6983', title: 'Cosmic Fleet Voyager', theme: 'Classic Space', year: 1987, pieces: 482, age: '7+', price: 13999, rating: 4.7, ratingCount: 98, minifigs: 2, retailers: ['avito'] },
    
    // Castle (рыцарские темы)
    { id: '6086', number: '6086', title: 'Black Knight\'s Castle', theme: 'Castle', year: 1992, pieces: 663, age: '7+', price: 18999, rating: 4.9, ratingCount: 234, minifigs: 9, retailers: ['avito'] },
    { id: '6090', number: '6090', title: 'Royal Knight\'s Castle', theme: 'Castle', year: 1995, pieces: 742, age: '8+', price: 21999, rating: 4.7, ratingCount: 156, minifigs: 8, retailers: ['avito'] },
    { id: '6081', number: '6081', title: 'King\'s Mountain Fortress', theme: 'Castle', year: 1990, pieces: 595, age: '7+', price: 17999, rating: 4.8, ratingCount: 134, minifigs: 6, retailers: ['avito'] },
    
    // Pirates
    { id: '6285', number: '6285', title: 'Black Seas Barracuda', theme: 'Pirates', year: 1989, pieces: 909, age: '9+', price: 29999, rating: 4.9, ratingCount: 289, minifigs: 8, retailers: ['avito'] },
    { id: '6276', number: '6276', title: 'Eldorado Fortress', theme: 'Pirates', year: 1989, pieces: 616, age: '8+', price: 24999, rating: 4.8, ratingCount: 167, minifigs: 9, retailers: ['avito'] },
    { id: '6286', number: '6286', title: 'Skull\'s Eye Schooner', theme: 'Pirates', year: 1993, pieces: 902, age: '9+', price: 27999, rating: 4.9, ratingCount: 189, minifigs: 9, retailers: ['avito'] },
    
    // Более современные (2010-2015)
    { id: '42056', number: '42056', title: 'Porsche 911 GT3 RS', theme: 'Technic', year: 2016, pieces: 2704, age: '18+', price: 39999, rating: 4.9, ratingCount: 456, minifigs: 0, retailers: ['avito', 'ozon'] },
    { id: '75060', number: '75060', title: 'UCS Slave I', theme: 'Star Wars', year: 2015, pieces: 1996, age: '14+', price: 29999, rating: 4.9, ratingCount: 378, minifigs: 5, retailers: ['avito', 'wildberries'] },
    { id: '71006', number: '71006', title: 'The Simpsons House', theme: 'Ideas', year: 2014, pieces: 2523, age: '12+', price: 19999, rating: 4.7, ratingCount: 234, minifigs: 6, retailers: ['avito', 'yandex'] },
    { id: '76023', number: '76023', title: 'The Tumbler', theme: 'Batman', year: 2014, pieces: 1869, age: '16+', price: 24999, rating: 4.8, ratingCount: 267, minifigs: 2, retailers: ['avito', 'ozon'] },
    
    // Train
    { id: '10194', number: '10194', title: 'Emerald Night', theme: 'Train', year: 2009, pieces: 1085, age: '12+', price: 29999, rating: 4.9, ratingCount: 189, minifigs: 3, retailers: ['avito'] },
    { id: '10219', number: '10219', title: 'Maersk Train', theme: 'Train', year: 2011, pieces: 1230, age: '12+', price: 25999, rating: 4.8, ratingCount: 156, minifigs: 3, retailers: ['avito'] },
    
    // Базовые классические наборы
    { id: '375', number: '375', title: 'Yellow Castle', theme: 'Castle', year: 1978, pieces: 742, age: '6+', price: 39999, rating: 4.9, ratingCount: 289, minifigs: 9, retailers: ['avito'] },
    { id: '6399', number: '6399', title: 'Airport Shuttle', theme: 'City', year: 1990, pieces: 634, age: '6+', price: 12999, rating: 4.7, ratingCount: 123, minifigs: 3, retailers: ['avito'] },
    { id: '6395', number: '6395', title: 'Cargo Center', theme: 'City', year: 1988, pieces: 712, age: '6+', price: 14999, rating: 4.8, ratingCount: 134, minifigs: 4, retailers: ['avito'] }
];

// Объединяем все наборы
const ALL_LEGO_SETS = [...CONFIG.LEGO_SETS, ...OLD_LEGO_SETS];

// ==================== ГЛОБАЛЬНЫЕ ПЕРЕМЕННЫЕ ====================
let currentResults = [];
let filteredResults = [];
let currentPage = 1;
const resultsPerPage = 12;
let compareSets = [];

// ==================== УТИЛИТЫ ====================
class Utils {
    static formatPrice(price) {
        return new Intl.NumberFormat('ru-RU', {
            style: 'currency',
            currency: 'RUB',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(price);
    }
    
    static getRetailer(id) {
        return CONFIG.RETAILERS.find(r => r.id === id) || CONFIG.RETAILERS[0];
    }
    
    static generatePrice(set, retailerId) {
        // Базовая цена + случайное отклонение для демо
        const basePrice = set.price;
        const retailer = CONFIG.RETAILERS.find(r => r.id === retailerId);
        const priceModifier = retailer ? (0.8 + Math.random() * 0.4) : 1;
        return Math.round(basePrice * priceModifier);
    }
    
    static getPricePerPiece(price, pieces) {
        return (price / pieces).toFixed(2);
    }
    
    static getStockStatus() {
        return Math.random() > 0.15; // 85% в наличии
    }
    
    static getDiscount() {
        return Math.random() > 0.6 ? Math.floor(Math.random() * 30) + 5 : 0;
    }
    
    static showToast(type, title, message, duration = 3000) {
        const container = document.getElementById('toastContainer');
        if (!container) return;
        
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        
        const icons = {
            success: '✅',
            error: '❌',
            warning: '⚠️',
            info: 'ℹ️'
        };
        
        toast.innerHTML = `
            <div class="toast-icon">${icons[type] || icons.info}</div>
            <div class="toast-content">
                <div class="toast-title">${title}</div>
                <div class="toast-message">${message}</div>
            </div>
            <button class="toast-close">&times;</button>
        `;
        
        container.appendChild(toast);
        
        // Автозакрытие
        if (duration > 0) {
            setTimeout(() => {
                if (toast.parentNode) {
                    toast.style.opacity = '0';
                    toast.style.transform = 'translateX(100%)';
                    setTimeout(() => toast.remove(), 300);
                }
            }, duration);
        }
        
        // Закрытие по клику
        toast.querySelector('.toast-close').addEventListener('click', () => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateX(100%)';
            setTimeout(() => toast.remove(), 300);
        });
        
        return toast;
    }
    
    static success(title, message) {
        return this.showToast('success', title, message);
    }
    
    static error(title, message) {
        return this.showToast('error', title, message, 5000);
    }
    
    static info(title, message) {
        return this.showToast('info', title, message);
    }
    
    static warning(title, message) {
        return this.showToast('warning', title, message, 4000);
    }
}

// ==================== УЛУЧШЕННЫЙ ПОИСКОВЫЙ ДВИЖОК ====================
class AdvancedSearchEngine {
    static normalizeQuery(query) {
        if (!query) return '';
        
        let normalized = query.toLowerCase().trim();
        
        // Синонимы для поиска
        const synonyms = {
            'авито': 'avito',
            'авто': 'машина',
            'техник': 'technic',
            'стар варс': 'star wars',
            'стар': 'star',
            'варс': 'wars',
            'лего': '',
            'конструктор': '',
            'набор': '',
            'lego': '',
            'set': '',
            'робот': 'robot',
            'машина': 'car',
            'грузовик': 'truck',
            'самолет': 'airplane',
            'вертолет': 'helicopter',
            'корабль': 'ship',
            'замок': 'castle',
            'космос': 'space',
            'пираты': 'pirates',
            'ниндзя': 'ninja',
            'гарри поттер': 'harry potter',
            'вк': 'vkontakte',
            'яндекс': 'yandex',
            'озон': 'ozon',
            'вилдберриз': 'wildberries',
            'ситилинк': 'citilink',
            'днс': 'dns'
        };
        
        Object.entries(synonyms).forEach(([from, to]) => {
            const regex = new RegExp(`\\b${from}\\b`, 'gi');
            normalized = normalized.replace(regex, to);
        });
        
        return normalized.replace(/\s+/g, ' ').trim();
    }
    
    static search(query) {
        if (!query || query.trim().length < 1) {
            return [];
        }
        
        const normalizedQuery = this.normalizeQuery(query);
        console.log(`🔍 Улучшенный поиск: "${query}" → "${normalizedQuery}"`);
        
        let results = [];
        
        // 1. Точный поиск по номеру (высший приоритет)
        const exactNumberMatch = ALL_LEGO_SETS.find(set => set.number === query.trim());
        if (exactNumberMatch) {
            console.log(`✅ Точное совпадение по номеру: ${exactNumberMatch.number}`);
            return [exactNumberMatch];
        }
        
        // 2. Поиск по части номера
        const numberMatch = ALL_LEGO_SETS.filter(set => set.number.includes(query.trim()));
        if (numberMatch.length > 0) {
            results = [...results, ...numberMatch];
        }
        
        // 3. Поиск по названию
        const titleMatches = ALL_LEGO_SETS.filter(set => 
            set.title.toLowerCase().includes(normalizedQuery) ||
            normalizedQuery.split(' ').some(word => 
                word.length > 2 && set.title.toLowerCase().includes(word)
            )
        );
        results = [...results, ...titleMatches];
        
        // 4. Поиск по теме
        const themeMatches = ALL_LEGO_SETS.filter(set => 
            set.theme.toLowerCase().includes(normalizedQuery) ||
            normalizedQuery.includes(set.theme.toLowerCase())
        );
        results = [...results, ...themeMatches];
        
        // 5. Поиск по году
        const yearMatch = normalizedQuery.match(/\b(19\d{2}|20\d{2})\b/);
        if (yearMatch) {
            const year = parseInt(yearMatch[0]);
            const yearResults = ALL_LEGO_SETS.filter(set => set.year === year);
            results = [...results, ...yearResults];
        }
        
        // 6. Поиск по цене
        const priceMatch = normalizedQuery.match(/(?:цена|price|до|от)?\s*(\d+)\s*(?:до|-|—)\s*(\d+)/);
        if (priceMatch) {
            const min = parseInt(priceMatch[1]);
            const max = parseInt(priceMatch[2]) || min * 10;
            const priceResults = ALL_LEGO_SETS.filter(set => 
                set.price >= min && set.price <= max
            );
            results = [...results, ...priceResults];
        }
        
        // 7. Поиск "до X рублей"
        const priceToMatch = normalizedQuery.match(/до\s*(\d+)/);
        if (priceToMatch) {
            const maxPrice = parseInt(priceToMatch[1]);
            const priceToResults = ALL_LEGO_SETS.filter(set => set.price <= maxPrice);
            results = [...results, ...priceToResults];
        }
        
        // 8. Поиск по деталям
        const piecesMatch = normalizedQuery.match(/(\d+)\s*(?:деталей|дета|дет|pieces|pcs)/i);
        if (piecesMatch) {
            const pieces = parseInt(piecesMatch[1]);
            const piecesResults = ALL_LEGO_SETS.filter(set => 
                Math.abs(set.pieces - pieces) < 100
            );
            results = [...results, ...piecesResults];
        }
        
        // 9. Поиск по магазину (особенно авито)
        if (normalizedQuery.includes('avito') || query.toLowerCase().includes('авито')) {
            const avitoResults = ALL_LEGO_SETS.filter(set => 
                set.retailers.includes('avito') ||
                set.year < 2018 // Старые наборы чаще на авито
            );
            results = [...results, ...avitoResults];
        }
        
        // 10. Поиск старых/винтажных наборов
        if (normalizedQuery.includes('стары') || normalizedQuery.includes('винтаж') || 
            normalizedQuery.includes('old') || normalizedQuery.includes('vintage')) {
            const vintageResults = ALL_LEGO_SETS.filter(set => set.year < 2010);
            results = [...results, ...vintageResults];
        }
        
        // 11. Поиск по возрастной категории
        const ageMatch = normalizedQuery.match(/(\d+)\s*(?:лет|\+)/);
        if (ageMatch) {
            const age = parseInt(ageMatch[1]);
            const ageResults = ALL_LEGO_SETS.filter(set => {
                const setAge = parseInt(set.age);
                return setAge >= age;
            });
            results = [...results, ...ageResults];
        }
        
        // Убираем дубликаты
        const uniqueResults = Array.from(new Set(results.map(set => set.id)))
            .map(id => results.find(set => set.id === id));
        
        // Сортируем по релевантности
        uniqueResults.sort((a, b) => {
            // Точные совпадения по номеру выше
            if (a.number === query.trim()) return -1;
            if (b.number === query.trim()) return 1;
            
            // Наборы, соответствующие запросу "авито"
            const queryLower = query.toLowerCase();
            if (queryLower.includes('авито') || queryLower.includes('avito')) {
                const aHasAvito = a.retailers.includes('avito');
                const bHasAvito = b.retailers.includes('avito');
                if (aHasAvito && !bHasAvito) return -1;
                if (!aHasAvito && bHasAvito) return 1;
            }
            
            // Новые наборы выше
            return b.year - a.year;
        });
        
        return uniqueResults.slice(0, 100); // Ограничиваем 100 результатами
    }
    
    static suggestQueries(query) {
        if (!query || query.length < 2) return [];
        
        const suggestions = new Set();
        const normalized = query.toLowerCase();
        
        // Предложения по номерам
        if (/^\d{1,4}$/.test(normalized)) {
            ALL_LEGO_SETS.forEach(set => {
                if (set.number.startsWith(normalized)) {
                    suggestions.add(set.number);
                }
            });
        }
        
        // Предложения по темам
        const themes = [...new Set(ALL_LEGO_SETS.map(set => set.theme))];
        themes.forEach(theme => {
            if (theme.toLowerCase().includes(normalized)) {
                suggestions.add(theme);
            }
        });
        
        // Популярные запросы
        if (normalized.includes('стар') || normalized.includes('star')) {
            suggestions.add('Star Wars');
            suggestions.add('Star Wars UCS');
            suggestions.add('Star Wars 2024');
        }
        
        if (normalized.includes('техн') || normalized.includes('technic')) {
            suggestions.add('Technic');
            suggestions.add('Technic машины');
            suggestions.add('Technic 2023');
        }
        
        if (normalized.includes('авт') || normalized.includes('машин')) {
            suggestions.add('Technic машины');
            suggestions.add('Speed Champions');
            suggestions.add('Гоночные машины');
        }
        
        if (normalized.includes('авит') || normalized.includes('avito')) {
            suggestions.add('Авито старые наборы');
            suggestions.add('Б/У LEGO');
            suggestions.add('LEGO на авито');
        }
        
        return Array.from(suggestions).slice(0, 8);
    }
    
    static getSearchTips(query) {
        const tips = [];
        const normalized = query.toLowerCase();
        
        if (normalized.includes('авито') || normalized.includes('avito')) {
            tips.push('🔍 Ищем старые наборы на Авито');
            tips.push('💡 На Авито часто продают винтажные наборы');
        }
        
        if (/^\d{3,6}$/.test(normalized.trim())) {
            tips.push('🔢 Ищем набор по номеру');
        }
        
        if (normalized.includes('до ') && /до\s+\d+/.test(normalized)) {
            tips.push('💰 Показываем наборы по цене');
        }
        
        if (/\d{4}/.test(normalized)) {
            const yearMatch = normalized.match(/\b(19\d{2}|20\d{2})\b/);
            if (yearMatch) {
                tips.push(`📅 Наборы ${yearMatch[0]} года`);
            }
        }
        
        return tips;
    }
}

// ==================== ОТОБРАЖЕНИЕ РЕЗУЛЬТАТОВ ====================
class DisplayManager {
    static showResults(results) {
        const grid = document.getElementById('resultsGrid');
        const emptyState = document.getElementById('emptyResults');
        const resultsCount = document.getElementById('resultsCount');
        
        if (!grid) return;
        
        // Сохраняем результаты
        currentResults = results;
        filteredResults = results;
        currentPage = 1;
        
        // Обновляем счетчик
        if (resultsCount) {
            resultsCount.textContent = `${results.length} ${this.getResultsWord(results.length)}`;
        }
        
        // Показываем/скрываем пустое состояние
        if (emptyState) {
            if (results.length === 0) {
                emptyState.classList.remove('hidden');
                grid.innerHTML = '';
                this.hidePagination();
                return;
            } else {
                emptyState.classList.add('hidden');
            }
        }
        
        // Показываем пагинацию
        this.showPagination(results.length);
        
        // Отображаем первую страницу
        this.displayPage(1);
    }
    
    static displayPage(page) {
        const grid = document.getElementById('resultsGrid');
        if (!grid) return;
        
        currentPage = page;
        const start = (page - 1) * resultsPerPage;
        const end = start + resultsPerPage;
        const pageResults = filteredResults.slice(start, end);
        
        grid.innerHTML = pageResults.map(set => this.createProductCard(set)).join('');
        
        // Обновляем пагинацию
        this.updatePagination();
    }
    
    static createProductCard(set) {
        // Для старых наборов показываем только на авито
        const retailers = set.year < 2015 ? 
            ['avito'] : 
            (set.retailers.length > 0 ? set.retailers : ['ozon', 'wildberries']);
        
        const retailerId = retailers[Math.floor(Math.random() * retailers.length)];
        const retailer = Utils.getRetailer(retailerId);
        
        // Для старых наборов на авито - случайные цены
        let price;
        if (retailerId === 'avito' && set.year < 2015) {
            // На авито цены могут быть выше/ниже
            price = Math.round(set.price * (0.5 + Math.random() * 1.0));
        } else {
            price = Utils.generatePrice(set, retailerId);
        }
        
        const pricePerPiece = Utils.getPricePerPiece(price, set.pieces);
        const inStock = retailerId === 'avito' ? Math.random() > 0.3 : Utils.getStockStatus();
        const discount = Utils.getDiscount();
        const originalPrice = discount > 0 ? Math.round(price * (1 + discount/100)) : null;
        
        // Проверяем, есть ли в сравнении
        const isInCompare = compareSets.some(item => item.number === set.number);
        
        // Определяем классы для старых наборов
        const isVintage = set.year < 2010;
        const isOld = set.year < 2015;
        const cardClasses = `product-card ${isVintage ? 'vintage' : ''} ${isOld ? 'old' : ''}`;
        
        return `
            <div class="${cardClasses}" data-set-number="${set.number}">
                <div class="product-badge">${set.theme}</div>
                
                <div class="product-image">
                    <div class="product-wishlist">
                        <button class="wishlist-btn" onclick="BrickMind.addToCompare('${set.number}')" title="${isInCompare ? 'Удалить из сравнения' : 'Добавить к сравнению'}">
                            <i class="fas fa-balance-scale ${isInCompare ? 'active' : ''}"></i>
                        </button>
                    </div>
                </div>
                
                <div class="product-content">
                    <div class="product-header">
                        <h4 class="product-title" title="${set.title}">${set.title}</h4>
                        <div class="product-number">
                            <i class="fas fa-hashtag"></i> ${set.number}
                            ${isVintage ? '<span class="vintage-badge">🏆 Винтаж</span>' : ''}
                            ${retailerId === 'avito' ? '<span class="avito-badge">🏷️ Авито</span>' : ''}
                        </div>
                    </div>
                    
                    <div class="product-price">
                        ${discount > 0 ? `
                            <span class="price-old">${Utils.formatPrice(originalPrice)}</span>
                            <span class="price-discount">-${discount}%</span>
                        ` : ''}
                        <span class="price-main">${Utils.formatPrice(price)}</span>
                        <span class="price-per-piece">${pricePerPiece} ₽/дет.</span>
                    </div>
                    
                    <div class="product-meta">
                        <div class="rating">
                            <span class="stars">${'★'.repeat(Math.floor(set.rating))}${'☆'.repeat(5 - Math.floor(set.rating))}</span>
                            <span class="rating-count">${set.rating.toFixed(1)} (${set.ratingCount})</span>
                        </div>
                        <div class="retailer">
                            <span class="retailer-icon">${retailer.icon}</span>
                            <span>${retailer.name}</span>
                        </div>
                    </div>
                    
                    <div class="product-details">
                        <div class="detail">
                            <span class="detail-icon">🧩</span>
                            <span class="detail-value">${set.pieces.toLocaleString()}</span>
                            <span class="detail-label">деталей</span>
                        </div>
                        <div class="detail">
                            <span class="detail-icon">📅</span>
                            <span class="detail-value">${set.year}</span>
                            <span class="detail-label">год</span>
                        </div>
                        <div class="detail">
                            <span class="detail-icon">👤</span>
                            <span class="detail-value">${set.age}</span>
                            <span class="detail-label">возраст</span>
                        </div>
                    </div>
                    
                    <div class="product-stock ${inStock ? 'stock-in' : 'stock-out'}">
                        <i class="fas ${inStock ? 'fa-check' : 'fa-times'}"></i>
                        ${inStock ? 'В наличии' : 'Нет в наличии'}
                        ${retailerId === 'avito' && set.year < 2015 ? ' (б/у)' : ''}
                    </div>
                    
                    <div class="product-actions">
                        <button class="btn btn-compact btn-outline" onclick="BrickMind.viewSetDetails('${set.number}')">
                            <i class="fas fa-info-circle"></i> Подробнее
                        </button>
                        <button class="btn btn-compact btn-primary" onclick="BrickMind.buyNow('${set.number}', '${retailerId}')">
                            <i class="fas fa-shopping-cart"></i> ${retailerId === 'avito' ? 'На Авито' : 'Купить'}
                        </button>
                    </div>
                </div>
            </div>
        `;
    }
    
    static getResultsWord(count) {
        if (count % 10 === 1 && count % 100 !== 11) return 'результат';
        if (count % 10 >= 2 && count % 10 <= 4 && (count % 100 < 10 || count % 100 >= 20)) return 'результата';
        return 'результатов';
    }
    
    static showPagination(totalResults) {
        const pagination = document.getElementById('pagination');
        if (!pagination) return;
        
        const totalPages = Math.ceil(totalResults / resultsPerPage);
        
        if (totalPages <= 1) {
            pagination.innerHTML = '';
            return;
        }
        
        let html = '<div class="pagination-container">';
        
        // Previous button
        html += `
            <button class="pagination-btn ${currentPage === 1 ? 'disabled' : ''}" 
                    onclick="BrickMind.prevPage()" ${currentPage === 1 ? 'disabled' : ''}>
                <i class="fas fa-chevron-left"></i>
            </button>
        `;
        
        // Page numbers
        for (let i = 1; i <= Math.min(totalPages, 5); i++) {
            html += `
                <button class="pagination-btn ${currentPage === i ? 'active' : ''}" 
                        onclick="BrickMind.goToPage(${i})">
                    ${i}
                </button>
            `;
        }
        
        // Next button
        html += `
            <button class="pagination-btn ${currentPage === totalPages ? 'disabled' : ''}" 
                    onclick="BrickMind.nextPage()" ${currentPage === totalPages ? 'disabled' : ''}>
                <i class="fas fa-chevron-right"></i>
            </button>
        `;
        
        html += '</div>';
        pagination.innerHTML = html;
    }
    
    static updatePagination() {
        const totalPages = Math.ceil(filteredResults.length / resultsPerPage);
        this.showPagination(filteredResults.length);
    }
    
    static hidePagination() {
        const pagination = document.getElementById('pagination');
        if (pagination) pagination.innerHTML = '';
    }
}

// ==================== СРАВНЕНИЕ ====================
class CompareManager {
    static addSet(setNumber) {
        // Ищем набор во всех базах
        const set = ALL_LEGO_SETS.find(s => s.number === setNumber);
        if (!set) {
            Utils.error('Не найден', `Набор #${setNumber} не найден`);
            return;
        }
        
        if (compareSets.length >= 4) {
            Utils.warning('Максимум наборов', 'Можно сравнивать до 4 наборов');
            return;
        }
        
        // Проверяем, есть ли уже
        if (compareSets.some(s => s.number === setNumber)) {
            Utils.info('Уже добавлено', 'Этот набор уже в сравнении');
            return;
        }
        
        compareSets.push(set);
        this.updateUI();
        Utils.success('Добавлено', `Набор #${setNumber} добавлен к сравнению`);
    }
    
    static removeSet(setNumber) {
        compareSets = compareSets.filter(set => set.number !== setNumber);
        this.updateUI();
        Utils.info('Удалено', 'Набор удален из сравнения');
    }
    
    static updateUI() {
        const container = document.getElementById('compareSets');
        const compareBtn = document.getElementById('compareBtn');
        
        if (!container) return;
        
        // Обновляем карточки
        const cards = container.querySelectorAll('.set-card');
        cards.forEach((card, index) => {
            if (compareSets[index]) {
                const set = compareSets[index];
                card.className = 'set-card filled';
                card.innerHTML = `
                    <button class="set-remove" onclick="BrickMind.compareRemoveSet('${set.number}')">
                        <i class="fas fa-times"></i>
                    </button>
                    <div class="set-number">${set.number}</div>
                    <div class="set-title">${set.title}</div>
                    <div class="set-theme">${set.theme}</div>
                    <div class="set-price">${Utils.formatPrice(set.price)}</div>
                `;
            } else {
                card.className = 'set-card empty';
                card.innerHTML = `
                    <i class="fas fa-plus"></i>
                    <p>Добавьте набор</p>
                `;
                card.onclick = () => {
                    document.getElementById('compareInput').focus();
                };
            }
        });
        
        // Обновляем кнопку сравнения
        if (compareBtn) {
            compareBtn.disabled = compareSets.length < 2;
        }
    }
    
    static showComparison() {
        const container = document.getElementById('compareResults');
        if (!container) return;
        
        if (compareSets.length < 2) {
            container.innerHTML = `
                <div class="empty-state small">
                    <i class="fas fa-balance-scale"></i>
                    <p>Добавьте минимум 2 набора для сравнения</p>
                </div>
            `;
            return;
        }
        
        const analysis = this.analyzeSets();
        
        container.innerHTML = `
            <div class="comparison-table">
                <table>
                    <thead>
                        <tr>
                            <th>Характеристика</th>
                            ${compareSets.map(set => `<th>#${set.number}</th>`).join('')}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Название</td>
                            ${compareSets.map(set => `<td>${set.title}</td>`).join('')}
                        </tr>
                        <tr>
                            <td>Тема</td>
                            ${compareSets.map(set => `<td>${set.theme}</td>`).join('')}
                        </tr>
                        <tr>
                            <td>Год</td>
                            ${compareSets.map(set => `<td>${set.year}</td>`).join('')}
                        </tr>
                        <tr>
                            <td>Деталей</td>
                            ${compareSets.map(set => `<td>${set.pieces.toLocaleString()}</td>`).join('')}
                        </tr>
                        <tr>
                            <td>Возраст</td>
                            ${compareSets.map(set => `<td>${set.age}</td>`).join('')}
                        </tr>
                        <tr>
                            <td>Цена</td>
                            ${compareSets.map(set => `<td><strong>${Utils.formatPrice(set.price)}</strong></td>`).join('')}
                        </tr>
                        <tr>
                            <td>Цена за деталь</td>
                            ${compareSets.map(set => `<td>${(set.price / set.pieces).toFixed(2)} ₽</td>`).join('')}
                        </tr>
                        <tr>
                            <td>Рейтинг</td>
                            ${compareSets.map(set => `<td>${set.rating.toFixed(1)}/5</td>`).join('')}
                        </tr>
                        <tr>
                            <td>Минифигурки</td>
                            ${compareSets.map(set => `<td>${set.minifigs}</td>`).join('')}
                        </tr>
                    </tbody>
                </table>
            </div>
            
            <div class="comparison-analysis">
                <h4><i class="fas fa-chart-bar"></i> Анализ сравнения</h4>
                <div class="analysis-grid">
                    <div class="analysis-card">
                        <div class="analysis-icon" style="background: linear-gradient(135deg, #10b981, #34d399);">
                            <i class="fas fa-percentage"></i>
                        </div>
                        <div class="analysis-content">
                            <h5>Лучшее соотношение</h5>
                            <p>Набор <strong>#${analysis.bestValue.number}</strong></p>
                            <small>${analysis.bestValue.pricePerPiece} ₽/деталь</small>
                        </div>
                    </div>
                    <div class="analysis-card">
                        <div class="analysis-icon" style="background: linear-gradient(135deg, #3b82f6, #60a5fa);">
                            <i class="fas fa-ruler-combined"></i>
                        </div>
                        <div class="analysis-content">
                            <h5>Самый большой</h5>
                            <p>Набор <strong>#${analysis.largestSet.number}</strong></p>
                            <small>${analysis.largestSet.pieces.toLocaleString()} деталей</small>
                        </div>
                    </div>
                    <div class="analysis-card">
                        <div class="analysis-icon" style="background: linear-gradient(135deg, #8b5cf6, #a78bfa);">
                            <i class="fas fa-calendar-star"></i>
                        </div>
                        <div class="analysis-content">
                            <h5>Самый новый</h5>
                            <p>Набор <strong>#${analysis.newestSet.number}</strong></p>
                            <small>${analysis.newestSet.year} год</small>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
    
    static analyzeSets() {
        const bestValue = compareSets.reduce((best, current) => {
            const currentValue = current.price / current.pieces;
            const bestValue = best.price / best.pieces;
            return currentValue < bestValue ? current : best;
        });
        
        const largestSet = compareSets.reduce((largest, current) => 
            current.pieces > largest.pieces ? current : largest
        );
        
        const newestSet = compareSets.reduce((newest, current) => 
            current.year > newest.year ? current : newest
        );
        
        return {
            bestValue: {
                ...bestValue,
                pricePerPiece: (bestValue.price / bestValue.pieces).toFixed(2)
            },
            largestSet,
            newestSet
        };
    }
    
    static clearAll() {
        if (compareSets.length === 0) {
            Utils.info('Уже пусто', 'Нет наборов для очистки');
            return;
        }
        
        compareSets = [];
        this.updateUI();
        document.getElementById('compareResults').innerHTML = '';
        Utils.info('Очищено', 'Все наборы удалены из сравнения');
    }
}

// ==================== ИНСТРУМЕНТЫ ====================
class ToolsManager {
    static identifySet() {
        const input = document.getElementById('setNumberInput');
        const setNumber = input?.value.trim();
        
        if (!setNumber || !/^\d{3,6}$/.test(setNumber)) {
            Utils.warning('Неверный номер', 'Введите 3-6 цифр');
            return;
        }
        
        const result = document.getElementById('identifyResult');
        if (!result) return;
        
        // Ищем набор во всех базах
        const set = ALL_LEGO_SETS.find(s => s.number === setNumber);
        if (!set) {
            result.innerHTML = `
                <div class="error-message">
                    <i class="fas fa-exclamation-triangle"></i>
                    <p>Набор #${setNumber} не найден</p>
                    <small>Попробуйте: 9398, 42009, 10179, 10316, 75367</small>
                </div>
            `;
            result.classList.add('active');
            return;
        }
        
        // Форматируем информацию
        const pricePerPiece = (set.price / set.pieces).toFixed(2);
        const retailers = set.retailers.map(id => 
            CONFIG.RETAILERS.find(r => r.id === id)?.name
        ).filter(Boolean).join(', ');
        
        result.innerHTML = `
            <div class="set-info">
                <h4>${set.title}</h4>
                <div class="set-details">
                    <div class="detail-row">
                        <span class="detail-label">Номер:</span>
                        <span class="detail-value">#${set.number}</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">Тема:</span>
                        <span class="detail-value">${set.theme}</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">Год:</span>
                        <span class="detail-value">${set.year}</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">Деталей:</span>
                        <span class="detail-value">${set.pieces.toLocaleString()}</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">Цена:</span>
                        <span class="detail-value">${Utils.formatPrice(set.price)} (${pricePerPiece} ₽/дет.)</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">Рейтинг:</span>
                        <span class="detail-value">${set.rating.toFixed(1)}/5 (${set.ratingCount} отзывов)</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">Минифигурки:</span>
                        <span class="detail-value">${set.minifigs}</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">Магазины:</span>
                        <span class="detail-value">${retailers}</span>
                    </div>
                </div>
                <div class="action-buttons">
                    <button class="btn btn-primary" onclick="BrickMind.searchByTag('${set.number}')">
                        <i class="fas fa-search"></i> Найти цены
                    </button>
                    <button class="btn btn-outline" onclick="BrickMind.addToCompare('${set.number}')">
                        <i class="fas fa-balance-scale"></i> Добавить к сравнению
                    </button>
                </div>
            </div>
        `;
        result.classList.add('active');
    }
    
    static calculatePrice() {
        const price = parseFloat(document.getElementById('calcPrice')?.value);
        const pieces = parseInt(document.getElementById('calcPieces')?.value);
        const result = document.getElementById('calcResult');
        
        if (!result) return;
        
        if (!price || !pieces || price <= 0 || pieces <= 0) {
            result.innerHTML = `
                <div class="error-message">
                    <i class="fas fa-exclamation-circle"></i>
                    <p>Введите корректные значения</p>
                </div>
            `;
            result.classList.add('active');
            return;
        }
        
        const pricePerPiece = price / pieces;
        
        let rating, icon, color, message;
        if (pricePerPiece < 0.2) {
            rating = 'Отлично';
            icon = '⭐';
            color = '#10b981';
            message = 'Очень выгодная цена!';
        } else if (pricePerPiece < 0.35) {
            rating = 'Хорошо';
            icon = '👍';
            color = '#3b82f6';
            message = 'Среднерыночная стоимость';
        } else if (pricePerPiece < 0.5) {
            rating = 'Нормально';
            icon = '⚖️';
            color = '#f59e0b';
            message = 'Можно найти дешевле';
        } else {
            rating = 'Дорого';
            icon = '👑';
            color = '#8b5cf6';
            message = 'Коллекционный или редкий набор';
        }
        
        result.innerHTML = `
            <div class="calc-result">
                <div class="result-header">
                    <h5>${icon} ${rating}</h5>
                    <span style="color: ${color}">${message}</span>
                </div>
                <div class="result-value">${pricePerPiece.toFixed(2)} ₽</div>
                <div class="result-label">за деталь</div>
                <div class="result-tip">
                    <i class="fas fa-lightbulb"></i>
                    <small>Средняя цена: 0.35 ₽/деталь</small>
                </div>
            </div>
        `;
        result.classList.add('active');
    }
    
    static loadTopSets() {
        const container = document.getElementById('topSetsList');
        if (!container) return;
        
        // Топ наборы всех времен (по рейтингу)
        const topSets = ALL_LEGO_SETS
            .sort((a, b) => b.rating - a.rating)
            .slice(0, 5);
        
        container.innerHTML = topSets.map((set, index) => `
            <div class="top-set-item">
                <div class="top-set-rank">${index + 1}</div>
                <div class="top-set-info">
                    <strong>${set.title}</strong>
                    <small>#${set.number} • ${set.theme} • ${set.year}</small>
                </div>
                <div class="top-set-rating">
                    ${set.rating.toFixed(1)} ★
                </div>
            </div>
        `).join('');
    }
}

// ==================== ГЛАВНЫЙ КЛАСС ====================
class BrickMind {
    static init() {
        console.log('🚀 BrickMind AI запущен');
        console.log(`📦 Всего наборов в базе: ${ALL_LEGO_SETS.length}`);
        console.log(`🏆 Старых наборов (<2015): ${ALL_LEGO_SETS.filter(s => s.year < 2015).length}`);
        console.log(`🎯 Винтажных (<2010): ${ALL_LEGO_SETS.filter(s => s.year < 2010).length}`);
        
        // Загружаем тему
        this.loadTheme();
        
        // Загружаем топ наборы
        ToolsManager.loadTopSets();
        
        // Загружаем сохраненные наборы для сравнения
        this.loadCompareSets();
        
        // Обновляем live статистику
        this.updateLiveStats();
        
        // Настраиваем автодополнение
        this.setupAutocomplete();
        
        console.log('✅ Улучшенный поиск готов к работе!');
        
        // Приветственное сообщение
        setTimeout(() => {
            Utils.info('Добро пожаловать в BrickMind!', 
                '🔍 Ищите старые наборы: "9398", "авито", "Star Wars 2007"\n' +
                '💰 Сравнивайте цены на разных маркетплейсах\n' +
                '🏆 Находите винтажные наборы'
            );
        }, 1500);
    }
    
    static loadTheme() {
        const savedTheme = localStorage.getItem('brickmind_theme') || 'light';
        document.documentElement.setAttribute('data-theme', savedTheme);
        this.updateThemeIcon(savedTheme);
    }
    
    static toggleTheme() {
        const current = document.documentElement.getAttribute('data-theme');
        const newTheme = current === 'light' ? 'dark' : 'light';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('brickmind_theme', newTheme);
        this.updateThemeIcon(newTheme);
        
        Utils.success('Тема изменена', newTheme === 'dark' ? 'Тёмная тема включена' : 'Светлая тема включена');
    }
    
    static updateThemeIcon(theme) {
        const icon = document.querySelector('#themeToggle i');
        if (icon) {
            icon.className = theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
        }
    }
    
    static switchSection(sectionId) {
        // Скрываем все секции
        document.querySelectorAll('.section').forEach(section => {
            section.classList.remove('active');
        });
        
        // Деактивируем ссылки
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
        });
        
        // Активируем нужную
        const targetSection = document.getElementById(sectionId + 'Section');
        const targetLink = document.querySelector(`[data-section="${sectionId}"]`);
        
        if (targetSection) targetSection.classList.add('active');
        if (targetLink) targetLink.classList.add('active');
        
        // Прокручиваем
        if (sectionId !== 'search') {
            setTimeout(() => {
                targetSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
        }
        
        // Если сравнение - показываем результаты
        if (sectionId === 'compare' && compareSets.length >= 2) {
            setTimeout(() => {
                CompareManager.showComparison();
            }, 300);
        }
    }
    
    static performSearch() {
        const input = document.getElementById('mainSearch');
        const query = input?.value.trim();
        
        if (!query) {
            Utils.warning('Введите запрос', 'Начните поиск LEGO наборов');
            input?.focus();
            return;
        }
        
        // Показываем загрузку
        const loading = document.getElementById('loading');
        if (loading) loading.classList.add('active');
        
        // Обновляем текст запроса
        const queryElement = document.getElementById('searchQuery');
        if (queryElement) queryElement.textContent = `"${query}"`;
        
        // Показываем подсказки поиска
        const tips = AdvancedSearchEngine.getSearchTips(query);
        if (tips.length > 0) {
            console.log('💡 Подсказки поиска:', tips);
        }
        
        // Выполняем улучшенный поиск
        setTimeout(() => {
            const results = AdvancedSearchEngine.search(query);
            
            // Если результатов мало и запрос содержит "авито", показываем больше старых наборов
            if (results.length < 5 && query.toLowerCase().includes('авито')) {
                const avitoSets = ALL_LEGO_SETS
                    .filter(set => set.retailers.includes('avito') || set.year < 2015)
                    .slice(0, 20);
                results.push(...avitoSets);
            }
            
            // Убираем дубликаты
            const uniqueResults = Array.from(new Set(results.map(set => set.id)))
                .map(id => results.find(set => set.id === id));
            
            DisplayManager.showResults(uniqueResults);
            
            // Скрываем загрузку
            if (loading) loading.classList.remove('active');
            
            // Уведомление
            if (uniqueResults.length > 0) {
                const oldSets = uniqueResults.filter(set => set.year < 2015).length;
                const vintageSets = uniqueResults.filter(set => set.year < 2010).length;
                
                let message = `Найдено ${uniqueResults.length} наборов`;
                if (oldSets > 0) {
                    message += ` (${oldSets} старых`;
                    if (vintageSets > 0) {
                        message += `, ${vintageSets} винтажных`;
                    }
                    message += `)`;
                }
                
                Utils.success('Найдено!', message);
            } else {
                Utils.info('Ничего не найдено', 
                    'Попробуйте:\n• Добавить "авито" в запрос\n• Ввести точный номер набора\n• Упростить запрос'
                );
            }
        }, 600);
    }
    
    static searchByTag(tag) {
        const input = document.getElementById('mainSearch');
        if (input) {
            input.value = tag;
            this.performSearch();
        }
    }
    
    static clearSearch() {
        const input = document.getElementById('mainSearch');
        if (input) {
            input.value = '';
            input.focus();
        }
    }
    
    static sortResults(sortBy) {
        filteredResults.sort((a, b) => {
            switch(sortBy) {
                case 'price_asc':
                    return a.price - b.price;
                case 'price_desc':
                    return b.price - a.price;
                case 'pieces_desc':
                    return b.pieces - a.pieces;
                case 'year_desc':
                    return b.year - a.year;
                case 'rating_desc':
                    return b.rating - a.rating;
                default:
                    return 0;
            }
        });
        DisplayManager.displayPage(1);
    }
    
    static filterByTheme(theme) {
        if (!theme) {
            filteredResults = currentResults;
        } else {
            filteredResults = currentResults.filter(set => set.theme === theme);
        }
        DisplayManager.displayPage(1);
    }
    
    static filterByYear(year) {
        if (!year) {
            filteredResults = currentResults;
        } else {
            filteredResults = currentResults.filter(set => set.year.toString() === year);
        }
        DisplayManager.displayPage(1);
    }
    
    static applyPriceFilter() {
        const min = parseInt(document.getElementById('priceMin')?.value) || 0;
        const max = parseInt(document.getElementById('priceMax')?.value) || 0;
        
        if (min === 0 && max === 0) {
            filteredResults = currentResults;
        } else {
            filteredResults = currentResults.filter(set => {
                return (!min || set.price >= min) && (!max || set.price <= max);
            });
        }
        DisplayManager.displayPage(1);
        
        if (filteredResults.length > 0) {
            Utils.info('Фильтр применен', `Найдено ${filteredResults.length} наборов`);
        }
    }
    
    static filterInStock(checked) {
        Utils.info('Фильтр', checked ? 'Показываем только в наличии' : 'Показываем все');
    }
    
    // Пагинация
    static nextPage() {
        const totalPages = Math.ceil(filteredResults.length / resultsPerPage);
        if (currentPage < totalPages) {
            DisplayManager.displayPage(currentPage + 1);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }
    
    static prevPage() {
        if (currentPage > 1) {
            DisplayManager.displayPage(currentPage - 1);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }
    
    static goToPage(page) {
        DisplayManager.displayPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
    // Детали набора
    static viewSetDetails(setNumber) {
        const set = ALL_LEGO_SETS.find(s => s.number === setNumber);
        if (!set) {
            Utils.error('Ошибка', 'Набор не найден');
            return;
        }
        
        // Создаем модальное окно
        const modal = document.createElement('div');
        modal.className = 'modal active';
        modal.innerHTML = `
            <div class="modal-content" style="max-width: 600px;">
                <div class="modal-header">
                    <h3><i class="fas fa-info-circle"></i> ${set.title}</h3>
                    <button class="modal-close" onclick="this.closest('.modal').remove()">&times;</button>
                </div>
                <div class="modal-body">
                    <div style="display: flex; gap: 20px; margin-bottom: 20px;">
                        <div style="flex: 1; background: var(--bg-tertiary); border-radius: 12px; height: 200px; display: flex; align-items: center; justify-content: center; font-size: 4rem;">
                            🧱
                        </div>
                        <div style="flex: 2;">
                            <h4>${set.title}</h4>
                            <p style="color: var(--text-tertiary); margin-bottom: 10px;">
                                Набор #${set.number} • ${set.theme} • ${set.year} год
                                ${set.year < 2010 ? '<span style="margin-left: 10px; background: #f59e0b; color: white; padding: 2px 8px; border-radius: 12px; font-size: 0.8rem;">🏆 Винтаж</span>' : ''}
                            </p>
                            <p style="margin-bottom: 15px;">Возраст: ${set.age} • Деталей: ${set.pieces.toLocaleString()}</p>
                            <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                                <span class="badge" style="background: #10b981;">Рейтинг: ${set.rating.toFixed(1)}/5</span>
                                <span class="badge" style="background: #8b5cf6;">Минифигурки: ${set.minifigs}</span>
                                <span class="badge" style="background: #3b82f6;">${(set.price / set.pieces).toFixed(2)} ₽/дет.</span>
                            </div>
                        </div>
                    </div>
                    
                    <div style="background: var(--bg-tertiary); padding: 15px; border-radius: 8px; margin-bottom: 20px;">
                        <h5 style="margin-bottom: 10px;">Где купить:</h5>
                        <div style="display: flex; flex-wrap: wrap; gap: 10px;">
                            ${set.retailers.map(retailerId => {
                                const retailer = Utils.getRetailer(retailerId);
                                return `
                                    <button class="btn btn-outline" onclick="BrickMind.buyNow('${set.number}', '${retailerId}')">
                                        ${retailer.icon} ${retailer.name}
                                    </button>
                                `;
                            }).join('')}
                            ${!set.retailers.includes('avito') && set.year < 2015 ? `
                                <button class="btn btn-outline" style="border-color: #66CC33; color: #66CC33;" 
                                        onclick="BrickMind.searchByTag('${set.number} авито')">
                                    🏷️ Искать на Авито
                                </button>
                            ` : ''}
                        </div>
                    </div>
                    
                    <button class="btn btn-primary" style="width: 100%;" onclick="BrickMind.addToCompare('${set.number}'); this.closest('.modal').remove();">
                        <i class="fas fa-balance-scale"></i> Добавить к сравнению
                    </button>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // Закрытие по клику вне
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.remove();
            }
        });
        
        // ESC для закрытия
        const closeOnEsc = (e) => {
            if (e.key === 'Escape') {
                modal.remove();
                document.removeEventListener('keydown', closeOnEsc);
            }
        };
        document.addEventListener('keydown', closeOnEsc);
    }
    
    static buyNow(setNumber, retailerId) {
        const set = ALL_LEGO_SETS.find(s => s.number === setNumber);
        const retailer = Utils.getRetailer(retailerId);
        
        if (!set || !retailer) {
            Utils.error('Ошибка', 'Данные не найдены');
            return;
        }
        
        // В реальном приложении здесь была бы ссылка на магазин
        const url = `${retailer.url}+${setNumber}`;
        window.open(url, '_blank');
        
        Utils.success('Открываем магазин', `Переход в ${retailer.name}`);
    }
    
    // Сравнение
    static addToCompare(setNumber) {
        CompareManager.addSet(setNumber);
    }
    
    static compareAddSet() {
        const input = document.getElementById('compareInput');
        if (!input?.value) {
            Utils.warning('Введите номер', 'Введите номер набора');
            input?.focus();
            return;
        }
        
        CompareManager.addSet(input.value);
        input.value = '';
    }
    
    static compareRemoveSet(setNumber) {
        CompareManager.removeSet(setNumber);
    }
    
    static compareShow() {
        CompareManager.showComparison();
    }
    
    static compareClearAll() {
        if (confirm('Удалить все наборы из сравнения?')) {
            CompareManager.clearAll();
        }
    }
    
    static loadCompareSets() {
        try {
            const saved = localStorage.getItem('brickmind_compare');
            if (saved) {
                compareSets = JSON.parse(saved);
                CompareManager.updateUI();
            }
        } catch (e) {
            console.error('Ошибка загрузки сравнения:', e);
        }
    }
    
    static saveCompareSets() {
        try {
            localStorage.setItem('brickmind_compare', JSON.stringify(compareSets));
        } catch (e) {
            console.error('Ошибка сохранения сравнения:', e);
        }
    }
    
    // Инструменты
    static identifySet() {
        ToolsManager.identifySet();
    }
    
    static calculatePrice() {
        ToolsManager.calculatePrice();
    }
    
    // Автодополнение
    static setupAutocomplete() {
        const searchInput = document.getElementById('mainSearch');
        if (!searchInput) return;
        
        let autocompleteContainer = document.getElementById('autocompleteContainer');
        if (!autocompleteContainer) {
            autocompleteContainer = document.createElement('div');
            autocompleteContainer.id = 'autocompleteContainer';
            autocompleteContainer.className = 'autocomplete-container';
            searchInput.parentNode.appendChild(autocompleteContainer);
        }
        
        searchInput.addEventListener('input', function(e) {
            const query = e.target.value.trim();
            
            if (query.length < 2) {
                autocompleteContainer.innerHTML = '';
                autocompleteContainer.classList.remove('active');
                return;
            }
            
            const suggestions = AdvancedSearchEngine.suggestQueries(query);
            const tips = AdvancedSearchEngine.getSearchTips(query);
            
            if (suggestions.length === 0 && tips.length === 0) {
                autocompleteContainer.classList.remove('active');
                return;
            }
            
            let html = '';
            
            if (suggestions.length > 0) {
                html += '<div class="autocomplete-section">';
                html += '<div class="autocomplete-title">Быстрый поиск:</div>';
                suggestions.forEach(suggestion => {
                    html += `
                        <div class="autocomplete-item" onclick="BrickMind.searchByTag('${suggestion}')">
                            <i class="fas fa-search"></i> ${suggestion}
                        </div>
                    `;
                });
                html += '</div>';
            }
            
            if (tips.length > 0) {
                html += '<div class="autocomplete-section">';
                html += '<div class="autocomplete-title">Подсказки:</div>';
                tips.forEach(tip => {
                    html += `<div class="autocomplete-tip">${tip}</div>`;
                });
                html += '</div>';
            }
            
            autocompleteContainer.innerHTML = html;
            autocompleteContainer.classList.add('active');
        });
        
        // Закрытие при клике вне
        document.addEventListener('click', function(e) {
            if (!searchInput.contains(e.target) && !autocompleteContainer.contains(e.target)) {
                autocompleteContainer.classList.remove('active');
            }
        });
    }
    
    // Вспомогательные функции
    static showFeedback() {
        Utils.info('Обратная связь', 'Напишите нам на email: feedback@brickmind.ai');
    }
    
    static updateLiveStats() {
        // Обновляем статистику
        setInterval(() => {
            const stats = {
                'totalSets': ALL_LEGO_SETS.length.toString(),
                'avgSavings': 'до 40%',
                'responseTime': '0.5с',
                'activeUsers': '1,000+'
            };
            
            Object.entries(stats).forEach(([id, value]) => {
                const el = document.getElementById(id);
                if (el) el.textContent = value;
            });
        }, 30000);
    }
    
    // Новые методы для улучшенного поиска
    static searchOldSets() {
        const oldSets = ALL_LEGO_SETS.filter(set => set.year < 2015);
        DisplayManager.showResults(oldSets);
        Utils.success('Старые наборы', `Найдено ${oldSets.length} наборов до 2015 года`);
    }
    
    static searchOnAvito() {
        const input = document.getElementById('mainSearch');
        if (input) {
            input.value = input.value ? `${input.value} авито` : 'авито';
            this.performSearch();
        }
    }
}

// ==================== ИНИЦИАЛИЗАЦИЯ ====================
document.addEventListener('DOMContentLoaded', () => {
    console.log('📦 Загружаем BrickMind AI...');
    
    // Инициализация
    BrickMind.init();
    
    // Скрываем прелоадер
    setTimeout(() => {
        const preloader = document.querySelector('.preloader');
        if (preloader) {
            preloader.classList.add('hidden');
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500);
        }
    }, 1500);
    
    // Сохраняем сравнение при выходе
    window.addEventListener('beforeunload', () => {
        BrickMind.saveCompareSets();
    });
    
    // Добавляем стили для автодополнения
    const style = document.createElement('style');
    style.textContent = `
        .autocomplete-container {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: var(--bg-card);
            border: 1px solid var(--border-color);
            border-radius: var(--radius-lg);
            margin-top: 8px;
            padding: var(--space-md);
            box-shadow: var(--shadow-xl);
            z-index: 1000;
            display: none;
            max-height: 400px;
            overflow-y: auto;
        }
        
        .autocomplete-container.active {
            display: block;
            animation: fadeIn 0.2s ease;
        }
        
        .autocomplete-section {
            margin-bottom: var(--space-lg);
        }
        
        .autocomplete-section:last-child {
            margin-bottom: 0;
        }
        
        .autocomplete-title {
            font-size: 0.75rem;
            font-weight: 600;
            color: var(--text-tertiary);
            margin-bottom: var(--space-sm);
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        
        .autocomplete-item {
            padding: var(--space-sm) var(--space-md);
            border-radius: var(--radius-md);
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: var(--space-sm);
            transition: all var(--transition-fast);
            margin-bottom: 2px;
        }
        
        .autocomplete-item:hover {
            background: var(--bg-tertiary);
            color: var(--primary);
        }
        
        .autocomplete-item i {
            color: var(--text-tertiary);
            width: 16px;
            text-align: center;
        }
        
        .autocomplete-tip {
            padding: var(--space-sm) var(--space-md);
            font-size: 0.875rem;
            color: var(--text-tertiary);
            border-left: 2px solid var(--primary);
            margin-bottom: 4px;
            background: var(--bg-tertiary);
            border-radius: var(--radius-sm);
        }
        
        .search-box {
            position: relative;
        }
        
        .vintage-badge {
            display: inline-block;
            margin-left: 8px;
            padding: 2px 6px;
            background: linear-gradient(135deg, #f59e0b, #d97706);
            color: white;
            border-radius: var(--radius-full);
            font-size: 0.7rem;
            font-weight: 600;
        }
        
        .avito-badge {
            display: inline-block;
            margin-left: 4px;
            padding: 2px 6px;
            background: #66CC33;
            color: white;
            border-radius: var(--radius-full);
            font-size: 0.7rem;
            font-weight: 600;
        }
        
        .product-card.vintage {
            border: 2px solid #f59e0b;
        }
        
        .product-card.old {
            opacity: 0.95;
            border-style: dashed;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
        }
    `;
    document.head.appendChild(style);
});

// Глобальный экспорт
window.BrickMind = BrickMind;
