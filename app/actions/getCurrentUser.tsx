import { getServerSession } from "next-auth/next";
import prisma from '@/app/libs/prismadb';

export async function getSession() {
    return await getServerSession();
}

export default async function getCurrentUser() {
    try {
        const session =await getSession();
        console.log('Session:', session);
        
        if(!session?.user?.email){
            return null
        }

        const currentUser = await prisma.user.findUnique({
            where:{
                email : session.user.email as string 
            }
        });

        if(!currentUser){     
            return null
        }

        return currentUser
        
    } catch (error:any) {   
        return null       
    }
    
}