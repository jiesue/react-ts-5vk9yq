import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

interface AppProps { }
interface AppState {
  name: string;
}
type jie =  ReadOnly<AppState>

class App extends Component<AppProps, jie> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React'
    };
    this.canvas1 = React.createRef()
    this.canvas2 = React.createRef()
  }

  componentDidMount = () => {

    function getProperty(obj: T, key: K) {
        return obj[key];
    }

  let x = { a: 1, b: 2, c: 3, d: 4 };

  getProperty(x, "a"); // okay
  console.log(getProperty(x, "a"));
  console.log(getProperty(x, "m"))
  // error: Argument of type 'm' isn't assignable to 'a' | 'b' | 'c' | 'd'.
    // var canvas = this.canvas.current
    // var ctx = canvas.getContext("2d");
    // var image = new Image();
    // image.crossOrigin = "*";
    // image.src = "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201810%2F11%2F20181011122353_yhmof.thumb.700_0.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1623920049&t=98d8ca9985f0795feeda1c66f522acde";
    // image.onload = function(){
    //   canvas.width = image.width;
    //   canvas.height = image.height;
    //   ctx.drawImage(image,0,0);
    // }

    // setTimeout(()=>{
    //   var imageData = ctx.getImageData(0,0,image.width,image.height).data;
    //   console.log(imageData)
    //   var canvas2 = this.canvas2.current
    //   var ctx2 = canvas2.getContext("2d");
    //   ctx2.fillStyle = "#fff";
    //   ctx2.fillRect(0,0,image.width,image.height);

    //   var gap = 6;

    //   for (var h = 0; h < image.height; h+=gap) {
    //       for(var w = 0; w < image.width; w+=gap){
    //               var position = (image.width * h + w) * 4;
    //               var r = imageData[position], g = imageData[position + 1], b = imageData[position + 2];
    //               if(r+g+b === 0){
    //                       ctx2.fillStyle = "#f40";
    //                       ctx2.fillRect(w,h,4,4);
    //               }
    //       }
    //   }
    // },2200)

                



  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>
        <canvas ref = {this.canvas2}></canvas>
        <div ref = {this.canvas1}></div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
