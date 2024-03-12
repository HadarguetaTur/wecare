import prisma from '@/app/libs/prismadb';

// Define the mapping from problem categories to treatment categories
const problemToTreatmentCategoryMap = {
    developmentalMedicalProblem: 'Developmental medicine',
    emotionalBehavioralProblem: 'developmental psychologist',
    functionalProblem: 'occupational therapy',
    motorProblem: 'physical therapy',
    communicationProblem: 'communication clinics',
};

export default async function getTreatmentsByCategory(category: string | null | undefined) {
    try {
        console.log('here', category);

        // Use the mapping to find the corresponding treatment category, defaulting to 'developmental psychologist'
        if (!category || !(category in problemToTreatmentCategoryMap)) {
            category = "developmental psychologist";
        } else {
            // Translate the problem category to the treatment category
            category = problemToTreatmentCategoryMap[category];
        }

        const alltreatments = await prisma.treatments.findMany({
            where: {
                category: category
            }
        });

        console.log(alltreatments);

        if (!alltreatments) {
            return null;
        }

        return alltreatments;

    } catch (error) {
        console.error(error);
        return null;
    }
}