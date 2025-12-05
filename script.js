// ข้อมูลรูปทรง + คำอธิบาย + ตัวหลอก
const shapes = [
    { id: 1, name: "วงกลม", desc: "รูปทรงที่ไม่มีด้านและไม่มีมุม" },
    { id: 2, name: "สามเหลี่ยม", desc: "รูปทรงที่มี 3 ด้าน" },
    { id: 3, name: "สี่เหลี่ยมจัตุรัส", desc: "รูปทรงที่มี 4 ด้านยาวเท่ากัน" },
    { id: 4, name: "สี่เหลี่ยมผืนผ้า", desc: "รูปทรงที่มีด้านตรงข้ามยาวเท่ากัน" },

    // ตัวหลอก
    { id: 99, name: "ห้าเหลี่ยม", desc: "รูปทรงที่มี 7 ด้าน (คำอธิบายหลอก)" },
    { id: 100, name: "วงรี", desc: "รูปทรงที่มีมุมแหลมสองมุม (คำอธิบายหลอก)" }
];

let selectedShape = null;
let selectedDesc = null;

const shapeContainer = document.getElementById("shape-cards");
const descContainer = document.getElementById("desc-cards");
const result = document.getElementById("result");

// สุ่มคำอธิบาย
const descriptions = shapes.map(s => ({
    id: s.id,
    text: s.desc
})).sort(() => Math.random() - 0.5);

// แสดงการ์ดรูปทรง
shapes.forEach(s => {
    const card = document.createElement("div");
    card.className = "card";
    card.textContent = s.name;
    card.onclick = () => selectShape(s.id, card);
    shapeContainer.appendChild(card);
});

// แสดงการ์ดคำอธิบาย (สุ่ม)
descriptions.forEach(d => {
    const card = document.createElement("div");
    card.className = "card";
    card.textContent = d.text;
    card.onclick = () => selectDesc(d.id, card);
    descContainer.appendChild(card);
});

// ฟังก์ชันเลือกการ์ดรูปทรง
function selectShape(id, card) {
    clearSelected(shapeContainer);
    card.classList.add("selected");
    selectedShape = id;
    checkMatch();
}

// ฟังก์ชันเลือกการ์ดคำอธิบาย
function selectDesc(id, card) {
    clearSelected(descContainer);
    card.classList.add("selected");
    selectedDesc = id;
    checkMatch();
}

// เคลียร์การ์ดที่เลือก
function clearSelected(container) {
    Array.from(container.children).forEach(c => c.classList.remove("selected"));
}

// ตรวจจับคู่
function checkMatch() {
    if (!selectedShape || !selectedDesc) return;

    if (selectedShape === selectedDesc) {
        result.textContent = "✔ ถูกต้อง! เก่งมาก";
        result.style.color = "green";
    } else {
        result.textContent = "✘ ผิดนะ ลองใหม่!";
        result.style.color = "red";
    }
}
