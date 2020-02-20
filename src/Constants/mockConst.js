const categories = [
    {
        id: 'plants',
        name: 'Plants',
        tags: ['products', 'inspirations', 'shop'],
        count: 147,
        image: require('../Assets/images/plants.png')
    },
    {
        id: 'seeds',
        name: 'Seeds',
        tags: ['products', 'shop'],
        count: 16,
        image: require('../Assets/images/seeds.png')
    },
    {
        id: 'flowers',
        name: 'Flowers',
        tags: ['products', 'inspirations'],
        count: 68,
        image: require('../Assets/images/flowers.png')
    },
    {
        id: 'sprayers',
        name: 'Sprayers',
        tags: ['products', 'shop'],
        count: 17,
        image: require('../Assets/images/sprayers.png')
    },
    {
        id: 'pots',
        name: 'Pots',
        tags: ['products', 'shop'],
        count: 47,
        image: require('../Assets/images/pots.png')
    },
    {
        id: 'fertilizers',
        name: 'Fertilizers',
        tags: ['products', 'shop'],
        count: 47,
        image: require('../Assets/images/fertilizers.png')
    },
];

const products = [
    {
        id: 1,
        name: "Plants that will give you a fresh look.",
        description:
            "You need to look fresh of course, then what will give you to look like one than these plants!",
        tags: ["Interior", "27 m²", "Ideas"],
        images: [
            require("../Assets/images/plants_1.png"),
            require("../Assets/images/plants_2.png"),
            require("../Assets/images/plants_3.png"),
        
            require("../Assets/images/plants_1.png"),
            require("../Assets/images/plants_2.png"),
            require("../Assets/images/plants_3.png"),
            require("../Assets/images/plants_1.png"),
            require("../Assets/images/plants_2.png"),
            require("../Assets/images/plants_3.png")
        ]
    }
];

const explore = [
    require("../Assets/images/explore_1.png"),
    require("../Assets/images/explore_2.png"),
    require("../Assets/images/explore_3.png"),
    require("../Assets/images/explore_4.png"),
    require("../Assets/images/explore_5.png"),
    require("../Assets/images/explore_6.png")
];

const profiles = [
    {
    username: "hasimy-as",
    location: "Indonesia",
    email: "hasimy@email.com",
    avatar: require("../Assets/images/avatar.png"),
    budget: 1000,
    monthly_cap: 5000,
    notifications: true,
    newsletter: false
  }
];

export {
    categories, 
    products, 
    profiles,
    explore
};