const express = require("express"); 

const { GetSingleStudent, GetSingleStudentByCode,GetStudents, GetStudentsByClass, RegisterStudent, StudentDelete, StudentEnrollmentConfirmationUpdate, StudentUpdate, StudentUpdateClass, StudentUpdateEnrollment, uploadStudentPicture, tpath} = require("../Controllers/Students");
const { CheckExistentEmail, getSingleUserData, GetUserAccounAccess, getUsers, Login, Logout, RegisterUserAccounAccess, RegisterUserAccount, uploadUserAccountPicture, UserAccountDelete, UpdateUserAccount, getSingleUserImageData, CheckUserAccountVerificationCode} = require("../Controllers/Users");
const VerifyToken  = require("../middleware/VerifyToken");
const { ClassDelete, ClassUpdate, GetClass, GetSingleClass, RegisterClass } = require("../Controllers/Class");
const { CourseDelete, CourseUpdate, GetCourse, GetsingleCourse, RegisterCourse } = require("../Controllers/Courses");
const { AcademicyearDelete, AcademicyearUpdate, GetAcademicYear, GetSingleAcademicYear, RegisterAcademicYear } = require("../Controllers/AcademicYear");
const { ClassRoomDelete, ClassRoomUpdate, GetClassroom, GetSingleClassroom, RegisterClassRoom } = require("../Controllers/ClassRoom");
const { CicleDelete, CicleUpdate, GetCicles, GetSingleCicle, RegisterCicle } = require("../Controllers/Cicles");
const { GetSingleSubject, GetSubjects, RegisterSubject, SubjectDelete, SubjectUpdate } = require("../Controllers/Subjects");
const { GetServices, GetSingleService, RegisterService, ServiceDelete, ServiceUpdate, ServiceUpdateDiscountData } = require("../Controllers/Services");
const { GetServicePayments, GetSinglePaidService, GetSingleServicePayment, RegisterServicePayment, Service_paymentDelete, Service_paymentUpdate, uploadServicepaymentDoc } = require("../Controllers/ServicePayments");


const { AcademicLevelDelete, AcademicLevelUpdate, GetAcademicLevel, GetSingleAcademicLevel, RegisterAcademicLevel } = require("../Controllers/AcademicLevel");

