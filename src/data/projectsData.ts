// src/data/projectsData.ts

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  detailedDescription: string;
  category: "ai-ml" | "cloud-devops" | "distributed-systems" | "fullstack";
  date: string;
  role: string;
  client: string;
  githubUrl: string;
  liveUrl?: string;
  accentColor: string;
  skills: string[];
  features: string[];
  challenges: {
    problem: string;
    solution: string;
  };
  architecture: {
    description: string;
    nodes: string[];
  };
  stats: {
    label: string;
    value: string;
    icon: string;
  }[];
}

export const projectsData = {
  title: "Projects & Innovations | Yasith Tharuka",
  accent: "Engineering Portfolio",
  heroTitle: "Innovations & <br /><span class='text-[#10B981]'>Technical Ventures</span>",
  heroDescription: "A curated collection of deep learning systems, cloud infrastructure automation, high-throughput distributed architectures, and modern full-stack applications built with performance and scalability in mind.",
  
  categories: [
    { id: "all", name: "All Projects" },
    { id: "ai-ml", name: "AI & Deep Learning" },
    { id: "cloud-devops", name: "Cloud & DevOps" },
    { id: "distributed-systems", name: "Distributed Systems" },
    { id: "fullstack", name: "Full-Stack Web" }
  ],

  stats: [
    { label: "Completed Projects", value: "12+", icon: "folder" },
    { label: "GitHub Contributions", value: "850+", icon: "git" },
    { label: "Cloud Deployments", value: "24", icon: "cloud" },
    { label: "AI Model Executions", value: "100k+", icon: "cpu" }
  ],

  projects: [
    {
      id: "aetheria-ai",
      title: "Aetheria AI",
      subtitle: "Computer Vision & Medical AI",
      description: "An advanced chest X-ray diagnostic platform powered by custom PyTorch neural networks, featuring real-time inference and model explainability using Grad-CAM heatmaps.",
      detailedDescription: "Aetheria AI bridges the gap between deep learning research and clinical utility. The platform leverages a modified DenseNet-121 architecture pre-trained on the CheXpert dataset and fine-tuned to classify 14 common thoracic pathologies with an AUC of 0.89. The front-end offers radiologists an interactive viewer where they can upload scans, view instant pathology probabilities, and inspect Class Activation Maps indicating where the model focused its attention.",
      category: "ai-ml",
      date: "2025",
      role: "Lead AI Researcher & Full-Stack Developer",
      client: "Research Prototype & Open-Source Project",
      githubUrl: "https://github.com/yasith-tharuka/aetheria-ai",
      liveUrl: "https://aetheria.yasith.dev",
      accentColor: "#4285F4", // Google Blue
      skills: ["Python", "PyTorch", "FastAPI", "Next.js", "Docker", "Google Kubernetes Engine", "Redis"],
      features: [
        "Custom CNN with DenseNet-121 backbone, classifying 14 separate pulmonary pathologies.",
        "Grad-CAM (Gradient-weighted Class Activation Mapping) for pixel-level visual explainability.",
        "Interactive web-based DICOM & high-resolution X-ray image viewer with brightness/contrast filters.",
        "High-performance FastAPI back-end with pre-warmed model queues to minimize cold-start latency.",
        "Secure patient data handling conforming to HIPAA-compliant transmission standards."
      ],
      challenges: {
        problem: "Processing high-resolution DICOM files caused severe latency issues during model inference, resulting in API timeouts.",
        solution: "Implemented an asynchronous worker queue using Celery and Redis to handle uploads, converted DICOM slices to optimized float16 tensors, and utilized NVIDIA TensorRT to compile the model, reducing average inference time from 4.2 seconds to 320 milliseconds."
      },
      architecture: {
        description: "The platform runs on a decoupled microservices architecture designed for high availability and low latency.",
        nodes: [
          "Client: Next.js frontend deployed on Vercel with responsive Canvas rendering.",
          "Gateway: Nginx reverse proxy managing SSL and routing traffic to appropriate nodes.",
          "API Service: FastAPI handling authentication, metadata, and task dispatch.",
          "Worker Nodes: PyTorch running inside Docker containers on GPU-accelerated GKE nodes, pulling jobs from Redis."
        ]
      },
      stats: [
        { label: "Model Accuracy", value: "89% AUC", icon: "check" },
        { label: "Inference Time", value: "320ms", icon: "timer" },
        { label: "GitHub Stars", value: "142", icon: "star" }
      ]
    },
    {
      id: "nimbus-cloud",
      title: "NimbusCloud",
      subtitle: "DevOps & Cloud Orchestration",
      description: "A lightweight, multi-tenant SaaS orchestration engine that automates the provisioning of secure, isolated GCP environments, databases, and SSL endpoints in under 3 minutes.",
      detailedDescription: "NimbusCloud automates infrastructure-as-code deployments for SaaS businesses. Using Terraform templates triggered via a Node.js microservices backend, it dynamically provisions Google Cloud SQL instances, Cloud Run containers, and IAM policies, ensuring complete tenant isolation. It includes a custom centralized logging dashboard using Google Cloud Logging and Grafana.",
      category: "cloud-devops",
      date: "2024",
      role: "Cloud Architect & Back-End Engineer",
      client: "Enterprise SaaS Client",
      githubUrl: "https://github.com/yasith-tharuka/nimbus-cloud",
      liveUrl: "https://nimbus.yasith.dev",
      accentColor: "#8B5CF6", // Purple
      skills: ["Node.js", "TypeScript", "Terraform", "GCP", "Docker", "PostgreSQL", "Grafana", "Google Cloud Build"],
      features: [
        "Dynamic Terraform state generation and isolation using remote cloud backends.",
        "Multi-tenant database schema isolation with automated, version-controlled migrations.",
        "Zero-downtime rolling deployments via Google Cloud Run with custom domain mapping.",
        "Automated Let's Encrypt SSL certificate generation, renewal, and routing.",
        "Resource monitoring dashboard displaying live billing, CPU, and memory consumption per tenant."
      ],
      challenges: {
        problem: "Provisioning dedicated Cloud SQL databases dynamically during user signup was extremely slow, taking upwards of 6 minutes and blocking the user flow.",
        solution: "Switched to a pre-provisioned pool architecture. The system maintains a queue of warm, idle PostgreSQL databases. On signup, the engine claims a warm database and runs schema migrations in 2 seconds, reducing onboarding latency by 99%."
      },
      architecture: {
        description: "A secure, resilient multi-tenant topology on GCP, managed completely via code.",
        nodes: [
          "IAM Control: Strict service account isolation preventing cross-tenant data access.",
          "Compute: Google Cloud Run dynamically scaling from 0 to 100+ instances per tenant.",
          "Database: Cloud SQL PostgreSQL with private IP routing via VPC peering.",
          "CI/CD: Cloud Build pipelines running security audits, linting, and automated Terraform runs."
        ]
      },
      stats: [
        { label: "Deployment Time", value: "< 2.5 min", icon: "rocket" },
        { label: "Tenant Isolation", value: "100%", icon: "shield" },
        { label: "Infrastructure Cost", value: "-40%", icon: "dollar" }
      ]
    },
    {
      id: "apex-engine",
      title: "ApexEngine",
      subtitle: "Distributed Systems & Infrastructure",
      description: "A lightning-fast distributed task orchestrator built in Go, designed for highly reliable, low-latency background job execution with automatic retries, priority queues, and dead-letter queues.",
      detailedDescription: "ApexEngine is a Go-based distributed task queue engineered for extreme throughput. It utilizes Redis for task storage and scheduling, and features a sophisticated worker consensus protocol to prevent duplicate task execution. It supports cron-based scheduling, rate-limiting per worker, and complex DAG (Directed Acyclic Graph) workflows.",
      category: "distributed-systems",
      date: "2024",
      role: "Core Developer",
      client: "Open-Source Infrastructure",
      githubUrl: "https://github.com/yasith-tharuka/apex-engine",
      liveUrl: "https://apex.yasith.dev",
      accentColor: "#34A853", // Google Green
      skills: ["Go", "Redis", "Docker", "WebSockets", "Prometheus", "PostgreSQL", "YAML"],
      features: [
        "Distributed task execution with worker heartbeats, automated node failure detection, and self-healing.",
        "Complex DAG (Directed Acyclic Graph) workflows allowing users to define task dependencies easily.",
        "Intelligent rate-limiting, exponential back-off retries, and automated dead-letter queue routing.",
        "Real-time monitoring panel via high-frequency WebSockets displaying execution rates and memory consumption.",
        "Ultra-low overhead processing, comfortably exceeding 100,000 tasks/second on single-core setups."
      ],
      challenges: {
        problem: "Ensuring exactly-once task execution across multiple distributed workers during network partitions without bottlenecking the master node.",
        solution: "Implemented a lightweight distributed consensus mechanism using Redis (Redlock) combined with cryptographic task idempotency keys. Workers claim lock ownership before task execution, ensuring safe execution even during split-brain events."
      },
      architecture: {
        description: "A high-efficiency distributed master-worker cluster utilizing shared in-memory state.",
        nodes: [
          "Producer: Client APIs submitting tasks via gRPC.",
          "Broker: High-availability Redis Cluster handling priority queues and scheduling.",
          "Workers: Go binaries running as daemon sets, consuming tasks asynchronously.",
          "Monitor: Prometheus scraping metrics, feeding a live dashboard."
        ]
      },
      stats: [
        { label: "Throughput", value: "120k+ t/s", icon: "pulse" },
        { label: "Task Latency", value: "< 8ms", icon: "timer" },
        { label: "GitHub Stars", value: "210", icon: "star" }
      ]
    },
    {
      id: "omnisearch-rag",
      title: "OmniSearch RAG",
      subtitle: "LLMs, RAG & Semantic Search",
      description: "An intelligent retrieval-augmented generation (RAG) agent that performs semantic search across private knowledge bases, synthesizing structured responses with strict citation tracking.",
      detailedDescription: "OmniSearch integrates advanced vector databases (Pinecone/ChromaDB) with OpenAI and local HuggingFace LLMs. It uses semantic chunking and hybrid dense-sparse retrieval (BM25 + Cohere ReRank) to surface highly relevant source material, feeding it to an LLM agent that writes answers while citing exact paragraph-level sources to eliminate hallucinations.",
      category: "ai-ml",
      date: "2025",
      role: "AI Engineer",
      client: "Research & Development Project",
      githubUrl: "https://github.com/yasith-tharuka/omnisearch-rag",
      liveUrl: "https://omnisearch.yasith.dev",
      accentColor: "#FBBC05", // Google Yellow
      skills: ["Python", "LangChain", "OpenAI API", "Pinecone", "ChromaDB", "FastAPI", "React", "HuggingFace"],
      features: [
        "Hybrid semantic search combining dense vector embeddings (OpenAI text-embedding-3) and sparse BM25 matching.",
        "Automatic PDF, Markdown, and Web Scraper document ingestors with intelligent, semantic chunking.",
        "Multi-agent architecture that expands queries, validates citations, and double-checks for hallucination.",
        "Interactive frontend displaying cited source segments side-by-side with the generated answer.",
        "Privacy-compliant local LLM option (Llama-3 via Ollama) running fully offline."
      ],
      challenges: {
        problem: "Query latency was high (averaging 7.4 seconds) when re-ranking retrieved chunks using deep learning cross-encoders in the generation pipeline.",
        solution: "Implemented hierarchical search caching, parallelized the vector-BM25 retrieval stage using multi-threading, and deployed a distilled, lightweight Cohere ReRank model, reducing latency to 1.8 seconds."
      },
      architecture: {
        description: "An advanced Retrieval-Augmented Generation pipeline using state-of-the-art orchestration libraries.",
        nodes: [
          "Ingestor: Celery workers parsing incoming documents and generating embeddings.",
          "Storage: Pinecone vector database alongside PostgreSQL for source metadata.",
          "Orchestrator: LangGraph managing conversational state, query routing, and guardrails.",
          "Inference: OpenAI API / Local Llama-3 serving conversational completions."
        ]
      },
      stats: [
        { label: "Retrieval Recall", value: "94% @K=5", icon: "search" },
        { label: "Response Latency", value: "1.8s", icon: "timer" },
        { label: "Hallucination Rate", value: "< 1%", icon: "shield" }
      ]
    },
    {
      id: "helios-iot",
      title: "Helios IoT",
      subtitle: "IoT Systems & Data Visualization",
      description: "A real-time, interactive dashboard visualizing energy grid telemetry from thousands of simulated IoT smart meters, featuring low-latency Canvas charts and predictive load modeling.",
      detailedDescription: "Helios is a premium analytics platform built for smart cities. Communicating over high-frequency WebSockets, the interface renders real-time active load, voltage fluctuations, and generation curves on a 3D geo-spatial map using Mapbox. It integrates a lightweight Tensorflow.js model that predicts future load peaks directly in the browser.",
      category: "fullstack",
      date: "2023",
      role: "Front-End Lead",
      client: "Smart City Consortium",
      githubUrl: "https://github.com/yasith-tharuka/helios-iot",
      liveUrl: "https://helios.yasith.dev",
      accentColor: "#EA4335", // Google Red
      skills: ["React", "TypeScript", "Tailwind CSS", "WebSockets", "Mapbox GL", "Tensorflow.js", "Express", "MongoDB"],
      features: [
        "Real-time canvas charting optimized for high-frequency updates, plotting 5,000+ data points per second.",
        "Interactive 3D geospatial overlays displaying meter locations, power surges, and load distribution.",
        "On-device machine learning with TensorFlow.js to predict household peak demands 6 hours in advance.",
        "Custom glassmorphic component library with micro-interactions built on Framer Motion.",
        "Aggressive DOM recycling and render profiling, keeping CPU usage under 5% during high-throughput phases."
      ],
      challenges: {
        problem: "Rendering real-time WebSocket data for thousands of active meters simultaneously caused severe browser main-thread lag and dropped frames (sub-15 FPS).",
        solution: "Offloaded WebSocket parsing and telemetry calculations to a dedicated Web Worker. The worker processes and batches incoming telemetry packets, sending throttled updates to the React state every 100ms, restoring a smooth 60 FPS experience."
      },
      architecture: {
        description: "A real-time IoT ingestion and visualization pipeline engineered for high frame-rates.",
        nodes: [
          "Simulator: Node.js worker threads simulating 10,000 smart meters sending JSON telemetry.",
          "Ingestion: Socket.io server broadcasting telemetry with minimal overhead.",
          "Client Core: Web Worker handling incoming sockets, computing stats, and updating buffers.",
          "UI layer: React components drawing state onto high-speed HTML5 Canvas."
        ]
      },
      stats: [
        { label: "Telemetry Rate", value: "25k/sec", icon: "pulse" },
        { label: "Visual Frame Rate", value: "60 FPS", icon: "video" },
        { label: "CPU Utilization", value: "< 4.5%", icon: "cpu" }
      ]
    }
  ]
};
