function taskAssignment(k, tasks) {
  let tasksMap = {};

  for (let i = 0; i < tasks.length; i++) {
    if (!tasksMap[tasks[i]]) {
      tasksMap[tasks[i]] = [i];
    } else {
      tasksMap[tasks[i]].push(i);
    }
  }

  tasks = tasks.sort((a, b) => a - b);

  let left = 0,
    right = tasks.length - 1;

  let output = [];

  for (let i = 0; i < k; i++) {
    output.push([tasksMap[tasks[left]].pop(), tasksMap[tasks[right]].pop()]);
    left++;
    right--;

    if (left >= right) {
      return output;
    }
  }

  return output;
}
