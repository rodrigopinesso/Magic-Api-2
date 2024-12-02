export interface Task {
    execute: () => void;
    priority: number;
  }
  
  export class PriorityQueue {
    private queue: Task[] = [];
  
    enqueue(task: () => void, priority: number): void {
      const newTask: Task = { execute: task, priority };
      let inserted = false;
  
      for (let i = 0; i < this.queue.length; i++) {
        if (this.queue[i].priority > priority) {
          this.queue.splice(i, 0, newTask);
          inserted = true;
          break;
        }
      }
  
      if (!inserted) {
        this.queue.push(newTask);
      }
    }
  
    dequeue(): Task | undefined {
      return this.queue.shift();
    }
  
    isEmpty(): boolean {
      return this.queue.length === 0;
    }
  }
  
  export const enqueueTask = (queue: PriorityQueue, task: () => void, isAdmin: boolean): void => {
    const priority = isAdmin ? 1 : 2;
    queue.enqueue(task, priority);
  };
  