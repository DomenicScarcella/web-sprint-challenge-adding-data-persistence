const resources = [
    { resource_name: 'Food', resource_description: 'Nutrient-containing, edible thing' },
    { resource_name: 'Bed', resource_description: 'Place to recline and rest' },
    { resource_name: 'Pillow', resource_description: 'Extra cushion for head' },
];

exports.seed = async function (knex) {
    await knex('resources').insert(resources);
};
