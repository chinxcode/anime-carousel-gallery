document.addEventListener("DOMContentLoaded", function () {
    const apiUrl = "https://api.jikan.moe/v4/top/anime";
    const items = [];

    async function fetchData() {
        try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const data = await response.json();
            data.data.forEach((anime) => {
                items.push({
                    id: anime.mal_id.toString(),
                    backgroundImage: anime.images.webp.large_image_url,
                    title: anime.title,
                    description: anime.synopsis,
                    buttonText: "Explore More",
                    url: anime.url,
                });
            });
            createCarouselItems(items);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    fetchData();

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

            const buttonLinkElement = document.createElement("a");
            buttonLinkElement.href = item.url;
            buttonLinkElement.target = "_blank";

            const buttonElement = document.createElement("button");
            buttonElement.classList.add("button");
            buttonElement.innerText = item.buttonText;

            buttonLinkElement.appendChild(buttonElement);

            contentElement.appendChild(titleElement);
            contentElement.appendChild(descriptionElement);
            contentElement.appendChild(buttonLinkElement);

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
});
