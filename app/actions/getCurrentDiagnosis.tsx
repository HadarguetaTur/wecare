import { getServerSession } from "next-auth/next";
import prisma from '@/app/libs/prismadb';

export async function getSession() {
    return await getServerSession();
}

export default async function getCurrentDiagnosis(currentId: String) {
    try {


        const currentDiagnosis = await prisma.diagnosis.findUnique({
            where: {
                id: currentId as string
            }
        });

        if (!currentDiagnosis) {
            return null
        }

        return currentDiagnosis

    } catch (error: any) {
        return null
    }

}