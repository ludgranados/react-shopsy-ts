enum TypeColor {
    Electronics = '#FFC107',
    Jewelery = '#007BFF',
    MensClothing = '#DC3545',
    WomensClothing = '#17A2B8',
  }
  export const setTypeColor = (type: string): string => {
    switch (type) {
      case "electronics":
        return TypeColor.Electronics;
      case "jewelery":
        return TypeColor.Jewelery;
      case "men's clothing":
        return TypeColor.MensClothing;
      case "women's clothing":
        return TypeColor.WomensClothing;
        default:
        return '#333';
    }
  };