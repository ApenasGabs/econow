const  Tree = ()=> {
  const top = Math.random() * window.innerHeight;
  const left = Math.random() * window.innerWidth;

  return (
    <img 
      src="../../../public/tree.png" 
      alt="tree" 
      style={{ position: 'absolute', top: `${top}px`, left: `${left}px` }} 
    />
  );
}

export default Tree