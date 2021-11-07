// i wasn't sure if each of the 10 list items had to have 10 sublist items or not, so here ya go, hope it's not too much lol
var LISTS = [
    {
        name: "Groceries",
        listItems: [
        {
            name: "Milk",
            checked: false,
            category: "Dairy",
        },
        {
            name: "Cheese",
            checked: false,
            category: "Dairy",
        },
        {
            name: "Yogurt",
            checked: false,
            category: "Dairy",
        },
        {
            name: "Butter",
            checked: false,
            category: "Dairy",
        },
        {
            name: "Apples",
            checked: false,
            category: "Fruits"
        },
        {
            name: "Oranges",
            checked: false,
            category: "Fruits"
        },
        {
            name: "Bananas",
            checked: false,
            category: "Fruits"
        },
        {
            name: "Bagels",
            checked: false,
            category: "Grain"
        },
        {
            name: "Cheerios",
            checked: false,
            category: "Grain"
        },
        {
            name: "Tortillas",
            checked: false,
            category: "Grain"
        },
    ], 
    },
    {
        name: "Camping",
        listItems: [
        {
            name: "Tent",
            checked: false,
            category: "",
        },
        {
            name: "Sleeping Bag",
            checked: false,
            category: "",
        },
        {
            name: "Coat",
            checked: false,
            category: ""
        },
        {
            name: "Folding Chair",
            checked: false,
            category: "",
        },
        {
            name: "Bug Spray",
            checked: false,
            category: ""
        },
        {
            name: "Cookware",
            checked: false,
            category: ""
        },
        {
            name: "Portable Generator",
            checked: false,
            category: ""
        },
        {
            name: "Toiletries",
            checked: false,
            category: ""
        },
        {
            name: "First Aid Kit",
            checked: false,
            category: ""
        },
        {
            name: "Lantern",
            checked: false,
            category: ""
        },
        ], 
    },
    {
        name: "Games",
        listItems: [
            {
                name: "Dragon Quest IV",
                checked: false,
                category: "JRPG",
            },
            {
                name: "Dragon Quest VI",
                checked: false,
                category: "JRPG",
            },
            {
                name: "Kingdom Hearts",
                checked: false,
                category: "JRPG",
            },
            {
                name: "Bravely Default",
                checked: false,
                category: "JRPG",
            },
            {
                name: "Legend of Zelda: Breath of the Wild",
                checked: false,
                category: "JRPG",
            },
            {
                name: "Animal Crossing: New Horizons",
                checked: false,
                category: "Life Sim",
            },
            {
                name: "Harvest Moon: The Lost Valley",
                checked: false,
                category: "Life Sim",
            },
            {
                name: "Fantasy Life",
                checked: false,
                category: "RPG",
            },
            {
                name: "Assassin's Creed Odyssey",
                checked: false,
                category: "",
            },
            {
                name: "Minecraft",
                checked: false,
                category: "Sandbox",
            },
        ],
    },
    {
        name: "Clothes",
        listItems: [
            {
                name: "Shirts",
                checked: false,
                category: "",
            },
            {
                name: "Pants",
                checked: false,
                category: "",
            },
            {
                name: "Underwear",
                checked: false,
                category: "",
            },
            {
                name: "Shoes",
                checked: false,
                category: "",
            },
            {
                name: "Socks",
                checked: false,
                category: "",
            },
            {
                name: "Dresses",
                checked: false,
                category: "",
            },
            {
                name: "Skirts",
                checked: false,
                category: "",
            },
            {
                name: "Hairbands",
                checked: false,
                category: "",
            },
            {
                name: "Ties",
                checked: false,
                category: "",
            },
            {
                name: "Tights",
                checked: false,
                category: "",
            },
        ],
    },
    {
        name: "Books",
        listItems: [
            {
                name: "Harry Potter",
                checked: false,
                category: "Fantasy",
            },
            {
                name: "Eragon",
                checked: false,
                category: "Fantasy",
            },
            {
                name: "The Hobbit",
                checked: false,
                category: "Fantasy",
            },
            {
                name: "Lord of the Rings",
                checked: false,
                category: "Fantasy",
            },
            {
                name: "Warrior Cats",
                checked: false,
                category: "Fantasy",
            },
            {
                name: "Ender's Game",
                checked: false,
                category: "Sci-Fi",
            },
            {
                name: "The Martian",
                checked: false,
                category: "Sci-Fi",
            },
            {
                name: "Dune",
                checked: false,
                category: "Sci-Fi",
            },
            {
                name: "The Hitchhiker's Guide to the Galaxy",
                checked: false,
                category: "Sci-Fi",
            },
            {
                name: "I, Robot",
                checked: false,
                category: "Sci-Fi",
            },
        ],
    },
    {
        name: "TV Shows",
        listItems: [
            {
                name: "Teen Wolf",
                checked: false,
                category: "Supernatural",
            },
            {
                name: "Supernatural",
                checked: false,
                category: "Supernatural",
            },
            {
                name: "Charmed",
                checked: false,
                category: "Supernatural",
            },
            {
                name: "Doctor Who",
                checked: false,
                category: "Sci-Fi",
            },
            {
                name: "Star-Gate",
                checked: false,
                category: "Sci-Fi",
            },
            {
                name: "Star Trek",
                checked: false,
                category: "Sci-Fi",
            },
            {
                name: "iCarly",
                checked: false,
                category: "Teen Sitcom",
            },
            {
                name: "Suite Life of Zach & Cody",
                checked: false,
                category: "Teen Sitcom",
            },
            {
                name: "Hannah Montana",
                checked: false,
                category: "Teen Sitcom",
            },
            {
                name: "Best Friend Whenever",
                checked: false,
                category: "Teen Sitcom",
            },
        ],
    },
    {
        name: "Anime",
        listItems: [
            {
                name: "One Piece",
                checked: false,
                category: "Shounen",
            },
            {
                name: "Bleach",
                checked: false,
                category: "Shounen",
            },
            {
                name: "Black Cat",
                checked: false,
                category: "Shounen",
            },
            {
                name: "Dragon Ball",
                checked: false,
                category: "Shounen",
            },
            {
                name: "Naruto",
                checked: false,
                category: "Shounen",
            },
            {
                name: "Ouran High School Host Club",
                checked: false,
                category: "Romantic Comedy",
            },
            {
                name: "Death Note",
                checked: false,
                category: "Psychological Horor",
            },
            {
                name: "TenSura",
                checked: false,
                category: "Fantasy",
            },
            {
                name: "Log Horizon",
                checked: false,
                category: "Fantasy",
            },
            {
                name: "Vanitas no Carte",
                checked: false,
                category: "Dark Fantasy",
            },
        ],
    },
    {
        name: "Pets",
        listItems: [
            {
                name: "Cats",
                checked: false,
                category: "",
            },
            {
                name: "Dogs",
                checked: false,
                category: "",
            },
            {
                name: "Ferrets",
                checked: false,
                category: "",
            },
            {
                name: "Fish",
                checked: false,
                category: "",
            },
            {
                name: "Hamsters",
                checked: false,
                category: "",
            },
            {
                name: "Mice",
                checked: false,
                category: "",
            },
            {
                name: "Bunnies",
                checked: false,
                category: "",
            },
            {
                name: "Birds",
                checked: false,
                category: "",
            },
            {
                name: "Snakes",
                checked: false,
                category: "",
            },
            {
                name: "Lizards",
                checked: false,
                category: "",
            },
        ],
    },
    {
        name: "Consoles",
        listItems: [
            {
                name: "PC",
                checked: false,
                category: "",
            },
            {
                name: "PlayStation",
                checked: false,
                category: "",
            },
            {
                name: "xBox",
                checked: false,
                category: "",
            },
            {
                name: "DS",
                checked: false,
                category: "",
            },
            {
                name: "Nintendo Switch",
                checked: false,
                category: "",
            },
            {
                name: "Gameboy",
                checked: false,
                category: "",
            },
            {
                name: "Wii",
                checked: false,
                category: "",
            },
            {
                name: "Atari",
                checked: false,
                category: "",
            },
            {
                name: "NES",
                checked: false,
                category: "",
            },
            {
                name: "Nintendo 64",
                checked: false,
                category: "",
            },
        ],
    },
    {
        name: "Jobs",
        listItems: [
            {
                name: "Doctor",
                checked: false,
                category: "",
            },
            {
                name: "Teacher",
                checked: false,
                category: "",
            },
            {
                name: "Bus Driver",
                checked: false,
                category: "",
            },
            {
                name: "Chef",
                checked: false,
                category: "",
            },
            {
                name: "Cashier",
                checked: false,
                category: "",
            },{
                name: "Police",
                checked: false,
                category: "",
            },
            {
                name: "Politician",
                checked: false,
                category: "",
            },
            {
                name: "Steamer",
                checked: false,
                category: "",
            },
            {
                name: "Waiter",
                checked: false,
                category: "",
            },
            {
                name: "Hairdresser",
                checked: false,
                category: "",
            },
        ],
    },
];

