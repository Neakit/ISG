export default {
    transition(to, from) {
        const routes = [
            '/',
            '/transport', 
            '/smart',
            '/contacts',
        ]
        const indexFrom = routes.indexOf(from && from.fullPath); 
        const indexTo = routes.indexOf(to && to.fullPath);
        if(indexFrom < indexTo) {
            return 'sliding' 
        } else {
            return "sliding-reverse"
        } 
    }
}