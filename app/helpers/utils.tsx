import { categories } from '@/app/static-data/utils'
import { CategoryKey, DiagnosisState } from '../components/modals/diagnosisModal';


export const FreeTextAnalysis = (text: string): keyof DiagnosisState| null => {
  console.log(text);
  
  let categoryCounts: Record<CategoryKey, number> = {
    generalProblem: 0,
    motorProblem: 0,
    functionalProblem: 0,
    emotionalBehavioralProblem: 0,
    developmentalMedicalProblem: 0,
    communicationProblem: 0,
    otherChildren: 0,
    parent1: 0,
    parent2: 0
  };
  
  const lowerCaseText = text.toLowerCase();
  (Object.keys(categories) as CategoryKey[]).forEach((catKey) => {
    categories[catKey].forEach((keyword: string) => {
      if (lowerCaseText.includes(keyword.toLowerCase())) {
        categoryCounts[catKey]++;
      }
    });
  });

  let maxCategory: CategoryKey | null = null;
  let maxScore = 0;
  Object.entries(categoryCounts).forEach(([key, value]) => {
    if (value > maxScore) {
      maxCategory = key as CategoryKey; // This ensures the key is treated as a CategoryKey
      maxScore = value;
    }
  });

  console.log(maxCategory);
  return maxCategory;
}

//let text = "I've noticed some unusual behaviors in my child, Alex, who is three years old. He doesn't make much eye contact and seems more interested in playing alone. He gets upset with small changes in routines and is sensitive to loud noises. Alex hasn't started speaking as much as children his age typically do.";
