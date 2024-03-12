export const GENERALDATA = [
    {
        label: "What is the reason for referral to treatment",
        name: "reasonForReferral",
        type: "textarea",
    },
    {
        label: "Describe the symptoms of the problem",
        name: "symptoms",
        type: "textarea",
    },
    {
        label: "What is the gender of the child?",
        name: "gender",
        type: "select",
        options: ['male', 'female', 'other']
    },
    {
        label: "What educational setting is the child in?",
        name: "educationalSetting",
        type: "select",
        options: ['Daycare', 'kindergarten', 'at home with parent', 'at home with nanny', 'school', 'other']
    },
    {
        label: "Date of birth",
        name: "dateOfBirth", 
        type: "date"
    },
    {
        label: "Name",
        name: "name",
        type: "text"
    }
];

export const PARENT1DATA = [
    {
        label: 'Marital Status',
        name: 'maritalStatus',
        type: 'select',
        options: ['Married', 'Single Parent', 'Divorced', 'Other']
    },
    {
        label: "Amount of additional siblings",
        name: 'siblings',
        type: 'number',
    },
    {
        label: 'Country of birth Parent 1',
        name: 'countryOfBirthParent1', 
        type: 'text',    
    },
    {
        label: "Year of Birth Parent 1",
        name: 'yearOfBirthParent1', 
        type: "date",
    },
    {
        label: "Years of education parent 1",
        name: 'yearsOfEducationParent1', 
        type: "number",
    },
    {
        label: 'Work parent 1',
        name: 'workParent1', 
        type: 'text',
    },
    {
        label: "Developmental problems in the past\health in the present parent 1",
        name: 'healthIssuesParent1', 
        type: "textarea"
    },
];

export const PARENT2DATA = [
    {
        label: "Country of birth Parent 2",
        name: 'countryOfBirthParent2',
        type: 'text'
    },
    {
        label: "Year of Birth Parent 2",
        name: 'yearOfBirthParent2', 
        type: "date",
    },
    {
        label: "Years of education parent 2",
        name: 'yearsOfEducationParent2', 
        type: "number",
    },
    {
        label: 'Work parent 2',
        name: 'workParent2', 
        type: 'text',
    },
    {
        label: "Developmental problems in the past\health in the present parent 2",
        name: 'healthIssuesParent2',
        type: "textarea"
    },
];


export const OTHERCHILDRENDATA = [
    {
        label: "name",
        name: 'name', 
        type: "text"
    },
    {
        label: "Date of birth",
        name: 'dateOfBirth', 
        type: "date"
    },
    {
        label: "What is the gender of the child?",
        name: 'gender', 
        type: "select",
        options: ['male', 'female', 'other']
    },
    {
        label: "Health/developmental problems",
        name: 'healthDevelopmentalProblems',
        type: "textarea"
    }
];

export const  COMMUNICATIONPROBLEMDATA = [
    {
        label: "Difficulty reaching out to initiate the game",
        name:"reachingOutToTheGame",
        type: "select",
        options: ['Yes', 'No', 'Not Relevant']
    },
    {
        label: "Trouble transferring an object from one hand to another",
        name:"handToHand",
        type: "select",
        options: ['Yes', 'No', 'Not Relevant']
    },
    {
        label: "Problems circling two objects with hands",
        name:"circleTwoObject",
        type: "select",
        options: ['Yes', 'No', 'Not Relevant']
    },
    {
        label: "Difficulty clapping hands",
        name:"clap",
        type: "select",
        options: ['Yes', 'No', 'Not Relevant']
    },
    {
        label: "Issues with murmuring or producing playing sounds and voices",
        name:"murmuring",
        type: "select",
        options: ['Yes', 'No', 'Not Relevant']
    }
];

export const EMOTIONALBEHAVIORALPROBLEMDATA = [
    {
        name: "sensoryStimuliSensitivity",
        label: "Excessive sensitivity to sensory stimuli indicating distress or discomfort",
        type: "select",
        options: ['yes', 'no', 'not applicable']
    },
    {
        name: "playingAlone",
        label: "Difficulty playing alone or engaging in independent play without adult mediation",
        type: "select",
        options: ['yes', 'no', 'not applicable']
    },
    {
        name: "laughOutLoud",
        label: "Unusual instances or inability to laugh out loud in joyful situations",
        type: "select",
        options: ['Yes', 'No', 'Not Relevant']
    },
    {
        name: "responseToVoice",
        label: "Lack of or inconsistent response to voice or sounds that typically attract attention",
        type: "select",
        options: ['Yes', 'No', 'Not Relevant']
    },
    {
        name: "responseToName",
        label: "Difficulty or delay in responding to their name being called",
        type: "select",
        options: ['Yes', 'No', 'Not Relevant']
    },
    {
        name: "makingEyeContact",
        label: "Difficulty in making or maintaining eye contact",
        type: "select",
        options: ['Yes', 'No', 'Not Relevant']
    }
];

