import bcrypt from 'bcrypt'
import prisma from '@/app/libs/prismadb'
import { NextResponse } from 'next/server';

export async function POST(
    request: Request
) {
    try {
        const body = await request.json();
        console.log(body);

        const {
            email,
            name,
            password,
            isCareProvider,
            description,
            category
        } = body


        const hashedPassword = await bcrypt.hash(password, 12);

        const newUser = await prisma.user.create({
            data: {
                email,
                name,
                hashedPassword,
                isCareProvider
            }
        })
        if(isCareProvider===true){
            const newProvider = await prisma.treatments.create({
                data:{
                    id: newUser.id,
                    userId:newUser.id,
                    title: name,
                    description,
                    category,
                }
    
            })       
        }

     
        return NextResponse.json(newUser)
    } catch (error) {
        console.log(error);
    }
}
