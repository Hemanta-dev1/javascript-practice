const pantry = [
  { sku: "A10", name: "Tomatoes", qty: 4, expires: "2027-01-01", zone: "fridge" },
  { sku: "D43", name: "Pineapples", qty: 2, expires: "2020-01-01", zone: "general" }
];

const rawData = [
  "A10|Tomatoes|5|2027-01-01",
  "B21|Bananas|10|2027-01-01",
  "C32|Eggs|3|2027-01-01|fridge",
  "C32|Eggs|3|2027-01-01",
  "D43|Pineapples|0|2027-01-01",
  "E54|Peppers|-1|2027-01-01|fridge"
];

function parseShipment(rawData) {
  const seenSkus = new Set();
  const result = [];

  for (const item of rawData) {
    const parts = item.split("|");
    const sku = parts[0];

    // Ignore duplicate SKUs
    if (seenSkus.has(sku)) {
      continue;
    }
    seenSkus.add(sku);

    const name = parts[1];
    const qty = Number(parts[2]);
    const expires = parts[3];
    const zone = parts[4] || "general";

    result.push({
      sku,
      name,
      qty,
      expires,
      zone
    });
  }

  return result;
}

function planRestock(pantry, shipment) {
  const pantryMap = new Map();

  for (const item of pantry) {
    pantryMap.set(item.sku, item);
  }

  const actions = [];

  for (const shipmentItem of shipment) {
    if (shipmentItem.qty <= 0) {
      actions.push({
        type: "discard",
        item: shipmentItem
      });
    } else if (pantryMap.has(shipmentItem.sku)) {
      actions.push({
        type: "restock",
        item: shipmentItem
      });
    } else {
      actions.push({
        type: "donate",
        item: shipmentItem
      });
    }
  }

  return actions;
}

function groupByZone(actions) {
  const grouped = {};

  for (const action of actions) {
    const zone = action.item.zone;

    if (!grouped[zone]) {
      grouped[zone] = [];
    }

    grouped[zone].push(action);
  }

  return grouped;
}

function clonePantry(pantry) {
  return pantry.map(item => ({ ...item }));
}

// Process the shipment
const parsedShipment = parseShipment(rawData);
const pantryCopy = clonePantry(pantry);
const actions = planRestock(pantryCopy, parsedShipment);
const groupedResult = groupByZone(actions);

// Log the final grouped result
console.log(groupedResult);