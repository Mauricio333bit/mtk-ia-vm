//aca se puede hacer un mapeo de la info
export const aiProductsData = [
  {
    id: 1,
    nombre: "VUNO Med®-DeepBrain®",
    imagen: ["deepbrain.jpg", "deepbrain2.jpg", "deepbrain3.jpg"],
    descripcion:
      "VUNO Med-DeepBrain aids in neurodegenerative disease diagnosis by detecting cerebral small vessel disease and quantifying brain atrophy using MRI.",
    categoria: "MR",
    habilitado: "0",
    features: [1, 3, 5]
  },
  {
    id: 2,
    nombre: "VUNO Med®-Chest X-ray™",
    imagen: ["chest.jpg", "chest2.jpg", "chest3.jpg", "chest4.jpg"],
    descripcion:
      "VUNO Med- Chest X-ray has been trained on major abnormal findings detected in chest X-ray to assist in the reading of chest X-ray images.",
    categoria: "CR/DX",
    habilitado: "0",
    features: [1, 3, 5]
  },
  {
    id: 3,
    nombre: "VUNO Med®-BoneAge™",
    imagen: ["boneage.jpg", "boneage2.jpg", "boneage4.jpg", "boneage3.jpg"],
    descripcion:
      "VUNO Med-BoneAge automatically assesses bone age by reading a hand X-ray image and provides 3 most likely candidates for bone age.",
    categoria: "CR/DX",
    habilitado: "0",
    features: [1, 3, 5]
  },
  {
    id: 4,
    nombre: "VUNO Med®-LungCT AI™",
    imagen: ["lung.jpg", "lung2.jpg", "lung3.jpg"],
    descripcion: "VUNO Med-LungCT AI detects nodules in chest CT to provide volume and location data.",
    categoria: "CT",
    habilitado: "0",
    features: [1, 3, 5]
  },
  {
    id: 5,
    nombre: "Entelai Mamografía",
    imagen: ["entelai_1.png", "entelai_mamo.jpg"],
    descripcion:
      "Entelai Mamografía entrega un reporte con una clasificacion de riesgo por colores, enmarcando la zona donde la inteligencia artificial indica los hallazgos a verificar por el profesional",
    categoria: "MG",
    habilitado: "0",
    features: [1, 3, 5]
  },
  {
    id: 6,
    nombre: "Entelai Rx de Tórax",
    imagen: ["entelai_2.png", "entelai_torax_1.jpg"],
    descripcion:
      "Entelai Rx de Tórax con mapas de calor son una representación visual de los sectores de la radiografía que fueron más relevantes para el algoritmo de inteligencia artificial en su predicción.",
    categoria: "CR/DX",
    habilitado: "0",
    features: [1, 3, 5]
  },
  {
    id: 7,
    nombre: "Entelai Desmielinizantes",
    imagen: ["entelai_3.png", "entelai_des_1.jpg", "entelai_des_2.jpg", "entelai_des_3.jpg"],
    descripcion:
      "Las mediciones de desmielinizantes, en particular sirven para identificar y caracterizar las lesiones en el sistema nervioso central causadas por la pérdida o daño de la vaina de mielina.",
    categoria: "MR",
    habilitado: "0",
    features: [1, 4, 5]
  },
  {
    id: 8,
    nombre: "Entelai Volumetría",
    imagen: ["entelai_4.png", "entelai_volum_1.jpg", "entelai_volum_2.jpg", "entelai_volum_3.jpg"],
    descripcion:
      "Entelai Volumetría permite evaluar cambios estructurales, detectar enfermedades neurodegenerativas y monitorizar la progresión de condiciones neurológicas",
    categoria: "MR",
    habilitado: "0",
    features: [1, 3, 6]
  },
  {
    id: 9,
    nombre: "NeuroScan™ Insight MR",
    imagen: ["neuroscan.jpg"],
    descripcion:
      "NeuroScan Insight MR utiliza IA para detectar signos tempranos de esclerosis múltiple y otras enfermedades neurodegenerativas a partir de imágenes por resonancia magnética.",
    categoria: "MR",
    habilitado: "0",
    features: [1, 3, 2]
  },
  {
    id: 10,
    nombre: "EchoWise™ CardioView",
    imagen: ["echowise.jpg"],
    descripcion:
      "EchoWise CardioView mejora la precisión diagnóstica en estudios ecocardiográficos, ayudando a identificar anomalías estructurales y funcionales.",
    categoria: "US",
    habilitado: "0",
    features: [6, 3, 5]
  },
  {
    id: 11,
    nombre: "MammoTech™ Reveal",
    imagen: ["mammotech.jpg"],
    descripcion:
      "MammoTech Reveal asiste en la detección temprana del cáncer de mama mediante el análisis automatizado de mamografías digitales.",
    categoria: "MG",
    habilitado: "0",
    features: [2, 4, 5]
  },
  {
    id: 12,
    nombre: "Scanalyze™ CT Lung",
    imagen: ["ctlung.jpg"],
    descripcion:
      "Scanalyze CT Lung detecta nódulos pulmonares y evalúa su progresión utilizando algoritmos entrenados con miles de estudios torácicos.",
    categoria: "CT",
    habilitado: "0",
    features: [4, 3, 5]
  },
  {
    id: 13,
    nombre: "NeuroAxis™ BrainMap",
    imagen: ["brainmap.jpg"],
    descripcion:
      "BrainMap analiza imágenes de resonancia magnética cerebral para cuantificar atrofias y detectar lesiones isquémicas.",
    categoria: "MR",
    habilitado: "0",
    features: [1, 3]
  },
  {
    id: 14,
    nombre: "SonoMedic™ Thyroid AI",
    imagen: ["thyroid.jpg"],
    descripcion:
      "SonoMedic Thyroid AI identifica nódulos tiroideos sospechosos a partir de ecografías, apoyando decisiones clínicas rápidas.",
    categoria: "US",
    habilitado: "0",
    features: [1, 3, 5]
  },
  {
    id: 15,
    nombre: "NucleoAI™ CardioScan",
    imagen: ["cardioscan.jpg"],
    descripcion:
      "CardioScan automatiza la interpretación de imágenes nucleares cardíacas para evaluar la perfusión miocárdica.",
    categoria: "NM",
    habilitado: "0",
    features: [1, 2, 5]
  },
  {
    id: 16,
    nombre: "VisioRay™ ChestView",
    imagen: ["chestview.jpg"],
    descripcion:
      "ChestView asiste a los radiólogos en la detección de hallazgos críticos en radiografías de tórax mediante IA de última generación.",
    categoria: "CR/DX",
    habilitado: "0",
    features: [1, 3, 5]
  },
  {
    id: 17,
    nombre: "EchoLogic™ OBView",
    imagen: ["obview.jpg"],
    descripcion:
      "OBView analiza ecografías obstétricas para evaluar biometría fetal y detectar malformaciones congénitas.",
    categoria: "US",
    habilitado: "0",
    features: [1, 3, 5]
  },
  {
    id: 18,
    nombre: "NeuroField™ PETDetect",
    imagen: ["petdetect.jpg"],
    descripcion:
      "PETDetect utiliza IA para analizar estudios PET y detectar patrones anómalos de metabolismo cerebral.",
    categoria: "NM",
    habilitado: "0",
    features: [6, 3, 5]
  },
  {
    id: 19,
    nombre: "LuminaScan™ MammoCheck",
    imagen: ["mammocheck.jpg"],
    descripcion: "MammoCheck asiste en el cribado poblacional mediante un análisis detallado de mamografías.",
    categoria: "MG",
    habilitado: "0",
    features: [1, 3, 5]
  },
  {
    id: 20,
    nombre: "CranioAI™ Trauma CT",
    imagen: ["traumact.jpg"],
    descripcion:
      "Trauma CT detecta hemorragias intracraneales y fracturas craneales en estudios de tomografía computarizada de urgencias.",
    categoria: "CT",
    habilitado: "0",
    features: [1, 3, 5]
  },
  {
    id: 21,
    nombre: "PulmoView™ ChestCR",
    imagen: ["chestcr.jpg"],
    descripcion:
      "ChestCR automatiza la identificación de infiltrados, consolidaciones y nódulos en radiografías torácicas.",
    categoria: "CR/DX",
    habilitado: "0",
    features: [1, 3, 5]
  },
  {
    id: 22,
    nombre: "EchoNova™ BreastUS",
    imagen: ["breastus.jpg"],
    descripcion:
      "BreastUS mejora la evaluación de lesiones mamarias en ecografías mediante caracterización automatizada.",
    categoria: "US",
    habilitado: "0",
    features: [1, 3, 5]
  },
  {
    id: 23,
    nombre: "NeuroPET™ EarlyDetect",
    imagen: ["earlydetect.jpg"],
    descripcion:
      "EarlyDetect analiza estudios PET para apoyar el diagnóstico temprano del Alzheimer y otras demencias.",
    categoria: "NM",
    habilitado: "0",
    features: [4, 3, 1]
  },
  {
    id: 24,
    nombre: "Koios DS™ Breast",
    imagen: ["koios_breast.jpg"],
    descripcion: "Smart Ultrasound software providing early and accurate breast cancer diagnosis.",
    categoria: "US",
    habilitado: "0",
    features: [1, 3, 5]
  },
  {
    id: 25,
    nombre: "Koios DS™ Thyroid",
    imagen: ["koios_thyroid.jpg"],
    descripcion: "Smart Ultrasound software providing early and accurate thyroid cancer diagnosis.",
    categoria: "US",
    habilitado: "0",
    features: [1, 3, 5]
  },
  {
    id: 26,
    nombre: "AZtrauma",
    imagen: ["aztrauma.jpg", "Trauma_original.jpg", "TraumaRayvolve.jpg", "TraumaDICOMRESUME.jpg"],
    descripcion:
      "AZtrauma is the leading AI radiology solution for detecting fractures, dislocations, and joint effusions on X-rays. Clinically validated by top institutions across continents, the trauma solution ensures trust and reliability in acute situations.",
    categoria: "CR/DX",
    habilitado: "0",
    features: [1, 3, 5]
  },
  {
    id: 27,
    nombre: "AZchest",
    imagen: ["azchest.jpg", "Chestoriginal.jpg", "Chstrayvolve.jpg"],
    descripcion:
      "AZchest is clinically validated AI radiology solution trusted by top institutions worldwide. It automatically categorizes, detects and reports the main cardiac and lung abnormalities on X-rays.",
    categoria: "CR/DX",
    habilitado: "0",
    features: [1, 3, 5]
  },
  {
    id: 28,
    nombre: "AZmeasure",
    imagen: ["azmeasure.jpg", "AZmeasureoriginal.jpg", "AZmeasureanalisis.jpg", "AZmeasureinforme.jpg"],
    descripcion:
      "AZmeasure delivers automated characterization of osteo-articular geometries, including lengths and angular positions.",
    categoria: "CR/DX",
    habilitado: "0",
    features: [1, 3, 5]
  },
  {
    id: 29,
    nombre: "AZboneage",
    imagen: ["azboneage.jpg", "AZboneageoriginal.jpg", "AZboneAgeRayvolve.jpg"],
    descripcion:
      "AZboneage provides advanced automated calculation of the bone age of pediatric patients, based on the reference Greulich & Pyle methodology. Seamlessly integrated into clinical workflows, the product also performs the statistical comparison between the bone and chronological age of the young patients.",
    categoria: "CR/DX",
    habilitado: "0",
    features: [1, 3, 5]
  },
  {
    id: 30,
    nombre: "Lunit INSIGHT CXR",
    imagen: ["lunit_cxr.jpg", "lunit_cxr2.jpg", "lunit_cxr3.jpg", "lunit_cxr4.jpg"],
    descripcion:
      "Lunit INSIGHT CXR detects 10 abnormal radiologic findings with 97-99% accuracy. Nodule - Consolidation - Pneumothorax - Pleural effusion - Atelectasis - Pneumoperitoneum - Cardiomegaly - Mediastinal widening - Calcification - Fibrosis - Supports tuberculosis screening.",
    categoria: "CR/DX",
    habilitado: "0",
    features: [1, 3, 5]
  },
  {
    id: 31,
    nombre: "Lunit INSIGHT MMG",
    imagen: ["lunit_mmg.jpg", "lunit_mmg2.jpg", "lunit_mmg3.jpg", "lunit_mmg4.jpg", "lunit_mmg5.jpg"],
    descripcion:
      "Lunit INSIGHT MMG accurately detects lesions suspicious of breast cancer in a mammogram. Normal / Benign mass - Malignant mass.",
    categoria: "MG",
    habilitado: "0",
    features: [1, 3, 5]
  },
  {
    id: 32,
    nombre: "Lunit INSIGHT DBT",
    imagen: ["lunit_dbt.jpg", "lunit_dbt2.jpg", "lunit_dbt3.jpg", "lunit_dbt4.jpg"],
    descripcion:
      "Lunit INSIGHT DBT AI Solution for Digital Breast Tomosynthesis. Quantifies the likelihood of malignancy for each suspicious lesion with an abnormality score (0-100) and displays location information with heatmap or contours. It also provides information on lesion types: soft tissue lesions (mass, architectural distortion, and asymmetry) & calcification.",
    categoria: "MG",
    habilitado: "0",
    features: [1, 3, 5]
  },
  {
    id: 33,
    nombre: "MILVUE TechCare Trauma",
    imagen: ["milvue_tt.jpg", "milvue_tt2.jpg"],
    descripcion:
      "TechCare Trauma instantly detects anomalies, even the smallest ones, in the skeletal system, supporting radiologists and emergency physicians in optimizing exam prioritization and diagnostic quality. For the patient, this means a more secure and streamlined care process.",
    categoria: "CR/DX",
    habilitado: "0",
    features: [1, 3, 5]
  },
]
