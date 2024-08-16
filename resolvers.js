
const Contacts = [
    {
        Id:101,
        Name:'James Roy',
        AccountId: 1
    },
    {
        Id:102,
        Name:'John Doe',
        AccountId: 2
    },
    {
        Id:103,
        Name:'Steve Smith',
        AccountId: 1
    }
  ]
  const Accounts = [
    {
      Name: 'The Awakening',
      Contact: Contacts,
      Id:1,
      CreatedYear:2024
    },
    {
      Name: 'City of Glass',
      Contact: Contacts,
      Id:2,
      CreatedYear:2024
    },
  ];

// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
export const resolvers = {
    //link Account with Contact
    Contact:{
        Account:(parent,args,context,info)=>{
            return Accounts.find(acc=>acc.Id == parent.AccountId)
        }
    },
    //Link Contacts with Account
    Account:{
        Contacts:(parent,args,context,info)=>{
            return Contacts.filter(con=>con.AccountId == parent.Id)
        }
    },
    Query: {
        Accounts: (parent,args,context,info) => {
            if(args.Name){
                return Accounts.filter(acc=>acc.Name.toLowerCase().includes(args.Name.toLowerCase()))
            }else {
                return Accounts;
            }
        },
        Contacts: () => Contacts
    },
  };