function itemChecked(element, listIndex, itemIndex) {
    $(element).parent().toggleClass("strike");
    let checkedValue = !LISTS[listIndex].listItems[itemIndex].checked;
    LISTS[listIndex].listItems[itemIndex].checked = checkedValue;
    // console.log("checked ", LISTS);
}

// function addList(listIndex) {
//     let newListName = $("#addList").val();
//     let newListObj = {
//         name: newListName,
//         listItems: [],
//     };
//     LISTS[listIndex].listItems.push(newListObj);
//     loadListItems(listIndex);  // this reloads the list so that the new item appears
// }
// this creates a new object in LISTS[index] (if I can figure out how, at least)

function addItem(listIndex) {
    let newItemName = $("#addItem").val();
    let newItemObj = {
        name: newItemName,
        checked: false,
        category: "",
    };
    LISTS[listIndex].listItems.push(newItemObj);
    loadListItems(listIndex);  // this reloads the list so that the new item appears
}
// this creates a new object in LISTS[index].listItem

function deleteItem(listIndex, index) {
    LISTS[listIndex].listItems.splice(index, 1);
    loadListItems(listIndex);  // this reloads the list so that the new item appears
}
// this deletes an item from LISTS[index] when 'delete' is clicked

function loadListItems(listIndex) {
    let listString = `<button onclick="loadData()">BACK</button><ul>`;
    $.each(LISTS[listIndex].listItems, function (index, listItem) {
        listString += `
        <li id="${index}" class="${listItem.checked ? "strike": ""}">
        <input ${listItem.checked ? (checked = "checked"): ""} type="checkbox" id="${index}" name="${listItem.name}" onclick="itemChecked(this, ${listIndex}, ${index})">
        <span>${listItem.name}</span>
        <span class="delete" onclick="deleteItem(${listIndex}, ${index})">DELETE</span> 
        </li>`;
            // the span tag is how we can delete items
    });
    // the above code is used to make a checkbox, and then make sure that box will stay checked or unchecked even if you go back. won't stay if the page is reloaded though. the 'strike' bit is to keep the strikethrough the list items


// trying to figure out how to add new items to list, not just sublists; can't quite figure it out
    // $.each(LISTS[listIndex], function (index) {
    //     let newListString = 
    //     `<div class="addListInput"> 
    //     <input id="addList" type="text">
    //     <button onclick="addItem(${listIndex})">ADD ITEM</button>
    //     </div>`
    // })
    
    listString += `</ul>
    <div class="addItemInput"> 
    <input id="addItem" type="text">
    <button onclick="addItem(${listIndex})">ADD ITEM</button>
    </div>`;
    // still not 100% sure where the '<ul></ul>' element came from because I don't remember using it before, but I'm pretty sure it stands for Unordered List

    $("#app").html(listString);
}

function loadData() {
    let listString = "<ul>";
    $.each(LISTS, function(index, list) {
        listString += `<li id="${index}" onclick="loadListItems(${index})">${list.name} 
        <span class="right">Items: ${list.listItems.length}</span>
        </li>`;
    });
    listString += "</ul>";
    $("#app").html(listString);
}


function initListeners() {}

$(document).ready(function () {
    initListeners();
});