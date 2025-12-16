import { mockProjects } from "../../data/mockData";

const STORAGE_KEY = "projects_db";

// Seed projects if localStorage is empty
export function seedProjectsIfEmpty(initialProjects) {
  const existing = localStorage.getItem(STORAGE_KEY);
  if (!existing) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(initialProjects));
  }
}

// Simulate API delay
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// List all projects
export async function listProjects() {
  await delay(300 + Math.random() * 200); // 300-500ms

  seedProjectsIfEmpty(mockProjects);
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : [];
}

// Create a new project
export async function createProject(payload) {
  await delay(300 + Math.random() * 200);

  const projects = await listProjects();
  const newProject = {
    id: Date.now(),
    ...payload,
  };
  projects.push(newProject);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
  return newProject;
}

// Update a project
export async function updateProject(id, patch) {
  await delay(300 + Math.random() * 200);

  const projects = await listProjects();
  const index = projects.findIndex((p) => p.id === id);
  if (index === -1) {
    throw new Error("Project not found");
  }
  projects[index] = { ...projects[index], ...patch };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
  return projects[index];
}

// Delete a project
export async function deleteProject(id) {
  await delay(300 + Math.random() * 200);

  const projects = await listProjects();
  const filtered = projects.filter((p) => p.id !== id);
  if (filtered.length === projects.length) {
    throw new Error("Project not found");
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
  return { success: true };
}