const { GetProviders, GetSingleProvider, ProviderDelete, ProviderUpdate, RegisterProvider } = require("../Controllers/Provider");
const { FeePaymentDelete, FeePaymentUpadate, GetFeepayments, GetSinglePaidMonth, GetSinglePayment, GetSingleStudentFees, RegisterFeepayment } = require("../Controllers/FeesPayments");
const { CoinDelete, CoinUpdate, GetCoins, RegisterCoin } = require("../Controllers/Coins");
const { GetProducts, GetSingleProduct, ProductDelete, ProductUpdate, RegisterProducts, uploadProductPicture } = require("../Controllers/Products");
const { EmployeeDelete, EmployeeUpdate, Getemployees, GetSingleEmployee, RegisterEmployee, uploadEmployeePicture, GetEmployeeByJobTitle } = require("../Controllers/Employees");
const { GetSpecificFiles, RegisterFile, uploadFiles } = require("../Controllers/FilesStorage");
const { RegisterRequest, GetRequests } = require("../Controllers/Requests");
const { GetSingleStudentTransference, GetStudentTransferences, RegisterStudentTransference, StudentTransferenceDelete, StudentTransferenceUpdate } = require("../Controllers/StudentTransference");
const { GetTransportPassengers, GetTransportsinglePassenger, RegisterTransportPassenger, TransportPassengerDelete, TransportPassengerUpdate } = require("../Controllers/TransportPassengers");
const { GetsingleTransportRoute, GetTransportRoutes, RegisterTransportRoute, TransportRouteDelete, TransportRouteUpdate } = require("../Controllers/TransportRoutes");
const { GetsingleTransportStop, GetTransportStops, RegisterTransportStop, TransportStopDelete, TransportStopUpdate } = require("../Controllers/TransportStops");
const { GetSingleTransportVehicle, GetTransportVehicles, RegisterTransportVehicle, TransportVehicleDelete, TransportVehicleUpdate, uploadTransportVehiclePicture } = require("../Controllers/TransportVehicles");
const { GetsingleTransportMaintenance, GetTransportMaintenances, RegisterTransportMaintenance, TransportMaintenanceDelete, TransportMaintenanceUpdate } = require("../Controllers/TransportMaintenence");
const { GetSingleTransportDriver, GetTransportDrivers, RegisterTransportDriver, TransportDriverDelete, TransportDriverUpdate, uploadTransportDriverPicture } = require("../Controllers/TransportDriver");
const { GetSingleTitleAndHeader, GetTitleAndHeaders, RegisterTitleAndHeader, TitleAndHeaderDelete, TitleAndHeaderUpdate } = require("../Controllers/TitlesAndHeaders");
const { Getparents, GetSingleparent, ParentDelete, ParentUpdate, RegisterParent, uploadParentPicture } = require("../Controllers/Parents");
const { AuthorDelete, AuthorUpdate, GetAuthors, GetSingleAuthor, RegisterAuthor } = require("../Controllers/Authors");
const { GetPublishers, RegisterPublisher , GetSinglePublisher, PublisherDelete,  PublisherUpdate} = require("../Controllers/Publishers");
const { GetSingleTypeofbook, GetTypeofbooks, RegisterTypeofbook, TypeofbookDelete, TypeofbookUpdate } = require("../Controllers/TypeOfBooks");
const { BookCategoryDelete, BookCategoryUpdate, GetBookCategories, GetSingleBookCategory, RegisterBookCategory } = require("../Controllers/BooksCategory");
const { GetRacks, GetSingleRack, RackDelete, RackUpdate, RegisterRack } = require("../Controllers/Racks");
const { BookDelete, BookUpdate, GetBooks, GetSingleBook, Registerbook, uploadBookCover } = require("../Controllers/Books");
const { BorrowedBookDelete, BorrowedBookUpdate, GetBorrowedBooks, GetSingleBorrowedBook, RegisterBorrowedbook } = require("../Controllers/BorrowedBooks");
const { GetSingleTiming, GetTimings, RegisterTiming, TimingDelete, TimingUpdate } = require("../Controllers/Timing");
const { GetSchoolsOfProvenance, GetSingleSchoolsOfProvenance, RegisterSchoolsOfProvenance, SchoolsOfProvenanceDelete, SchoolsOfProvenanceUpdate } = require("../Controllers/SchoolsOfProvenance");
const { DeclarationDelete, DeclarationUpdate, GetDeclarations, GetSingleDeclaration, RegisterDeclaration } = require("../Controllers/Declaration"); 
const { GetStudentEnrollments , GetSingleStudentEnrollment, CheckExistentStudentEnrollment, RegisterStudentEnrollment, StudentEnrollmentDelete, StudentEnrollmentUpdate } = require('../Controllers/StudentEnrollment');
const { DeclarationRequestDelete, DeclarationRequestUpdate, GetDeclarationRequests, GetSingleDeclarationRequest, RegisterDeclarationRequest } = require("../Controllers/DeclarationRequests");
const { EnrollOperationDelete, EnrollOperationUpdate, GetEnrollOperations, GetSingleEnrollOperation, RegisterEnrollOperation } = require("../Controllers/EnrollOperations");
const { GetSinglePaidTransportTuitionMonth, GetSingleTransportTuitionpayment, GetTransportTuitionpayments, RegisterTransportTuitionPayment, TransportTuitionPaymentDelete, TransportTuitionPaymentUpadate } = require("../Controllers/TransportTuitions");
const { AuditoryRegister, GetAuditoryData } = require("../Controllers/Auditory");
const { FeedBackDelete, FeedbackUpdate, GetFeedBacks, GetSingleFeedback, GetSingleUserFeedback, RegisterFeedBack } = require("../Controllers/FeedBacks");
const { GetQuarterlyNotes, GetsingleQuarterlyNote, GetsingleQuarterlyNotebYQrtSub, GetsingleQuarterlyNotebYSubCls, GetsingleQuarterlyNotebYSubStdQrtType, QuarterlyNoteUpdate, RegisterQuarterlyNote, QuarterlyNoteDelete, GetsingleQuarterlyNotebYSubStdQrtTypeClass, GetsingleQuarterlyNoteByID, GetsingleClassScoreByNumber } = require("../Controllers/QuarterlyNotes");
const { GetSingleInstitute, InstituteUpdate, uploadInstituteLogo, GetSingleInstituteByCode, GetCurrentInstituteByCode, GetCurentLicence } = require("../Controllers/Institutes");
const { FineDelete, FineUpdate, GetFines, GetSingleFine, GetSingleFineByService } = require("../Controllers/Fines");
const RefreshToken = require("../Controllers/RefreshToken");
const { GetJobTitles, GetSingleJobTitle } = require("../Controllers/JobTitles");
const { GetSingleTeacherSubject, GetTeacherSubjects, RegisterTeacherSubject, TeacherSubjectDelete } = require("../Controllers/TeacherSubject");
const { GetStudentAttendance, GetStudentAttendanceByTeacher, GetStudentAttendanceByTeacherAndClassSub, GetSingleStudentAttendance, GetAllStudentAttendance, RegisterStudentAttendance, StudentAttendanceDelete, StudentAttendanceUpdate, CheckExistentSingleStudentAttendance, GetStudentAttendanceByClassSubStuQrt } = require("../Controllers/StudentAttendance");
const { GetSingleTeachertiming, GetAllTeacherTiming, GetSingleTeacherTiming, GetTeacherTimingByClassSub, RegisterTeacherTiming, TeacherTimingDelete } = require("../Controllers/TeacherTimings");
const { RegisterPoint, GetPointsBySubClass } = require("../Controllers/ContinuousAvaliation");
const { GetProjectsByCreator, GetSingleTaskAndProject, GetAllTasksAndProjects, TaskAndProjectDelete, RegisterTaskAndProject } = require("../Controllers/TasksAndProjects");
const { RegisterTaskAndProjectMember, TaskAndProjectMemberDelete, GetMembersByProject } = require("../Controllers/TasksAndProjectsMembers");
const { RegisterLessonSection, GetSingleLessonSection, GetLessonsSectionByGroup, LessonSectionDelete, LessonSectionUpdate, LessonSectionUpdatePosition } = require("../Controllers/LessonsSection");
const { RegisterLessonContent, GetSingleLessonContent, GetLessonsContentBySection, LessonContentSectionDelete, LessonContentSectionUpdate, LessonContentSectionUpdatePosition } = require("../Controllers/LessonsSectionContent");
const { RegisterEmployeeAttendance, GetEmployeesAttendance, GetEmployeeAttendanceBycode, EmployeeAttendanceDelete, EmployeeAttendanceUpdate, GetSingleEmployeeAttendance } = require("../Controllers/EmployeeAttendence");
const { GetSingleStudentOldClasses, RegisterOldClass } = require("../Controllers/StudentOldClasses");
const { GetsingleStudentExamNotebYSubStCls, RegisterStudentExamNotes, UpdateStudentExamNotes } = require("../Controllers/StudentExams");
const { GetsingleStudentFeaturedNotebYSubStCls, RegisterStudentFeaturedNotes, UpdateStudentFeaturedNotes } = require("../Controllers/StudentFeaturedNotes");
const { GetSingleUserInstitutes } = require("../Controllers/UserInstitutes");
const { GetSingleUserChilds } = require("../Controllers/ParentsChilds");
const { RegisteraDS } = require("../Controllers/Ads");
const { RegisterStudentExamCalendar, GetExamsCalendar, GetExamsCalendarByClass, UpdateStudentExamCalendar, DeleteStudentExamCalendar, GetSingleExamCalendar } = require("../Controllers/StudentExamsCalendar");
const { RegisterEnrollment, GetEnrolledStudents } = require("../Controllers/Enrollments");
const { RegisterInstituteUserAccount, GetInstituteUserAccounts } = require("../Controllers/InstituteAccounts");
const SendEmailMessage = require("../Controllers/SendEmailMessage");
const { RegisterPublication } = require("../Controllers/Posts");
const { UpdateCurrentUserInstitute } = require("../Controllers/GetCurrentUserData");
const router = express.Router();
 
 


