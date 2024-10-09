class LeafletMap {

    constructor(containerId, center, zoom) {
        this.map = L.map(containerId).setView(center, zoom);
        this.initTileLayer();

        this.attendanceCountSC = 0;
        this.attendanceCountBA = 0;
        this.attendanceCountLab1 = 0;
        this.attendanceCountLab2 = 0;


        this.markerCounts = {};
        this.markers = [];

        this.loggedData = []; 

        this.btn = document.getElementById('btn');
        this.btn1 = document.getElementById('btn1');
        this.btn2 = document.getElementById('btn2');
        this.btn3 = document.getElementById('btn3'); 
        this.btnclear = document.getElementById('btnclear');
        this.logCountElement = document.getElementById('logCount');
        this.logCount1Element = document.getElementById('logCountSC');
        this.logCount2Element = document.getElementById('logCountBA');
        this.logCount3Element = document.getElementById('logCountLab1');
        this.logCount4Element = document.getElementById('logCountLab2');
        this.idContainer = document.getElementById('logContainer');

        this.btn.addEventListener('click', () => this.dataSc());
        this.btn1.addEventListener('click', () => this.dataBa());
        this.btn2.addEventListener('click', () => this.dataLab1());
        this.btn3.addEventListener('click', () => this.dataLab2());
        this.btnclear.addEventListener('click', () => this.clearLogs());
    }

   
   
   
}
