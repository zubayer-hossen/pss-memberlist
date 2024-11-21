// Member Data
const members = [
    { name: "মোঃ জুবায়ের হোসেন", address: "ইসলামপুর", contact: "০৯৬৯৭১৫৬৩৯৭" },
    { name: "মোঃ হারুন", address: "জায়গীরমহল", contact: "০১৭৪৪৭১৪৯৪৪" },
    { name: "রনজিলা খাতুন", address: "নাকসা", contact: "০১৯৯৮৪০৫২৭৭" },
    { name: "তারেক আকাশ", address: "জায়গীরমহল", contact: "০১৫৮০৩১৮৫৩৭" },
    { name: "সাগর মন্ডল", address: "চটকাতলা", contact: "০১৯৪০৭০৩৫৭৪" },
    { name: "মেহেদী হাসান", address: "কাটাখালি", contact: "০১৪০২৭৫৮৫৬৪" },
    { name: "তৌহিদুজ্জামান", address: "ঘুগরাকাটি", contact: "০১৯৭৮৮৯৩৮৩৬" },
    { name: "আলমগীর হোসেন", address: "নাকসা", contact: "০১৯৩৮৫১৩৭৯৩" },
    { name: "প্রজিৎ সরকার", address: "বালিয়াডাঙ্গা", contact: "০১৯৭৮৮৫৯০৯৫" },
    { name: "রায়হান কবির", address: "নাকসা", contact: "০১৯১১৩৫৯৫২৭" },
    { name: "নুরজাহান রজনী", address: "নাকসা", contact: "০১৭৬৫৮২৫৯২৭" },
    { name: "মোঃ মমিনুল মুমিন", address: "বালিয়াডাঙ্গা", contact: "০১৭৩৫৫০৯০২৮" },
    { name: "মোঃ রাজ ইসলাম", address: "ঘুগরাকাটি", contact: "০১৯১৮৯৪১০৬১" },
    { name: "কঙ্কন সরকার রাজ", address: "আমাদী", contact: "০১৭১৬১৯৮৫৬৩" },
    { name: "রুনা পারভিন রাণী", address: "ঘুগরাকাটি", contact: "" },
    { name: "উম্মে ফারজানা আক্তার সেতু", address: "নাকসা", contact: "০১৯৭৭৪৫৪৬৫১" },
    { name: "ফয়সাল হোসাইন", address: "নারানপুর", contact: "০১৯০৪৯১৩২৫৯" },
    { name: "গ্লোরিয়াস বয় ইউসুপ", address: "জায়গীরমহল", contact: "০১৯১০০৪৪০০৪" },
    { name: "মোঃ জাহিদ হাসান", address: "জায়গীরমহল", contact: "০১৫১৬৩০৩৮৭৭" },
    { name: "নুর জামাল", address: "ঘুগরাকাটি", contact: "০১৯৮১২৯৯১৯৩" },
    { name: "শাহারিয়ার হোসেন", address: "আমাদী", contact: "" },
    { name: "নাজমুল", address: "আমাদী", contact: "০১৬৩৭২৮৪১৬০" },
    { name: "অমিত সরকার", address: "কাটাখালি", contact: "০১৯৮২৮৪৪১১৬" },
    { name: "মাসুম বিল্লাহ", address: "ষোলহালিয়া", contact: "" },
];

// Map through the members array and add an ID based on the index
const membersWithId = members.map((member, index) => ({
    id: index + 1, // Adding index + 1 as the ID
    ...member       // Spread the existing member data
}));

// Populate Table
const tableBody = document.querySelector("#memberTable tbody");

function populateTable(data) {
    tableBody.innerHTML = ""; // Clear existing rows
    data.forEach((member) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${member.id}</td>
            <td>${member.name}</td>
            <td>${member.address}</td>
            <td class="${member.contact===""?"pending":""}">${member.contact===""? "Proccessing...": member.contact}</td>
        `;
        tableBody.appendChild(row);
    });
}

populateTable(membersWithId); // Initial population

// Clock with Date
setInterval(() => {
    const now = new Date();
    const time = now.toLocaleTimeString();
    const date = now.toLocaleDateString();
    document.getElementById("clock").innerText = `${time} | ${date}`;
}, 1000);

// Print Functionality
function printPage() {
    document.title = null;
    window.print();
}

// Search Functionality
document.getElementById("searchByName").addEventListener("input", function () {
    const query = this.value.toLowerCase();
    const filtered = membersWithId.filter(member =>
        member.name.toLowerCase().includes(query)
    );
    populateTable(filtered);
});

document.getElementById("searchByContact").addEventListener("input", function () {
    const query = this.value;
    const filtered = membersWithId.filter(member =>
        member.contact.includes(query)
    );
    populateTable(filtered);
});
