let spillervin = 0;
let machinevin = 0;
let uavgjort = 0;
const start = document.getElementById("StartGame");
const reset = document.getElementById("Reset");
function playRound() {
    document.getElementById("paper").addEventListener("click", function () {
        GameShow(spillervin, machinevin);
        document.getElementById("spiller").src = "paper.png";
        let random = (Math.floor(Math.random() * 3) + 1);
        if (random == 1) {
            document.getElementById("machine").src = "rock.png";
            spillervin += 1;
            document.getElementById("SpillerText").innerHTML = "Spiller: " + spillervin;
            setTimeout(() => {
                document.getElementById("spiller").src = "machine.png";
                document.getElementById("machine").src = "machine.png";
            }, 3000);
        }
        if (random == 2) {
            document.getElementById("machine").src = "paper.png";
            uavgjort += 1;
            document.getElementById("UavgjorText").innerHTML = "Uavgjort: " + uavgjort;
            setTimeout(() => {
                document.getElementById("spiller").src = "machine.png";
                document.getElementById("machine").src = "machine.png";
            }, 3000);
        }
        if (random == 3) {
            document.getElementById("machine").src = "scissor.png";
            machinevin += 1;
            document.getElementById("MachineText").innerHTML = "Maskin: " + machinevin;
            setTimeout(() => {
                document.getElementById("spiller").src = "machine.png";
                document.getElementById("machine").src = "machine.png";
            }, 3000);

        }
    });
    document.getElementById("rock").addEventListener("click", function () {
        GameShow(spillervin, machinevin);
        document.getElementById("spiller").src = "rock.png";
        let random = (Math.floor(Math.random() * 3) + 1);
        if (random == 1) {
            document.getElementById("machine").src = "rock.png";
            uavgjort += 1;
            document.getElementById("UavgjorText").innerHTML = "Uavgjort: " + uavgjort;
            setTimeout(() => {
                document.getElementById("spiller").src = "machine.png";
                document.getElementById("machine").src = "machine.png";
            }, 3000);
        }
        if (random == 2) {
            document.getElementById("machine").src = "paper.png";
            machinevin += 1;
            document.getElementById("MachineText").innerHTML = "Maskin: " + machinevin;
            setTimeout(() => {
                document.getElementById("spiller").src = "machine.png";
                document.getElementById("machine").src = "machine.png";
            }, 3000);
        }
        if (random == 3) {
            document.getElementById("machine").src = "scissor.png";
            spillervin += 1;
            document.getElementById("SpillerText").innerHTML = "Spiller: " + spillervin;
            setTimeout(() => {
                document.getElementById("spiller").src = "machine.png";
                document.getElementById("machine").src = "machine.png";
            }, 3000);
        }
    });
    document.getElementById("scissor").addEventListener("click", function () {
        GameShow(spillervin, machinevin);
        document.getElementById("spiller").src = "scissor.png";
        let random = (Math.floor(Math.random() * 3) + 1);
        if (random == 1) {
            document.getElementById("machine").src = "rock.png";
            machinevin += 1;
            document.getElementById("MachineText").innerHTML = "Maskin: " + machinevin;
            setTimeout(() => {
                document.getElementById("spiller").src = "machine.png";
                document.getElementById("machine").src = "machine.png";
            }, 3000);
        }
        if (random == 2) {
            document.getElementById("machine").src = "paper.png";
            spillervin += 1;
            document.getElementById("SpillerText").innerHTML = "Spiller: " + spillervin;
            setTimeout(() => {
                document.getElementById("spiller").src = "machine.png";
                document.getElementById("machine").src = "machine.png";
            }, 3000);
        }
        if (random == 3) {
            document.getElementById("machine").src = "scissor.png";
            uavgjort += 1;
            document.getElementById("UavgjorText").innerHTML = "Uavgjort: " + uavgjort;
            setTimeout(() => {
                document.getElementById("spiller").src = "machine.png";
                document.getElementById("machine").src = "machine.png";
            }, 3000);
        }
    });
}

function ResetGame() {
    spillervin = 0;
    machinevin = 0;
    uavgjort = 0;
    document.getElementById("SpillerText").innerHTML = "Spiller: " + spillervin;
    document.getElementById("UavgjorText").innerHTML = "Uavgjort: " + uavgjort;
    document.getElementById("MachineText").innerHTML = "Maskin: " + machinevin;
    document.getElementById("NewGame").innerHTML = "";
    document.getElementById("spiller").src = "machine.png";
    document.getElementById("machine").src = "machine.png";

}
function GameShow(spillervin, machinevin) {
    if (spillervin == 4) {
        console.log("Spiller Vin");
        document.getElementById("SpillerText").innerHTML = "Spiller: " + spillervin;
        document.getElementById("UavgjorText").innerHTML = "Uavgjort: " + uavgjort;
        document.getElementById("MachineText").innerHTML = "Maskin: " + machinevin;
        document.getElementById("NewGame").innerHTML = "you win";
        return;
    } else if (machinevin == 4) {
        document.getElementById("SpillerText").innerHTML = "Spiller: " + spillervin;
        document.getElementById("UavgjorText").innerHTML = "Uavgjort: " + uavgjort;
        document.getElementById("MachineText").innerHTML = "Maskin: " + machinevin;
        document.getElementById("NewGame").innerHTML = "you lose";
        return;
    }
}
start.addEventListener('click', playRound);
reset.addEventListener('click', ResetGame);