router.get('/eduallusersaccounts/get/', getUsers);
//router.get('/eduallusersaccounts/get/',  VerifyToken, getUsers);
router.post('/eduallusersaccountsignup/post',  RegisterUserAccount);
router.post('/login', Login);
router.get('/eduallcheckexistentuseraccountemail/:EMAIL', CheckExistentEmail);
router.get('/token', RefreshToken);
router.get('/eduallsingleuserdata/get/:ID', getSingleUserData); 
router.get('/eduallgetuserimagebyuser/get/:EMAIL', getSingleUserImageData);  
router.delete('/logout',Logout);
router.put('/edualluseraccountupdate/update/:ID', UpdateUserAccount);
router.get('/eduallgetuseraccess/get/:CODE', GetUserAccounAccess);
router.put("/edualluseraccountdelete/delete/:ID",UserAccountDelete);

 
router.post("/edualluseraccountverificationcode/post", CheckUserAccountVerificationCode);

router.post("/eduallinstituteuseraccountregister/post", RegisterInstituteUserAccount);
router.get("/eduallinstituteuseraccountsget/get", GetInstituteUserAccounts);

// dashboard routes

router.get('/eduallstudentsapi/get', GetStudents);
router.post('/eduallstudentregisterapi/post', uploadStudentPicture , RegisterStudent);
router.get("/eduallsinglestudentapi/get/:ID", GetSingleStudent);
router.get("/eduallgetstudentsbyclass/:CLASS", GetStudentsByClass);
router.put("/eduallstudentdelete/delete/:ID", StudentDelete);
router.put("/eduallstudentupdate/update/:ID", uploadStudentPicture ,  StudentUpdate);
router.put("/eduallstudentupdateclass/update/:ID", StudentUpdateClass);
router.get("/eduallgetsinglestudentbycode/get/:CODE", GetSingleStudentByCode);
router.put("/eduallstudentenrollmentupdate/update/:ID", StudentUpdateEnrollment); 
router.put("/eduallstudentenrollmentconfirmationupdate/update/:ID",StudentEnrollmentConfirmationUpdate);

 
router.post('/eduallstudentenrollmentregister/post', RegisterEnrollment);
router.get("/eduallstudentenrollments/get/", GetEnrolledStudents);


router.get('/eduallclassapi/get', GetClass);
router.get('/eduallsingleclassapi/get/:ID', GetSingleClass);
router.post('/eduallclassregisterapi/post', RegisterClass); 
router.put("/eduallclassdelete/delete/:ID", ClassDelete);
router.put("/eduallclassupdate/update/:ID", ClassUpdate); 

router.get('/eduallcoursesapi/get', GetCourse);
router.post('/eduallcourseregisterapi/post', RegisterCourse);
router.get("/eduallsinglecoursesapi/get/:ID", GetsingleCourse);
router.put("/eduallcoursedelete/delete/:ID",CourseDelete);
router.put("/eduallcourseupdate/update/:ID",CourseUpdate);

