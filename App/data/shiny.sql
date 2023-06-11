/*
 Navicat Premium Data Transfer

 Source Server         : localhost_3306
 Source Server Type    : MySQL
 Source Server Version : 50724
 Source Host           : localhost:3306
 Source Schema         : shiny

 Target Server Type    : MySQL
 Target Server Version : 50724
 File Encoding         : 65001

 Date: 08/06/2023 20:24:54
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for biomarker
-- ----------------------------
DROP TABLE IF EXISTS `biomarker`;
CREATE TABLE `biomarker`  (
  `rsid` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `chr` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `bp` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `A1` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `A2` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `eaf` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `trait` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `beta` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `se` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `pval` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of biomarker
-- ----------------------------
INSERT INTO `biomarker` VALUES ('rs3094315', '1', '752566', 'G', 'A', '0.188503', 'Gene1', '-0.138331', '0.0243018', '1.25E-08');
INSERT INTO `biomarker` VALUES ('rs3115859', '1', '754503', 'G', 'A', '0.191271', 'Gene1', '-0.138818', '0.0253697', '4.45E-08');
INSERT INTO `biomarker` VALUES ('rs3131965', '1', '755775', 'A', 'G', '0.193795', 'Gene1', '-0.149193', '0.0270659', '3.54E-08');
INSERT INTO `biomarker` VALUES ('rs3131956', '1', '758144', 'A', 'G', '0.172391', 'Gene1', '-0.143032', '0.0259737', '3.65E-08');
INSERT INTO `biomarker` VALUES ('rs142557973', '1', '731718', 'C', 'T', '0.124392', 'Gene1', '-0.180259', '0.0324101', '2.67E-08');
INSERT INTO `biomarker` VALUES ('rs141242758', '1', '734349', 'C', 'T', '0.123413', 'Gene1', '-0.178071', '0.0325244', '4.38E-08');
INSERT INTO `biomarker` VALUES ('rs3131962', '1', '756604', 'A', 'G', '0.161451', 'Gene1', '-0.172323', '0.0290566', '3.02E-09');
INSERT INTO `biomarker` VALUES ('rs6594026', '1', '782981', 'T', 'C', '0.159723', 'Gene1', '-0.162686', '0.0291971', '2.52E-08');
INSERT INTO `biomarker` VALUES ('rs2980300', '1', '785989', 'T', 'C', '0.166048', 'Gene1', '-0.157236', '0.0287482', '4.52E-08');
INSERT INTO `biomarker` VALUES ('rs2905055', '1', '787399', 'G', 'T', '0.170567', 'Gene1', '-0.158179', '0.0284381', '2.66E-08');
INSERT INTO `biomarker` VALUES ('rs2905054', '1', '787685', 'G', 'T', '0.172935', 'Gene1', '-0.159566', '0.0282808', '1.68E-08');
INSERT INTO `biomarker` VALUES ('rs9697642', '1', '831909', 'C', 'T', '0.269838', 'Gene1', '-0.160603', '0.0275684', '5.69E-09');
INSERT INTO `biomarker` VALUES ('rs28765502', '1', '832918', 'C', 'T', '0.266524', 'Gene1', '-0.158736', '0.0276804', '9.77E-09');
INSERT INTO `biomarker` VALUES ('rs4970385', '1', '831489', 'C', 'T', '0.274551', 'Gene1', '-0.164092', '0.0274117', '2.15E-09');
INSERT INTO `biomarker` VALUES ('rs28594623', '1', '833641', 'C', 'T', '0.20917', 'Gene1', '-0.17661', '0.0300849', '4.35E-09');
INSERT INTO `biomarker` VALUES ('rs4553118', '1', '832398', 'T', 'C', '0.239878', 'Gene1', '-0.157441', '0.0286736', '4.00E-08');
INSERT INTO `biomarker` VALUES ('rs2977605', '1', '771823', 'T', 'C', '0.144724', 'Gene1', '-0.180715', '0.0283395', '1.81E-10');
INSERT INTO `biomarker` VALUES ('rs59066358', '1', '771967', 'A', 'G', '0.143855', 'Gene1', '-0.188015', '0.0270448', '3.60E-12');
INSERT INTO `biomarker` VALUES ('rs2905039', '1', '772755', 'A', 'C', '0.145731', 'Gene1', '-0.178698', '0.0269197', '3.18E-11');
INSERT INTO `biomarker` VALUES ('rs3131954', '1', '758626', 'C', 'T', '0.157152', 'Gene1', '-0.162811', '0.0274176', '2.88E-09');
INSERT INTO `biomarker` VALUES ('rs1055606', '1', '778745', 'G', 'A', '0.127693', 'Gene1', '-0.188583', '0.0284524', '3.40E-11');
INSERT INTO `biomarker` VALUES ('rs4040617', '1', '779322', 'G', 'A', '0.138462', 'Gene1', '-0.181427', '0.0274923', '4.13E-11');
INSERT INTO `biomarker` VALUES ('rs2980319', '1', '777122', 'A', 'T', '0.143974', 'Gene1', '-0.172613', '0.0270663', '1.80E-10');
INSERT INTO `biomarker` VALUES ('rs2977612', '1', '780785', 'T', 'A', '0.15326', 'Gene1', '-0.162705', '0.0264029', '7.17E-10');
INSERT INTO `biomarker` VALUES ('rs60320384', '1', '769223', 'G', 'C', '0.142613', 'Gene1', '-0.189018', '0.0271718', '3.49E-12');
INSERT INTO `biomarker` VALUES ('rs4951862', '1', '757936', 'C', 'A', '0.149994', 'Gene1', '-0.174156', '0.026613', '5.99E-11');
INSERT INTO `biomarker` VALUES ('rs61770173', '1', '753405', 'C', 'A', '0.15694', 'Gene1', '-0.158367', '0.0286574', '3.27E-08');
INSERT INTO `biomarker` VALUES ('rs2073813', '1', '753541', 'A', 'G', '0.145102', 'Gene1', '-0.180584', '0.0269714', '2.15E-11');
INSERT INTO `biomarker` VALUES ('rs4951929', '1', '757734', 'C', 'T', '0.149944', 'Gene1', '-0.17321', '0.0266158', '7.63E-11');
INSERT INTO `biomarker` VALUES ('rs28705752', '1', '836896', 'C', 'T', '0.258753', 'Gene1', '-0.147882', '0.0266742', '2.96E-08');
INSERT INTO `biomarker` VALUES ('rs28562941', '1', '839103', 'G', 'A', '0.254918', 'Gene1', '-0.150317', '0.0268022', '2.04E-08');
INSERT INTO `biomarker` VALUES ('rs3131969', '1', '754182', 'A', 'G', '0.162696', 'Gene1', '-0.156672', '0.0265699', '3.71E-09');
INSERT INTO `biomarker` VALUES ('rs3115858', '1', '755890', 'A', 'T', '0.152625', 'Gene1', '-0.173558', '0.026428', '5.13E-11');
INSERT INTO `biomarker` VALUES ('rs3131968', '1', '754192', 'A', 'G', '0.161334', 'Gene1', '-0.154656', '0.026663', '6.62E-09');
INSERT INTO `biomarker` VALUES ('rs111818025', '1', '791191', 'A', 'G', '0.139875', 'Gene1', '-0.16916', '0.0282705', '2.18E-09');
INSERT INTO `biomarker` VALUES ('rs3131967', '1', '754334', 'T', 'C', '0.169768', 'Gene1', '-0.152355', '0.0261239', '5.48E-09');
INSERT INTO `biomarker` VALUES ('rs2905062', '1', '785050', 'G', 'A', '0.161662', 'Gene1', '-0.14854', '0.0266487', '2.49E-08');
INSERT INTO `biomarker` VALUES ('rs3863622', '1', '787606', 'T', 'G', '0.142536', 'Gene1', '-0.167019', '0.0280497', '2.61E-09');
INSERT INTO `biomarker` VALUES ('rs1574243', '1', '841085', 'G', 'C', '0.233303', 'Gene1', '-0.172452', '0.0289271', '2.50E-09');
INSERT INTO `biomarker` VALUES ('rs12124819', '1', '776546', 'G', 'A', '0.197655', 'Gene1', '0.436795', '0.0706765', '6.40E-10');
INSERT INTO `biomarker` VALUES ('rs2710882', '1', '930923', 'A', 'G', '0.18971', 'Gene2', '-0.140302', '0.017732', '2.52E-15');
INSERT INTO `biomarker` VALUES ('rs3121569', '1', '936210', 'C', 'A', '0.18908', 'Gene2', '-0.135666', '0.0181299', '7.26E-14');
INSERT INTO `biomarker` VALUES ('rs3121570', '1', '936194', 'A', 'G', '0.199693', 'Gene2', '-0.133576', '0.0177576', '5.39E-14');
INSERT INTO `biomarker` VALUES ('rs3128115', '1', '935833', 'C', 'G', '0.201478', 'Gene2', '-0.133933', '0.0176977', '3.80E-14');
INSERT INTO `biomarker` VALUES ('rs3128113', '1', '935459', 'A', 'G', '0.199891', 'Gene2', '-0.133103', '0.0177513', '6.47E-14');
INSERT INTO `biomarker` VALUES ('rs28869591', '1', '920640', 'T', 'C', '0.157691', 'Gene2', '-0.106423', '0.019421', '4.26E-08');
INSERT INTO `biomarker` VALUES ('rs7547878', '1', '917315', 'A', 'G', '0.167188', 'Gene2', '-0.138507', '0.0191192', '4.34E-13');
INSERT INTO `biomarker` VALUES ('rs4970418', '1', '918617', 'A', 'G', '0.151609', 'Gene2', '-0.216707', '0.0193206', '3.39E-29');
INSERT INTO `biomarker` VALUES ('rs56028034', '1', '916662', 'C', 'A', '0.155611', 'Gene2', '-0.21825', '0.0191122', '3.35E-30');
INSERT INTO `biomarker` VALUES ('rs28434575', '1', '917492', 'T', 'C', '0.152803', 'Gene2', '-0.21841', '0.0192578', '8.18E-30');
INSERT INTO `biomarker` VALUES ('rs74045046', '1', '911916', 'T', 'C', '0.151454', 'Gene2', '-0.220686', '0.0194044', '5.70E-30');
INSERT INTO `biomarker` VALUES ('rs74045047', '1', '913610', 'A', 'G', '0.154462', 'Gene2', '-0.216969', '0.0192567', '1.91E-29');
INSERT INTO `biomarker` VALUES ('rs3934834', '1', '1005806', 'T', 'C', '0.170013', 'Gene2', '-0.0871537', '0.0159833', '4.96E-08');
INSERT INTO `biomarker` VALUES ('rs3766191', '1', '1017587', 'T', 'C', '0.161248', 'Gene2', '-0.0877303', '0.0160831', '4.90E-08');
INSERT INTO `biomarker` VALUES ('rs6659460', '1', '918270', 'T', 'C', '0.152713', 'Gene2', '-0.216362', '0.0192626', '2.83E-29');
INSERT INTO `biomarker` VALUES ('rs3813193', '1', '998501', 'C', 'G', '0.17224', 'Gene2', '-0.089025', '0.0158515', '1.95E-08');
INSERT INTO `biomarker` VALUES ('rs12752391', '1', '1009823', 'A', 'G', '0.170285', 'Gene2', '-0.0874872', '0.015973', '4.32E-08');
INSERT INTO `biomarker` VALUES ('rs3737727', '1', '1023145', 'A', 'G', '0.149659', 'Gene2', '-0.100235', '0.0166254', '1.65E-09');
INSERT INTO `biomarker` VALUES ('rs12132100', '1', '1023788', 'T', 'C', '0.149537', 'Gene2', '-0.0926285', '0.0168354', '3.76E-08');
INSERT INTO `biomarker` VALUES ('rs7417106', '1', '911595', 'A', 'G', '0.200866', 'Gene2', '-0.247736', '0.0175934', '4.96E-45');
INSERT INTO `biomarker` VALUES ('rs28687780', '1', '908823', 'A', 'G', '0.154516', 'Gene2', '-0.21903', '0.020351', '5.17E-27');
INSERT INTO `biomarker` VALUES ('rs3829738', '1', '909309', 'C', 'T', '0.17931', 'Gene2', '-0.193847', '0.019279', '8.75E-24');
INSERT INTO `biomarker` VALUES ('rs28561399', '1', '910473', 'A', 'G', '0.137415', 'Gene2', '-0.196028', '0.0208257', '4.83E-21');
INSERT INTO `biomarker` VALUES ('rs13303118', '1', '918384', 'G', 'T', '0.422107', 'Gene2', '-0.103786', '0.0124977', '1.00E-16');
INSERT INTO `biomarker` VALUES ('rs3121567', '1', '943468', 'T', 'C', '0.0348039', 'Gene2', '-0.190126', '0.0337402', '1.75E-08');
INSERT INTO `biomarker` VALUES ('rs2341354', '1', '918573', 'A', 'G', '0.413201', 'Gene2', '-0.105756', '0.0125339', '3.24E-17');
INSERT INTO `biomarker` VALUES ('rs6694632', '1', '916834', 'G', 'A', '0.412911', 'Gene2', '-0.106545', '0.0125347', '1.90E-17');
INSERT INTO `biomarker` VALUES ('rs13303033', '1', '914940', 'T', 'C', '0.42163', 'Gene2', '-0.106576', '0.0127048', '4.92E-17');
INSERT INTO `biomarker` VALUES ('rs2340596', '1', '913889', 'G', 'A', '0.41682', 'Gene2', '-0.110112', '0.0127227', '4.94E-18');
INSERT INTO `biomarker` VALUES ('rs13303368', '1', '914852', 'G', 'C', '0.41698', 'Gene2', '-0.111547', '0.0127212', '1.81E-18');
INSERT INTO `biomarker` VALUES ('rs13302979', '1', '914333', 'C', 'G', '0.410467', 'Gene2', '-0.111576', '0.0127507', '2.12E-18');
INSERT INTO `biomarker` VALUES ('rs9803103', '1', '912049', 'T', 'C', '0.417268', 'Gene2', '-0.117749', '0.0147741', '1.59E-15');
INSERT INTO `biomarker` VALUES ('rs9777939', '1', '929190', 'A', 'G', '0.0336642', 'Gene2', '-0.201705', '0.0342675', '3.95E-09');
INSERT INTO `biomarker` VALUES ('rs2340592', '1', '910935', 'A', 'G', '0.189671', 'Gene2', '-0.155918', '0.019521', '1.38E-15');
INSERT INTO `biomarker` VALUES ('rs35562283', '1', '924368', 'C', 'T', '0.0364929', 'Gene2', '-0.19315', '0.0329607', '4.63E-09');
INSERT INTO `biomarker` VALUES ('rs6605060', '1', '923076', 'A', 'G', '0.0371006', 'Gene2', '-0.192433', '0.0327044', '4.00E-09');
INSERT INTO `biomarker` VALUES ('rs9442609', '1', '923459', 'A', 'G', '0.0378933', 'Gene2', '-0.18966', '0.0323718', '4.66E-09');
INSERT INTO `biomarker` VALUES ('rs9442610', '1', '923749', 'T', 'C', '0.038268', 'Gene2', '-0.188146', '0.0322257', '5.27E-09');
INSERT INTO `biomarker` VALUES ('rs13302924', '1', '929327', 'A', 'G', '0.0380131', 'Gene2', '-0.18502', '0.0323247', '1.04E-08');
INSERT INTO `biomarker` VALUES ('rs6677020', '1', '920648', 'T', 'C', '0.0352169', 'Gene2', '-0.198184', '0.0335314', '3.41E-09');
INSERT INTO `biomarker` VALUES ('rs6671243', '1', '926351', 'C', 'T', '0.0378873', 'Gene2', '-0.188937', '0.032371', '5.33E-09');
INSERT INTO `biomarker` VALUES ('rs28622096', '1', '924629', 'A', 'G', '0.0379671', 'Gene2', '-0.189423', '0.0323391', '4.70E-09');
INSERT INTO `biomarker` VALUES ('rs4970351', '1', '926621', 'A', 'C', '0.0379302', 'Gene2', '-0.188564', '0.0323548', '5.61E-09');
INSERT INTO `biomarker` VALUES ('rs4970403', '1', '926431', 'A', 'T', '0.0378873', 'Gene2', '-0.188698', '0.0323711', '5.57E-09');
INSERT INTO `biomarker` VALUES ('rs6665000', '1', '924898', 'C', 'A', '0.0378986', 'Gene2', '-0.189226', '0.0323662', '5.02E-09');
INSERT INTO `biomarker` VALUES ('rs2341362', '1', '927309', 'T', 'C', '0.0378986', 'Gene2', '-0.18891', '0.0323664', '5.33E-09');
INSERT INTO `biomarker` VALUES ('rs9777703', '1', '928836', 'C', 'T', '0.0380203', 'Gene2', '-0.188555', '0.0323178', '5.40E-09');
INSERT INTO `biomarker` VALUES ('rs6662128', '1', '921570', 'T', 'C', '0.038096', 'Gene2', '-0.185549', '0.0322907', '9.13E-09');
INSERT INTO `biomarker` VALUES ('rs2710869', '1', '938116', 'T', 'G', '0.0332031', 'Gene2', '-0.266181', '0.0388393', '7.21E-12');
INSERT INTO `biomarker` VALUES ('rs2489000', '1', '937688', 'T', 'C', '0.0332821', 'Gene2', '-0.269629', '0.0389536', '4.46E-12');
INSERT INTO `biomarker` VALUES ('rs6677131', '1', '920733', 'T', 'C', '0.0356459', 'Gene2', '-0.196441', '0.0333336', '3.79E-09');
INSERT INTO `biomarker` VALUES ('rs3128112', '1', '932618', 'C', 'G', '0.0300697', 'Gene2', '-0.27453', '0.0407544', '1.63E-11');
INSERT INTO `biomarker` VALUES ('rs2710881', '1', '931014', 'A', 'G', '0.0300156', 'Gene2', '-0.274831', '0.0407834', '1.60E-11');
INSERT INTO `biomarker` VALUES ('rs56262069', '1', '889158', 'G', 'C', '0.0671076', 'Gene2', '0.612097', '0.0421085', '7.14E-48');
INSERT INTO `biomarker` VALUES ('rs2005437', '1', '931730', 'A', 'G', '0.0313407', 'Gene2', '-0.249003', '0.0409814', '1.23E-09');
INSERT INTO `biomarker` VALUES ('rs2799063', '1', '934106', 'A', 'G', '0.0394805', 'Gene2', '-0.228722', '0.0358926', '1.86E-10');
INSERT INTO `biomarker` VALUES ('rs9697711', '1', '900972', 'T', 'G', '0.0595758', 'Gene2', '0.350249', '0.029371', '8.77E-33');
INSERT INTO `biomarker` VALUES ('rs13302983', '1', '914876', 'T', 'C', '0.0254097', 'Gene2', '-0.333101', '0.0442119', '4.91E-14');
INSERT INTO `biomarker` VALUES ('rs3748597', '1', '888659', 'T', 'C', '0.0586498', 'Gene2', '0.281445', '0.0262244', '7.19E-27');
INSERT INTO `biomarker` VALUES ('rs4970452', '1', '885689', 'G', 'A', '0.0575177', 'Gene2', '0.285762', '0.0264648', '3.53E-27');
INSERT INTO `biomarker` VALUES ('rs3828049', '1', '889238', 'A', 'G', '0.0579796', 'Gene2', '0.284961', '0.0263652', '3.15E-27');
INSERT INTO `biomarker` VALUES ('rs3748595', '1', '887560', 'A', 'C', '0.0677361', 'Gene2', '0.32916', '0.0275517', '6.73E-33');
INSERT INTO `biomarker` VALUES ('rs3748596', '1', '888639', 'T', 'C', '0.0588932', 'Gene2', '0.281459', '0.026173', '5.69E-27');
INSERT INTO `biomarker` VALUES ('rs3828047', '1', '887801', 'A', 'G', '0.0586634', 'Gene2', '0.282532', '0.0262191', '4.48E-27');
INSERT INTO `biomarker` VALUES ('rs4970376', '1', '885699', 'A', 'G', '0.058724', 'Gene2', '0.281196', '0.0262114', '7.52E-27');
INSERT INTO `biomarker` VALUES ('rs4970375', '1', '886006', 'T', 'C', '0.0587095', 'Gene2', '0.28122', '0.0262117', '7.46E-27');
INSERT INTO `biomarker` VALUES ('rs4246503', '1', '884815', 'A', 'G', '0.0584893', 'Gene2', '0.281141', '0.0262596', '9.52E-27');
INSERT INTO `biomarker` VALUES ('rs6605058', '1', '917060', 'C', 'G', '0.0302698', 'Gene2', '-0.303025', '0.0407665', '1.06E-13');
INSERT INTO `biomarker` VALUES ('rs13303355', '1', '915227', 'A', 'G', '0.0302198', 'Gene2', '-0.306888', '0.0406334', '4.27E-14');
INSERT INTO `biomarker` VALUES ('rs61606412', '1', '919489', 'T', 'C', '0.031746', 'Gene2', '-0.283077', '0.0397011', '1.00E-12');
INSERT INTO `biomarker` VALUES ('rs2340582', '1', '882803', 'A', 'G', '0.056977', 'Gene2', '0.284788', '0.0265843', '8.88E-27');
INSERT INTO `biomarker` VALUES ('rs3748592', '1', '880238', 'A', 'G', '0.0575037', 'Gene2', '0.284716', '0.0264675', '5.48E-27');
INSERT INTO `biomarker` VALUES ('rs13303351', '1', '901023', 'T', 'C', '0.0642231', 'Gene2', '0.322948', '0.0282603', '3.04E-30');
INSERT INTO `biomarker` VALUES ('rs28690976', '1', '903245', 'A', 'G', '0.422705', 'Gene2', '-0.0982177', '0.0155138', '2.44E-10');
INSERT INTO `biomarker` VALUES ('rs2839', '1', '879687', 'T', 'C', '0.057095', 'Gene2', '0.28509', '0.0265565', '6.96E-27');
INSERT INTO `biomarker` VALUES ('rs2340595', '1', '914192', 'G', 'C', '0.0301098', 'Gene2', '-0.311385', '0.0408642', '2.54E-14');
INSERT INTO `biomarker` VALUES ('rs4970429', '1', '910903', 'T', 'C', '0.02902', 'Gene2', '-0.304218', '0.0422995', '6.38E-13');
INSERT INTO `biomarker` VALUES ('rs1806780', '1', '872352', 'C', 'G', '0.287985', 'Gene2', '-0.212094', '0.0157676', '3.03E-41');
INSERT INTO `biomarker` VALUES ('rs2799058', '1', '938213', 'A', 'G', '0.0379916', 'Gene2', '-0.213925', '0.0386552', '3.13E-08');
INSERT INTO `biomarker` VALUES ('rs4372192', '1', '876499', 'A', 'G', '0.0565329', 'Gene2', '0.276178', '0.0266998', '4.46E-25');
INSERT INTO `biomarker` VALUES ('rs4970377', '1', '885676', 'C', 'A', '0.0633843', 'Gene2', '0.271184', '0.0252966', '8.18E-27');
INSERT INTO `biomarker` VALUES ('rs78370858', '1', '864938', 'G', 'A', '0.275584', 'Gene2', '-0.303046', '0.0230096', '1.30E-39');
INSERT INTO `biomarker` VALUES ('rs13302957', '1', '891021', 'G', 'A', '0.0769434', 'Gene2', '0.292574', '0.0259996', '2.24E-29');
INSERT INTO `biomarker` VALUES ('rs10465242', '1', '886788', 'G', 'A', '0.111988', 'Gene2', '0.135125', '0.0224385', '1.72E-09');
INSERT INTO `biomarker` VALUES ('rs6605067', '1', '879676', 'G', 'A', '0.0592202', 'Gene2', '0.27306', '0.0261112', '1.35E-25');
INSERT INTO `biomarker` VALUES ('rs2272756', '1', '882033', 'A', 'G', '0.190058', 'Gene2', '-0.209034', '0.0162962', '1.15E-37');
INSERT INTO `biomarker` VALUES ('rs13303106', '1', '891945', 'A', 'G', '0.383295', 'Gene2', '-0.146198', '0.0147407', '3.48E-23');
INSERT INTO `biomarker` VALUES ('rs13303065', '1', '891059', 'C', 'T', '0.384601', 'Gene2', '-0.145579', '0.0147311', '4.96E-23');
INSERT INTO `biomarker` VALUES ('rs4072383', '1', '871334', 'G', 'T', '0.321597', 'Gene2', '-0.193792', '0.0153652', '1.80E-36');
INSERT INTO `biomarker` VALUES ('rs28576697', '1', '870645', 'C', 'T', '0.280167', 'Gene2', '-0.20443', '0.0162644', '3.12E-36');
INSERT INTO `biomarker` VALUES ('rs114982608', '1', '877147', 'A', 'G', '0.204608', 'Gene2', '-0.199004', '0.0159099', '6.73E-36');
INSERT INTO `biomarker` VALUES ('rs4970441', '1', '897325', 'G', 'C', '0.0741015', 'Gene2', '0.287445', '0.0264741', '1.84E-27');
INSERT INTO `biomarker` VALUES ('rs2272757', '1', '881627', 'G', 'A', '0.381866', 'Gene2', '-0.146921', '0.0147505', '2.27E-23');
INSERT INTO `biomarker` VALUES ('rs28705211', '1', '900505', 'C', 'G', '0.265236', 'Gene2', '-0.213063', '0.0173323', '9.90E-35');
INSERT INTO `biomarker` VALUES ('rs13302945', '1', '889159', 'A', 'C', '0.0672785', 'Gene2', '0.320074', '0.0289765', '2.29E-28');
INSERT INTO `biomarker` VALUES ('rs4970371', '1', '893280', 'G', 'A', '0.0581334', 'Gene2', '0.261931', '0.0272249', '6.52E-22');
INSERT INTO `biomarker` VALUES ('rs7537756', '1', '854250', 'G', 'A', '0.203449', 'Gene2', '-0.204498', '0.017771', '1.21E-30');
INSERT INTO `biomarker` VALUES ('rs6696609', '1', '903426', 'T', 'C', '0.263559', 'Gene2', '-0.202043', '0.0172976', '1.61E-31');
INSERT INTO `biomarker` VALUES ('rs13303227', '1', '892745', 'G', 'A', '0.059683', 'Gene2', '0.260424', '0.02689', '3.50E-22');
INSERT INTO `biomarker` VALUES ('rs4970380', '1', '853239', 'G', 'A', '0.198836', 'Gene2', '-0.202365', '0.0179316', '1.55E-29');
INSERT INTO `biomarker` VALUES ('rs28605311', '1', '852664', 'T', 'C', '0.199912', 'Gene2', '-0.203389', '0.0178926', '6.09E-30');
INSERT INTO `biomarker` VALUES ('rs75551395', '1', '865219', 'A', 'G', '0.213989', 'Gene2', '-0.198579', '0.0175247', '9.17E-30');
INSERT INTO `biomarker` VALUES ('rs28609852', '1', '851190', 'A', 'G', '0.210001', 'Gene2', '-0.202015', '0.017565', '1.30E-30');
INSERT INTO `biomarker` VALUES ('rs11507767', '1', '848456', 'G', 'A', '0.211327', 'Gene2', '-0.204776', '0.0175235', '1.51E-31');
INSERT INTO `biomarker` VALUES ('rs4970462', '1', '852758', 'C', 'G', '0.197814', 'Gene2', '-0.203676', '0.0179662', '8.64E-30');
INSERT INTO `biomarker` VALUES ('rs4626817', '1', '848445', 'A', 'G', '0.210943', 'Gene2', '-0.203754', '0.0175363', '3.30E-31');
INSERT INTO `biomarker` VALUES ('rs1110052', '1', '873558', 'G', 'T', '0.327267', 'Gene2', '-0.177981', '0.0152444', '1.71E-31');
INSERT INTO `biomarker` VALUES ('rs76964081', '1', '867635', 'T', 'C', '0.213385', 'Gene2', '-0.199342', '0.0174635', '3.53E-30');
INSERT INTO `biomarker` VALUES ('rs28723578', '1', '850062', 'T', 'A', '0.211712', 'Gene2', '-0.201175', '0.0175157', '1.56E-30');
INSERT INTO `biomarker` VALUES ('rs28407778', '1', '847491', 'A', 'G', '0.211437', 'Gene2', '-0.201279', '0.0175242', '1.55E-30');
INSERT INTO `biomarker` VALUES ('rs77359280', '1', '902288', 'A', 'G', '0.03756', 'Gene2', '0.327473', '0.0366925', '4.47E-19');
INSERT INTO `biomarker` VALUES ('rs41285808', '1', '898467', 'T', 'C', '0.0566785', 'Gene2', '0.261008', '0.0275552', '2.74E-21');
INSERT INTO `biomarker` VALUES ('rs4970434', '1', '900286', 'A', 'G', '0.0612631', 'Gene2', '0.299899', '0.0311492', '6.10E-22');
INSERT INTO `biomarker` VALUES ('rs3905286', '1', '847228', 'T', 'C', '0.203516', 'Gene2', '-0.197935', '0.017782', '8.84E-29');
INSERT INTO `biomarker` VALUES ('rs6605071', '1', '898323', 'T', 'C', '0.0594542', 'Gene2', '0.249101', '0.0269555', '2.44E-20');
INSERT INTO `biomarker` VALUES ('rs3829741', '1', '848738', 'T', 'C', '0.204416', 'Gene2', '-0.198908', '0.0177479', '3.75E-29');
INSERT INTO `biomarker` VALUES ('rs4246505', '1', '848090', 'A', 'G', '0.204361', 'Gene2', '-0.199418', '0.0177488', '2.73E-29');
INSERT INTO `biomarker` VALUES ('rs1806501', '1', '864002', 'C', 'G', '0.211032', 'Gene2', '-0.199635', '0.0175404', '5.18E-30');
INSERT INTO `biomarker` VALUES ('rs13303010', '1', '894573', 'G', 'A', '0.11539', 'Gene2', '0.138461', '0.0232325', '2.53E-09');
INSERT INTO `biomarker` VALUES ('rs28622257', '1', '850123', 'T', 'C', '0.204306', 'Gene2', '-0.200126', '0.0177499', '1.75E-29');
INSERT INTO `biomarker` VALUES ('rs4970460', '1', '858040', 'A', 'C', '0.204753', 'Gene2', '-0.201983', '0.0180506', '4.57E-29');
INSERT INTO `biomarker` VALUES ('rs4970459', '1', '858051', 'T', 'C', '0.204868', 'Gene2', '-0.201043', '0.018048', '8.07E-29');
INSERT INTO `biomarker` VALUES ('rs9697642', '1', '831909', 'C', 'T', '0.269838', 'Gene2', '-0.183204', '0.0164102', '6.12E-29');
INSERT INTO `biomarker` VALUES ('rs28765502', '1', '832918', 'C', 'T', '0.266524', 'Gene2', '-0.182464', '0.0164762', '1.67E-28');
INSERT INTO `biomarker` VALUES ('rs13303160', '1', '901559', 'G', 'A', '0.109392', 'Gene2', '0.145305', '0.0237784', '9.91E-10');
INSERT INTO `biomarker` VALUES ('rs4970385', '1', '831489', 'C', 'T', '0.274551', 'Gene2', '-0.179491', '0.0163245', '4.03E-28');
INSERT INTO `biomarker` VALUES ('rs13303051', '1', '889713', 'C', 'A', '0.0670948', 'Gene2', '0.230513', '0.0254773', '1.46E-19');
INSERT INTO `biomarker` VALUES ('rs6696971', '1', '897738', 'T', 'C', '0.0663891', 'Gene2', '0.226229', '0.0256014', '9.87E-19');
INSERT INTO `biomarker` VALUES ('rs13303206', '1', '889638', 'G', 'C', '0.0666637', 'Gene2', '0.228951', '0.0255576', '3.30E-19');
INSERT INTO `biomarker` VALUES ('rs28612348', '1', '846078', 'T', 'C', '0.191681', 'Gene2', '-0.182661', '0.0182906', '1.74E-23');
INSERT INTO `biomarker` VALUES ('rs4475691', '1', '846808', 'T', 'C', '0.198352', 'Gene2', '-0.194048', '0.0179551', '3.18E-27');
INSERT INTO `biomarker` VALUES ('rs28631199', '1', '890104', 'A', 'G', '0.205164', 'Gene2', '-0.17716', '0.0164308', '4.18E-27');
INSERT INTO `biomarker` VALUES ('rs28594623', '1', '833641', 'C', 'T', '0.20917', 'Gene2', '-0.192135', '0.0179184', '7.96E-27');
INSERT INTO `biomarker` VALUES ('rs950122', '1', '846864', 'C', 'G', '0.195549', 'Gene2', '-0.19299', '0.0180594', '1.18E-26');
INSERT INTO `biomarker` VALUES ('rs4553118', '1', '832398', 'T', 'C', '0.239878', 'Gene2', '-0.181497', '0.0170689', '2.09E-26');
INSERT INTO `biomarker` VALUES ('rs13302996', '1', '901607', 'C', 'G', '0.0760025', 'Gene2', '0.264531', '0.0279259', '2.73E-21');
INSERT INTO `biomarker` VALUES ('rs13303229', '1', '897564', 'T', 'C', '0.0662487', 'Gene2', '0.234624', '0.0256268', '5.42E-20');
INSERT INTO `biomarker` VALUES ('rs28752186', '1', '833302', 'T', 'C', '0.215934', 'Gene2', '-0.184332', '0.0174099', '3.39E-26');
INSERT INTO `biomarker` VALUES ('rs2879816', '1', '861630', 'G', 'A', '0.268385', 'Gene2', '-0.170884', '0.0161657', '4.07E-26');
INSERT INTO `biomarker` VALUES ('rs28552953', '1', '851204', 'C', 'G', '0.218852', 'Gene2', '-0.176532', '0.0181267', '2.06E-22');
INSERT INTO `biomarker` VALUES ('rs28484835', '1', '833824', 'C', 'T', '0.215769', 'Gene2', '-0.183977', '0.0174151', '4.37E-26');
INSERT INTO `biomarker` VALUES ('rs28393498', '1', '896476', 'A', 'G', '0.0622358', 'Gene2', '0.250542', '0.0268384', '1.01E-20');
INSERT INTO `biomarker` VALUES ('rs13303211', '1', '833223', 'T', 'C', '0.215714', 'Gene2', '-0.183641', '0.017417', '5.43E-26');
INSERT INTO `biomarker` VALUES ('rs74047407', '1', '866938', 'A', 'G', '0.241785', 'Gene2', '-0.17333', '0.0167301', '3.75E-25');
INSERT INTO `biomarker` VALUES ('rs61464428', '1', '860416', 'G', 'A', '0.264212', 'Gene2', '-0.174774', '0.0166079', '6.73E-26');
INSERT INTO `biomarker` VALUES ('rs4411087', '1', '834832', 'C', 'G', '0.215337', 'Gene2', '-0.181971', '0.0174285', '1.61E-25');
INSERT INTO `biomarker` VALUES ('rs4970445', '1', '893719', 'G', 'A', '0.0886358', 'Gene2', '0.245308', '0.0254644', '5.78E-22');
INSERT INTO `biomarker` VALUES ('rs2880024', '1', '866893', 'T', 'C', '0.429952', 'Gene2', '-0.137345', '0.0147429', '1.21E-20');
INSERT INTO `biomarker` VALUES ('rs28731045', '1', '836529', 'G', 'C', '0.191987', 'Gene2', '-0.189321', '0.0181945', '2.34E-25');
INSERT INTO `biomarker` VALUES ('rs4970384', '1', '838387', 'C', 'T', '0.196074', 'Gene2', '-0.188528', '0.0181242', '2.43E-25');
INSERT INTO `biomarker` VALUES ('rs3892970', '1', '862866', 'C', 'T', '0.273157', 'Gene2', '-0.170028', '0.0163617', '2.70E-25');
INSERT INTO `biomarker` VALUES ('rs72890788', '1', '836924', 'A', 'G', '0.190419', 'Gene2', '-0.189522', '0.0182433', '2.79E-25');
INSERT INTO `biomarker` VALUES ('rs7419119', '1', '842013', 'G', 'T', '0.194664', 'Gene2', '-0.187544', '0.0180911', '3.52E-25');
INSERT INTO `biomarker` VALUES ('rs7418179', '1', '858801', 'A', 'G', '0.26902', 'Gene2', '-0.167044', '0.0161536', '4.60E-25');
INSERT INTO `biomarker` VALUES ('rs4422949', '1', '834928', 'G', 'A', '0.194243', 'Gene2', '-0.187095', '0.0181108', '5.12E-25');
INSERT INTO `biomarker` VALUES ('rs28593608', '1', '833927', 'C', 'T', '0.192568', 'Gene2', '-0.187693', '0.0181711', '5.20E-25');
INSERT INTO `biomarker` VALUES ('rs28570054', '1', '834999', 'A', 'G', '0.193639', 'Gene2', '-0.187162', '0.018132', '5.59E-25');
INSERT INTO `biomarker` VALUES ('rs117086422', '1', '845635', 'T', 'C', '0.194238', 'Gene2', '-0.178855', '0.0182092', '9.04E-23');
INSERT INTO `biomarker` VALUES ('rs4422948', '1', '835499', 'G', 'A', '0.215541', 'Gene2', '-0.179378', '0.0174215', '7.31E-25');
INSERT INTO `biomarker` VALUES ('rs28385272', '1', '834198', 'C', 'T', '0.191069', 'Gene2', '-0.187397', '0.0182264', '8.53E-25');
INSERT INTO `biomarker` VALUES ('rs60837925', '1', '860688', 'G', 'A', '0.267999', 'Gene2', '-0.168232', '0.016539', '2.65E-24');
INSERT INTO `biomarker` VALUES ('rs57760052', '1', '845938', 'A', 'G', '0.223646', 'Gene2', '-0.164216', '0.0172896', '2.14E-21');
INSERT INTO `biomarker` VALUES ('rs4500250', '1', '832318', 'C', 'A', '0.264742', 'Gene2', '-0.170858', '0.0169961', '8.93E-24');
INSERT INTO `biomarker` VALUES ('rs6605069', '1', '893631', 'A', 'G', '0.0664205', 'Gene2', '0.216261', '0.0262523', '1.75E-16');
INSERT INTO `biomarker` VALUES ('rs4040605', '1', '856476', 'G', 'A', '0.353012', 'Gene2', '-0.149021', '0.0152655', '1.64E-22');
INSERT INTO `biomarker` VALUES ('rs4970435', '1', '900285', 'C', 'T', '0.0781229', 'Gene2', '0.239483', '0.0284078', '3.45E-17');
INSERT INTO `biomarker` VALUES ('rs6669800', '1', '903321', 'G', 'A', '0.108201', 'Gene2', '0.227723', '0.0230722', '5.62E-23');
INSERT INTO `biomarker` VALUES ('rs4970379', '1', '875770', 'A', 'G', '0.42818', 'Gene2', '-0.108344', '0.0155569', '3.30E-12');
INSERT INTO `biomarker` VALUES ('rs13303327', '1', '895706', 'G', 'A', '0.118955', 'Gene2', '0.130523', '0.0236052', '3.21E-08');
INSERT INTO `biomarker` VALUES ('rs111572704', '1', '859685', 'A', 'G', '0.208799', 'Gene2', '-0.146459', '0.0202515', '4.76E-13');
INSERT INTO `biomarker` VALUES ('rs28705752', '1', '836896', 'C', 'T', '0.258753', 'Gene2', '-0.15825', '0.0163763', '4.31E-22');
INSERT INTO `biomarker` VALUES ('rs7524174', '1', '902997', 'G', 'A', '0.128425', 'Gene2', '0.145827', '0.0221762', '4.84E-11');
INSERT INTO `biomarker` VALUES ('rs28562941', '1', '839103', 'G', 'A', '0.254918', 'Gene2', '-0.158665', '0.0164567', '5.35E-22');
INSERT INTO `biomarker` VALUES ('rs28833197', '1', '832756', 'G', 'T', '0.265229', 'Gene2', '-0.35769', '0.0373864', '1.10E-21');
INSERT INTO `biomarker` VALUES ('rs58781670', '1', '846398', 'A', 'G', '0.218455', 'Gene2', '-0.165726', '0.0173575', '1.32E-21');
INSERT INTO `biomarker` VALUES ('rs6657440', '1', '850780', 'C', 'T', '0.364583', 'Gene2', '-0.126376', '0.0149095', '2.33E-17');
INSERT INTO `biomarker` VALUES ('rs4970383', '1', '838555', 'A', 'C', '0.24056', 'Gene2', '-0.156727', '0.0167866', '9.97E-21');
INSERT INTO `biomarker` VALUES ('rs13303369', '1', '852875', 'C', 'T', '0.376987', 'Gene2', '-0.129594', '0.0148039', '2.06E-18');
INSERT INTO `biomarker` VALUES ('rs28546443', '1', '868418', 'T', 'C', '0.251965', 'Gene2', '-0.15325', '0.0177036', '4.87E-18');
INSERT INTO `biomarker` VALUES ('rs1806509', '1', '853954', 'C', 'A', '0.377428', 'Gene2', '-0.129577', '0.0148021', '2.06E-18');
INSERT INTO `biomarker` VALUES ('rs28540380', '1', '842362', 'T', 'C', '0.204661', 'Gene2', '-0.168414', '0.018606', '1.41E-19');
INSERT INTO `biomarker` VALUES ('rs6673914', '1', '855075', 'C', 'G', '0.353802', 'Gene2', '-0.129568', '0.0150745', '8.31E-18');
INSERT INTO `biomarker` VALUES ('rs13303019', '1', '854777', 'A', 'G', '0.353184', 'Gene2', '-0.129826', '0.0150803', '7.37E-18');
INSERT INTO `biomarker` VALUES ('rs28742275', '1', '856108', 'G', 'A', '0.352438', 'Gene2', '-0.133651', '0.0150207', '5.70E-19');
INSERT INTO `biomarker` VALUES ('rs6679046', '1', '850371', 'G', 'T', '0.377015', 'Gene2', '-0.131651', '0.0148026', '5.91E-19');
INSERT INTO `biomarker` VALUES ('rs28534711', '1', '856099', 'G', 'T', '0.352603', 'Gene2', '-0.133216', '0.0150201', '7.37E-19');
INSERT INTO `biomarker` VALUES ('rs13303057', '1', '854978', 'A', 'C', '0.383036', 'Gene2', '-0.127985', '0.0147649', '4.39E-18');
INSERT INTO `biomarker` VALUES ('rs1574243', '1', '841085', 'G', 'C', '0.233303', 'Gene2', '-0.147978', '0.0172698', '1.05E-17');
INSERT INTO `biomarker` VALUES ('rs115438739', '1', '894519', 'A', 'G', '0.0214961', 'Gene2', '0.377986', '0.0499796', '3.94E-14');
INSERT INTO `biomarker` VALUES ('rs4970463', '1', '852037', 'G', 'A', '0.425641', 'Gene2', '-0.119431', '0.0145822', '2.61E-16');
INSERT INTO `biomarker` VALUES ('rs28436996', '1', '852063', 'G', 'A', '0.424298', 'Gene2', '-0.118912', '0.0145255', '2.69E-16');
INSERT INTO `biomarker` VALUES ('rs6664536', '1', '850218', 'T', 'A', '0.423807', 'Gene2', '-0.117516', '0.0145268', '5.99E-16');
INSERT INTO `biomarker` VALUES ('rs9697380', '1', '832066', 'G', 'C', '0.267413', 'Gene2', '-0.14084', '0.0178297', '2.81E-15');
INSERT INTO `biomarker` VALUES ('rs113171913', '1', '869303', 'T', 'C', '0.2561', 'Gene2', '-0.129917', '0.0195552', '3.06E-11');
INSERT INTO `biomarker` VALUES ('rs28625089', '1', '840327', 'A', 'G', '0.201589', 'Gene2', '-0.136261', '0.0205293', '3.19E-11');
INSERT INTO `biomarker` VALUES ('rs6685581', '1', '910438', 'A', 'G', '0.0317878', 'Gene2', '-0.255043', '0.0422971', '1.64E-09');
INSERT INTO `biomarker` VALUES ('rs2710882', '1', '930923', 'A', 'G', '0.18971', 'Gene3', '-0.111663', '0.0135563', '1.77E-16');
INSERT INTO `biomarker` VALUES ('rs3121569', '1', '936210', 'C', 'A', '0.18908', 'Gene3', '-0.106216', '0.0139975', '3.24E-14');
INSERT INTO `biomarker` VALUES ('rs3121570', '1', '936194', 'A', 'G', '0.199693', 'Gene3', '-0.106339', '0.0143403', '1.21E-13');
INSERT INTO `biomarker` VALUES ('rs3128115', '1', '935833', 'C', 'G', '0.201478', 'Gene3', '-0.104579', '0.0142934', '2.54E-13');
INSERT INTO `biomarker` VALUES ('rs144071868', '1', '929565', 'T', 'G', '0.156004', 'Gene3', '-0.0933378', '0.0147523', '2.50E-10');
INSERT INTO `biomarker` VALUES ('rs3128113', '1', '935459', 'A', 'G', '0.199891', 'Gene3', '-0.103133', '0.0143364', '6.30E-13');
INSERT INTO `biomarker` VALUES ('rs74718486', '1', '931500', 'T', 'C', '0.157588', 'Gene3', '-0.0921211', '0.0147219', '3.91E-10');
INSERT INTO `biomarker` VALUES ('rs140144962', '1', '926968', 'T', 'C', '0.15562', 'Gene3', '-0.093803', '0.0149059', '3.11E-10');
INSERT INTO `biomarker` VALUES ('rs114583033', '1', '922483', 'C', 'T', '0.155508', 'Gene3', '-0.0942989', '0.0149108', '2.55E-10');
INSERT INTO `biomarker` VALUES ('rs55692389', '1', '920977', 'C', 'T', '0.154704', 'Gene3', '-0.0964188', '0.0149412', '1.10E-10');
INSERT INTO `biomarker` VALUES ('rs28869591', '1', '920640', 'T', 'C', '0.157691', 'Gene3', '-0.093439', '0.0147767', '2.56E-10');
INSERT INTO `biomarker` VALUES ('rs116904365', '1', '935671', 'G', 'C', '0.154675', 'Gene3', '-0.0849983', '0.0149835', '1.40E-08');
INSERT INTO `biomarker` VALUES ('rs3121571', '1', '935492', 'G', 'T', '0.193257', 'Gene3', '-0.0836723', '0.0152137', '3.80E-08');
INSERT INTO `biomarker` VALUES ('rs7547878', '1', '917315', 'A', 'G', '0.167188', 'Gene3', '-0.0970135', '0.0145548', '2.64E-11');
INSERT INTO `biomarker` VALUES ('rs7417106', '1', '911595', 'A', 'G', '0.200866', 'Gene3', '-0.099478', '0.0147301', '1.44E-11');
INSERT INTO `biomarker` VALUES ('rs4970414', '1', '919501', 'G', 'T', '0.413199', 'Gene3', '-0.0749553', '0.0123489', '1.28E-09');
INSERT INTO `biomarker` VALUES ('rs3829738', '1', '909309', 'C', 'T', '0.17931', 'Gene3', '-0.0967595', '0.014892', '8.17E-11');
INSERT INTO `biomarker` VALUES ('rs2710869', '1', '938116', 'T', 'G', '0.0332031', 'Gene3', '-0.177682', '0.0315946', '1.87E-08');
INSERT INTO `biomarker` VALUES ('rs2489000', '1', '937688', 'T', 'C', '0.0332821', 'Gene3', '-0.179331', '0.0316448', '1.45E-08');
INSERT INTO `biomarker` VALUES ('rs3128112', '1', '932618', 'C', 'G', '0.0300697', 'Gene3', '-0.185719', '0.0327178', '1.38E-08');
INSERT INTO `biomarker` VALUES ('rs2710881', '1', '931014', 'A', 'G', '0.0300156', 'Gene3', '-0.185037', '0.032743', '1.59E-08');
INSERT INTO `biomarker` VALUES ('rs56262069', '1', '889158', 'G', 'C', '0.0671076', 'Gene3', '-0.346882', '0.031785', '9.95E-28');
INSERT INTO `biomarker` VALUES ('rs9697711', '1', '900972', 'T', 'G', '0.0595758', 'Gene3', '-0.262314', '0.0247485', '3.01E-26');
INSERT INTO `biomarker` VALUES ('rs13302983', '1', '914876', 'T', 'C', '0.0254097', 'Gene3', '-0.206916', '0.0369995', '2.24E-08');
INSERT INTO `biomarker` VALUES ('rs3748597', '1', '888659', 'T', 'C', '0.0586498', 'Gene3', '-0.235334', '0.0230611', '1.89E-24');
INSERT INTO `biomarker` VALUES ('rs4970452', '1', '885689', 'G', 'A', '0.0575177', 'Gene3', '-0.234515', '0.0230922', '3.13E-24');
INSERT INTO `biomarker` VALUES ('rs3828049', '1', '889238', 'A', 'G', '0.0579796', 'Gene3', '-0.238827', '0.0231849', '6.97E-25');
INSERT INTO `biomarker` VALUES ('rs3748595', '1', '887560', 'A', 'C', '0.0677361', 'Gene3', '-0.264973', '0.0237644', '7.16E-29');
INSERT INTO `biomarker` VALUES ('rs3748596', '1', '888639', 'T', 'C', '0.0588932', 'Gene3', '-0.231031', '0.0227617', '3.31E-24');
INSERT INTO `biomarker` VALUES ('rs3828047', '1', '887801', 'A', 'G', '0.0586634', 'Gene3', '-0.230738', '0.0228793', '6.44E-24');
INSERT INTO `biomarker` VALUES ('rs4970376', '1', '885699', 'A', 'G', '0.058724', 'Gene3', '-0.229548', '0.0228715', '1.05E-23');
INSERT INTO `biomarker` VALUES ('rs4970375', '1', '886006', 'T', 'C', '0.0587095', 'Gene3', '-0.229764', '0.0228721', '9.61E-24');
INSERT INTO `biomarker` VALUES ('rs4246503', '1', '884815', 'A', 'G', '0.0584893', 'Gene3', '-0.229898', '0.0228367', '7.73E-24');
INSERT INTO `biomarker` VALUES ('rs2340582', '1', '882803', 'A', 'G', '0.056977', 'Gene3', '-0.229602', '0.0231215', '3.08E-23');
INSERT INTO `biomarker` VALUES ('rs3748592', '1', '880238', 'A', 'G', '0.0575037', 'Gene3', '-0.224795', '0.0230234', '1.61E-22');
INSERT INTO `biomarker` VALUES ('rs13303351', '1', '901023', 'T', 'C', '0.0642231', 'Gene3', '-0.258164', '0.0238225', '2.30E-27');
INSERT INTO `biomarker` VALUES ('rs28690976', '1', '903245', 'A', 'G', '0.422705', 'Gene3', '-0.093312', '0.0129849', '6.66E-13');
INSERT INTO `biomarker` VALUES ('rs2839', '1', '879687', 'T', 'C', '0.057095', 'Gene3', '-0.224107', '0.0231009', '2.98E-22');
INSERT INTO `biomarker` VALUES ('rs4372192', '1', '876499', 'A', 'G', '0.0565329', 'Gene3', '-0.22196', '0.0232955', '1.60E-21');
INSERT INTO `biomarker` VALUES ('rs4970377', '1', '885676', 'C', 'A', '0.0633843', 'Gene3', '-0.23438', '0.021991', '1.60E-26');
INSERT INTO `biomarker` VALUES ('rs13302957', '1', '891021', 'G', 'A', '0.0769434', 'Gene3', '-0.243605', '0.0219085', '1.01E-28');
INSERT INTO `biomarker` VALUES ('rs10465242', '1', '886788', 'G', 'A', '0.111988', 'Gene3', '-0.25237', '0.0193135', '5.08E-39');
INSERT INTO `biomarker` VALUES ('rs6605067', '1', '879676', 'G', 'A', '0.0592202', 'Gene3', '-0.224617', '0.022706', '4.49E-23');
INSERT INTO `biomarker` VALUES ('rs13303106', '1', '891945', 'A', 'G', '0.383295', 'Gene3', '-0.149178', '0.0125078', '8.58E-33');
INSERT INTO `biomarker` VALUES ('rs13303065', '1', '891059', 'C', 'T', '0.384601', 'Gene3', '-0.146987', '0.0125552', '1.17E-31');
INSERT INTO `biomarker` VALUES ('rs4970441', '1', '897325', 'G', 'C', '0.0741015', 'Gene3', '-0.266551', '0.022282', '5.58E-33');
INSERT INTO `biomarker` VALUES ('rs2272757', '1', '881627', 'G', 'A', '0.381866', 'Gene3', '-0.14724', '0.0127023', '4.55E-31');
INSERT INTO `biomarker` VALUES ('rs13302945', '1', '889159', 'A', 'C', '0.0672785', 'Gene3', '-0.223504', '0.0247026', '1.46E-19');
INSERT INTO `biomarker` VALUES ('rs4970371', '1', '893280', 'G', 'A', '0.0581334', 'Gene3', '-0.210619', '0.0235623', '3.93E-19');
INSERT INTO `biomarker` VALUES ('rs13303227', '1', '892745', 'G', 'A', '0.059683', 'Gene3', '-0.207243', '0.0232742', '5.37E-19');
INSERT INTO `biomarker` VALUES ('rs77359280', '1', '902288', 'A', 'G', '0.03756', 'Gene3', '-0.259615', '0.0315573', '1.92E-16');
INSERT INTO `biomarker` VALUES ('rs41285808', '1', '898467', 'T', 'C', '0.0566785', 'Gene3', '-0.205195', '0.0240777', '1.57E-17');
INSERT INTO `biomarker` VALUES ('rs4970434', '1', '900286', 'A', 'G', '0.0612631', 'Gene3', '-0.216439', '0.0257825', '4.67E-17');
INSERT INTO `biomarker` VALUES ('rs6605071', '1', '898323', 'T', 'C', '0.0594542', 'Gene3', '-0.194198', '0.0233276', '8.45E-17');
INSERT INTO `biomarker` VALUES ('rs13303010', '1', '894573', 'G', 'A', '0.11539', 'Gene3', '-0.224836', '0.0197741', '5.89E-30');
INSERT INTO `biomarker` VALUES ('rs13303160', '1', '901559', 'G', 'A', '0.109392', 'Gene3', '-0.224754', '0.0203397', '2.19E-28');
INSERT INTO `biomarker` VALUES ('rs13303051', '1', '889713', 'C', 'A', '0.0670948', 'Gene3', '-0.208709', '0.0220329', '2.73E-21');
INSERT INTO `biomarker` VALUES ('rs6696971', '1', '897738', 'T', 'C', '0.0663891', 'Gene3', '-0.215519', '0.022057', '1.50E-22');
INSERT INTO `biomarker` VALUES ('rs13303206', '1', '889638', 'G', 'C', '0.0666637', 'Gene3', '-0.209991', '0.0220997', '2.06E-21');
INSERT INTO `biomarker` VALUES ('rs13302996', '1', '901607', 'C', 'G', '0.0760025', 'Gene3', '-0.221692', '0.0231619', '1.05E-21');
INSERT INTO `biomarker` VALUES ('rs13303229', '1', '897564', 'T', 'C', '0.0662487', 'Gene3', '-0.207595', '0.0220874', '5.52E-21');
INSERT INTO `biomarker` VALUES ('rs28393498', '1', '896476', 'A', 'G', '0.0622358', 'Gene3', '-0.183096', '0.0221612', '1.43E-16');
INSERT INTO `biomarker` VALUES ('rs4970445', '1', '893719', 'G', 'A', '0.0886358', 'Gene3', '-0.221463', '0.0212544', '2.02E-25');
INSERT INTO `biomarker` VALUES ('rs2880024', '1', '866893', 'T', 'C', '0.429952', 'Gene3', '-0.107678', '0.0124714', '5.92E-18');
INSERT INTO `biomarker` VALUES ('rs6605069', '1', '893631', 'A', 'G', '0.0664205', 'Gene3', '-0.199022', '0.0225551', '1.11E-18');
INSERT INTO `biomarker` VALUES ('rs4040605', '1', '856476', 'G', 'A', '0.353012', 'Gene3', '-0.094821', '0.012987', '2.85E-13');
INSERT INTO `biomarker` VALUES ('rs4970435', '1', '900285', 'C', 'T', '0.0781229', 'Gene3', '-0.202565', '0.023337', '3.96E-18');
INSERT INTO `biomarker` VALUES ('rs4970379', '1', '875770', 'A', 'G', '0.42818', 'Gene3', '-0.0968352', '0.0130064', '9.68E-14');
INSERT INTO `biomarker` VALUES ('rs13303327', '1', '895706', 'G', 'A', '0.118955', 'Gene3', '-0.197069', '0.0200461', '8.30E-23');
INSERT INTO `biomarker` VALUES ('rs7524174', '1', '902997', 'G', 'A', '0.128425', 'Gene3', '-0.180473', '0.0187104', '5.13E-22');
INSERT INTO `biomarker` VALUES ('rs6657440', '1', '850780', 'C', 'T', '0.364583', 'Gene3', '-0.0995552', '0.0126719', '3.95E-15');
INSERT INTO `biomarker` VALUES ('rs13303369', '1', '852875', 'C', 'T', '0.376987', 'Gene3', '-0.093338', '0.0125881', '1.22E-13');
INSERT INTO `biomarker` VALUES ('rs1806509', '1', '853954', 'C', 'A', '0.377428', 'Gene3', '-0.091686', '0.0126415', '4.08E-13');
INSERT INTO `biomarker` VALUES ('rs6673914', '1', '855075', 'C', 'G', '0.353802', 'Gene3', '-0.0935547', '0.0128569', '3.42E-13');
INSERT INTO `biomarker` VALUES ('rs13303019', '1', '854777', 'A', 'G', '0.353184', 'Gene3', '-0.0922311', '0.0128628', '7.48E-13');
INSERT INTO `biomarker` VALUES ('rs28742275', '1', '856108', 'G', 'A', '0.352438', 'Gene3', '-0.0884239', '0.0128314', '5.53E-12');
INSERT INTO `biomarker` VALUES ('rs6679046', '1', '850371', 'G', 'T', '0.377015', 'Gene3', '-0.0974443', '0.0126407', '1.27E-14');
INSERT INTO `biomarker` VALUES ('rs28534711', '1', '856099', 'G', 'T', '0.352603', 'Gene3', '-0.0882657', '0.0128308', '6.02E-12');
INSERT INTO `biomarker` VALUES ('rs13303057', '1', '854978', 'A', 'C', '0.383036', 'Gene3', '-0.0964701', '0.0126052', '1.96E-14');
INSERT INTO `biomarker` VALUES ('rs115438739', '1', '894519', 'A', 'G', '0.0214961', 'Gene3', '-0.277583', '0.0455383', '1.09E-09');
INSERT INTO `biomarker` VALUES ('rs4970463', '1', '852037', 'G', 'A', '0.425641', 'Gene3', '-0.0929694', '0.0126734', '2.20E-13');
INSERT INTO `biomarker` VALUES ('rs28436996', '1', '852063', 'G', 'A', '0.424298', 'Gene3', '-0.0930005', '0.012637', '1.85E-13');
INSERT INTO `biomarker` VALUES ('rs6664536', '1', '850218', 'T', 'A', '0.423807', 'Gene3', '-0.0920587', '0.0126381', '3.24E-13');
INSERT INTO `biomarker` VALUES ('rs112905931', '1', '896271', 'C', 'T', '0.425208', 'Gene3', '-0.0841322', '0.0141871', '3.03E-09');
INSERT INTO `biomarker` VALUES ('rs6696281', '1', '903104', 'T', 'C', '0.0506171', 'Gene3', '-0.184177', '0.0306054', '1.77E-09');
INSERT INTO `biomarker` VALUES ('rs3748593', '1', '880390', 'A', 'C', '0.0271013', 'Gene3', '-0.230488', '0.0400166', '8.42E-09');
INSERT INTO `biomarker` VALUES ('rs3748594', '1', '886384', 'A', 'G', '0.0281547', 'Gene3', '-0.22202', '0.0398327', '2.49E-08');

-- ----------------------------
-- Table structure for phenotype
-- ----------------------------
DROP TABLE IF EXISTS `phenotype`;
CREATE TABLE `phenotype`  (
  `trait` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `rsid` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `chr_exposure` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `pos_exposure` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `effect_allele` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `other_allele` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `beta` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `se` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `pval` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `samplesize` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of phenotype
-- ----------------------------
INSERT INTO `phenotype` VALUES ('trait_1', 'rs115729201', '1', '168964222', 'C', 'A', '0.0104233', '0.00107236', '2.50E-22', '336782');
INSERT INTO `phenotype` VALUES ('trait_1', 'rs6025', '1', '169519049', 'C', 'T', '-0.0322567', '0.00115078', '1.10E-172', '336782');
INSERT INTO `phenotype` VALUES ('trait_1', 'rs113079063', '1', '169031755', 'T', 'G', '0.00778377', '0.00109198', '1.02E-12', '336782');
INSERT INTO `phenotype` VALUES ('trait_1', 'rs6032', '1', '169511555', 'C', 'T', '-0.00237294', '0.000388115', '9.73E-10', '336782');
INSERT INTO `phenotype` VALUES ('trait_1', 'rs4253399', '4', '187188094', 'G', 'T', '0.0034613', '0.000354851', '1.78E-22', '336782');
INSERT INTO `phenotype` VALUES ('trait_1', 'rs12644950', '4', '155537321', 'A', 'G', '0.00345614', '0.000403437', '1.07E-17', '336782');
INSERT INTO `phenotype` VALUES ('trait_1', 'rs4541868', '8', '106590705', 'A', 'C', '-0.00233391', '0.00039021', '2.22E-09', '336782');
INSERT INTO `phenotype` VALUES ('trait_1', 'rs28615587', '9', '136365146', 'G', 'T', '-0.00210356', '0.000375116', '2.05E-08', '336782');
INSERT INTO `phenotype` VALUES ('trait_1', 'rs687289', '9', '136137106', 'A', 'G', '0.00637164', '0.0003713', '5.61E-66', '336782');
INSERT INTO `phenotype` VALUES ('trait_1', 'rs17490626', '10', '71218646', 'C', 'G', '-0.00386839', '0.00051567', '6.32E-14', '336782');
INSERT INTO `phenotype` VALUES ('trait_1', 'rs10838599', '11', '46378708', 'T', 'G', '-0.00244279', '0.000398324', '8.65E-10', '336782');
INSERT INTO `phenotype` VALUES ('trait_1', 'rs78807356', '11', '46596670', 'T', 'G', '0.0067201', '0.00103971', '1.02E-10', '336782');
INSERT INTO `phenotype` VALUES ('trait_1', 'rs7263203', '20', '33773375', 'C', 'A', '0.00346794', '0.000611198', '1.40E-08', '336782');
INSERT INTO `phenotype` VALUES ('trait_2', 'rs1562314', '2', '177045560', 'T', 'A', '-0.1137', '0.0144', '2.88E-15', '66450');
INSERT INTO `phenotype` VALUES ('trait_2', 'rs62276619', '3', '156397692', 'T', 'C', '0.37', '0.0284', '5.53E-39', '66450');
INSERT INTO `phenotype` VALUES ('trait_2', 'rs4449583', '5', '1284135', 'T', 'C', '0.0976', '0.01426', '7.76E-12', '66450');
INSERT INTO `phenotype` VALUES ('trait_2', 'rs73375000', '8', '129561866', 'T', 'C', '-0.1638', '0.02023', '4.58E-16', '66450');
INSERT INTO `phenotype` VALUES ('trait_2', 'rs11782652', '8', '82653644', 'G', 'A', '0.1524', '0.02508', '1.25E-09', '66450');
INSERT INTO `phenotype` VALUES ('trait_2', 'rs115478735', '9', '136149711', 'T', 'A', '0.09941', '0.01672', '2.80E-09', '66450');
INSERT INTO `phenotype` VALUES ('trait_2', 'rs10962691', '9', '16915105', 'G', 'C', '-0.2133', '0.01698', '1.73E-36', '66450');
INSERT INTO `phenotype` VALUES ('trait_2', 'rs7084454', '10', '21821274', 'A', 'G', '0.08833', '0.01395', '2.41E-10', '66450');
INSERT INTO `phenotype` VALUES ('trait_2', 'rs6496746', '15', '91532869', 'A', 'C', '-0.095', '0.01735', '4.18E-08', '66450');
INSERT INTO `phenotype` VALUES ('trait_2', 'rs7217120', '17', '46484755', 'C', 'T', '0.1085', '0.01456', '9.32E-14', '66450');
INSERT INTO `phenotype` VALUES ('trait_2', 'rs71238846', '17', '43552537', 'A', 'G', '0.1269', '0.01693', '6.59E-14', '66450');
INSERT INTO `phenotype` VALUES ('trait_2', 'rs199529', '17', '44837217', 'C', 'A', '0.1027', '0.01563', '5.15E-11', '66450');
INSERT INTO `phenotype` VALUES ('trait_2', 'rs79641193', '17', '44330105', 'G', 'A', '0.1241', '0.01699', '2.84E-13', '66450');
INSERT INTO `phenotype` VALUES ('trait_2', 'rs4808075', '19', '17390291', 'C', 'T', '0.1224', '0.01437', '1.54E-17', '66450');

SET FOREIGN_KEY_CHECKS = 1;
