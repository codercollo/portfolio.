import { useState, useEffect } from "react";
import type { Project } from "../types";

export default function useProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const data = (await import("../data/projectsData.json")).default as Project[];

        setProjects(Array.isArray(data) ? data : []);
        setLoading(false);
      } catch (err) {
        console.error("Failed to load projects:", err);
        setError("Failed to load projects");
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  return { projects, loading, error };
}
