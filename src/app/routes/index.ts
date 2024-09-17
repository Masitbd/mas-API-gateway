import express from 'express';
import { AuthRoutes } from '../modules/auth/auth.routes';
import { userRoutes } from '../modules/user/user.routes';

import { adminRoutes } from '../modules/admin/admin.routes';

import { Core_Service_Api_Path } from '../../enums/coreServiceApiPath';
import { AccountRoutes } from '../modules/account/account.routes';
import { BacteriaRoutes } from '../modules/bacteria/bacteria.routes';
import { CommentRoutes } from '../modules/comment/comment.routes';
import { ConditionRoutes } from '../modules/condition/condition.routes';
import { DepartmentRoutes } from '../modules/departments/departments.routes';
import { DoctorRoutes } from '../modules/doctor/doctor.routes';
import { DoctorSealRoutes } from '../modules/doctorSeal/seal.routes';
import { HospitalGroupRoutes } from '../modules/hospitalGroup/hospitalGroup.routes';
import { OrderRoutes } from '../modules/order/order.routes';
import { PatientRoutes } from '../modules/patient/patient.routes';
import { permissionRoutes } from '../modules/permission/permission.routes';
import { PdrvRoutes } from '../modules/prdv/prdv.routes';
import { ProfileRoutes } from '../modules/profile/profile.routes';
import { ReportGroupRoutes } from '../modules/reportGroup/reportGroup.routes';
import { ReportTypeRoutes } from '../modules/reportType/reportType.routes';
import { ReportTypeGroupRoutes } from '../modules/reportTypeGroup/reportTypeGroup.route';
import { SensitivityRoutes } from '../modules/sensitivity/sensitivity.routes';
import { SpecimenRoutes } from '../modules/specimen/specimen.routes';
import { SuperAdminRoutes } from '../modules/superAdmin/superAdmin.routes';
import { TesRoutes } from '../modules/test/test.routes';
import { TestReportRoutes } from '../modules/testReport/testReport.routes';
import { ReportRoutes } from '../modules/testReportGenerator/report.routes';
import { TransactionRoutes } from '../modules/transaction/transaction.routes';
import { UserPermissionRoutes } from '../modules/userPermission/userPermission.routes';
import { VacuumTubeRoutes } from '../modules/vacuumTube/vacuumTube.routes';
import { MiscellaneousRoutes } from '../modules/miscellaneous/miscellaneous.routes';

import { IncomeStatementRoutes } from '../modules/incomeStatement/incomeStatement.routes';

import { RefundRoutes } from '../modules/refund/refund.routes';
import { FinancialReportRoutes } from '../modules/financialReport/financialReport.routes';


const router = express.Router();

const moduleRoutes = [
  {
    path: '/auth',
    routes: AuthRoutes.router
  },
  {
    path: '/user',
    routes: userRoutes.routes
  },

  {
    path: '/admins',
    routes: adminRoutes
  },

  {
    path: '/permission',
    routes: permissionRoutes.routes
  },
  {
    path: '/superAdmin',
    routes: SuperAdminRoutes.routes
  },
  {
    path: '/userPermission',
    routes: UserPermissionRoutes.routes
  },
  {
    path: '/profile',
    routes: ProfileRoutes.routes
  },
  {
    path: '/test',
    routes: TesRoutes.routes
  },
  {
    path: '/order',
    routes: OrderRoutes.routes
  },
  {
    path: Core_Service_Api_Path.ACCOUNT,
    routes: AccountRoutes.routes
  },
  {
    path: Core_Service_Api_Path.BACTERIA,
    routes: BacteriaRoutes.routes
  },
  {
    path: Core_Service_Api_Path.CONDITION,
    routes: ConditionRoutes.routes
  },
  {
    path: Core_Service_Api_Path.DEPARTMENTS,
    routes: DepartmentRoutes.routes
  },
  {
    path: Core_Service_Api_Path.DOCTOR,
    routes: DoctorRoutes.routes
  },
  {
    path: Core_Service_Api_Path.HOSPITALGROUP,
    routes: HospitalGroupRoutes.routes
  },
  {
    path: Core_Service_Api_Path.PATIENT,
    routes: PatientRoutes.routes
  },
  {
    path: Core_Service_Api_Path.PDRV,
    routes: PdrvRoutes.routes
  },
  {
    path: Core_Service_Api_Path.REPORTGROUP,
    routes: ReportGroupRoutes.routes
  },
  {
    path: Core_Service_Api_Path.SENSITIVITY,
    routes: SensitivityRoutes.routes
  },
  {
    path: Core_Service_Api_Path.SPECIMEN,
    routes: SpecimenRoutes.routes
  },
  {
    path: Core_Service_Api_Path.TESTREPORT,
    routes: TestReportRoutes.routes
  },
  {
    path: Core_Service_Api_Path.TESTTUBE,
    routes: VacuumTubeRoutes.routes
  },
  {
    path: Core_Service_Api_Path.TRANSACTION,
    routes: TransactionRoutes.routes
  },
  {
    path: Core_Service_Api_Path.REPORT_TYPE_GROUP,
    routes: ReportTypeGroupRoutes.routes
  },
  {
    path: Core_Service_Api_Path.REPORT_Type,
    routes: ReportTypeRoutes.routes
  },
  {
    path: Core_Service_Api_Path.REPORT_TEST,
    routes: ReportRoutes.routes
  },
  {
    path: Core_Service_Api_Path.COMMENT,
    routes: CommentRoutes.routes
  },
  {
    path: Core_Service_Api_Path.SEAL,
    routes: DoctorSealRoutes.routes
  },
  {
    path: Core_Service_Api_Path.MISCELLANEOUS,
    routes: MiscellaneousRoutes.routes
  },
 {
    path: Core_Service_Api_Path.MISCELLANEOUS,
    routes: MiscellaneousRoutes.routes
  },
  {
    path: Core_Service_Api_Path.INCOMESTATEMENT,
    routes: IncomeStatementRoutes.routes
  },
  {
    path: Core_Service_Api_Path.FINANCIALREPORT,
    routes: FinancialReportRoutes.routes
  }
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.routes);
});

export default router;
