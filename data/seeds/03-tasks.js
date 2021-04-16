const tasks = [
    { task_description: 'Chew food', task_notes: 'Do this first!', task_completed: false, project_id: 1 },
    { task_description: 'Swallow chewed food', task_notes: '', task_completed: false, project_id: 1 },

    { task_description: 'Close eyes', task_notes: '', task_completed: false, project_id: 2 },
    { task_description: 'Dream', task_notes: 'If scary, OK to awaken suddenly', task_completed: false, project_id: 2 },
];

exports.seed = async function (knex) {
    await knex('tasks').insert(tasks);
};
