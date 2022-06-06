export default function userApi() {
    console.log('mock user');
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve({ name: 'king', age: 20 }), 3000);
    })
}