export default defineNuxtRouteMiddleware((to, from) => {
    const {status} = useAuth();
    const loggedIn = status.value === 'authenticated';

    const loginUserCannotAccess = [
        '/login',
    ];

    const isProtectedRoute = loginUserCannotAccess.includes(to.path);

    if (loggedIn) {
        if (isProtectedRoute) {
            return navigateTo('/');
        }
    } else {
        if (!isProtectedRoute) {
            return navigateTo('/login');
        }
    }
});
