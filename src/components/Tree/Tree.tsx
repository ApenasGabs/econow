import treeImg from '../../assets/tree.png'

const  Tree = ()=> {
  const top = Math.random() * window.innerHeight;
  const left = Math.random() * window.innerWidth;

  return (
    <img 
      src={treeImg}
      alt="tree" 
      style={{ position: 'absolute', top: `${top}px`, left: `${left}px` }} 
    />
  );
}

export default Tree