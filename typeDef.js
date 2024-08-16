
export const typeDefs = `

    type Contact{
        Id:ID!
        Name:String
        AccountId: ID
        Account: Account
    }

    type Account {
        Id:ID!
        Name: String
        Contacts: [Contact]
        CreatedYear:Int
    }
    
    type Query {
        Contacts: [Contact]
        Accounts(Name:String):[Account]
    }

    type Mutation{
        CreateContact(AccountId:ID!,Name:String): Contact
    }

`;