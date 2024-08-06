function findProduct(name, data) {
    for (let i of data.products) {
        if (i.name.trim() === name.trim()) {
            return i;
        }
    }
    return { error: "Product Not Found !" }
}



export default async function ProductLoader({ params, request }) {
    let data = null;
    try {
        let res = await fetch("/products.json");
        let tmp = await res.json();
        data = {info : findProduct(params.name, tmp), allproducts : tmp};
    } catch (err) {
        data = {error : err.message};
    }
    return data;
}