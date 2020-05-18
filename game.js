var game = new Vue({
    el: '#app',
    data: {
        currentPlace: 0,
        startGame: false,
        startGamee: false,
        nextTurn: 0,
        busyField: [],
        signs: [0,0,0,0,0,0,0,0,0],
        fullCheck: false,
        gameEnded: false
    },
    filters: {},
    methods: {
      gameStart() {
          this.startGame = true;
      },
      gameeStart(ind) {
        this.startGamee = true;
        this.nextTurn = ind;
      },
      move(ind) {
        if (this.busyField.indexOf(ind) === -1 && this.gameEnded === false) {
        this.signs[ind] = this.nextTurn;
        
        this.busyField.push(ind);
        this.checkFull();
        this.checkWin();
        if (this.gameEnded === false) {
        if (this.nextTurn === 'X') {
          this.nextTurn = 'O';
        } else {
          this.nextTurn = 'X';
        }
      }
        
        
      }
    },
      checkFull() {
        if (this.busyField.length === 9) {
          this.fullCheck = true;
        }
      },
      checkWin() {
        if (this.busyField.length > 4) {
          for (var i = 0; i < 3; i++) {
            if (this.signs[i] === this.signs[i+3] && 
                this.signs[i] === this.signs[i+6]) {
                  if (this.signs[i] === 0) {}
                  else {
                    this.gameEnded = true;
                  }
            }
          } if(this.gameEnded === false){
          for (var j = 0; j < 7; j = j+3) {
            if (this.signs[j] === this.signs[j+1] && 
                this.signs[j] === this.signs[j+2]) {
                  if (this.signs[j] === 0) {}
                  else {
                    this.gameEnded = true;
                  }
            }
          }
        }
        if(this.gameEnded === false){
          
            if (this.signs[2] === this.signs[4] && 
                this.signs[4] === this.signs[6]) {
                  if (this.signs[2] === 0) {}
                  else {
                    this.gameEnded = true;
                  }
            } else if (this.signs[0] === this.signs[4] && 
              this.signs[0] === this.signs[8]) {
                if (this.signs[0] === 0) {}
                  else {
                    this.gameEnded = true;
                  }
              }
          
        }
         
        }
      }
    },
    computed: {
    }
     
  });