router.get('/eduallacademicyearapi/get', GetAcademicYear);
router.post('/eduallacademicyeargisterapi/post', RegisterAcademicYear);
router.get("/eduallsingleacademicyearapi/get/:ID", GetSingleAcademicYear);
router.put("/eduallacademicyeardelete/delete/:ID", AcademicyearDelete);
router.put("/eduallacademicyearupdate/update/:ID", AcademicyearUpdate);

router.get('/eduallclassroomapi/get', GetClassroom);
router.post('/eduallclassroomregisterapi/post/', RegisterClassRoom);
router.get("/eduallsingleclassroomapi/get/:ID", GetSingleClassroom);
router.put("/eduallclassroomdelete/delete/:ID",ClassRoomDelete);
router.put("/eduallclassroomupdate/update/:ID", ClassRoomUpdate);

router.get('/eduallciclesapi/get', GetCicles);
router.post("/eduallcicleregister/post/", RegisterCicle);
router.get("/eduallsinglecicle/get/:ID", GetSingleCicle);
router.put("/eduallcicledelete/delete/:ID",CicleDelete);
router.put("/eduallcicleupdate/update/:ID", CicleUpdate);

router.get('/eduallsubjectsapi/get', GetSubjects);
router.post("/eduallsubjectregisterapi/post", RegisterSubject);
router.get("/eduallsinglesubject/get/:ID", GetSingleSubject);
router.put("/eduallsubjectdelete/delete/:ID", SubjectDelete);
router.put("/eduallsubjectupdate/update/:ID", SubjectUpdate);

router.post("/eduallserviceregisterapi/post/", RegisterService);
router.get("/eduallservicesapi/get", GetServices);
router.get("/eduallsingleserviceapi/get/:ID", GetSingleService);
router.put("/eduallservicedelete/delete/:ID", ServiceDelete);
router.put("/eduallserviceupdate/update/:ID", ServiceUpdate);
router.put("/eduallupdateservicediscount/update/:ID", ServiceUpdateDiscountData);

router.get("/eduallservicepaymentsapi/get", GetServicePayments);
router.post("/eduallregisterservicepayment/post", uploadServicepaymentDoc ,  RegisterServicePayment);
router.get("/eduallsingleservicepaymentapi/get:ID", GetSingleServicePayment);
router.put("/eduallservicepaymentdelete/delete/:ID", Service_paymentDelete);
router.put("/eduallservicepaymentupdate/update/:ID", Service_paymentUpdate);
router.get("/eduallservicecheckpaidmonth/:MONTH,:STUDENTCODE,:SERVICE,:INSTITUTECODE", GetSinglePaidService);


router.get("/eduallacademiclevelsapi/get", GetAcademicLevel);
router.get("/eduallsingleacademiclevelsapi/get/:ID", GetSingleAcademicLevel);
router.post("/eduallregisteracademiclevel/post", RegisterAcademicLevel);
router.put("/eduallacademicleveldelete/delete/:ID", AcademicLevelDelete);
router.put("/eduallacademiclevelupdate/update/:ID", AcademicLevelUpdate);


router.get("/eduallprovidersapi/get/", GetProviders);
router.post("/eduallregisterprovider/post/", RegisterProvider);
router.get("/eduallgetsingleprovider/get/:ID", GetSingleProvider);
router.put("/eduallproviderdelete/delete/:ID", ProviderDelete);
router.put("/eduallproviderupdate/update/:ID", ProviderUpdate);

router.get("/edualltimings/get/", GetTimings);
router.post("/eduallregistertiming/post/", RegisterTiming);
router.get("/eduallgetsingletiming/get/:ID", GetSingleTiming);
router.put("/edualltimingdelete/delete/:ID", TimingDelete);
router.put("/edualltimingupdate/update/:ID", TimingUpdate);

router.get("/eduallschoolsofprovenance/get/", GetSchoolsOfProvenance);
router.post("/eduallregisterschoolofprovenance/post/", RegisterSchoolsOfProvenance);
router.get("/eduallgetsingleschoolofprovenance/get/:ID", GetSingleSchoolsOfProvenance);
router.put("/eduallschoolofprovenancedelete/delete/:ID", SchoolsOfProvenanceDelete);
router.put("/eduallschoolofprovenanceupdate/update/:ID", SchoolsOfProvenanceUpdate);

router.get("/edualldeclarations/get/", GetDeclarations);
router.post("/edualldeclarationregister/post/", RegisterDeclaration);
router.get("/eduallgetsingledeclaration/get/:ID", GetSingleDeclaration);
router.put("/edualldeclarationdelete/delete/:ID", DeclarationDelete);
router.put("/edualldeclarationupdate/update/:ID", DeclarationUpdate);

router.post("/eduallregisterfeepayment/post/",  RegisterFeepayment);
router.get("/eduallfeepaymentsapi/get/", GetFeepayments);
router.get("/eduallfeepaymentsingle/get/:ID", GetSinglePayment);
router.get("/eduallfeepaymentcheckpaidmonth/:MONTH,:STUDENTCODE,:SERVICE", GetSinglePaidMonth);
router.get("/eduallsinglestudentfeepayment/get/:STUDENTCODE,:ACADEMICYEAR", GetSingleStudentFees);
router.put("/eduallfeepaymentsdelete/delete/:ID", FeePaymentDelete);
router.put("/eduallfeepaymentupdate/update/:ID", FeePaymentUpadate);

