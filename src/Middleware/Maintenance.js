export default function log({ next, to , router }) {
    // redirect to maintenance page if maintenance mode is on
    // if (process.env.MAINTENANCE_MODE === 'true') {
        if (to.path !== '/maintenance') {
            router.push({path: '/maintenance'});
        }
    // }
}