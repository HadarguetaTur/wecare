import prisma from '@/app/libs/prismadb'
import { NextResponse } from 'next/server';
import getCurrentUser from '@/app/actions/getCurrentUser';

export async function POST(
    request: Request
) {
    try {

        const currentUser = await getCurrentUser();

        if(!currentUser){
            return NextResponse.error()
        }

        return 
    } catch (error) {
        console.log(error);
    }
}
