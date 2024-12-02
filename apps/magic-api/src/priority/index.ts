import { PriorityQueue, enqueueTask } from './decks.priority';

const taskQueue = new PriorityQueue();

const authenticate = () => console.log("Autenticando usuário...");
const updateDeck = () => console.log("Atualizando baralho...");
const adminTask = () => console.log("Executando tarefa administrativa...");

enqueueTask(taskQueue, authenticate, true);  
enqueueTask(taskQueue, updateDeck, false);  
enqueueTask(taskQueue, adminTask, true);    

while (!taskQueue.isEmpty()) {
  const task = taskQueue.dequeue();
  task?.execute();
}