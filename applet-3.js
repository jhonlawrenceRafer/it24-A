class DataLogger{

    constructor(buttonId, cardContainerId, clearButtonId, logCountId){
        this.logButton = document.getElementById(buttonId);
        this.clearButton = document.getElementById(clearButtonId);
        this.idContainer = document.getElementById(cardContainerId);
        this.logCountElement = document.getElementById(logCountId);
        this.loggedData = [];    
        
        this.logButton.addEventListener('click', () => this.logData());
        this.clearButton.addEventListener('click', () => this.clearLogs());
    }
    logData(){
        const time = new Date().toLocaleString();
        this.loggedData.push(time);
        this.updateCardContainer();
    }
}