router.get("/eduallgetjobtitles/", GetJobTitles);
router.get("/eduallgetsinglejobtitle/get/:ID", GetSingleJobTitle); 

router.post("/eduallregistertransportuitionpayment/post/", RegisterTransportTuitionPayment);
router.get("/edualltransportuitionpayments/get/", GetTransportTuitionpayments);
router.get("/edualltransportuitionpaymentcheckpaidmonth/:MONTH,:STUDENTCODE,:SERVICE,:YEAR", GetSinglePaidTransportTuitionMonth );
router.get("/eduallsinglestudenttransportuitionpayment/get/:STUDENTCODE,:ACADEMICYEAR,:INSTITUTECODE", GetSingleTransportTuitionpayment);
router.put("/edualltransportuitionpaymentsdelete/delete/:ID", TransportTuitionPaymentDelete);
router.put("/edualltransportuitionpaymentupdate/update/:ID", TransportTuitionPaymentUpadate);

router.get("/eduallcoinsapi/get/",GetCoins);
router.post("/eduallregistercoins/post/", RegisterCoin);
router.put("/eduallcoindelete/delete/:ID", CoinDelete);
router.put("/eduallcoinupdate/update/:ID", CoinUpdate);

router.post("/eduallproductsregister/post",uploadProductPicture, RegisterProducts);
router.get("/eduallproductsapi/get/", GetProducts);
router.get("/eduallsingleproductapi/get/:ID", GetSingleProduct);
router.put("/eduallproductdelete/delete/:ID", ProductDelete);
router.put("/eduallproductupdate/update/:ID", ProductUpdate);

router.get("/eduallemployeesget/get/", Getemployees);
router.get("/eduallgetemployeebyjobtitle/get/:CODE", GetEmployeeByJobTitle);
router.get("/eduallsinglemployee/get/:ID", GetSingleEmployee);
router.post("/eduallemployeeregister/post/", uploadEmployeePicture , RegisterEmployee);
router.put("/eduallemployeedelete/delete/:ID", EmployeeDelete);
router.put("/eduallemployeeupdate/update/:ID",  uploadEmployeePicture, EmployeeUpdate);


router.get("/eduallgetteachersubjects/get/:CODE", GetTeacherSubjects);
router.get("/eduallgetsingleteachersubjects/get/:CODE,:ID,:CLASS", GetSingleTeacherSubject);
router.post("/eduallregisterteachersubject/post/", RegisterTeacherSubject);
router.put("/eduallteachersubjectdelete/delete/:ID", TeacherSubjectDelete);


router.post("/eduallfilesregister/post/", uploadFiles, RegisterFile);
router.get("/eduallsingleuserfiles/get/:CODE", GetSpecificFiles);


router.get("/eduallgetsinglestudentoldclasses/get/:CODE", GetSingleStudentOldClasses);
router.post("/eduallregisterstudentoldclass/post/", RegisterOldClass);

 
router.post("/eduallstudenttransferenceregister/post",  RegisterStudentTransference);
router.get("/eduallstudenttransferences/get/", GetStudentTransferences);
router.put("/eduallstudenttransferencedelete/:ID", StudentTransferenceDelete);
router.get("/eduallsinglestudenttransference/get/:ID", GetSingleStudentTransference);
router.put("/eduallstudenttransferenceupdate/update/:ID", StudentTransferenceUpdate);

router.post("/edualltitlesandheadersregister/post" ,RegisterTitleAndHeader);
router.get("/eduallgetsingletitleandheader/get/:ID", GetSingleTitleAndHeader);
router.get("/eduallgettitlesandheaders/get/", GetTitleAndHeaders);
router.put("/edualltitleandheaderdelete/delete/:ID", TitleAndHeaderDelete);
router.put("/edualltitleandheaderupdate/update/:ID", TitleAndHeaderUpdate);

router.post("/eduallenrolloperationregister/post" ,RegisterEnrollOperation);
router.get("/eduallgetsingleenrolloperation/get/:ID", GetSingleEnrollOperation);
router.get("/eduallgetenrolloperations/get/", GetEnrollOperations);
router.put("/eduallenrolloperationdelete/delete/:ID", EnrollOperationDelete);
router.put("/eduallenrolloperationupdate/update/:ID", EnrollOperationUpdate);

router.get('/eduallparents/get', Getparents);
router.post('/eduallparentregister/post', uploadParentPicture , RegisterParent);
router.get("/eduallsingleparent/get/:ID", GetSingleparent);
router.put("/eduallparentdelete/delete/:ID",ParentDelete);
router.put("/eduallparenteupdate/update/:ID",  uploadParentPicture ,  ParentUpdate);

router.get('/edualllibraryauthor/get', GetAuthors);
router.post('/edualllibraryauthorregister/post',  RegisterAuthor );
router.get("/eduallsinglelibraryauthor/get/:ID", GetSingleAuthor);
router.put("/edualllibraryauthordelete/delete/:ID", AuthorDelete);
router.put("/edualllibraryauthorupdate/update/:ID", AuthorUpdate);

