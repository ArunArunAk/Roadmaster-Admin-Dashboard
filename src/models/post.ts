// export interface Post {
//     title:string;
//     permalink:string;
//     category:{
//         categoryId:string,
//         category:string
//     }
//     postimgpath:string,
//     excerpt:string,
//     content:string,
//     isFeautured:boolean,
//     views:number,
//     status:string,
//     createAt:Date
//     comments:{
//         username: string;
//          comment: string;
//          createdAt: Date; 
//          showstatus:boolean 
//     }
// }

// post.model.ts

export interface Post {
    title: string;
    permalink: string;
    category: {
      categoryId: string;
      category: string;
    };
    postimgpath: string;
    excerpt: string;
    content: string;
    isFeautured: boolean;
    views: number;
    status: string;
    createAt: Date;
    comments?: Comment[]; // Array to store comments
  }
  
  export interface Comment {
    username: string;
    comment: string;
    createdAt: Date;
  }
  