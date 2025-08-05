

declare global{
    namespace Express{
        interface Requerst{
            user?:IUser
        }
    }
}