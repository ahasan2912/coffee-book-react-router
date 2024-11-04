import toast from "react-hot-toast";

const getAllFovorites = ()=>{
    const favorites = localStorage.getItem('favorites');
    if(favorites){
        return JSON.parse(favorites);
    }
    else{
        return [];
    }
}

const addFavoite = coffee =>{
    const favorites = getAllFovorites();
    const isExist = favorites.find(item => item.id === coffee.id);
    if(isExist){
        return toast.error('Coffee Already Exists!');
    }
    favorites.push(coffee);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    toast.success('Successfully added!');
}
//remove a coffee from local strage
 const removeFavorite = (id) => {
    const favorites = getAllFovorites();
    const remaining = favorites.filter(coffee => coffee.id !== id);
    localStorage.setItem('favorites', JSON.stringify(remaining));
    toast.success('Successfully Remove!');
 }

export { addFavoite, getAllFovorites, removeFavorite };

