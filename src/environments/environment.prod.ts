import awsAmplifyConfig from "src/aws-exports";

export const environment = {
  production: true,
  oauth: {
    domain: awsAmplifyConfig.oauth.domain,
    scope: ['email', 'openid'],
    redirectSignIn: awsAmplifyConfig.oauth.redirectSignIn,
    redirectSignOut: awsAmplifyConfig.oauth.redirectSignOut,
    responseType: awsAmplifyConfig.oauth.responseType,
    redirect_uri: awsAmplifyConfig.oauth.redirectSignIn
  },
  serviceUrl: {
    consentGetUser: 'https://h0p82a84v8.execute-api.us-east-1.amazonaws.com/test_v1/consentForm/getUserDetails/',
    consentUpdateUser: 'https://h0p82a84v8.execute-api.us-east-1.amazonaws.com/test_v1/consentForm/acceptConsent/',
    veteranProfileGetUser:'https://h0p82a84v8.execute-api.us-east-1.amazonaws.com/test_v1/userProfile/getUserDetails/',
    caseWorkerUser:'https://h0p82a84v8.execute-api.us-east-1.amazonaws.com/test_v1/uiLayout/getCaseWorkerDetails/', 
    getVeteranId:'https://h0p82a84v8.execute-api.us-east-1.amazonaws.com/test_v1/getVeteranId/',
    veteranProfileUpdateUser:'https://h0p82a84v8.execute-api.us-east-1.amazonaws.com/test_v1/userProfile/updateUserDetails/',
    getHealthTracker:'https://h0p82a84v8.execute-api.us-east-1.amazonaws.com/test_v1/healthTracker/getHealthTracker/',
    updateHealthTracker:'https://h0p82a84v8.execute-api.us-east-1.amazonaws.com/test_v1/healthTracker/updateHealthTracker/',
    saveTransportationForm:'https://h0p82a84v8.execute-api.us-east-1.amazonaws.com/test_v1/transportationForm/saveTransportationRequest/',
    getTransportRequestFormData:'https://h0p82a84v8.execute-api.us-east-1.amazonaws.com/test_v1/transportationForm/getTransportationRequests/',
    approveTransportationForm:'https://h0p82a84v8.execute-api.us-east-1.amazonaws.com/test_v1/transportationForm/approveTransportationRequests/',
    getCaseWorkerEvents:'https://h0p82a84v8.execute-api.us-east-1.amazonaws.com/test_v1/getCalendarEvents/',
    addCaseWorkerEvents:'https://h0p82a84v8.execute-api.us-east-1.amazonaws.com/test_v1/postCalendarEvents',
    getCurrentVeteranEvents:'https://h0p82a84v8.execute-api.us-east-1.amazonaws.com/test_v1/getCurrentVeteranEvents/',
    addUser:'https://h0p82a84v8.execute-api.us-east-1.amazonaws.com/test_v1/addUser/',
    addVeteran:'https://h0p82a84v8.execute-api.us-east-1.amazonaws.com/test_v1/addVeteran/',
    addCaseWorker:'https://h0p82a84v8.execute-api.us-east-1.amazonaws.com/test_v1/addCaseWorker/',
    getAssessmentData: 'https://h0p82a84v8.execute-api.us-east-1.amazonaws.com/test_v1/assessmentDetails/',
    getProgressNotes: 'https://h0p82a84v8.execute-api.us-east-1.amazonaws.com/test_v1/getGoals/',
    createProgressNotes: 'https://h0p82a84v8.execute-api.us-east-1.amazonaws.com/test_v1/progressNotes/addGoal/',
    updateProgressNotes: 'https://h0p82a84v8.execute-api.us-east-1.amazonaws.com/test_v1/progressNotes/updateGoalStatus/',
    getTreatmentPlan: 'https://h0p82a84v8.execute-api.us-east-1.amazonaws.com/test_v1/getTreatmentPlanDetails/',
    getTreatmentPlanRS:'https://h0p82a84v8.execute-api.us-east-1.amazonaws.com/test_v1/residentSearch/getTreatmentPlanDetails/',
    saveTreatmentPlan: 'https://h0p82a84v8.execute-api.us-east-1.amazonaws.com/test_v1/postTreatmentPlanDetails/save/',
    updateTreatmentPlan: 'https://h0p82a84v8.execute-api.us-east-1.amazonaws.com/test_v1/updateTreatmentPlanDetails/save/',
    getResidentSearchData: 'https://h0p82a84v8.execute-api.us-east-1.amazonaws.com/test_v1/residentSearch/getAll',
    getIAPage1Details: 'https://h0p82a84v8.execute-api.us-east-1.amazonaws.com/test_v1/initialAssessment/page-1/',
    postIAPage1Details: 'https://h0p82a84v8.execute-api.us-east-1.amazonaws.com/test_v1/initialAssessment/page-1/',
    getIAPage2Details: 'https://h0p82a84v8.execute-api.us-east-1.amazonaws.com/test_v1/initialAssessment/page-2/',
    postIAPage2Details: 'https://h0p82a84v8.execute-api.us-east-1.amazonaws.com/test_v1/initialAssessment/page-2/',
    getIAPage3Details: 'https://h0p82a84v8.execute-api.us-east-1.amazonaws.com/test_v1/initialAssessment/page-3/',
    postIAPag34Details: 'https://h0p82a84v8.execute-api.us-east-1.amazonaws.com/test_v1/initialAssessment/page-3/',
    getIAPage4Details: 'https://h0p82a84v8.execute-api.us-east-1.amazonaws.com/test_v1/initialAssessment/page-4/',
    postIAPage4Details: 'https://h0p82a84v8.execute-api.us-east-1.amazonaws.com/test_v1/initialAssessment/page-4',
    updateProfileImage: 'https://h0p82a84v8.execute-api.us-east-1.amazonaws.com/test_v1/uploadImage/',
    getProfileImage: 'https://h0p82a84v8.execute-api.us-east-1.amazonaws.com/test_v1/profileImage/',
    getInitialTreatmentPage: 'https://h0p82a84v8.execute-api.us-east-1.amazonaws.com/test_v1/initialAssessment/page-5/',
    getFamilyMembersDetails: 'https://h0p82a84v8.execute-api.us-east-1.amazonaws.com/test_v1/initialAssessment/page-1FD/',
    postFamilyMembersDetails: 'https://h0p82a84v8.execute-api.us-east-1.amazonaws.com/test_v1/initialAssessment/page-1FD/',
    updateFamilyMembersDetails: 'https://h0p82a84v8.execute-api.us-east-1.amazonaws.com/test_v1/initialAssessment/page-1FD/',
    deleteFamilyMembersDetails: 'https://h0p82a84v8.execute-api.us-east-1.amazonaws.com/test_v1/initialAssessment/page-1FD/',
    getCwNicknameDetails:'https://h0p82a84v8.execute-api.us-east-1.amazonaws.com/test_v1/getCaseWorkerNickname',
    getCwUserNameDetails: 'https://h0p82a84v8.execute-api.us-east-1.amazonaws.com/test_v1/getWebpartyUsername',
    postIAPage5Details: 'https://h0p82a84v8.execute-api.us-east-1.amazonaws.com/test_v1/initialAssessment/page-5/',
    addNewVeteranRS: 'https://h0p82a84v8.execute-api.us-east-1.amazonaws.com/test_v1/addNewVeteran/'
  },
  localUrl:''
};
