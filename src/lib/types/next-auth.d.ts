import NextAuth from "next-auth";

declare module "next-auth" {
  
  interface Session {
    user: {
      id: string
        email: string
        name: String
        img: string
        data: object
        primary_premise_id: string;
        primary_premise_name: string;
        premises_associated_with: string[]
        accessToken: string
        current_premise_name: any
        refreshToken: string
        accessTokenExpires: number
        role: string
        isAdmin: boolean
        username: string
        sub_premise_access_control_reqd: string
        subpremiseArray: string[]

    };
  }
}
