type TaskStatus = 'Open' | 'InProgress' | 'Closed';

function assertUnreachable(x: never): never {
  throw new Error(`Unhandled status: ${x}`);
}

function handleTask(status: TaskStatus): string {
  switch (status) {
    case 'Open':
      return 'Task is open';

    case 'InProgress':
      return 'Task is in progress';

    case 'Closed':
      return 'Task is closed';

    default:
      return assertUnreachable(status);
  }
}

console.log(handleTask('Open'));