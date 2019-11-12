export default async context => {
    await context.store.dispatch('user/nuxtClientInit', context)
}
