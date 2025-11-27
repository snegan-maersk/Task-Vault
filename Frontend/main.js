const { createApp } = Vue;

createApp({
    data() {
        return {
            tasks: [],
            newTask: ''
        };
    },
    methods: {
        async getTasks() {
            try {
                const response = await fetch('http://localhost:5000/api/tasks');
                this.tasks = await response.json();
            } catch (error) {
                console.error('Error getting tasks:', error);
            }
        },
        async addTask() {
            if (!this.newTask.trim()) {
                return;
            }

            try {
                const response = await fetch('http://localhost:5000/api/tasks', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ title: this.newTask })
                });
                
                const task = await response.json();
                this.tasks.push(task);
                this.newTask = '';
            } catch (error) {
                console.error('Error adding task:', error);
            }
        },
        async deleteTask(id) {
            try {
                await fetch(`http://localhost:5000/api/tasks/${id}`, {
                    method: 'DELETE'
                });
                
                this.tasks = this.tasks.filter(task => task.id !== id);
            } catch (error) {
                console.error('Error deleting task:', error);
            }
        }
    },
    mounted() {
        this.getTasks();
    }
}).mount('#app');
