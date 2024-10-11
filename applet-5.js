class StudentList {
    
    constructor(dataUrl) {
        this.dataUrl = dataUrl;
        this.students = [];
        this.init();
    }
    async init() {
        await this.fetchData();
        this.renderStudentList(this.students); 
      
        this.bindSearchEvent();

    }
    async fetchData() {
        try {
            const response = await fetch(this.dataUrl);
            this.students = await response.json();
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    renderStudentList(students) {
        const studentListContainer = document.getElementById('studentList');
        studentListContainer.innerHTML = students.map(student => 
            `<button type="button" class="btn btn-dark" style="margin-top:15px; 
                                                    width:25rem">
                ${student.student_name} | ${student.student_program}
            </button><br>`
        ).join('');
    }
   
}
