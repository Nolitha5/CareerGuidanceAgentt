/**
 * Maps quiz answers → dataset skill names.
 * Keys match question IDs; values map answer choices → {skillName: weight}.
 *
 * Skill names must exactly match what appears in the Kaggle dataset:
 * Python, Accounting, Data Analysis, MS Office, Financial Analysis,
 * SQL, Marketing, Counseling, Communication, Machine Learning
 */
export const QUIZ_TO_SKILLS = {
  activity: {
    building:    { Python: 0.9, 'Machine Learning': 0.7, SQL: 0.6 },
    analytical:  { 'Data Analysis': 0.9, SQL: 0.8, 'Financial Analysis': 0.7, Python: 0.5 },
    helping:     { Counseling: 0.9, Communication: 0.8 },
    creative:    { Marketing: 0.9, Communication: 0.5 },
    managing:    { 'MS Office': 0.9, Accounting: 0.7, Communication: 0.5 },
    researching: { 'Data Analysis': 0.9, Python: 0.7, SQL: 0.6, 'Machine Learning': 0.5 },
  },
  strength: {
    technical:     { Python: 0.9, SQL: 0.8, 'Machine Learning': 0.8 },
    logical:       { 'Data Analysis': 0.9, 'Financial Analysis': 0.8, Accounting: 0.7, SQL: 0.6 },
    communication: { Communication: 0.9, Marketing: 0.7, Counseling: 0.6 },
    organized:     { 'MS Office': 0.9, Accounting: 0.7, SQL: 0.5 },
    creative:      { Marketing: 0.9, Communication: 0.6 },
    leadership:    { Marketing: 0.7, Communication: 0.7, 'MS Office': 0.5 },
  },
  impact: {
    commercial:  { 'Financial Analysis': 0.9, Marketing: 0.8, Accounting: 0.7 },
    social:      { Counseling: 0.9, Communication: 0.8 },
    scientific:  { Python: 0.9, 'Machine Learning': 0.9, 'Data Analysis': 0.8 },
    operational: { 'MS Office': 0.9, Accounting: 0.7, SQL: 0.7 },
    aesthetic:   { Marketing: 0.8, Communication: 0.6 },
  },
  numbers: {
    high: { Python: 0.9, SQL: 0.8, 'Financial Analysis': 0.8, 'Data Analysis': 0.7 },
    mid:  { Accounting: 0.8, 'MS Office': 0.7, Marketing: 0.6, SQL: 0.5 },
    low:  { Communication: 0.8, Counseling: 0.8, Marketing: 0.5 },
  },
  goal: {
    firstjob:   { 'MS Office': 0.6, Communication: 0.6, Accounting: 0.5 },
    specialist:  { Python: 0.7, 'Machine Learning': 0.7, SQL: 0.6, 'Financial Analysis': 0.6 },
    money:       { 'Financial Analysis': 0.9, Accounting: 0.7, Python: 0.6, Marketing: 0.5 },
    difference:  { Counseling: 0.9, Communication: 0.7, 'Data Analysis': 0.5 },
    explore:     { Marketing: 0.6, Communication: 0.6, 'Data Analysis': 0.5 },
  },
}

/**
 * Convert quiz answers object → weighted skill vector.
 * Returns { skillName: totalWeight, ... }
 */
export function answersToSkillVector(answers) {
  const vector = {}
  for (const [qId, val] of Object.entries(answers)) {
    const vals = Array.isArray(val) ? val : [val]
    for (const v of vals) {
      const skillWeights = QUIZ_TO_SKILLS[qId]?.[v] || {}
      for (const [skill, w] of Object.entries(skillWeights)) {
        vector[skill] = (vector[skill] || 0) + w
      }
    }
  }
  return vector
}

/**
 * Score a single career from careerData using a skill vector.
 * Returns a number — higher is better.
 */
export function scoreCareerFromData(careerEntry, skillVector) {
  let score = 0
  for (const [skill, freq] of Object.entries(careerEntry.skill_weights || {})) {
    if (skillVector[skill]) {
      score += skillVector[skill] * freq * 100
    }
  }
  return score
}
