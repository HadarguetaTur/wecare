
import prisma from '@/app/libs/prismadb';



export default async function getAlltreatments() {
    try {


        const alltreatments = await prisma.treatments.findMany();

        if (!alltreatments) {
            return null
        }

        return alltreatments

    } catch (error: any) {
        return null
    }

}
