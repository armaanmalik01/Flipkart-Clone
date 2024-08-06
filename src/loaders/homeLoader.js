export default async function homeLoader({params , request}) {
    try{
        let res = await fetch("/products.json");
        let data = await res.json();
        if(data.brands.length) {
            return data;
        }
        throw new Error("0 :) Products Found")
    }catch(error) {
        return error.message;
    } 
}