router.get('/eduallstudentenrollments/get', GetStudentEnrollments );
router.post('/eduallstudentenrollmentregister/post',  RegisterStudentEnrollment );
router.get("/eduallsinglestudentenrollment/get/:ID", GetSingleStudentEnrollment);
router.get("/eduallchecksinglestudentenrollment/get/:STUDENT", CheckExistentStudentEnrollment);
router.put("/eduallstudentenrollmentdelete/delete/:ID", StudentEnrollmentDelete);
router.put("/eduallstudentenrollmentupdate/update/:ID", StudentEnrollmentUpdate);
 
router.get('/edualllibrarypublishers/get', GetPublishers );
router.post('/edualllibrarypublisherregister/post',  RegisterPublisher);
router.get("/eduallsinglelibrarypublisher/get/:ID", GetSinglePublisher );
router.put("/edualllibrarypublisherdelete/delete/:ID", PublisherDelete);
router.put("/edualllibrarypublisherupdate/update/:ID", PublisherUpdate);

router.get('/edualldeclarationrequests/get', GetDeclarationRequests);
router.post('/edualldeclarationrequestregister/post',  RegisterDeclarationRequest);
router.get("/eduallsingledeclarationrequest/get/:ID", GetSingleDeclarationRequest);
router.put("/edualldeclarationrequestdelete/delete/:ID", DeclarationRequestDelete);
router.put("/edualldeclarationrequestupdate/update/:ID", DeclarationRequestUpdate);

router.get('/edualllibrarytypeofbooks/get', GetTypeofbooks);
router.post('/edualllibrarytypeofbookregister/post/', RegisterTypeofbook);
router.get("/eduallsinglelibrarytypeofbook/get/:ID", GetSingleTypeofbook);
router.put("/edualllibrarytypeofbookdelete/delete/:ID", TypeofbookDelete);
router.put("/edualllibrarytypeofbookupdate/update/:ID", TypeofbookUpdate);

router.get('/edualllibrarytypecategories/get', GetBookCategories );
router.post('/edualllibrarycategoryregister/post/', RegisterBookCategory);
router.get("/eduallsinglelibrarycategory/get/:ID", GetSingleBookCategory);
router.put("/edualllibrarycategorydelete/delete/:ID", BookCategoryDelete);
router.put("/edualllibrarycategoryupdate/update/:ID", BookCategoryUpdate);

router.get('/edualllibraryracks/get', GetRacks);
router.post('/edualllibraryrackregister/post',  RegisterRack );
router.get("/eduallsinglelibraryrack/get/:ID", GetSingleRack);
router.put("/edualllibraryrackdelete/delete/:ID", RackDelete);
router.put("/edualllibraryrackupdate/update/:ID", RackUpdate);

router.get('/edualllibrarybooks/get', GetBooks);
router.post('/edualllibrarybookregister/post', uploadBookCover, Registerbook);
router.get("/eduallsinglelibrarybook/get/:ID", GetSingleBook);
router.put("/edualllibrarybookdelete/delete/:ID", BookDelete);
router.put("/edualllibrarybookupdate/update/:ID", BookUpdate); 

router.get('/edualllibraryborrowedbooks/get', GetBorrowedBooks);
router.post('/edualllibraryborrowbookregister/post', RegisterBorrowedbook);
router.get("/eduallsinglelibraryborrowedbook/get/:ID", GetSingleBorrowedBook);
router.put("/edualllibraryborrowedbookdelete/delete/:ID", BorrowedBookDelete);
router.put("/edualllibraryborrowedbookupdate/update/:ID", BorrowedBookUpdate);

router.get('/eduallauditoryregisters/get', GetAuditoryData);
router.post('/eduallauditoryactionregister/post', AuditoryRegister);

router.get('/eduallfeedbacks/get', GetFeedBacks);
router.post('/eduallfeedbackregister/post', RegisterFeedBack);
router.get("/eduallsinglefeedback/get/:ID", GetSingleFeedback);
router.get("/eduallsingleusersfeedbacks/get", GetSingleUserFeedback);
router.put("/eduallfeedbackdelete/delete/:ID", FeedBackDelete);
router.put("/eduallfeedbackupdate/update/:ID", FeedbackUpdate);  

router.get('/eduallquarterlynotes/get', GetQuarterlyNotes);
router.post('/eduallquarterlynotesregister/post', RegisterQuarterlyNote);
router.get("/eduallsinglequarterlynote/get/:STUDENTCODE", GetsingleQuarterlyNote); 
router.get("/eduallsinglequarterlynotebyqrtsubcls/get/:QUARTER,:SUBJECT,:CLASS", GetsingleQuarterlyNotebYQrtSub); 
router.get("/eduallsinglequarterlynotebyqrtsubstdqrttyp/get/:SUBJECT,:STUDENT,:QUARTER,:CLASS", GetsingleQuarterlyNotebYSubStdQrtType) 
router.get("/eduallsinglequarterlynotebyqrtsubstdqrttypeclass/get/:SUBJECT,:STUDENT,:QUARTER,:CLASS", GetsingleQuarterlyNotebYSubStdQrtTypeClass) 
router.get("/eduallsinglequarterlynotebysubcls/get/:SUBJECT,:CLASS", GetsingleQuarterlyNotebYSubCls); 
router.put("/eduallquarterlynoteupdate/update/:ID", QuarterlyNoteUpdate); 
router.put("/eduallquarterlynotedelete/delete/:ID", QuarterlyNoteDelete); 
router.get("/eduallsinglequarterlynotebyid/get/:ID", GetsingleQuarterlyNoteByID);
router.get("/eduallgetnotesbyclassandsubjects/get/:SUBJECT,:CLASS",  GetsingleClassScoreByNumber);


