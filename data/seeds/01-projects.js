const projects = [
    { project_name: 'Eat', project_description: 'Intake of nutrients', project_completed: false },
    { project_name: 'Sleep', project_description: 'Rest and recovery', project_completed: false },
];

exports.seed = async function (knex) {
    await knex('projects').insert(projects);
};
