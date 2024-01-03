export const complySize = (windowWidth:number, initialSize:number, initialWindowWidth:number) => {



    const compliedSize = windowWidth / initialWindowWidth * initialSize;

    return compliedSize + "px"
  };