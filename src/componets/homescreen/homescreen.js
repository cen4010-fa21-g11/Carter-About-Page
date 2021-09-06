import Radium, { StyleRoot } from 'radium';
import { bounce, fadeInDown, fadeInLeft, fadeInRight } from 'react-animations'; 
import manImage from '../../assets/man.png'
import processorImage from '../../assets/processor.jpg'

function HomeScreen() {

  const movements = {
    bounce: {
      animation: 'x 2s',
      animationName: Radium.keyframes(bounce, 'bounce')
    },
    fadeInDown: {
      animation: 'x 2s',
      animationName: Radium.keyframes(fadeInDown, 'fadeInDown')
    },
    fadeInLeft: {
      animation: 'x 2s',
      animationName: Radium.keyframes(fadeInLeft, 'fadeInLeft')
    },
    fadeInRight: {
      animation: 'x 2s',
      animationName: Radium.keyframes(fadeInRight, 'fadeInRight')
    }
  };


  return (
    <StyleRoot>
      <div className="align-text" style={movements.fadeInDown}>
        <h1 className="homescreen-head">
          Hello, my name is Carter Sellgren
        </h1>
      </div>
      <img src={manImage} alt="Cartoon drawing of man"  
        style={{ maxWidth: "50%" }}
      />
      <img src={processorImage} alt="Computer Processor"  
        style={{ maxWidth: "50%" }}
      />
    </StyleRoot>
  );
}

export default HomeScreen;