router.get("/eduallgetstudentexamscorebyclassubject/:SUBJECT,:STUDENT,:CLASS", GetsingleStudentExamNotebYSubStCls);
router.post("/eduallstudentexamscoreregister/post", RegisterStudentExamNotes);
router.put("/eduallstudentexamscoreupdate/update/:ID", UpdateStudentExamNotes);



router.get("/eduallgetstudentfeaturedscorebyclassubject/:SUBJECT,:STUDENT,:CLASS", GetsingleStudentFeaturedNotebYSubStCls);
router.post("/eduallstudentfeaturedscoreregister/post", RegisterStudentFeaturedNotes);
router.put("/eduallstudentfeaturedscoreupdate/update/:ID", UpdateStudentFeaturedNotes);
 

router.get("/eduallgetallstudentsattendance/get", GetStudentAttendance);
router.get("/eduallgetstudentsattendancebyteacher/get/:ID", GetStudentAttendanceByTeacher);
router.get("/eduallgetstudentattendancebyteacherclassandsub/get/:ID", GetStudentAttendanceByTeacherAndClassSub);
router.get("/eduallgetsinglestudentattendance/get/:ID", GetSingleStudentAttendance);
router.get("/eduallgetallstudentattendance/get/:CODE,:CLASS", GetAllStudentAttendance);
router.put("/eduallstudentattendancedelete/delete/:ID", StudentAttendanceDelete);
router.put("/eduallstudentattendanceupdate/update/:ID", StudentAttendanceUpdate);
router.post("/eduallstudentattendanceregister/post", RegisterStudentAttendance);
router.get("/eduallgetstudentattendancebyclqrtsubjstcode/get/:CLASS,:SUBJECT,:STUDENT,:QRT",GetStudentAttendanceByClassSubStuQrt);

router.get("/eduallgetallteachertiming/get/:CODE", GetAllTeacherTiming);
router.get("/eduallgetsingleteachertiming/get/:ID,:CODE,:CLASS,:SUBJECT", GetSingleTeacherTiming);
router.get("/eduallgetteachertimingbyclasssub/get/:SUBJECT,:CLASS,:CODE,:ID/", GetTeacherTimingByClassSub);
router.put("/edualldeleteteachertiming/delete/:ID", TeacherTimingDelete);
router.post("/eduallteachertimingregister/post", RegisterTeacherTiming);
router.get("/eduallcheckexistentstudentattendance/get/:CLASS,:SUBJECT,:STUDENT,:TIME,:DATE", CheckExistentSingleStudentAttendance);

router.post("/eduallregisterctnavlpoint/post", RegisterPoint);
router.get("/eduallgetctnavlpointsbysubclass/get/:ID", GetPointsBySubClass);

router.get("/eduallgetalltasksandprojects/get/",GetAllTasksAndProjects);
router.get("/eduallgettasksandprojectsbycreator/get/:CODE", GetProjectsByCreator);
router.get("/eduallgetsingletaskandproject/get/:ID/",  GetSingleTaskAndProject);
router.post("/eduallcreatenewtaskandproject/post/", RegisterTaskAndProject);
router.put("/eduallsingletaskandproject/delete/:ID", TaskAndProjectDelete); 


router.get("/eduallgettaskandprojectmembers/get/:CODE", GetMembersByProject);
router.post("/eduallregistertaskandprojectmember/post", RegisterTaskAndProjectMember);
router.put("/edualltaskandprojectdelete/delete/:ID",TaskAndProjectMemberDelete);


router.get("/eduallgetlessonssectionbygroup/get/:CODE", GetLessonsSectionByGroup);
router.get("/eduallgetsinglelessonssection/get/:ID", GetSingleLessonSection);
router.post("/eduallcreatelessonsection/post/", RegisterLessonSection);
router.put("/edualllessonsectionupdateposition/update/:ID", LessonSectionUpdatePosition);
router.put("/edualllessonsectionupdate/update/:ID", LessonSectionUpdate);
router.put("/edualllessonsectiondelete/delete/:ID", LessonSectionDelete);


router.get("/eduallgetlessonscontentbysection/get/:CODE", GetLessonsContentBySection);
router.get("/eduallgetsinglelessoncontent/get/:ID", GetSingleLessonContent);
router.post("/edualllessoncontentregister/post/", RegisterLessonContent);
router.put("/edualllessoncontentdelete/delete/:ID", LessonContentSectionDelete);
router.put("/edualllessoncontentupdate/update/:ID", LessonContentSectionUpdate);
router.put("/edualllessoncontentupdateposition/update/:ID", LessonContentSectionUpdatePosition);


