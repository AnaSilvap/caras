let canvas = document.querySelector("#myCanvas")
let ctx=canvas.getContext("2d")
class cara{
    constructor(x,y,angle,r){
    this.x=x;
    this.y=y;
    this.angle=angle;
    this.r=r;
    }

    dibujarse(){
        ctx.translate(this.x, this.y)
        ctx.rotate(this.angle+Math.PI/180)
    ctx.beginPath()
        ctx.arc(0,0,this.r,0,2*Math.PI)
        ctx.stroke()
    ctx.beginPath()
        ctx.arc(0,0,this.r/2, 0.25*Math.PI,0.75*Math.PI)
        ctx.stroke();
    ctx.beginPath()
        ctx.arc(-this.r/3,-this.r/3,this.r/6,0,2*Math.PI)
        ctx.stroke();
    ctx.beginPath()
        ctx.arc(this.r/3,-this.r/3,this.r/6,0,2*Math.PI)
        ctx.stroke();
    ctx.beginPath()
        ctx.arc(-this.r/3,-this.r/3,this.r/12,0,2*Math.PI)
        ctx.fill();
    ctx.beginPath()
        ctx.arc(this.r/3,-this.r/3,this.r/20,0,2*Math.PI)
        ctx.fill();
    ctx.beginPath()
        ctx.arc(-this.r/60,this.r/7,this.r/15,0,2*Math.PI)
        ctx.fill();
        ctx.rotate(-this.angle*Math.PI/180);
        ctx.translate(-this.x,-this.y)   
    }
}
let Yorch = new cara(200,100,0, 70)
let Nico= new cara (200,250,45,40)
Yorch.dibujarse();
Nico.dibujarse();
let Jacob = new cara (200,400,-45,30)
Jacob.dibujarse();
let Anna = new cara(200,500,180,20)
Anna.dibujarse();

let contenedor =  document.querySelector("#contenedor")
contenedor.innerHTML = "Nico, Yorch, Jacob, Anna";