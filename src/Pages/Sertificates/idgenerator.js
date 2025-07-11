// certificate-id-generator.js

const generatedIds = new Set(); // Faqat xotirada saqlanadi

function generateNumericId() {
  let newId;
  let attempts = 0;

  do {
    newId = Math.floor(10000000 + Math.random() * 90000000).toString();
    attempts++;
  } while (generatedIds.has(newId) && attempts < 10);

  if (!generatedIds.has(newId)) {
    generatedIds.add(newId);
    return newId;
  } else {
    throw new Error("Yangi noyob ID yaratib bo‘lmadi.");
  }
}

function getAllIds() {
  return Array.from(generatedIds);
}

function clearAllIds() {
  generatedIds.clear();
}

export {
  generateNumericId,
  getAllIds,
  clearAllIds
};