export const FUNCTIONALPROBLEMDATA = [
    {
        label: "Difficulty sitting without support",
        name: "sitting",
        type: "select",
        options: ['Yes', 'No', 'Not Relevant']
    },
    {
        label: "Difficulty using a spoon for eating",
        name:"eatingWithSpoon",
        type: "select",
        options: ['yes', 'no', 'irrelevant']
    },
    {
        label: "Difficulty eating puree",
        name:"eatingPuree",
        type: "select",
        options: ['yes', 'no', 'irrelevant']
    },
    {
        label: "Difficulty eating solids",
        name:"eatingSolids",
        type: "select",
        options: ['yes', 'no', 'irrelevant']
    },
    {
        label: "Difficulty eating independently",
        name:"independentEating",
        type: "select",
        options: ['yes', 'no', 'irrelevant']
    }
];

export const MOTORPROBLEMDATA = [
    {
        name: "liftingHead",
        label: "Difficulty lifting the head while lying on the stomach and carrying weight on the hands",
        type: "select",
        options: ['Yes', 'No', 'Not Relevant']
    },
    {
        name: "flipping",
        label: "Difficulty flipping from stomach to back",
        type: "select",
        options: ['Yes', 'No', 'Not Relevant']
    },
    {
        name: "bellyCrawl",
        label: "Difficulty with belly crawling",
        type: "select",
        options: ['Yes', 'No', 'Not Relevant']
    },
    {
        name: "sixCrawl",
        label: "Difficulty with six crawling",
        type: "select",
        options: ['Yes', 'No', 'Not Relevant']
    },
    {
        name: "standingUp",
        label: "Difficulty standing up from a sitting or lying position",
        type: "select",
        options: ['Yes', 'No', 'Not Relevant']
    },
    {
        name: "walkingWithSupport",
        label: "Difficulty walking even with support",
        type: "select",
        options: ['Yes', 'No', 'Not Relevant']
    },
    {
        name: "independentWalking",
        label: "Difficulty achieving independent walking",
        type: "select",
        options: ['Yes', 'No', 'Not Relevant']
    }
];

export const DEVELOPMENTALMEDICALPROBLEMDATA = [
    {
        name: "breastfed",
        label: "Problems or inability to be breastfed",
        type: "select",
        options: ['yes', 'no', 'irrelevant']
    },
    {
        name: "bottleFeeding",
        label: "Difficulties with feeding from a bottle",
        type: "select",
        options: ['yes', 'no', 'irrelevant']
    },
    {
        name: "emissions",
        label: "Problems with emissions (indicating potential gastrointestinal or neurological issues)",
        type: "select",
        options: ['yes', 'no', 'irrelevant']
    },
    {
        name: "selfRegulation",
        label: "Difficulties with self-regulation - issues with sedation or reliance on a pacifier/finger",
        type: "select",
        options: ['yes', 'no', 'not relevant']
    },
    {
        name: "anesthesia",
        label: "Adverse reactions to anesthesia",
        type: "select",
        options: ['yes', 'no', 'irrelevant']
    },
    {
        name: "sleep",
        label: "Sleep problems",
        type: "select",
        options: ['yes', 'no', 'irrelevant']
    },
    {
        name: "strangerFamilyRecognition",
        label: "Difficulties distinguishing between strangers and family",
        type: "select",
        options: ['yes', 'no', 'irrelevant']
    },
    {
        name: "pregnancyBirthCourse",
        label: "Complications during pregnancy or at birth",
        type: "select",
        options: ['yes', 'no', 'irrelevant']
    },
    {
        name: "medicalProblems",
        label: "Ongoing medical problems",
        type: "select",
        options: ['yes', 'no', 'irrelevant']
    },
    {
        name: "regularMedication",
        label: "Needs for regular medication indicating chronic conditions",
        type: "select",
        options: ['yes', 'no', 'not relevant']
    },
    {
        name: "visionTests",
        label: "Vision tests not conducted despite indications or concerns",
        type: "select",
        options: ['yes', 'no', 'irrelevant']
    },
    {
        name: "hearingTests",
        label: "Hearing tests not conducted despite indications or concerns",
        type: "select",
        options: ['yes', 'no', 'irrelevant']
    }
];




