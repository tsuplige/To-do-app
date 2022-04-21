export const state = () => ({
    tasks: []
})

export const mutations = {
    ADD_TASK(state, task) {
        state.tasks = [{content: task, done: false}, ...state.tasks];
        //add new task on the top of the list
    },
    REMOVE_TASK(state, task) {
        state.tasks.splice(state.tasks.indexOf(task),1);
    },
    REMOVE_ALLTASK(state) {
        state.tasks.forEach(task => {
            if (task.done == true){
                state.tasks.splice(state.tasks.indexOf(this.task),1)
            }
        });
        // state.tasks.splice(0, state.tasks.length);
    },
    TOGGLE_TASK(state, task) {
        task.done = !task.done;
    },
    ALLTASK_DONE(state) {
        state.tasks.forEach(task => {
            task.done = true;
        });
    },
    ALLTASK_UNDO(state) {
        state.tasks.forEach(task => {
            task.done = false;
        });
    }
}
