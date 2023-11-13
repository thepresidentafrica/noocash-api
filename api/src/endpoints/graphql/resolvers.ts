export const resolvers = {
    Query: {
        hello: () => `Hello there welcome to api monorepo`
    },
    Mutation: {
        hello: (_: unknown, args: { name: string }) => `Hello ${args.name} welcome to api monorepo`

    }
}