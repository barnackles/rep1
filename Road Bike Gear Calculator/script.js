//window onload
window.onload = function () {
// speed change value -->        
                     
function updateValue() {
//console.log(this.value);
    let kph = document.getElementById('speedometer');
    kph.textContent = this.value;
// console.log(kph.textContent)  
}
let speed = document.getElementById('speedslider');
speedslider.addEventListener('change',updateValue);           
// speedslider.addEventListener('mousemove', updateValue);  
}
//cadence change value
   
/* cadence speed value */
const cadence = document.getElementById('cadenceslider');
cadenceslider.addEventListener('change', updateValue);         
//   cadenceslider.addEventListener('mousemove', updateValue);                       
function updateValue() {
//console.log(this.value);
    const rpm = document.getElementById('revmeter');
    rpm.textContent = this.value; 
}
//calculating gears, speed  -->

// onload script
const plate = document.getElementById('chainringteeth').value;
const cog = document.getElementById('cogteeth').value;
const gr = Math.ceil((plate / cog) * 100)/100;
document.getElementById('ratiodisplay').innerHTML = gr;
//console.log(gr)
const rc = Math.ceil(document.getElementById('circumference').value / 1000 *100) / 100; // rear wheel revolution distance rounded
const vmmpm = (cadence.value * gr * rc); //ugr  updated gear ratio
//console.log(vmmpm);// velocity in mm per minute
const vkph = Math.ceil((vmmpm * 60)/1000 * 100) / 100;
//console.log(vkph);//rounding 
            
// onchange script
function updateGr() {
    const plate = document.getElementById('chainringteeth').value;
    const cog = document.getElementById('cogteeth').value;
    const gr = Math.ceil((plate / cog) * 100)/100;
    document.getElementById('ratiodisplay').innerHTML = gr;
    console.log(gr)

    function updateSpeed() {
        const rc = Math.ceil(document.getElementById('circumference').value / 1000 *100) / 100; // rear wheel revolution distance rounded
        const vmmpm = (cadence.value * gr * rc); //gr  updated gear ratio 
       // console.log(vmmpm);// velocity in mm per minute
        const vkph = Math.ceil((vmmpm * 60)/1000 * 100) / 100;
       // console.log(vkph);//rounding 
        return vkph;
    }
           
    document.getElementById('speedometer').innerHTML = updateSpeed();
//    document.getElementById('speedslider').value = updateSpeed();

}
       
