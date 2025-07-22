export const aiProductsData = [
  {
    id: 1,
    nombre: "VUNO Med®-DeepBrain®",
    imagen: ["deepbrain.jpg", "deepbrain2.jpg", "deepbrain3.jpg"],
    descripcion:
      "VUNO Med DeepBrain es una solución avanzada basada en inteligencia artificial diseñada específicamente para asistir en el diagnóstico temprano de enfermedades neurodegenerativas. Este sistema analiza imágenes de resonancia magnética cerebral con alta precisión para detectar signos de enfermedad vascular cerebral pequeña y cuantificar atrofia cerebral. Su capacidad para identificar cambios sutiles en la estructura del cerebro lo convierte en una herramienta clave para la evaluación neurológica.",
    categoria: "MR",
    habilitado: "0",
    features: [4, 3, 5],
    modoUso: {
      descripcion: "Carga las imágenes DICOM de resonancia magnética cerebral, selecciona el protocolo de análisis neurológico y revisa los resultados automatizados de detección de atrofia y lesiones vasculares pequeñas.",
      videoTutorial: "https://www.youtube.com/watch?v=DP4uglhVOS0"
    },


  },
  {
    id: 2,
    nombre: "VUNO Med®-Chest X-ray™",
    imagen: ["chest.jpg", "chest2.jpg", "chest3.jpg"],
    descripcion:
      "VUNO Med Chest X-ray está entrenado en miles de hallazgos anormales comunes en radiografías de tórax, ofreciendo apoyo integral en la lectura e interpretación de estas imágenes. Esta solución ayuda a los radiólogos a identificar condiciones pulmonares, cardiovasculares y musculoesqueléticas con mayor eficiencia y confianza, acelerando el proceso diagnóstico sin comprometer la calidad.",
    categoria: "CR/DX",
    habilitado: "1",
    features: [1, 7, 8],
    patologias: ["Nódulo / Masa", "Consolidación", "Derrame pleural", "Neumotórax", "Opacidad intersticial"]
    ,
    modoUso: {
      descripcion: "Importa la radiografía de tórax en formato DICOM, ejecuta el análisis automatizado y revisa los hallazgos destacados con códigos de color para diferentes patologías pulmonares y cardiovasculares.",
      videoTutorial: "https://www.youtube.com/watch?v=DP4uglhVOS0"
    }
  },
  {
    id: 3,
    nombre: "VUNO Med®-BoneAge™",
    imagen: ["boneage.jpg", "boneage2.jpg", "boneage4.jpg", "boneage3.jpg"],
    descripcion:
      "VUNO Med BoneAge ofrece una evaluación automática precisa de la edad ósea mediante el análisis de radiografías de la mano. Además de proporcionar resultados inmediatos, el sistema muestra tres posibles candidatos para la edad ósea, permitiendo al médico elegir la opción más adecuada. Ideal para estudios pediátricos donde se requiere monitoreo del desarrollo físico o diagnóstico hormonal.",
    categoria: "CR/DX",
    habilitado: "0",
    features: [2, 3, 4],
    modoUso: {
      descripcion: "Carga la radiografía de mano izquierda del paciente pediátrico, selecciona el método de evaluación (Greulich-Pyle o Tanner-Whitehouse) y revisa las tres opciones de edad ósea sugeridas por el sistema.",
      videoTutorial: "https://www.youtube.com/watch?v=DP4uglhVOS0"
    }
  },
  {
    id: 4,
    nombre: "VUNO Med®-LungCT AI™",
    imagen: ["lung.jpg", "lung2.jpg", "lung3.jpg"],
    descripcion:
      "VUNO Med LungCT AI utiliza inteligencia artificial avanzada para detectar nódulos pulmonares en tomografías computarizadas del tórax. El sistema no solo identifica estos hallazgos, sino que también proporciona información detallada sobre su ubicación, tamaño y volumen, facilitando tanto el diagnóstico inicial como el seguimiento longitudinal de lesiones sospechosas.",
    categoria: "CT",
    habilitado: "0",
    features: [1, 2, 5],
    modoUso: {
      descripcion: "Importa el estudio de TC de tórax, configura los parámetros de detección de nódulos según el protocolo clínico y analiza los resultados con mediciones volumétricas automáticas y seguimiento comparativo.",
      videoTutorial: "https://www.youtube.com/watch?v=DP4uglhVOS0"
    }
  },
  {
    id: 5,
    nombre: "Entelai Mamografía",
    imagen: ["entelai_1.png", "entelai_mamo.jpg"],
    descripcion:
      "Entelai Mamografía utiliza inteligencia artificial para clasificar el riesgo de cáncer de mama mediante colores y marcos visuales que resaltan las áreas de interés en la imagen. Este informe visual permite a los radiólogos centrarse en las regiones críticas, mejorando la precisión diagnóstica y reduciendo tiempos de revisión.",
    categoria: "MG",
    habilitado: "1",
    features: [1, 3, 5],
    modoUso: {
      descripcion: "Carga las mamografías digitales en proyecciones CC y MLO, ejecuta el análisis de IA y revisa las áreas destacadas con código de colores según el nivel de riesgo identificado.",
      videoTutorial: "https://www.youtube.com/watch?v=DP4uglhVOS0"
    }
  },
  {
    id: 6,
    nombre: "Entelai Rx de Tórax",
    imagen: ["entelai_2.png", "entelai_torax_1.jpg"],
    descripcion:
      "Entelai Rx de Tórax utiliza mapas de calor generados por IA para mostrar las zonas más relevantes en las radiografías torácicas. Estos mapas ayudan al profesional a enfocarse en áreas clínicamente significativas, mejorando la eficiencia diagnóstica y aumentando la seguridad en la detección de anomalías pulmonares y cardiovasculares.",
    categoria: "CR/DX",
    habilitado: "1",
    features: [1, 3, 5],
    modoUso: {
      descripcion: "Importa la radiografía de tórax PA o AP, activa la función de mapa de calor y analiza las regiones de interés destacadas por el algoritmo de inteligencia artificial.",
      videoTutorial: "https://www.youtube.com/watch?v=DP4uglhVOS0"
    }
  },
  {
    id: 7,
    nombre: "Entelai Desmielinizantes",
    imagen: ["entelai_3.png", "entelai_des_1.jpg", "entelai_des_2.jpg", "entelai_des_3.jpg"],
    descripcion:
      "La solución Entelai para desmielinización está orientada a la identificación y caracterización precisa de lesiones en el sistema nervioso central causadas por pérdida de la vaina de mielina. Con esta herramienta, los neurólogos pueden evaluar con mayor detalle la progresión de enfermedades como la esclerosis múltiple y tomar decisiones terapéuticas más informadas.",
    categoria: "MR",
    habilitado: "1",
    features: [1, 4, 5],
    modoUso: {
      descripcion: "Carga las secuencias de RM cerebral (T2, FLAIR, T1 con contraste), configura el protocolo de análisis para esclerosis múltiple y revisa la segmentación automática de lesiones con mediciones volumétricas.",
      videoTutorial: "https://www.youtube.com/watch?v=DP4uglhVOS0"
    }
  },
  {
    id: 8,
    nombre: "Entelai Volumetría",
    imagen: ["entelai_4.png", "entelai_volum_1.jpg", "entelai_volum_2.jpg", "entelai_volum_3.jpg"],
    descripcion:
      "Entelai Volumetría permite una medición precisa de volúmenes cerebrales a partir de imágenes por resonancia magnética. Esta funcionalidad es fundamental para detectar cambios estructurales, evaluar enfermedades neurodegenerativas y realizar un seguimiento evolutivo de trastornos neurológicos con alto nivel de sensibilidad.",
    categoria: "MR",
    habilitado: "1",
    features: [1, 3, 6],
    modoUso: {
      descripcion: "Importa las imágenes de RM cerebral T1 3D, selecciona las estructuras anatómicas de interés y ejecuta el análisis volumétrico automático con comparación respecto a valores normativos por edad y sexo.",
      videoTutorial: "https://www.youtube.com/watch?v=DP4uglhVOS0"
    }
  },
  {
    id: 9,
    nombre: "Azmed™ AZchest",
    imagen: ["AZchest2.webp", "AZchest1.jpg"],
    descripcion: "AZchest es una solución avanzada de inteligencia artificial diseñada para el análisis automatizado de radiografías de tórax. Detecta, categoriza y reporta automáticamente anomalías pulmonares y cardiovasculares, mejorando la precisión diagnóstica y optimizando los flujos de trabajo en entornos clínicos de alta demanda.",
    categoria: "CR/DX",
    habilitado: "1",
    features: [1, 3, 5],
    modoUso: {
      descripcion: "Importa la radiografía de tórax en formato DICOM, ejecuta el análisis automatizado mediante la plataforma AI de AZmed y revisa los hallazgos resaltados, incluyendo detección de nódulos pulmonares, neumotórax, efusión pleural y otras afecciones críticas.",
      videoTutorial: "https://www.youtube.com/watch?v=DP4uglhVOS0"
    }
  },
  {
    id: 10,
    nombre: "Azmed™ AZtrauma",
    imagen: ["AZtrauma3.webp", "AZtrauma.png", "AZtrauma2.jpg"],
    descripcion: "AZtrauma es una solución de inteligencia artificial certificada por la FDA y CE diseñada para detectar fracturas, dislocaciones y efusiones articulares en radiografías. Este sistema utiliza algoritmos avanzados para mejorar la precisión diagnóstica y optimizar los flujos de trabajo en entornos clínicos, especialmente en casos de trauma ortopédico.",
    categoria: "CR/DX",
    habilitado: "1",
    features: [1, 3, 5],
    modoUso: {
      descripcion: "Importa la radiografía afectada en formato DICOM, ejecuta el análisis automatizado mediante la plataforma AI de AZmed y revisa los hallazgos destacados, incluyendo detección de fracturas, dislocaciones y otras afecciones críticas.",
      videoTutorial: "https://www.youtube.com/watch?v=DP4uglhVOS0"
    }
  },
  {
    id: 11,
    nombre: "Azmed™ AZMeasure",
    imagen: ["azmeasure.jpg", "AZmeasure2.png", "AZmeasure3.webp"],
    descripcion: "AZMeasure es una herramienta avanzada de inteligencia artificial que ofrece caracterización automatizada de geometrías osteoarticulares, incluyendo longitudes y posiciones angulares. Es ideal para análisis ortopédico preciso y cuantitativo, mejorando la planificación quirúrgica y seguimiento de pacientes con condiciones musculoesqueléticas.",
    categoria: "CR/DX",
    habilitado: "1",
    features: [1, 3, 5],
    modoUso: {
      descripcion: "Importa la imagen radiográfica en formato DICOM, selecciona el protocolo específico de medición osteoarticular y revisa los resultados automáticos de longitudes, ángulos y alineaciones anatómicas.",
      videoTutorial: "https://www.youtube.com/watch?v=DP4uglhVOS0"
    }
  },
  {
    id: 18,
    nombre: "Azmed™ AZBoneage",
    imagen: ["AZboneage.png", "AZboneage.webp", "AZboneage3.png"],
    descripcion:
      "AZBoneage es una solución avanzada de inteligencia artificial certificada por CE para el cálculo automatizado de la edad ósea en pacientes pediátricos. Basado en la metodología estándar Greulich y Pyle, proporciona resultados precisos y reportes estructurados que facilitan el diagnóstico y seguimiento de trastornos endocrinos y de desarrollo.",
    categoria: "CR/DX",
    habilitado: "1",
    features: [1, 3, 5],
    modoUso: {
      descripcion:
        "Importa la radiografía de la mano izquierda del paciente pediátrico en formato DICOM, ejecuta el análisis automatizado mediante AZBoneage y revisa el informe detallado de edad ósea estimada y comparación con patrones de referencia.",
      videoTutorial: "https://www.youtube.com/watch?v=DP4uglhVOS0"
    }
  },
  {
    id: 12,
    nombre: "Scanalyze™ CT Lung",
    imagen: ["ctlung.jpg"],
    descripcion:
      "Scanalyze CT Lung está diseñado para detectar y caracterizar nódulos pulmonares en estudios de tomografía computarizada del tórax. Gracias a su base de datos de miles de estudios previos, puede evaluar la progresión de lesiones y calcular probabilidades de malignidad, apoyando decisiones clínicas fundamentadas.",
    categoria: "CT",
    habilitado: "0",
    features: [4, 3, 5],
    modoUso: {
      descripcion: "Importa la TC de tórax de alta resolución, ejecuta el algoritmo de detección de nódulos y analiza los resultados con cálculo de probabilidad de malignidad y recomendaciones de seguimiento.",
      videoTutorial: "https://www.youtube.com/watch?v=DP4uglhVOS0"
    }
  },
  {
    id: 13,
    nombre: "NeuroAxis™ BrainMap",
    imagen: ["brainmap.jpg"],
    descripcion:
      "NeuroAxis BrainMap analiza imágenes de resonancia magnética cerebral para identificar y cuantificar atrofias cerebrales, así como detectar lesiones isquémicas. Su interfaz intuitiva presenta resultados claros y comparativos, ideal para el seguimiento longitudinal de pacientes con trastornos neurodegenerativos o vasculares.",
    categoria: "MR",
    habilitado: "0",
    features: [1, 3],
    modoUso: {
      descripcion: "Carga las imágenes de RM cerebral T1 y T2/FLAIR, configura el análisis de atrofia y lesiones isquémicas, y revisa el mapa cerebral con cuantificación automática de volúmenes.",
      videoTutorial: "https://www.youtube.com/watch?v=DP4uglhVOS0"
    }
  },
  {
    id: 14,
    nombre: "SonoMedic™ Thyroid AI",
    imagen: ["thyroid.jpg"],
    descripcion:
      "SonoMedic Thyroid AI es una herramienta innovadora que identifica nódulos tiroideos sospechosos mediante el análisis automatizado de ecografías. Este sistema asiste a los endocrinólogos y radiólogos en la toma de decisiones clínicas rápidas, especialmente útiles en entornos de alto volumen de pacientes.",
    categoria: "US",
    habilitado: "0",
    features: [1, 3, 5],
    modoUso: {
      descripcion: "Importa las imágenes de ecografía tiroidea en múltiples planos, activa el análisis automático de nódulos y revisa la clasificación TI-RADS sugerida con mediciones precisas.",
      videoTutorial: "https://www.youtube.com/watch?v=DP4uglhVOS0"
    }
  },
  {
    id: 15,
    nombre: "NucleoAI™ CardioScan",
    imagen: ["cardioscan.jpg"],
    descripcion:
      "NucleoAI CardioScan automatiza la interpretación de imágenes nucleares cardíacas, enfocándose en la evaluación de la perfusión miocárdica. Este sistema mejora la detección de isquemia, reduce tiempos de informe y proporciona datos objetivos para guiar intervenciones cardiológicas.",
    categoria: "NM",
    habilitado: "0",
    features: [1, 2, 5],
    modoUso: {
      descripcion: "Carga las imágenes de perfusión miocárdica SPECT, configura el protocolo de análisis de estrés/reposo y revisa los mapas de perfusión con cuantificación automática del defecto.",
      videoTutorial: "https://www.youtube.com/watch?v=DP4uglhVOS0"
    }
  },
  {
    id: 16,
    nombre: "VisioRay™ ChestView",
    imagen: ["chestview.jpg"],
    descripcion:
      "VisioRay ChestView es una solución de inteligencia artificial altamente sensible que asiste a los radiólogos en la detección de hallazgos críticos en radiografías de tórax. Con algoritmos entrenados en grandes bases de datos, mejora la identificación de neumotórax, consolidaciones pulmonares y cardiomegalia.",
    categoria: "CR/DX",
    habilitado: "0",
    features: [1, 3, 5],
    modoUso: {
      descripcion: "Importa la radiografía de tórax PA o AP, ejecuta el análisis crítico automatizado y revisa los hallazgos prioritarios marcados con niveles de urgencia y confianza diagnóstica.",
      videoTutorial: "https://www.youtube.com/watch?v=DP4uglhVOS0"
    }
  },
  {
    id: 17,
    nombre: "EchoLogic™ OBView",
    imagen: ["obview.jpg"],
    descripcion:
      "EchoLogic OBView analiza ecografías obstétricas con inteligencia artificial para evaluar biometría fetal, crecimiento intrauterino y detección de malformaciones congénitas. Es una herramienta útil en controles prenatales rutinarios y de alto riesgo.",
    categoria: "US",
    habilitado: "0",
    features: [1, 3, 5],
    modoUso: {
      descripcion: "Carga las imágenes de ecografía obstétrica, selecciona la edad gestacional y protocolo de análisis, y revisa las mediciones biométricas automáticas con percentiles de crecimiento fetal.",
      videoTutorial: "https://www.youtube.com/watch?v=DP4uglhVOS0"
    }
  }
];