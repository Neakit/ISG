export const state = () => ({
    cards: [
        { 
            imgPath: '/transport/taps.jpg', 
            title: 'Краны',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', 
            id: 'taps'
        },
        // { 
        //     imgPath: '/transport/moving.jpg', 
        //     title: 'Переезд', 
        //     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', 
        //     id: 'moving'
        // },
        // { 
        //     imgPath: '/transport/dry.jpg', 
        //     title: 'Сыпучие грузы', 
        //     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', 
        //     id: 'dry_cargo' 
        // },
        { 
            imgPath: '/transport/fridge.jpg',
            title: 'Рефрижератор', 
            text: 'Рефрижератор - это полуприцеп с холодильной установкой. Предназначен для транспортировки скоропортящихся грузов и продуктов, а также грузов, перевозка и хранение которых требует соблюдения определенной температуры. Например, медикаменты, напитки.',
            id: 'fridge' 
        },
        { 
            imgPath: '/transport/bulk.jpg', 
            title: 'Наливные грузы', 
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', 
            id: 'bulk' 
        },
        { 
            imgPath: '/transport/cistern.png', 
            title: 'Автоцистерна', 
            text: 'Автоцистерна — особый вид грузового автомобиля, который предназначен для транспортировки жидкостей. У такой машины вместо обычного кузова присутствует специальный резервуар или цистерна. Автомобили-цистерны незаменимы в тех случаях, когда необходима перевозка или хранение разных видов жидкостей (в том числе и пищевого назначения), сыпучих грузов или сжиженного газа.',
            id: 'cistern' 
        },
        { 
            imgPath: '/transport/tral.jpg', 
            title: 'Трал', 
            text: 'Трал низкорамный - это полуприцеп, который используется для грузоперевозки негабаритных грузов, а также тяжеловесных. Подобные полуприцепы способны транспортировать невероятные для простого транспорта нагрузки. Грузоподъемность таких полуприцепов достигает до 200 тонн. Особой чертой данного вида полуприцепов является отсутствие бортов, а основа - это сварная платформа',
            id: 'tral' 
        },
        { 
            imgPath: '/transport/tent.jpg', 
            title: 'Тент полуприцеп', 
            text: 'Предназначены для перевозки большинства грузов. Загрузка может производится сверху, сбоку, сзади. Полуприцепы служат для перевозки крупных и тяжелых грузов, монтажа различного оборудования, потребностей сельского хозяйства, строительства и других транспортных задач.',
            id: 'tent' 
        },
        { 
            imgPath: '/transport/dump.png', 
            title: 'Самосвал', 
            text: 'Самосвал представляет собой разновидность саморазгружающегося автомобиля, оснащенного прицепом, полуприцепом или кузовом бункерного вида. Чтобы разгрузиться, он механически наклоняется при помощи гидравлики. Также встречаются модели с принудительной шнековой разгрузкой и телескопическими подъемниками. Самосвалы применяются для транспортировки сыпучих или мелкоштучных грузов.',
            id: 'dump' 
        },
        { 
            imgPath: '/transport/platform.jpg', 
            title: 'Платформа', 
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', 
            id: 'platform' 
        },
        { 
            imgPath: '/transport/manipulator.png', 
            title: 'Манипулятор', 
            text: 'Данный автомобиль позволяет осуществлять эвакуацию автомобилей, перевоз спецтехники, например катка, трактора и даже яхты. Одним из основных преимуществ использования манипуляторов является их размер. Когда пространство для работы ограничено и невозможно проводить работы используя сразу две единицы техники: кран и грузовой автомобиль, тогда он придет на помощь.',
            id: 'manipulator' 
        },
        { 
            imgPath: '/transport/container.jpg', 
            title: 'Контейнеровоз', 
            text: 'Прицеп-контейнеровоз — тип прицепа или полуприцепа для перевозки морских контейнеров по автомобильным дорогам. Включает в себя шасси прицепа или полуприцепа и фитинговую площадку для установки контейнера. Рассчитан на перевозку как двух 20-футовых, так и одного 40 или 45-футового контейнера. 45-футовый контейнер легко узнать на дороге, так как он, как правило, выступает за габарит прицепа назад.',
            id: 'container' 
        },
        { 
            imgPath: '/transport/bus.jpeg', 
            title: 'Микроавтобус',
            text: 'Грузовые микроавтобусы (в народе их называют «бусами» или, ласково, «бусиками») используются для транспортировки самых разнообразных грузов. Такие микроавтобусы – идеальный вариант для перевозки грузов небольшого объема как внутри города, так и при междугородных сообщениях.', 
            id: 'bus' 
        },
    ]
})