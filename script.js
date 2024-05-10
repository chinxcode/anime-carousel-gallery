document.addEventListener("DOMContentLoaded", function () {
    const items = [
        {
            id: "item1",
            backgroundImage:
                "https://r4.wallpaperflare.com/wallpaper/591/238/424/naruto-shippuuden-uzumaki-naruto-uchiha-sasuke-rinnegan-wallpaper-a90098ed11fa7d6bc617380fd001c62d.jpg",
            title: "Naruto: The Ninja Way",
            description:
                "Join Naruto Uzumaki on his journey to become the strongest ninja in the Hidden Leaf Village. Experience thrilling battles, heartfelt friendships, and the quest for acceptance.",
            buttonText: "Explore More",
        },
        {
            id: "item2",
            backgroundImage:
                "https://r4.wallpaperflare.com/wallpaper/842/236/932/anime-anime-boys-shingeki-no-kyojin-blood-wallpaper-08a4c9f1e4262848db652d9db6fcd8c3.jpg",
            title: "Attack on Titan: Fight for Survival",
            description:
                "In a world overrun by man-eating Titans, follow Eren Yeager and his comrades as they fight to reclaim humanity's lost territory. Brace yourself for intense action and unexpected twists.",
            buttonText: "Learn More",
        },
        {
            id: "item3",
            backgroundImage:
                "https://r4.wallpaperflare.com/wallpaper/965/883/624/manga-one-piece-wallpaper-b9f0d8ddc18a9d8b1677282f30d1e68d.jpg",
            title: "One Piece: The Grand Voyage",
            description:
                "Embark on a swashbuckling adventure with Monkey D. Luffy and his crew as they search for the legendary One Piece treasure. Join them on a journey filled with laughter, tears, and epic battles.",
            buttonText: "Sail On",
        },
        {
            id: "item4",
            backgroundImage:
                "https://r4.wallpaperflare.com/wallpaper/848/328/928/anime-my-hero-academia-all-might-toshinori-yagi-hd-wallpaper-84535c03dc588ebabf5aee0411dc1177.jpg",
            title: "My Hero Academia: Rise of Heroes",
            description:
                "In a world where almost everyone has superpowers, follow Izuku Midoriya on his quest to become the greatest hero. Experience the trials and triumphs of young heroes in training.",
            buttonText: "Discover More",
        },
        {
            id: "item5",
            backgroundImage:
                "https://r4.wallpaperflare.com/wallpaper/130/234/352/sword-art-online-mills-andrew-gilbert-ayano-keiko-kirigaya-kazuto-wallpaper-4876fd3860c09c0810aca12eb822644a.jpg",
            title: "Sword Art Online: Virtual Adventure",
            description:
                "Enter the immersive world of Sword Art Online, where players are trapped in a virtual reality MMORPG. Join Kirito and his friends as they battle to survive and uncover the mysteries of the game.",
            buttonText: "Enter Virtual World",
        },
        {
            id: "item6",
            backgroundImage:
                "https://r4.wallpaperflare.com/wallpaper/618/252/919/anime-demon-slayer-kimetsu-no-yaiba-zenitsu-agatsuma-hd-wallpaper-7dc857ea044046a6124c726570255277.jpg",
            title: "Demon Slayer: The Path of the Demon Slayer",
            description:
                "Follow Tanjiro Kamado on his journey to avenge his family and protect humanity from demonic threats. Experience breathtaking animation, heart-wrenching moments, and the power of camaraderie.",
            buttonText: "Fight Demons",
        },
    ];

    function createCarouselItems(items) {
        items.forEach((item) => {
            const itemElement = document.createElement("li");
            itemElement.classList.add("item");
            itemElement.setAttribute("id", item.id);
            itemElement.style.backgroundImage = `url('${item.backgroundImage}')`;

            const contentElement = document.createElement("div");
            contentElement.classList.add("content");
            const titleElement = document.createElement("h2");
            titleElement.classList.add("title");
            titleElement.innerText = item.title;
            const descriptionElement = document.createElement("p");
            descriptionElement.classList.add("description");
            descriptionElement.innerText = item.description;
            const buttonElement = document.createElement("button");
            buttonElement.innerText = item.buttonText;

            contentElement.appendChild(titleElement);
            contentElement.appendChild(descriptionElement);
            contentElement.appendChild(buttonElement);

            itemElement.appendChild(contentElement);
            document.querySelector(".slider").appendChild(itemElement);
        });

        const slider = document.querySelector(".slider");

        function activate(e) {
            const items = document.querySelectorAll(".item");
            if (e.target.matches(".next")) {
                slider.append(items[0]);
            } else if (e.target.matches(".prev")) {
                slider.prepend(items[items.length - 1]);
            }
        }

        document.addEventListener("click", activate);
    }

    createCarouselItems(items);
});