router.get("/eduallgetallemployeesattendence/get/",GetEmployeesAttendance);
router.get("/eduallgetemployeeattendencebycode/get/:CODE",GetEmployeeAttendanceBycode);
router.get("/eduallgetsingleemployeeattendence/get/:ID", GetSingleEmployeeAttendance);
router.post("/eduallregisteremployeeattendence/post/",RegisterEmployeeAttendance);
router.put("/eduallemployeeattendencedelete/delete/:ID",EmployeeAttendanceDelete );
router.put("/eduallemployeeattendenceupdate/update/:ID",EmployeeAttendanceUpdate);



//// transport ###############

router.post("/edualltransportrouteregister/post/", RegisterTransportRoute);
router.get("/edualltransportroutesget/get/", GetTransportRoutes);
router.get("/edualltransportsinglerouteget/get/:ID", GetsingleTransportRoute);
router.put("/edualltransportroutedelete/delete/:ID",TransportRouteDelete);
router.put("/edualltransportrouteupdate/update/:ID", TransportRouteUpdate);

router.post("/edualltransportpassengerregister/post/", RegisterTransportPassenger);
router.get("/edualltransportpassengerget/get/", GetTransportPassengers);
router.get("/edualltransportsinglepassengerget/get/:ID", GetTransportsinglePassenger);
router.put("/edualltransportpassengerdelete/delete/:ID", TransportPassengerDelete);
router.put("/edualltransportpassengerupdate/update/:ID", TransportPassengerUpdate);

router.post("/edualltransportvehicleregister/post/",uploadTransportVehiclePicture, RegisterTransportVehicle);
router.get("/edualltransportvehicleget/get/", GetTransportVehicles);
router.get("/edualltransportsinglevehicleget/get/:ID", GetSingleTransportVehicle);
router.put("/edualltransportvehicledelete/delete/:ID", TransportVehicleDelete);
router.put("/edualltransportvehicleupdate/update/:ID", TransportVehicleUpdate);

router.post("/edualltransportmaintenanceeregister/post/", RegisterTransportMaintenance);
router.get("/edualltransportmaintenanceget/get/", GetTransportMaintenances);
router.get("/edualltransportsinglemaintenanceget/get/:ID", GetsingleTransportMaintenance);
router.put("/edualltransportmaintenancedelete/delete/:ID", TransportMaintenanceDelete);
router.put("/edualltransportmainenanceupdate/update/:ID", TransportMaintenanceUpdate);

router.post("/edualltransportstopsregister/post/", RegisterTransportStop);
router.get("/edualltransportstopsget/get/", GetTransportStops);
router.get("/edualltransportsinglestopget/get/:ID", GetsingleTransportStop);
router.put("/edualltransportstopsdelete/delete/:ID", TransportStopDelete);
router.put("/edualltransportstopupdate/update/:ID", TransportStopUpdate);

router.post("/edualltransportdriverregister/post/", uploadTransportDriverPicture, RegisterTransportDriver);
router.get("/edualltransportsriverget/get/", GetTransportDrivers);
router.get("/edualltransportsingledriverget/get/:ID", GetSingleTransportDriver);
router.put("/edualltransportsdriverdelete/delete/:ID", TransportDriverDelete);
router.put("/edualltransportdriverupdate/update/:ID", TransportDriverUpdate);



router.get("/eduallgetsinglefinebyservice/get/:SERVICE", GetSingleFineByService);
router.get("/eduallgetservicefines/get/", GetFines);
router.put("/eduallfineupdate/update/:ID", FineUpdate);
router.put("/eduallfinedelete/delete/:ID", FineDelete);
router.get("/eduallgetsinglefine/get/:ID",  GetSingleFine);




router.post("/eduallregisterrequest/post/", RegisterRequest);
router.get("/eduallgetrequests/get", GetRequests);


router.post("/edualladsregister/post/:ID", RegisteraDS);
 

router.get("/eduallgetsingleinstitute/get/:ID", GetSingleInstitute);
router.put("/eduallupdateinstitute/update/", uploadInstituteLogo, InstituteUpdate);
router.get("/eduallgetsingleinstitutebycode/get/:CODE", GetSingleInstituteByCode)
router.get("/eduallgetcurentuserinstitute/get/", GetCurrentInstituteByCode);


router.get("/lc", GetCurentLicence);


router.post("/eduallupdatecurrentinstitutecode/post", UpdateCurrentUserInstitute);


router.get("/eduallgetsingleuserinstitutes/get/:CODE", GetSingleUserInstitutes);
router.get("/eduallgetsingleuserchilds/get/:CODE", GetSingleUserChilds);




router.post("/eduallstudentexamcalendarregister/post", RegisterStudentExamCalendar); 
router.get("/eduallstudentexamcalendarget/get/", GetExamsCalendar);
router.get("/eduallstudentexamcalendargetsingle/get/:ID", GetSingleExamCalendar);
router.get("/eduallstudentexamcalendargetbyclass/get/:CLASS", GetExamsCalendarByClass);
router.put("/eduallstudentexamcalendarupdate/update/:ID", UpdateStudentExamCalendar);
router.put("/eduallstudentexamcalendardelete/delete/:ID", DeleteStudentExamCalendar);



router.post("/eduallpublicationregister/post", RegisterPublication);


router.post("/eduallsendemail/post/", SendEmailMessage)

module.exports =  router;
