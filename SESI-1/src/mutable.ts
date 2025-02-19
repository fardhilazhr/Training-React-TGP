import { User, users } from "./users";
//mutable
// function setTaskDone(userId: number, taskId: number) {
//     const userIndex = users.findIndex((user) => user.id === userId);
//     const taskIndex = users[userIndex].tasks.findIndex(
//         (task) => task.id === taskId
//     );

//     users[userIndex].tasks[taskIndex].done = true;
// }

//immutable
function setTaskDone(users: User[], userId: number, taskId: number) {
    const clonnedUser: User[] = JSON.parse(JSON.stringify(users));
    const userIndex = clonnedUser.findIndex((user) => user.id === userId);
    const taskIndex = clonnedUser[userIndex].tasks.findIndex(
        (task) => task.id === taskId
    );

    clonnedUser[userIndex].tasks[taskIndex].done = true;
    return clonnedUser;
}

const updateUser = setTaskDone(users, 1, 1);

console.dir(users, { depth: null });
console.dir(updateUser, { depth: null });
