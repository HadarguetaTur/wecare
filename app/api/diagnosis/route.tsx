import { FreeTextAnalysis } from "@/app/helpers/utils";
import { NextResponse } from "next/server";
import { OpenAI } from "openai";
import Configuration from "openai";
import prisma from '@/app/libs/prismadb'



export async function POST(
  request: Request
) {

  const config = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAI()
  try {
    const body = await request.json();
    const { reasonForReferral, symptoms } = body.generalProblem.data;
    let genetic = false;
    let siblingSimilarity = false;
    let categoryScores = {
        developmentalMedicalProblem: 0,
        emotionalBehavioralProblem: 0,
        functionalProblem: 0,
        motorProblem: 0,
        communicationProblem: 0,
    };
    
    const analyzeAndIncrementScore = (text:any) => {
        const category = FreeTextAnalysis(text);
        if (categoryScores.hasOwnProperty(category)) {
            categoryScores[category] += 1;
        }
    };

    analyzeAndIncrementScore(reasonForReferral + " " + symptoms);

    analyzeAndIncrementScore(body.parent1.data.healthIssuesParent1);
    analyzeAndIncrementScore(body.parent2.data.healthIssuesParent2);

    // Check for genetic similarity
    if (categoryScores[FreeTextAnalysis(body.parent1.data.healthIssuesParent1)] > 0 ||
        categoryScores[FreeTextAnalysis(body.parent2.data.healthIssuesParent2)] > 0) {
        genetic = true;
    }

    // Analyzing siblings
    if (body.otherChildren && Array.isArray(body.otherChildren.data.brothers)) {
        body.otherChildren.data.brothers.forEach(brother => {
            analyzeAndIncrementScore(brother.healthDevelopmentalProblems);
            if (FreeTextAnalysis(brother.healthDevelopmentalProblems) === childCategory) {
                siblingSimilarity = true;
            }
        });
    }

    // Increment scores based on 'Yes' answers
    Object.keys(body).forEach(categoryKey => {
        if (body[categoryKey].data) {
            Object.values(body[categoryKey].data).forEach(answer => {
                if (answer === 'Yes' && categoryScores.hasOwnProperty(categoryKey)) {
                    categoryScores[categoryKey] += 1;
                }
            });
        }
    });

    // Determining the highest scoring category
    let highestScore = 0;
    let highestScoringCategory = null;

    Object.entries(categoryScores).forEach(([category, score]) => {
        if (score > highestScore) {
            highestScore = score;
            highestScoringCategory = category;
        }
    });

    console.log(highestScoringCategory);
    


    
    const diagnosisResult = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: 'Committee to determine the type of initial treatment in the field of child development',
        },
        {
          role: 'user',
          content: `Write a long and detailed Initial diagnosis which refers to an initial diagnosis in the field ${highestScoringCategory}, Explain why the  symptoms: ${symptoms} will be answered in this specific area If the problem is a functional problem, recommend an initial diagnosis by an occupational therapist, if the problem is a physiological problem, recommend a diagnosis by a physical therapist, if the problem is a communication problem, recommend a diagnosis by a communication therapist, if the problem is emotional, developmental, recommend a diagnosis by a developmental psychologist. 
              The response should be formatted in SEO-friendly HTML, 
              limited to the following HTML tags: p, h1, h2, h3, h4, h5, h6, strong, i, ul, li, ol.`,
        },
      ],
      temperature: 0,
    });

    const diagnosisContent = diagnosisResult.choices[0]?.message.content;
    const diagnosisData = {
      userId:body.userId,
      genetic,
      siblingSimilarity,
      highestScoringCategory,
      reasonForReferral: body.generalProblem.data.reasonForReferral,
      symptoms: body.generalProblem.data.symptoms,
      motorProblems: JSON.stringify(body.motorProblem),
      functionalProblems: JSON.stringify(body.functionalProblem),
      emotionalBehavioralProblems: JSON.stringify(body.emotionalBehavioralProblem),
      developmentalMedicalProblems: JSON.stringify(body.developmentalMedicalProblem),
      communicationProblems: JSON.stringify(body.communicationProblem),
      generalProblems: JSON.stringify(body.generalProblem),
      parent1Data: JSON.stringify(body.parent1.data),
      parent2Data: JSON.stringify(body.parent2.data),
      otherChildren: JSON.stringify(body.otherChildren.data),
      diagnosisContent: diagnosisContent
    };
   const dataToSave =  await prisma.diagnosis.create({
      data: diagnosisData,
    });
    return new NextResponse(JSON.stringify(dataToSave));
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
